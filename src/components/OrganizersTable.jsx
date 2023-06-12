import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { BiX } from "react-icons/bi";
import "datatables.net-dt";
import axiosClient from "../axiosClient";

const OrganizersTable = ({ data }) => {
  const tableRef = useRef(null);
  const [dataTable, setDataTable] = useState(null);
  const baseUrl = `${import.meta.env.VITE_LOCAL_API_BASE_URL}/api`;

  useEffect(() => {
    const initializeDataTable = async () => {
      // Destroy the existing DataTable instance if it exists
      if (dataTable) {
        dataTable.destroy();
      }

      const newDataTable = $(tableRef.current).DataTable({
        processing: true,
        serverSide: true,
        bDestroy: true,
        ajax: {
          url: baseUrl + "/organizer-attendance",
          type: "GET",
        },
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
            render: function (data, type, row) {
              const formattedDate = formatDateTime(data);
              return `<div class="created-at-cell">${formattedDate}</div>`;
            },
          },
          {
            data: null,
            render: function (data, type, row) {
              return `<button class="cancel_attendance m-0 rounded-full cursor-pointer py-1 px-4 bg-green-200 text-green-800 border-gray-200" data-id="${row.id}" data-action="delete"> Attending</button>`;
            },
          },
        ],
      });

      setDataTable(newDataTable);
    };

    initializeDataTable();
  }, [baseUrl]);

  // This function handles table clicks.
  $(tableRef.current).on("click", ".cancel_attendance", function () {
    const row = dataTable.row($(this).closest("tr"));
    const action = $(this).attr("data-action");

    if (action === "delete") {
      cancellAttendance(row.data());
    }
  });

  $(tableRef.current).on("click", ".name-link", function () {
    const row = dataTable.row($(this).closest("tr"));
    const rowData = row.data();
    viewAttendeeDetails(rowData);
  });

  // This function handles the cancellation of attendance.
  const cancellAttendance = async (row) => {
    console.log(row.id);
  };

  // This function handles viewing of attendee details.
  const viewAttendeeDetails = async (row) => {
    const fullName = row.full_name;
    console.log("Full name clicked:", fullName);
  };

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
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Marked Attendance (300 Attendees)
      </h3>
      <div className="overflow-x-auto">
        <table
          ref={tableRef}
          id="attendee_table"
          className="min-w-full bg-white"
        >
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border-b border-gray-200">id</th>
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
