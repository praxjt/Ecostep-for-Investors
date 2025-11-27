import { useState,useMemo } from "react";
import { createColumnHelper, useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import {IconCurrencyRupee} from "@tabler/icons-react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("nameofevent", { header: "Events Name" }),
  columnHelper.accessor("AmountPaid", { header: "Amount Invested",
    cell: info => (
      <div className="flex items-center gap-1">
        <span>{info.getValue()}</span>
      <span className="text-sm">MATIC</span>

      </div>
    )}),
  columnHelper.accessor("status", { header: "Status" }),
  columnHelper.accessor("createdAt", {
    header: "Date",
    cell: info => {
      const date = new Date(info.getValue());
      return date.toLocaleDateString();
    },
  }),
    columnHelper.display({
    header: "Certificate",
    cell: (info) => {
      const row = info.row.original;

      if (row.status !== "claimed") {
        return <span className="text-gray-400">Not Eligible</span>;
      }

      return (
<a
  href={`http://localhost:3001/dashboard/certificate/${row.id}`}
  target="_blank"
  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium 
             bg-green-600 text-white rounded-lg shadow-sm 
             hover:bg-green-700 transition-all"
>
  Download
</a>

      );
    },
  }),
];


export function DataTable({events=[]}) {
  console.log("events data in datatable ",events)
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3; // number of rows per page
  const totalPages = Math.ceil(events.length / pageSize);

  // Slice data for current page
  const pagedData = useMemo(
  () => events.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize),
  [events, pageIndex, pageSize]
);

  const table = useReactTable({
    data: pagedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
     <div className="overflow-x-auto">
      {events.length === 0 ? (
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
  {table.getRowModel().rows.map(row => (
    <tr key={row.id}>
      {row.getVisibleCells().map(cell => (
        <td key={cell.id} className="border-b p-2">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
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
