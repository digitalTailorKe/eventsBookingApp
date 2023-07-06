import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt";
import axiosClient from "../axiosClient";
import { ToastContainer, toast } from "react-toastify";

const OrganizersTable = ({
  getTotalRegistered,
  getTotalAttended,
  setAttendeeCount,
  onsiteTotalRegistered,
  onsiteTotalRegisteredBy,
}) => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);

  const baseUrl = `${import.meta.env.VITE_EVENTS_API_BASE_URL}/api`;
  // const baseUrl = `${import.meta.env.VITE_LOCAL_API_BASE_URL}/api`;
  const navigate = useNavigate();

  // Toast settings
  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  useEffect(() => {
    const initializeDataTable = async () => {
      try {
        // Fetch the data from the API for counting
        const response = await axiosClient.get("/attendee-count");
        const { data } = response;
        const count = data.attendeeCount;
        getTotalRegistered(count);
        getTotalAttended(data.attendanceCount);
        onsiteTotalRegistered(data.onsiteRegistered);
        onsiteTotalRegisteredBy(data.onsiteRegisteredBy);

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
            { name: "email", data: "email", width: "130px" },
            { name: "phone", data: "phone", width: "150px" },
            {
              name: "created_at",
              data: "created_at",
              width: "150px",
              render: formatDateTime,
            },
            {
              data: null,
              width: "130px",
              render: function (data, type, row) {
                return `<button class="cancel_attendance m-0 font-bold shadow-md rounded-full cursor-pointer py-1 px-4 bg-orange-200 hover:bg-orange-400 hover:text-white text-orange-800 border-gray-200" data-id="${row.id}" data-action="delete">
                            Mark Attend
                        </button>`;
              },
            },
          ],
          data: data,
        });
        // Set the attendee count & the DataTable instance
        setDataTable(newDataTable);
      } catch (error) {
        // Handle errors here
        console.log("Error fetching attendees:", error.message);
      }
    };
    // Call the initializeDataTable function
    initializeDataTable();
  }, [baseUrl]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Handle table click events
    const table = $(tableRef.current);
    const cancelAttendance = (row) => {
      const id = row.id;
      const url = `/attendee/mark_attendance/${id}/${user.user_id}`;
      // Send an update request to the API
      axiosClient
        .get(url)
        .then((response) => {
          // Update the attendee count
          setAttendeeCount(1);
          // Reload the DataTable instance
          toast.success(response.data.message, toastSettings);
          dataTable.ajax.reload();
        })
        .catch((error) => {
          // Handle errors here
          toast.success("Error marking attendance: " + error, toastSettings);
        });
    };

    // Navigate to the attendee details page with the row data
    const viewAttendeeDetails = (row) => {
      const fullName = encodeURIComponent(row.full_name);
      navigate(`/view-attendee-details/${fullName}`, {
        state: { rowData: row },
      });
    };

    // Listens to click on the cancel attendance button
    table.on("click", ".cancel_attendance", function () {
      const row = dataTable.row($(this).closest("tr")).data();
      cancelAttendance(row);
    });

    // Listens to click on the attendee name link on the table
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default OrganizersTable;
