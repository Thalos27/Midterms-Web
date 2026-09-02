import { useEffect, useState } from "react";

function Profile({ selectedGuitar }) {
  const [activeGuitar, setActiveGuitar] = useState(null);

  useEffect(() => {
    if (selectedGuitar) {
      setActiveGuitar(selectedGuitar);
    }
  }, [selectedGuitar]);

  return (
    <div className="w-full rounded-2xl border border-[#d3e0e6] bg-white p-7 shadow-sm">

      <div className="mb-5 border-b border-slate-200 pb-5">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          Active Guitar
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Selected guitar details.
        </p>
      </div>

      {activeGuitar ? (
        <div className="space-y-4">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Guitar Model
            </p>

            <p className="mt-1 text-lg font-bold text-slate-800">
              {activeGuitar.guitarModel}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Body Type
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeGuitar.bodyType}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Brand Name
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeGuitar.brandName}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Stock Quantity
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {activeGuitar.stockQuantity}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                User Role
              </p>

              <span className="mt-1 inline-block rounded-full bg-[#d5eef2] px-3 py-1 text-xs font-bold text-[#006b80]">
                {activeGuitar.userRole}
              </span>
            </div>

          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Manufacturer Name
            </p>

            <p className="mt-1 text-sm font-medium text-slate-700">
              {activeGuitar.manufacturerName}
            </p>
          </div>

        </div>
      ) : (
        <p className="py-6 text-center text-sm text-slate-500">
          Select a guitar from the registry to view its details.
        </p>
      )}

    </div>
  );
}

export default Profile;