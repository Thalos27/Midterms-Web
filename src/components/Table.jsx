import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

function Table({ guitars, selectedGuitar, setSelectedGuitar }) {
  const [bodyFilter, setBodyFilter] = useState("All");

  const columns = useMemo(
    () => [
      {
        header: "Guitar Model",
        accessorKey: "guitarModel",
      },
      {
        header: "Body Type",
        accessorKey: "bodyType",
      },
      {
        header: "Brand Name",
        accessorKey: "brandName",
      },
      {
        header: "Stock",
        accessorKey: "stockQuantity",
      },
      {
        header: "Manufacturer",
        accessorKey: "manufacturerName",
      },
      {
        header: "User Role",
        accessorKey: "userRole",
      },
    ],
    []
  );

  const filteredGuitars = useMemo(() => {
    if (bodyFilter === "All") {
      return guitars;
    }

    return guitars.filter(
      (guitar) => guitar.bodyType === bodyFilter
    );
  }, [guitars, bodyFilter]);

  const table = useReactTable({
    data: filteredGuitars,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    initialState: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  return (
    <div className="w-full rounded-2xl border border-[#d3e0e6] bg-white p-7 shadow-sm">

      <div className="mb-5 border-b border-slate-200 pb-5">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          Guitar Registry
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Click a row to select a guitar.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Filter by Body Type
        </label>

        <select
          value={bodyFilter}
          onChange={(e) => setBodyFilter(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700"
        >
          <option value="All">All</option>
          <option value="Electric">Electric</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Bass">Bass</option>
          <option value="Classical">Classical</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">

          <thead className="bg-slate-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>

                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 font-bold text-slate-700"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}

              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => {
              const guitar = row.original;

              return (
                <tr
                  key={row.id}
                  onClick={() => setSelectedGuitar(guitar)}
                  className={`cursor-pointer border-t border-slate-200 ${
                    selectedGuitar === guitar
                      ? "bg-[#d5eef2]"
                      : "hover:bg-slate-50"
                  }`}
                >

                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-slate-600"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      {/* No Results */}
      {filteredGuitars.length === 0 && (
        <p className="py-6 text-center text-sm text-slate-500">
          No guitars found.
        </p>
      )}

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between">

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm text-slate-500">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Table;