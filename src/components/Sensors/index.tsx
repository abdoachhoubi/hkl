import { sensors } from "@/data";

// The header of the sensors list (contains the column names)
const SensorsListHeader = () => {
  return (
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
  );
};

// The body of the sensors list (contains the sensor data)
const SensorsListBody = () => {
  return sensors.map((sensor, index) => (
    <tr key={index}>
      <td className="text-left p-4">Sensor {sensor.sensorNumber}</td>
      <td className="text-left p-4">{sensor.Symbol}</td>
      <td className="text-left p-4">{sensor.Description}</td>
      <td className="text-left p-4">
        <p
          className="py-2 px-4 rounded-full w-fit"
          style={{
            backgroundColor: sensor.isActive ? "#4ade80" : "#f87171",
            color: sensor.isActive ? "#000000" : "#FFFFFF",
          }}
        >
          {sensor.isActive ? "Active" : "Inactive"}
        </p>
      </td>
    </tr>
  ));
};

// The sensors list (contains the header and the body)
const SensorsList = () => {
  return (
    <table className="gap-4 w-full h-full overflow-hidden bg-white bg-opacity-80">
      <SensorsListHeader />
      <SensorsListBody />
    </table>
  );
};

// The sensors component (contains the sensors list)
const Sensors = () => {
  return (
    <div className="overflow-y-scroll w-full h-[90vh] rounded-2xl">
      <SensorsList />
    </div>
  );
};

export default Sensors;
