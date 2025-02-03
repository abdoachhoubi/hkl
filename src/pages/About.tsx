import { NavBar } from "@/components";
import { team } from "@/data";

/**
 *
 * About component
 *
 * @description The About component is the main component that contains the navigation bar, the about content, the team members, and the contact information.
 * @returns About component
 */
const About = () => {
  return (
    <div className="w-screen h-screen bg-[#0e0e0e] flex flex-col items-center p-4 gap-8">
      <NavBar />
      <section className="w-screen flex flex-col items-center justify-center gap-12">
        <article className="w-full flex items-center justify-center gap-12">
          <div className="w-[35vw] gap-6 flex flex-col">
            <h1 className="text-white font-bold">About Us</h1>
            <p className="text-white">
              La société HKL Maintenance révolutionne votre approche de la
              maintenance en prédisant les pannes avant qu'elles ne surviennent.
              <br />
              Contrairement aux méthodes traditionnelles, notre solution de
              maintenance prédictive analyse en temps réel les données des
              capteurs pour détecter les signes de dégradation, réduisant ainsi
              les coûts, les arrêts imprévus et prolongeant la durée de vie des
              moteurs.
              <br />
              Basée sur le jeu de données CMAPSS (FD001), notre application
              identifie les seuils critiques et prédit la durée de vie utile
              restante (RUL) des moteurs pour une intervention au bon moment.
              Optimisez votre maintenance dès maintenant !
            </p>
          </div>
          <img src="./src/assets/engine.png" className="h-[35vh]" />
        </article>
      </section>
      <section className="w-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-white font-bold">Our Team</h1>
        <div className="w-full flex items-center justify-center gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="w-[15vw] flex flex-col items-center gap-1"
            >
              <img
                src={member.img}
                className="w-[10vw] h-[10vw] object-cover rounded-full"
              />
              <h1 className="text-white font-bold text-lg">{member.name}</h1>
              <p className="text-white">{member.occupation}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-white font-bold">Contact us</h1>
        <p className="text-white">
          N'hésitez pas à nous contacter par courriel à l'adresse suivante:{" "}
          <a
            href="mailto:contact@hkl.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@hkl.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About;
