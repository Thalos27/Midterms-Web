import { useState } from "react";
import Registration from "./components/Registration";
import Table from "./components/Table";
import Profile from "./components/Profile";

function App() {
  const [guitars, setGuitars] = useState([]);
  const [selectedGuitar, setSelectedGuitar] = useState(null);

  const addGuitar = (newGuitar) => {
    setGuitars((currentGuitars) => [...currentGuitars, newGuitar]);
  };

  return (
    <div className="min-h-screen bg-[#e8f1f5] px-6 py-10 font-sans">
      <div className="mx-auto max-w-7xl">

        <div className="mb-7">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Guitar Store Inventory
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

          <Registration addGuitar={addGuitar} />

          <div className="space-y-8">

            <Table
              guitars={guitars}
              selectedGuitar={selectedGuitar}
              setSelectedGuitar={setSelectedGuitar}
            />

            <Profile selectedGuitar={selectedGuitar} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;