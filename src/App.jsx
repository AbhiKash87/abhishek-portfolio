import { useState } from 'react'

const skills = {
  Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  Tools: ['Git', 'Docker', 'Linux', 'GitHub Actions'],
}

const projects = [
  { title: 'TaskFlow', type: 'web', desc: 'Kanban board with drag-and-drop and offline sync.', stack: ['React', 'IndexedDB'] },
  { title: 'WeatherNow', type: 'web', desc: 'City weather lookup with a 5-day forecast chart.', stack: ['React', 'Chart.js'] },
  { title: 'ShortLink', type: 'api', desc: 'URL shortener with click tracking and rate limits.', stack: ['Node.js', 'Redis'] },
  { title: 'LogWatch', type: 'tool', desc: 'CLI that tails server logs and flags error spikes.', stack: ['Node.js', 'Bash'] },
  { title: 'NoteVault', type: 'web', desc: 'Markdown notes app with tags and full-text search.', stack: ['React', 'Supabase'] },
  { title: 'Invoicer', type: 'api', desc: 'Generates PDF invoices from JSON over a REST endpoint.', stack: ['Express', 'PDFKit'] },
]

const experience = [
  { year: '2024 – now', role: 'Software Developer', org: 'Acme Labs', note: 'Building internal dashboards and APIs.' },
  { year: '2022 – 2024', role: 'Junior Developer', org: 'PixelCraft', note: 'Shipped client websites in React.' },
  { year: '2021', role: 'Intern', org: 'CodeBase Studio', note: 'Wrote tests and fixed UI bugs.' },
]

const filters = ['all', 'web', 'api', 'tool']

export default function App() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.type === filter)

  return (
    <div className="min-h-screen bg-[#EEF2F0] text-[#1B2A41] antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-[#1B2A41]/10 bg-[#EEF2F0]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold">abhishek<span className="text-[#2F5BEA]">.dev</span></a>
          <ul className="hidden gap-6 text-sm sm:flex">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="capitalize hover:text-[#2F5BEA] focus-visible:outline-2 focus-visible:outline-[#2F5BEA]">{s}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-24 sm:py-32">
          <p className="text-[#2F5BEA] font-medium">Hi, I'm</p>
          <h1 className="mt-2 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">Abhishek.</h1>
          <h2 className="mt-3 text-2xl text-[#1B2A41]/70 sm:text-4xl">I build fast, friendly web apps.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Software developer working across React frontends and Node.js backends. I like small tools that save people time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-[#2F5BEA] px-5 py-3 font-medium text-white hover:bg-[#2449c4]">See projects</a>
            <a href="#contact" className="rounded-md border-2 border-[#1B2A41] px-5 py-3 font-medium hover:bg-[#1B2A41] hover:text-white">Get in touch</a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-[#1B2A41]/10 py-16 grid gap-8 sm:grid-cols-[1fr_2fr]">
          <h3 className="text-2xl font-bold">About</h3>
          <p className="max-w-prose leading-relaxed">
            I started coding by breaking my own websites and fixing them again. Today I write clean, tested code, care about
            load times, and enjoy turning messy requirements into simple interfaces. Outside work: chess, cricket, and too much chai.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 border-t border-[#1B2A41]/10 py-16 grid gap-8 sm:grid-cols-[1fr_2fr]">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h4 className="font-semibold text-[#2F5BEA]">{group}</h4>
                <ul className="mt-2 space-y-1">
                  {items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 border-t border-[#1B2A41]/10 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-bold">Projects</h3>
            <div className="flex gap-2" role="group" aria-label="Filter projects">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                    filter === f ? 'bg-[#1B2A41] text-white' : 'bg-white hover:bg-[#1B2A41]/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-[#1B2A41]/10 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article key={p.title} className="bg-white p-6">
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="mt-2 text-[#1B2A41]/80">{p.desc}</p>
                <p className="mt-4 text-sm text-[#2F5BEA]">{p.stack.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 border-t border-[#1B2A41]/10 py-16 grid gap-8 sm:grid-cols-[1fr_2fr]">
          <h3 className="text-2xl font-bold">Experience</h3>
          <ol className="relative border-l-2 border-[#2F5BEA]/30 pl-6 space-y-8">
            {experience.map((e) => (
              <li key={e.year} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-[#2F5BEA]" />
                <p className="text-sm text-[#1B2A41]/60">{e.year}</p>
                <p className="font-semibold">{e.role}, {e.org}</p>
                <p className="text-[#1B2A41]/80">{e.note}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-[#1B2A41]/10 py-16">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-3 max-w-prose">Have a project or a question? Email is the fastest way to reach me.</p>
          <a href="mailto:abhishek@example.com" className="mt-6 inline-block text-2xl font-bold text-[#2F5BEA] underline underline-offset-4 sm:text-4xl">
            abhishek@example.com
          </a>
          <div className="mt-6 flex gap-5">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-[#2F5BEA]">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[#2F5BEA]">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1B2A41]/10 py-6 text-center text-sm text-[#1B2A41]/60">
        © {new Date().getFullYear()} Abhishek. Hosted on GitHub Pages.
      </footer>
    </div>
  )
}