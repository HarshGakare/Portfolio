import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_db6n69f",
        "template_cu9uwz9",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "W43a_OukbZxeV29bL"
      )
      .then(() => {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        alert("Failed to send message.");

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        <div>
          <p className="text-purple-500 mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-5xl font-bold">
            Let's build something
            <span className="text-purple-500">
              {" "}amazing.
            </span>
          </h2>

          <p className="mt-6 text-zinc-400">
            Email: gakareharsh@gmail.com
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="bg-[#0b0b0f] border border-zinc-800 p-4 rounded-lg w-full"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="bg-[#0b0b0f] border border-zinc-800 p-4 rounded-lg w-full"
            />
          </div>

          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full bg-[#0b0b0f] border border-zinc-800 p-4 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 px-8 py-4 rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}