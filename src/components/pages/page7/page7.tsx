import type { ReactNode } from "react";
import "./page7.css";

type Gain = { title: string; text: string; icon: ReactNode };

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

const GAINS: Gain[] = [
  {
    title: "Learn",
    text: "Explore new ideas.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 6.5C10.2 5 8.2 4.5 4 4.5v13c4.2 0 6.2.5 8 2 1.8-1.5 3.8-2 8-2v-13c-4.2 0-6.2.5-8 2Z" />
        <path d="M12 6.5v13" />
      </svg>
    ),
  },
  {
    title: "Practice",
    text: "Get hands-on.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 7l5 5-5 5" />
        <path d="M12 17h7" />
      </svg>
    ),
  },
  {
    title: "Compete",
    text: "Test your skills.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 21V4" />
        <path d="M6 4h11l-2.5 4L17 12H6" />
      </svg>
    ),
  },
  {
    title: "Create",
    text: "Build something.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="m8 7-5 5 5 5" />
        <path d="m16 7 5 5-5 5" />
      </svg>
    ),
  },
  {
    title: "Connect",
    text: "Find your people.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
        <path d="M15.5 4.9a3.2 3.2 0 010 6.2" />
        <path d="M17.5 13.8c2 .6 3.5 2.4 3.5 5.2" />
      </svg>
    ),
  },
  {
    title: "Grow",
    text: "Go a little further.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 21v-8" />
        <path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7Z" />
        <path d="M12 15c0-3-2.5-5.5-5.5-5.5 0 3 2.5 5.5 5.5 5.5Z" />
      </svg>
    ),
  },
];

export default function Page7() {
  return (
    <section className="page7" id="why-join" aria-labelledby="p7-title">
      <div className="p7-inner">
        <h2 className="p7-title" id="p7-title">
          <span className="p7-num">06</span>
          <span className="p7-slash" aria-hidden="true" />
          <span>What you gain</span>
        </h2>

        <ul className="p7-grid" aria-labelledby="p7-title">
          {GAINS.map((gain) => (
            <li className="p7-item" key={gain.title}>
              {gain.icon}
              <h3>{gain.title}</h3>
              <p>{gain.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
