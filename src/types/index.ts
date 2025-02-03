export interface IRoute {
  path: string;
  name: string;
}

export interface IEngine {
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

export interface ISensor {
  sensorNumber: number;
  isActive: boolean;
  Symbol: string;
  Description: string;
}

export interface IChartDataset {
  info: string;
  x: number;
  y: number;
  r: number;
}

export interface IElements {
  id: "maintenance" | "sensors";
  name: string;
}

export interface ITeam {
  img: string;
  name: string;
  occupation: string;
}

