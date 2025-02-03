import React from "react";
import { Link } from "react-router-dom";
import { items } from "@/data";
import { Bubble } from "react-chartjs-2";
import { Chart, registerables, type TooltipItem } from "chart.js";
import { UserSquare } from "iconsax-react";
Chart.register(...registerables);

interface IEngine {
  id: number;
  failure: number;
  timeToMaintenance: number;
  agentName: string;
  agentId: number;
  availability: {
    Day: string;
    isAvailable: boolean;
    start?: string;
    end?: string;
  }[];
}

interface ISensor {
  sensorNumber: number;
  isActive: boolean;
  Symbol: string;
  Description: string;
}

const sensors: ISensor[] = [
  {
    sensorNumber: 1,
    isActive: false,
    Symbol: "T2",
    Description: "Total temperature at fan inlet",
  },
  {
    sensorNumber: 2,
    isActive: true,
    Symbol: "T24",
    Description: "Total temperature at LPC outlet",
  },
  {
    sensorNumber: 3,
    isActive: true,
    Symbol: "T30",
    Description: "Total temperature at HPC outlet",
  },
  {
    sensorNumber: 4,
    isActive: true,
    Symbol: "T50",
    Description: "Total temperature at LPT outlet",
  },
  {
    sensorNumber: 5,
    isActive: false,
    Symbol: "P2",
    Description: "Pressure at fan inlet",
  },
  {
    sensorNumber: 6,
    isActive: true,
    Symbol: "P15",
    Description: "Total pressure in bypass-duct",
  },
  {
    sensorNumber: 7,
    isActive: true,
    Symbol: "P30",
    Description: "Total pressure at HPC outlet",
  },
  {
    sensorNumber: 8,
    isActive: true,
    Symbol: "Nf",
    Description: "Physical fan speed",
  },
  {
    sensorNumber: 9,
    isActive: true,
    Symbol: "Nc",
    Description: "Physical core speed",
  },
  {
    sensorNumber: 10,
    isActive: true,
    Symbol: "epr",
    Description: "Engine pressure ratio",
  },
  {
    sensorNumber: 11,
    isActive: false,
    Symbol: "Ps30",
    Description: "Static pressure at HPC outlet",
  },
  {
    sensorNumber: 12,
    isActive: true,
    Symbol: "Phi",
    Description: "Ratio of fuel flow to Ps30",
  },
  {
    sensorNumber: 13,
    isActive: true,
    Symbol: "NRF",
    Description: "Corrected fan speed",
  },
  {
    sensorNumber: 14,
    isActive: true,
    Symbol: "NRc",
    Description: "Corrected core speed",
  },
  {
    sensorNumber: 15,
    isActive: true,
    Symbol: "BPR",
    Description: "Bypass ratio",
  },
  {
    sensorNumber: 16,
    isActive: false,
    Symbol: "farB",
    Description: "Burner fuel-air ratio",
  },
  {
    sensorNumber: 17,
    isActive: true,
    Symbol: "htBleed",
    Description: "Bleed enthalpy",
  },
  {
    sensorNumber: 18,
    isActive: true,
    Symbol: "Nf_dmd",
    Description: "Demanded fan speed",
  },
  {
    sensorNumber: 19,
    isActive: true,
    Symbol: "PCNfR_dmd",
    Description: "Demanded corrected fan speed",
  },
  {
    sensorNumber: 20,
    isActive: false,
    Symbol: "W31",
    Description: "HPT coolant bleed",
  },
  {
    sensorNumber: 21,
    isActive: true,
    Symbol: "W32",
    Description: "LPT coolant bleed",
  },
];

const engines: IEngine[] = [
  {
    id: 1,
    failure: 143,
    timeToMaintenance: 115,
    agentName: "Loubna Moufid",
    agentId: 1,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 2,
    failure: 147,
    timeToMaintenance: 118,
    agentName: "Yassmine Achhoubi",
    agentId: 2,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 3,
    failure: 195,
    timeToMaintenance: 156,
    agentName: "Kawtar Radad",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 4,
    failure: 188,
    timeToMaintenance: 151,
    agentName: "Hassania Choufane",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 5,
    failure: 189,
    timeToMaintenance: 152,
    agentName: "Allal Elbakouri",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 6,
    failure: 234,
    timeToMaintenance: 188,
    agentName: "Astro Achhoubi",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 7,
    failure: 216,
    timeToMaintenance: 173,
    agentName: "Ali Ait Maskar",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 8,
    failure: 180,
    timeToMaintenance: 144,
    agentName: "Ouissal Essamdi",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 9,
    failure: 214,
    timeToMaintenance: 172,
    agentName: "Yacoub Harkati",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
  {
    id: 10,
    failure: 218,
    timeToMaintenance: 175,
    agentName: "Issam Bouchafra",
    agentId: 3,
    availability: [
      {
        Day: "M",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "W",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "T",
        isAvailable: false,
      },
      {
        Day: "F",
        start: "08:00",
        isAvailable: true,
        end: "17:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
      {
        Day: "S",
        start: "08:00",
        isAvailable: true,
        end: "12:00",
      },
    ],
  },
];

interface IChartDataset {
  info: string;
  x: number;
  y: number;
  r: number;
}

const sortByPriority = (engines: IEngine[]) => {
  // priority = failure - timeToMaintenance
  return engines.sort(
    (a, b) =>
      a.failure - a.timeToMaintenance - (b.failure - b.timeToMaintenance)
  );
};

const sortedEngines = sortByPriority(engines);

const chartData = sortedEngines.map((engine) => {
  const dataset: IChartDataset = {
    info: `M${engine.id} - Priority: ${
      engine.failure - engine.timeToMaintenance
    }`,
    x: engine.id * 20 * Math.random(),
    y: engine.id * 10,
    r: engine.failure - engine.timeToMaintenance,
  };
  return dataset;
});

interface IElements {
  id: "maintenance" | "sensors";
  name: string;
}

const DashMenu = ({
  selected,
  changeSelection,
}: {
  selected: "maintenance" | "sensors";
  changeSelection: (item: "maintenance" | "sensors") => void;
}) => {
  const elements: IElements[] = [
    {
      id: "maintenance",
      name: "Espace Maintenancier",
    },
    {
      id: "sensors",
      name: "Capteurs",
    },
  ];
  return (
    <nav className="w-[20vw] h-full flex flex-col items-stretch gap-4 p-4  self-stretch">
      {elements.map((element, index) => (
        <p
          onClick={() => changeSelection(element.id)}
          key={index}
          className="w-full p-4 rounded-full cursor-pointer bg-[rgba(255,255,255,0.2)] text-white border-none outline-none active:border-none active:outine-none hover:outline-none hover:border-none"
          style={
            selected === element.id
              ? { backgroundColor: "#FFFFFF", color: "#000000" }
              : {}
          }
        >
          {element.name}
        </p>
      ))}
    </nav>
  );
};

const Maintenance = ({
  selectedEngine,
  changeEngine,
}: {
  selectedEngine: IEngine;
  changeEngine: (engine: IEngine) => void;
}) => {
  console.log(selectedEngine.id);

  return (
    <>
      <table className="gap-4 w-[50%] rounded-2xl overflow-hidden bg-white bg-opacity-80 h-full">
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
        {sortedEngines.map((engine, index) => (
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
        ))}
      </table>
      <div className="flex flex-col h-full w-[50%] gap-4">
        <div className="w-full p-4 bg-white bg-opacity-30 flex flex-col gap-4 rounded-2xl">
		<UserSquare size="32" color="#FFFFFF"/>
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
        {/* CHART GOES HERE */}
        <div className="flex-1 bg-white bg-opacity-30 rounded-2xl flex flex-col items-center justify-center gap-12">
          <h2 className="text-white text-xl font-bold">Priority Chart</h2>
          <Bubble
            data={{
              datasets: [
                {
                  data: chartData,
                  backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
              ],
            }}
            options={{
              scales: {
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
              },
              plugins: {
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
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

const Sensors = () => {
  return (
    <div className="overflow-y-scroll w-full h-[90vh] rounded-2xl">
      <table className="gap-4 w-full h-full overflow-hidden bg-white bg-opacity-80">
        <tr>
          <th className="text-left p-4 bg-white bg-opacity-100 text-black">
            Sensor Number
          </th>
          <th className="text-left p-4 bg-white bg-opacity-100 text-black">
            Symbol
          </th>
          <th className="text-left p-4 bg-white bg-opacity-100 text-black">
            Description
          </th>
          <th className="text-left p-4 bg-white bg-opacity-100 text-black">
            Status
          </th>
        </tr>
        {sensors.map((sensor, index) => (
          <tr key={index}>
            <td className="text-left p-4">Sensor {sensor.sensorNumber}</td>
            <td className="text-left p-4">{sensor.Symbol}</td>
            <td className="text-left p-4">{sensor.Description}</td>
            <td className="text-left p-4">
              <p
                className="py-2 px-4 rounded-full w-fit"
                style={{
                  backgroundColor: sensor.isActive ? "#4ade80" : "#f87171",
				  color: sensor.isActive ? "#000000" : "#FFFFFF"
                }}
              >
                {sensor.isActive ? "Active" : "Inactive"}
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const Dashboard = () => {
  const url = window.location.pathname;
  const [selected, setSelected] = React.useState<"maintenance" | "sensors">(
    "maintenance"
  );
  const changeSelection = (item: "maintenance" | "sensors") => {
    setSelected(item);
  };

  const [selectedEngine, setSelectedEngine] = React.useState<IEngine>(
    engines[0]
  );

  const changeEngine = (engine: IEngine) => {
    setSelectedEngine(engine);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0e0e0e]">
      <div className="w-screen h-screen  flex flex-col items-center p-4 pb-0">
        <nav className="w-fit py-5 px-16 rounded-full border-[1px] border-white border-solid flex items-center justify-center gap-16">
          {items.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="text-regular text-white transition-all opacity-60 hover:opacity-100 hover:text-white"
              style={item.path === url ? { opacity: 1 } : {}}
            >
              {item.name}
            </Link>
          ))}
        </nav>
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
    </div>
  );
};

export default Dashboard;
