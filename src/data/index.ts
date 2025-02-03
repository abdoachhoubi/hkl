import { IChartDataset, IEngine, IRoute, ISensor, ITeam } from "@/types";
import { sortByPriority } from "@/utils";
import loulou from "@/assets/loulou.png";
import kawtar from "@/assets/kawtar.png";
import hassania from "@/assets/hassania.png";
import mouna from "@/assets/mouna.png";

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/about",
    name: "About",
  },
];

export const sensors: ISensor[] = [
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

export const engines: IEngine[] = [
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

export const sortedEngines = sortByPriority(engines);

export const chartData = sortedEngines.map((engine) => {
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

export const team: ITeam[] = [
  {
    img: mouna,
    name: "Mouna BERQUEDICH",
    occupation: "Boss",
  },
  {
    img: loulou,
    name: "Loubna MOUFID",
    occupation: "Agent",
  },
  {
    img: kawtar,
    name: "Kawtar RADAD",
    occupation: "Agent",
  },
  {
    img: hassania,
    name: "Hassania CHOUFANE",
    occupation: "Agent",
  },
];
