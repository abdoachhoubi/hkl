import { Link } from "react-router-dom";
import vid from "@/assets/engine-vid.mp4";
import { NavBar } from "@/components";

/**
 * 
 * Home component
 * 
 * @description The Home component is the main component that contains the navigation bar and the home content.
 * @returns Home component
 */

const Home = () => {
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
        <NavBar />
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
