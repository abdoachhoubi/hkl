import { routes } from "@/data";
import { Link } from "react-router-dom";

const NavBar = () => {
  const url = window.location.pathname;
  return (
    <nav className="w-fit py-5 px-16 rounded-full border-[1px] border-white border-solid flex items-center justify-center gap-16">
      {routes.map((item, index) => (
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
  );
};

export default NavBar;
