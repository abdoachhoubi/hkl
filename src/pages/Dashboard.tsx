import React from "react";
import { engines } from "@/data";
import { IEngine } from "@/types";
import { DashMenu, Maintenance, NavBar, Sensors } from "@/components";

/**
 * 
 * Dashboard component
 * 
 * @description The Dashboard component is the main component that contains the navigation bar, the dashboard menu, and the maintenance or sensors component.
 * @returns Dashboard component
 */
const Dashboard = () => {
  // the selected state is used to determine which component to render
  const [selected, setSelected] = React.useState<"maintenance" | "sensors">(
    "maintenance"
  );

  // changeSelection is a function that changes the selected state
  const changeSelection = (item: "maintenance" | "sensors") => {
    setSelected(item);
  };

  // selectedEngine is used to determine which engine is selected
  const [selectedEngine, setSelectedEngine] = React.useState<IEngine>(
    engines[0]
  );

  // changeEngine is a function that changes the selected engine
  const changeEngine = (engine: IEngine) => {
    setSelectedEngine(engine);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center p-4 pb-0 overflow-hidden bg-[#0e0e0e]">
      <NavBar />
      <div className="w-screen h-full flex">
        <DashMenu selected={selected} changeSelection={changeSelection} />
        <div className="w-full h-full flex p-4 gap-4">
          {selected === "maintenance" ? (
            <Maintenance
              selectedEngine={selectedEngine}
              changeEngine={changeEngine}
            />
          ) : (
            <Sensors />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
