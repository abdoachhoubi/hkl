import { chartData, sortedEngines } from "@/data";
import { IEngine } from "@/types";
import { Chart, registerables, type TooltipItem } from "chart.js";
import { UserSquare } from "iconsax-react";
import { Bubble } from "react-chartjs-2";
import React from "react";

Chart.register(...registerables);

const EnginesListHeader = () => {
  return (
    <tr>
      <th className="text-left p-4 bg-white bg-opacity-100 text-black">
        Engine ID
      </th>
      <th className="text-left p-4 bg-white bg-opacity-100 text-black">
        Failure
      </th>
      <th className="text-left p-4 bg-white bg-opacity-100 text-black">
        Time to Maintenance
      </th>
      <th className="text-left p-4 bg-white bg-opacity-100 text-black">
        Priority
      </th>
    </tr>
  );
};

const EnginesListBody = ({
  selectedEngine,
  changeEngine,
}: {
  selectedEngine: IEngine;
  changeEngine: (engine: IEngine) => void;
}) => {
  return sortedEngines.map((engine, index) => (
    <tr key={index}>
      <td
        onClick={() => changeEngine(engine)}
        className="text-left p-4"
        style={
          selectedEngine.id === engine.id
            ? { backgroundColor: "#93c5fd", color: "#FFFFFF" }
            : {}
        }
      >
        M{engine.id}
      </td>
      <td
        onClick={() => changeEngine(engine)}
        className="text-left p-4"
        style={
          selectedEngine.id === engine.id
            ? { backgroundColor: "#93c5fd", color: "#FFFFFF" }
            : {}
        }
      >
        {engine.failure}
      </td>
      <td
        onClick={() => changeEngine(engine)}
        className="text-left p-4"
        style={
          selectedEngine.id === engine.id
            ? { backgroundColor: "#93c5fd", color: "#FFFFFF" }
            : {}
        }
      >
        {engine.timeToMaintenance}
      </td>
      <td
        onClick={() => changeEngine(engine)}
        className="text-left p-4"
        style={
          selectedEngine.id === engine.id
            ? { backgroundColor: "#93c5fd", color: "#FFFFFF" }
            : {}
        }
      >
        {index + 1}
      </td>
    </tr>
  ));
};

const EnginesList = ({
  selectedEngine,
  changeEngine,
}: {
  selectedEngine: IEngine;
  changeEngine: (engine: IEngine) => void;
}) => {
  return (
    <table className="gap-4 w-[50%] rounded-2xl overflow-hidden bg-white bg-opacity-80 h-full">
      <EnginesListHeader />
      <EnginesListBody
        selectedEngine={selectedEngine}
        changeEngine={changeEngine}
      />
    </table>
  );
};

const AgentCard = ({ selectedEngine }: { selectedEngine: IEngine }) => {
  return (
    <div className="w-full p-4 bg-white bg-opacity-30 flex flex-col gap-4 rounded-2xl">
      <UserSquare size="32" color="#FFFFFF" />
      <p className="text-white">
        Agent ID: <strong>{selectedEngine.agentId}</strong>
      </p>
      <p className="text-white">
        Agent Name: <strong>{selectedEngine.agentName}</strong>
      </p>
      <p className="text-white">Availability:</p>
      <div className="flex gap-4">
        {selectedEngine.availability.map((day, index) => {
          const [expanded, setExpanded] = React.useState(false);
          const switchExpand = () => setExpanded((prev) => !prev);
          return day.isAvailable ? (
            <div className="flex" key={index}>
              <div
                onMouseEnter={switchExpand}
                onMouseLeave={switchExpand}
                className="flex min-w-10 h-10 bg-white items-center justify-center rounded-full cursor-pointer transition-all"
              >
                {!expanded && <p>{day.Day}</p>}
                {expanded && (
                  <p className="px-4">
                    From {day.start} - To {day.end}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div
              className="flex w-10 h-10 bg-white bg-opacity-30 items-center justify-center rounded-full cursor-not-allowed"
              key={index}
            >
              {day.Day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EnginesChart = () => {
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const scales = {
    x: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      border: {
        display: false, // Hide y-axis line
      },
      ticks: {
        display: false, // Hide y-axis labels
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
      border: {
        display: false, // Hide y-axis line
      },
      ticks: {
        display: false, // Hide y-axis labels
      },
    },
  };

  const plugins = {
    legend: {
      display: false, // Hide the legend
    },
    tooltip: {
      callbacks: {
        label: (context: TooltipItem<"bubble">) => {
          const dataPoint = chartData[context.dataIndex];
          return dataPoint.info;
        },
      },
    },
  };

  const options = {
    scales,
    plugins,
  };

  return (
    <div className="flex-1 bg-white bg-opacity-30 rounded-2xl flex flex-col items-center justify-center gap-12">
      <h2 className="text-white text-xl font-bold">Priority Chart</h2>
      <Bubble data={data} options={options} />
    </div>
  );
};

const Maintenance = ({
  selectedEngine,
  changeEngine,
}: {
  selectedEngine: IEngine;
  changeEngine: (engine: IEngine) => void;
}) => {
  return (
    <>
      <EnginesList
        selectedEngine={selectedEngine}
        changeEngine={changeEngine}
      />
      <div className="flex flex-col h-full w-[50%] gap-4">
        <AgentCard selectedEngine={selectedEngine} />
        <EnginesChart />
      </div>
    </>
  );
};

export default Maintenance;
