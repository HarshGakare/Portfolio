import CelebalImg from "../images/celebal_intership.png";
import AICTEImg from "../images/AICTE_intership.png";


export default function Experience() {
  return (
    <section id="experience" className="py-16">

      <h2 className="text-purple-500 mb-8">
        EXPERIENCE
      </h2>

      <div className="space-y-10 border-l border-zinc-800 pl-8">

        <div>
          <h3 className="font-semibold">
            React JS Intern – Celebal Technologies (Remote)
          </h3>

          <p className="text-zinc-500">
            06/2025 – 08/2025
          </p>

          <img src={CelebalImg} alt="Celebal Technologies" className="mt-4" />
        </div>


        <div>
          <h3 className="font-semibold">
            Freelance Developer
          </h3>

          <p className="text-zinc-500">
            Jul 2023 – Present
          </p>

            <img src={AICTEImg} alt="AICTE" className="mt-4" />
        </div>

      </div>
    </section>
  );
}