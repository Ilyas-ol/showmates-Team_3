import type { ReactNode } from "react";
import glow from "../../../assets/glow.png";
import "./page4.css";

type Activity = { title: string; text: string; icon: ReactNode };

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

const ACTIVITIES: Activity[] = [
  {
    title: "Workshops",
    text: "Hands-on sessions to explore security concepts.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M5 7l5 5-5 5" />
        <path d="M13 18h6" />
      </svg>
    ),
  },
  {
    title: "Internal Events",
    text: "Club challenges and friendly competitions to learn from one another.",
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
    title: "External Events/CTFs",
    text: "Meet the wider community and test our skills in capture-the-flag challenges.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 21V4" />
        <path d="M6 4h11l-2.5 4L17 12H6" />
      </svg>
    ),
  },
  {
    title: "Hack The Box Meetups",
    text: "Get together, tackle machines and exchange ideas on every step of the solve.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M4 7.5l8 4.5 8-4.5" />
        <path d="M12 12v9" />
      </svg>
    ),
  },
];

export default function Page4() {
  return (
    <section className="page4">
      <img className="p4-glow" src={glow} alt="" aria-hidden="true" />

      <div className="p4-inner">
        <h2 className="p4-head" id="p4-what">
          <span className="p4-num">03</span>
          <span className="p4-slash" aria-hidden="true" />
          <span className="p4-title">What we do</span>
        </h2>

        <ul className="p4-cards" aria-labelledby="p4-what">
          {ACTIVITIES.map((a) => (
            <li className="p4-card" key={a.title}>
              {a.icon}
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>

        <hr className="p4-rule" />
      </div>
    </section>
  );
}