import { useMemo, useState } from "react";
import { ArrowSquareOut, BookOpen, CalendarBlank, MagnifyingGlass, Sparkle } from "phosphor-react";

const issues = [
  {
    title: "January 2026",
    month: "January, 2026",
    description: "The latest edition featuring alumni reflections, campus memories, and inspiring stories from the Alagappa family.",
    url: "https://track.alagappa.org/s/qfxk8z",
  },
  {
    title: "November 2025",
    month: "November, 2025",
    description: "A special collection of achievements, milestone updates, and heartfelt messages from alumni across generations.",
    url: "https://track.alagappa.org/s/rihpxt",
  },
  {
    title: "October 2025",
    month: "October, 2025",
    description: "Stories of impact, educational innovation, and the enduring spirit of giving that shapes the institution.",
    url: "https://alagappa.org/assets/home/inspire-zone/october-2025.pdf",
  },
  {
    title: "April 2025",
    month: "April, 2025",
    description: "Highlights from recent alumni engagement, institutional progress, and meaningful community connect initiatives.",
    url: "https://zcmp.in/9xeF?m=0",
  },
  {
    title: "December 2024",
    month: "December, 2024",
    description: "A rich edition celebrating the legacy of excellence and the journey of the Alagappa network.",
    url: "https://zcmp.in/5hhx?m=0",
  },
  {
    title: "May 2024",
    month: "May, 2024",
    description: "Updated insights, accomplishments, and alumni voices curated for the growing Inspire Zone archive.",
    url: "https://zcmp.in/JUHz?m=0",
  },
  {
    title: "April 2024",
    month: "April, 2024",
    description: "A warm and engaging issue that brings together stories, memories, and continued institutional pride.",
    url: "https://zcmp.in/cpxu?m=0",
  },
  {
    title: "March 2024",
    month: "March, 2024",
    description: "A compelling edition focused on alumni contributions, community spirit, and lasting inspiration.",
    url: "https://zcmp.in/PvD4?m=0",
  },
  {
    title: "January 2024 - Edition 2",
    month: "January, 2024",
    description: "The second issue of the year celebrating partnerships, achievements, and the strength of the alumni bond.",
    url: "https://zcmp.in/kkXI?m=0",
  },
  {
    title: "January 2024 - Edition 1",
    month: "January, 2024",
    description: "The first installment of the year, highlighting the evolving story of the Alagappa community.",
    url: "https://zcmp.in/Xtmq?m=0",
  },
];

export default function InspireZone() {
  const [query, setQuery] = useState("");

  const filteredIssues = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return issues;
    }

    return issues.filter((issue) => {
      const haystack = `${issue.title} ${issue.month} ${issue.description}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(0,87,184,0.16),_transparent_45%),linear-gradient(135deg,_#fdfefe_0%,_#eef4fb_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#cfe0f5] bg-white/90 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#0057b8] shadow-sm">
                Alumni Newsletter
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                The Inspire Zone
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                A vibrant collection of alumni stories, institutional milestones, and meaningful updates that keep the spirit of the Alagappa family alive.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={issues[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0057b8] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0057b8]/20 transition hover:-translate-y-0.5 hover:bg-[#004a9a]"
                >
                  <BookOpen size={18} />
                  Read Latest Issue
                </a>
                <a
                  href="#archives"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0057b8] hover:text-[#0057b8]"
                >
                  <CalendarBlank size={18} />
                  Browse Archives
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur">
              <div className="flex items-center gap-3 text-[#0057b8]">
                <div className="rounded-2xl bg-[#eef6ff] p-3">
                  <Sparkle size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    What you’ll find
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">Stories of impact and belonging</h2>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Alumni journeys and personal achievements.</li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Institutional updates and landmark moments.</li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#0057b8]" /> Reflections that connect the past, present, and future.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="archives" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0057b8]">Archive</p>
            <h2 className="text-3xl font-bold text-slate-900">Newsletter editions</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Browse the full collection of Inspire Zone issues and explore the stories that continue to inspire the Alagappa community.
          </p>
        </div>

        <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
          <label className="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3">
            <MagnifyingGlass size={18} className="text-[#0057b8]" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, month, or keyword"
              className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
          <p className="mt-3 text-sm text-slate-500">
            {query.trim()
              ? `Showing ${filteredIssues.length} result${filteredIssues.length === 1 ? "" : "s"} for “${query.trim()}”.`
              : `Showing all ${issues.length} newsletter issues.`}
          </p>
        </div>

        {filteredIssues.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredIssues.map((issue) => (
              <a
                key={issue.title}
                href={issue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0057b8] hover:shadow-xl"
              >
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarBlank size={16} />
                    {issue.month}
                  </span>
                  <span className="rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0057b8]">
                    Open
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{issue.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{issue.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0057b8]">
                  Read now
                  <ArrowSquareOut size={16} />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[24px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
            No newsletter issues match your search. Try a different keyword like “alumni”, “2024”, or “October”.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Stay connected with the Alagappa family</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
            Explore alumni updates, institutional milestones, and stories that continue to resonate across generations.
          </p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Back to Home
            <ArrowSquareOut size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
