import { navLinks } from "../data";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-900">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <div className="flex items-center gap-2">
          <div className="text-purple-500 text-2xl font-bold">
            HG
          </div>

          <span className="font-semibold">
            Harsh Gakare
          </span>
        </div>

       <ul className="hidden lg:flex gap-10 text-sm text-zinc-300">
  {navLinks.map((link) => (
    <li key={link.name}>
      <a
        href={link.path}
        className="hover:text-purple-400 transition"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=gakareharsh@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-purple-600 px-5 py-3 rounded-lg text-sm hover:bg-purple-600 transition"
>
  Hire Me ⚡
</a>
      </nav>
    </header>
  );
}