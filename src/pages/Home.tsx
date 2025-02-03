import { Link } from "react-router-dom";
import { items } from "@/data";
import vid from "@/assets/engine-vid.mp4";

const Home = () => {
  const url = window.location.pathname;
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover bg-center">
      <video
        src={vid}
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover absolute -z-50"
      />
      <div className="w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col items-center p-4">
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
        <section className="w-screen h-screen flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-regular text-white text-7xl text-center">
              HKL Maintenance
            </h1>
            <p className="text-regular font-light text-white text-3xl text-center max-w-[70vw]">
              Anticipez les pannes grâce à notre solution de maintenance
              prédictive, qui analyse les capteurs en temps réel pour optimiser
              les interventions.
            </p>
          </div>
          <Link
            to={"/dashboard"}
            className="text-regular text-black transition-all border-solid border-[1px] border-transparent hover:text-white hover:bg-transparent hover:border-white px-12 py-4 bg-white rounded-full"
          >
            Accéder au tableau de bord
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
