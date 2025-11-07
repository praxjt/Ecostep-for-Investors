import React, { useState } from "react";
import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { Link } from "react-router-dom";
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("CampaignsName", { header: "Campaigns Name" }),
  columnHelper.accessor("AmountInvested", { header: "Amount Invested" }),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.accessor("Date", { header: "Date" }),
];

const data = [
  { id: 1, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 2, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 3, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 4, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 5, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 6, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 7, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 8, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 9, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
  { id: 10, CampaignsName: "xxxx", AmountInvested: "0", status: "active", Date: "00:00:0000" },
];

export function DataTable() {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3; // number of rows per page
  const totalPages = Math.ceil(data.length / pageSize);

  // Slice data for current page
  const pagedData = data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

  const table = useReactTable({
    data: pagedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
     <div className="overflow-x-auto">
      {data.length === 0 ? (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400  rounded">
          No events found. 
            <Link
    to="/dashboard/create-campaign" 
    className="text-blue-600 dark:text-blue-400 hover:underline transition"
  >
    Create Campaign
  </Link>
        </div>
      ) : (
        <>
          <table className="min-w-full border">
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className="border-b p-2 text-left">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {pagedData.map(row => (
                <tr key={row.id}>
                  <td className="border-b p-2">{row.CampaignsName}</td>
                  <td className="border-b p-2">{row.AmountInvested}</td>
                  <td className="border-b p-2">{row.status}</td>
                  <td className="border-b p-2">{row.Date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center mt-4">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}
              disabled={pageIndex === 0}
            >
              Previous
            </button>

            <span className="font-medium px-3 text-gray-700 dark:text-gray-300">
              Page {pageIndex + 1} of {totalPages}
            </span>

            <button
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              onClick={() => setPageIndex(prev => Math.min(prev + 1, totalPages - 1))}
              disabled={pageIndex === totalPages - 1}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
      );
}
