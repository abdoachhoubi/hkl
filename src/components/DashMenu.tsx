import { IElements } from "@/types";

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

export default DashMenu;
