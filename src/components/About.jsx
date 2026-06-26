export default function About() {
  return (
    <section id="about" className="border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">

        <div>
          <p className="text-purple-500 text-sm mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Building Solutions,
            <br />
            Not Just{" "}
            <span className="text-purple-500">
              Websites.
            </span>
          </h2>
        </div>

        <div>
          <p className="text-zinc-400">
            A passionate Full Stack Developer who
            loves turning ideas into impactful
            digital products.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            {[
              "Clean Code",
              "Responsive Design",
              "Performance",
              "User Centric"
            ].map(item => (
              <div
                key={item}
                className="border border-zinc-800 px-5 py-3 rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}