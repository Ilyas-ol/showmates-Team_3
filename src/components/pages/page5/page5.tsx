import "./page5.css";

type EventKind = "bootcamp" | "hackini" | "bsides";

type Event = {
  title: string;
  text: string;
  date: string[];
  tags: string[];
  kind: EventKind;
};

const EVENTS: Event[] = [
  {
    title: "CyberSec Bootcamp",
    text: "One of the first events for new members. They learn the fundamentals of cybersecurity and discover the five main categories: web, steganography, reverse engineering, pwn, digital forensics and cryptography.",
    date: ["+25", "October", "2024", "6:00PM", "8:00PM"],
    tags: ["Web", "Stegano", "Rev", "Forensics", "Crypto"],
    kind: "bootcamp",
  },
  {
    title: "Hack.INI",
    text: "Hack.INI, short for Hack Initiation, is one of our best-known events, held for many years. It is open to everyone interested in cybersecurity and introduces them to ethical hacking basics via learning sessions led by experts.",
    date: ["+8", "December", "2024", "6:00PM", "6:30PM"],
    tags: ["Initiation", "Ethical hacking", "Experts"],
    kind: "hackini",
  },
  {
    title: "BSides Algiers",
    text: "BSides is a global network of community-driven cybersecurity conferences. Organized by Shellmates, BSides Algiers has run since its first online qualification phase in December 2020. A long-running flagship that offers both workshops and an advanced CTF competition.",
    date: ["+20", "May", "2024"],
    tags: ["Talks", "Workshops", "CTF"],
    kind: "bsides",
  },
];

function EventArt({ kind }: { kind: EventKind }) {
  if (kind === "bootcamp") {
    return (
      <div className="p5-art p5-art--bootcamp" aria-hidden="true">
        <span className="p5-bootcamp-word">CyberSec</span>
        <span className="p5-bootcamp-word">Bootcamp</span>
      </div>
    );
  }

  if (kind === "hackini") {
    return (
      <div className="p5-art p5-art--hackini" aria-hidden="true">
        <span className="p5-hackini-word">Hack.INI</span>
      </div>
    );
  }

  return (
    <div className="p5-art p5-art--bsides" aria-hidden="true">
      <div className="p5-bsides-globe" />
      <div className="p5-bsides-lockup">
        <svg
          className="p5-bsides-skyline"
          viewBox="0 0 260 72"
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="p5-skyline-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5fd0ff" />
              <stop offset="1" stopColor="#0e72c9" />
            </linearGradient>
          </defs>
          <g fill="url(#p5-skyline-fill)">
            <rect x="6" y="54" width="16" height="18" />
            <rect x="24" y="46" width="11" height="26" />
            <rect x="37" y="56" width="21" height="16" />
            <rect x="60" y="40" width="9" height="32" />
            <rect x="71" y="51" width="15" height="21" />
            <rect x="88" y="47" width="12" height="25" />
            <rect x="102" y="31" width="9" height="41" />
            <rect x="113" y="50" width="17" height="22" />
            <rect x="132" y="43" width="10" height="29" />
            <rect x="144" y="55" width="22" height="17" />
            <rect x="168" y="48" width="9" height="24" />
            <rect x="179" y="36" width="12" height="36" />
            <rect x="193" y="52" width="19" height="20" />
            <rect x="214" y="44" width="10" height="28" />
            <rect x="226" y="57" width="16" height="15" />
            <rect x="244" y="50" width="10" height="22" />
            <path d="M126 8h8v64h-8z" />
            <path d="M123 8h14l-3-6h-8z" />
            <circle cx="130" cy="4" r="2.4" />
          </g>
        </svg>
        <span className="p5-bsides-word">BSides</span>
        <span className="p5-bsides-city">Algiers</span>
      </div>
    </div>
  );
}

export default function Page5() {
  return (
    <section className="page5" id="events" aria-labelledby="p5-title">
      <div className="p5-inner">
        <header className="p5-head">
          <h2 className="p5-title" id="p5-title">
            <span className="p5-num">04</span>
            <span className="p5-slash" aria-hidden="true" />
            <span>Events</span>
          </h2>
          <p className="p5-lede">
            Ideas become experiences. Here's what we bring to the community.
          </p>
        </header>

        <ul className="p5-slides">
          {EVENTS.map((event) => (
            <li className="p5-card" key={event.title}>
              <div className="p5-copy">
                <span className="p5-tag">Event</span>
                <h3>{event.title}</h3>
                <p className="p5-desc">{event.text}</p>
                <p className="p5-date">
                  {event.date.map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </p>
                <ul className="p5-tags" aria-label={`${event.title} topics`}>
                  {event.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <EventArt kind={event.kind} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
