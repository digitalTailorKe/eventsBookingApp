import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt";
import axiosClient from "../axiosClient";
import axios from "axios";

const OrganizersTable = ({ getTotalRegistered, getTotalAttended }) => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const [attendeeCount, setAttendeeCount] = useState(0);

  // const baseUrl = `${import.meta.env.VITE_EVENTS_API_BASE_URL}/api`;
  const baseUrl = `${import.meta.env.VITE_LOCAL_API_BASE_URL}/api`;
  const navigate = useNavigate();

  useEffect(() => {
    const initializeDataTable = async () => {
      try {
        // Fetch the data from the API for counting
        const response = await axiosClient.get(
          "/attendee-count"
        );
        const { data } = response;
        const count = data.attendeeCount;
        getTotalRegistered(count);
        getTotalAttended(data.attendanceCount);

        // Destroy the existing DataTable instance if it exists
        if (dataTable) {
          dataTable.destroy();
        }
        const token = localStorage.getItem("ACCESS_TOKEN");
        // Initialize the DataTable instance
        const newDataTable = $(tableRef.current).DataTable({
          processing: true,
          serverSide: true,
          bDestroy: true,
          ajax: {
            url: baseUrl + "/organizer-attendance",
            headers: { Authorization: `Bearer ${token}` },
            type: "GET",
          },
          order: [[0, "desc"]],
          columns: [
            { name: "id", data: "id", visible: false },
            {
              name: "full_name",
              data: "full_name",
              render: function (data, type, row) {
                return `<span class="name-link cursor-pointer text-blue-600 hover:text-green-600" data-action="delete">${data}</span>`;
              },
              width: "150px",
            },
            { name: "email", data: "email", width: "150px" },
            { name: "phone", data: "phone", width: "150px" },
            {
              name: "created_at",
              data: "created_at",
              width: "150px",
              render: formatDateTime,
            },
            {
              data: null,
              render: function (data, type, row) {
                return `<button class="cancel_attendance m-0 rounded-full cursor-pointer py-1 px-4 bg-green-200 text-green-800 border-gray-200" data-id="${row.id}" data-action="delete"> Attending</button>`;
              },
            },
          ],
          data: data,
        });
        // Set the attendee count & the DataTable instance
        setAttendeeCount(count);
        setDataTable(newDataTable);
      } catch (error) {
        // Handle errors here
        console.log("Error fetching attendees:", error.message);
      }
    };
    // Call the initializeDataTable function
    initializeDataTable();
  }, [baseUrl]);

  useEffect(() => {
    // Handle table click events
    const table = $(tableRef.current);

    const cancelAttendance = (row) => {
      const id = row.id;
      const fullName = encodeURIComponent(row.full_name);
      const url = `/organizer-attendance/${id}`;
      const data = {
        _method: "PUT",
      };
      // Send a PUT request to the API
      axiosClient
        .delete(url, data)
        .then((response) => {
          // Reload the DataTable instance
          dataTable.ajax.reload();
          // Update the attendee count
          setAttendeeCount(attendeeCount - 1);
          // Navigate to the view attendee details page
          navigate(`/view-attendee-details/${fullName}`, {
            state: { rowData: row },
          });
        })
        .catch((error) => {
          // Handle errors here
          console.log("Error deleting attendee:", error);
        });
    };

    const viewAttendeeDetails = (row) => {
      const fullName = encodeURIComponent(row.full_name);
      navigate(`/view-attendee-details/${fullName}`, {
        state: { rowData: row },
      });
    };

    table.on("click", ".cancel_attendance", function () {
      const row = dataTable.row($(this).closest("tr")).data();
      cancelAttendance(row);
    });

    table.on("click", ".name-link", function () {
      const row = dataTable.row($(this).closest("tr")).data();
      viewAttendeeDetails(row);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      table.off("click", ".cancel_attendance");
      table.off("click", ".name-link");
    };
  }, [dataTable, navigate]);
  // This function formats the date and time.
  const formatDateTime = (data, type, row) => {
    if (type === "display" || type === "filter") {
      const date = new Date(data);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
    return data;
  };

  return (
    <div className="mb-8">
      {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Marked Attendance ({attendeeCount} Attendee
        {attendeeCount !== 1 ? "s" : ""})
      </h3> */}
      <div className="overflow-x-auto">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white"
        >
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border-b border-gray-200 hidden">id</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">
                Phone Number
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Action</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizersTable;
