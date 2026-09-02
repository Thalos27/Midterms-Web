import { useState } from "react";

function Registration({ addGuitar }) {
  const [guitarModel, setGuitarModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [userRole, setUserRole] = useState("");

  const [guitarModelError, setGuitarModelError] = useState("");
  const [bodyTypeError, setBodyTypeError] = useState("");
  const [brandNameError, setBrandNameError] = useState("");
  const [stockQuantityError, setStockQuantityError] = useState("");
  const [manufacturerNameError, setManufacturerNameError] = useState("");
  const [userRoleError, setUserRoleError] = useState("");

  const registerGuitar = (e) => {
    e.preventDefault();

    let valid = true;

    if (guitarModel.trim() === "") {
      setGuitarModelError("Guitar Model is required.");
      valid = false;
    } else if (guitarModel.trim().length < 3) {
      setGuitarModelError("Must be at least 3 characters.");
      valid = false;
    }

    if (bodyType === "") {
      setBodyTypeError("Please select a body type.");
      valid = false;
    }

    if (brandName.trim() === "") {
      setBrandNameError("Brand Name is required.");
      valid = false;
    }

    if (stockQuantity === "") {
      setStockQuantityError("Stock Quantity is required.");
      valid = false;
    } else if (
      Number(stockQuantity) < 1 ||
      Number(stockQuantity) > 100
    ) {
      setStockQuantityError("Must be between 1 and 100.");
      valid = false;
    }

    if (manufacturerName.trim() === "") {
      setManufacturerNameError("Manufacturer Name is required.");
      valid = false;
    }

    if (userRole === "") {
      setUserRoleError("Please select a user role.");
      valid = false;
    }

    if (valid) {
      const newGuitar = {
        guitarModel: guitarModel,
        bodyType: bodyType,
        brandName: brandName,
        stockQuantity: stockQuantity,
        manufacturerName: manufacturerName,
        userRole: userRole,
      };

      addGuitar(newGuitar);

      alert("Guitar registered successfully!");

      reset();
    }
  };

  const reset = () => {
    setGuitarModel("");
    setBodyType("");
    setBrandName("");
    setStockQuantity("");
    setManufacturerName("");
    setUserRole("");

    setGuitarModelError("");
    setBodyTypeError("");
    setBrandNameError("");
    setStockQuantityError("");
    setManufacturerNameError("");
    setUserRoleError("");
  };

  return (
    <div className="w-full">
      <div className="w-full rounded-2xl border border-[#d3e0e6] bg-[#e1ebf0] p-7 shadow-sm">

        <div className="mb-7 border-b border-slate-300 pb-5">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            Guitar Details
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Enter the required information below.
          </p>
        </div>

        <form onSubmit={registerGuitar}>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Guitar Model
            </label>

            <input
              type="text"
              placeholder="e.g. Gibson"
              value={guitarModel}
              onChange={(e) => {
                setGuitarModel(e.target.value);

                if (e.target.value.trim() === "") {
                  setGuitarModelError("Guitar Model is required.");
                } else if (e.target.value.trim().length < 3) {
                  setGuitarModelError("Must be at least 3 characters.");
                } else {
                  setGuitarModelError("");
                }
              }}
              className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none ${
                guitarModelError
                  ? "border-red-400"
                  : "border-slate-200 focus:border-[#008099]"
              }`}
            />

            {guitarModelError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {guitarModelError}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Body Type
            </label>

            <select
              value={bodyType}
              onChange={(e) => {
                setBodyType(e.target.value);

                if (e.target.value === "") {
                  setBodyTypeError("Please select a body type.");
                } else {
                  setBodyTypeError("");
                }
              }}
              className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none ${
                bodyTypeError
                  ? "border-red-400"
                  : "border-slate-200 focus:border-[#008099]"
              }`}
            >
              <option value="">Select body type</option>
              <option value="Electric">Electric</option>
              <option value="Acoustic">Acoustic</option>
              <option value="Bass">Bass</option>
              <option value="Classical">Classical</option>
            </select>

            {bodyTypeError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {bodyTypeError}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Brand Name
            </label>

            <input
              type="text"
              placeholder="e.g. Yamaha"
              value={brandName}
              onChange={(e) => {
                setBrandName(e.target.value);

                if (e.target.value.trim() === "") {
                  setBrandNameError("Brand Name is required.");
                } else {
                  setBrandNameError("");
                }
              }}
              className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none ${
                brandNameError
                  ? "border-red-400"
                  : "border-slate-200 focus:border-[#008099]"
              }`}
            />

            {brandNameError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {brandNameError}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Stock Quantity
            </label>

            <input
              type="number"
              min="1"
              max="100"
              placeholder="1 - 100"
              value={stockQuantity}
              onChange={(e) => {
                setStockQuantity(e.target.value);

                if (e.target.value === "") {
                  setStockQuantityError("Stock Quantity is required.");
                } else if (
                  Number(e.target.value) < 1 ||
                  Number(e.target.value) > 100
                ) {
                  setStockQuantityError("Must be between 1 and 100.");
                } else {
                  setStockQuantityError("");
                }
              }}
              className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none ${
                stockQuantityError
                  ? "border-red-400"
                  : "border-slate-200 focus:border-[#008099]"
              }`}
            />

            {stockQuantityError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {stockQuantityError}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-slate-700">
              Manufacturer Name
            </label>

            <input
              type="text"
              placeholder="e.g. Guitar Corporation"
              value={manufacturerName}
              onChange={(e) => {
                setManufacturerName(e.target.value);

                if (e.target.value.trim() === "") {
                  setManufacturerNameError(
                    "Manufacturer Name is required."
                  );
                } else {
                  setManufacturerNameError("");
                }
              }}
              className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-700 outline-none ${
                manufacturerNameError
                  ? "border-red-400"
                  : "border-slate-200 focus:border-[#008099]"
              }`}
            />

            {manufacturerNameError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {manufacturerNameError}
              </p>
            )}
          </div>

          <div className="mb-7">
            <label className="mb-3 block text-sm font-semibold tracking-wide text-slate-700">
              User Role
            </label>

            <div className="flex gap-7">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <input
                  type="radio"
                  name="userRole"
                  value="Merchant"
                  checked={userRole === "Merchant"}
                  onChange={(e) => {
                    setUserRole(e.target.value);
                    setUserRoleError("");
                  }}
                />
                Merchant
              </label>

              <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <input
                  type="radio"
                  name="userRole"
                  value="Consumer"
                  checked={userRole === "Consumer"}
                  onChange={(e) => {
                    setUserRole(e.target.value);
                    setUserRoleError("");
                  }}
                />
                Consumer
              </label>
            </div>

            {userRoleError && (
              <p className="mt-1.5 text-xs font-medium text-red-500">
                {userRoleError}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-[#008099] py-3 text-sm font-bold tracking-wide text-white transition hover:bg-[#006b80]"
            >
              Register Guitar
            </button>

            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clear
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Registration;