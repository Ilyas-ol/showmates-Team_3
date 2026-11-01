import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import glow from "../../../assets/glow.png";
import "./page3.css";

type Role = { name: string; text: string };
type Stat = { label: string; value: number; display: string };

const ROLES: Role[] = [
  { name: "HR", text: "Support members and team life." },
  { name: "Design", text: "Shape our visual identity." },
  { name: "Relex", text: "Build external partnerships." },
  { name: "Technical", text: "Lead cybersecurity learning." },
  { name: "Events", text: "Bring our gatherings to life." },
  { name: "Communication", text: "Share the club's voice." },
  { name: "Development", text: "Build our digital tools." },
  { name: "Multimedia", text: "Capture and tell our stories." },
];

const STATS: Stat[] = [
  { label: "Facebook", value: 60, display: "≈60k" },
  { label: "Instagram", value: 87, display: "≈87k" },
  { label: "LinkedIn", value: 26, display: "≈26k" },
  { label: "Others", value: 14, display: "≈14k" },
];
const MAX_VALUE = Math.max(...STATS.map((s) => s.value));

function useInView<T extends Element>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) setInView(true);
        else if (entry.intersectionRatio === 0) setInView(false);
      },
      { threshold: [0, threshold] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default function Page3() {
  const [chartRef, chartSeen] = useInView<HTMLDivElement>();

  return (
    <section className="page3">
      <img className="p3-glow" src={glow} alt="" aria-hidden="true" />

      <div className="p3-inner">
        <h2 className="p3-head" id="p3-structure">
          <span className="p3-num">02</span>
          <span className="p3-slash" aria-hidden="true" />
          <span className="p3-title">Structure</span>
        </h2>

        <ul className="p3-roles" aria-labelledby="p3-structure">
          {ROLES.map((r) => (
            <li className="p3-role" key={r.name}>
              <h3>{r.name}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="p3-impact">
          <div>
            <p className="p3-eyebrow">Our impact / Monthly views</p>
            <h2 className="p3-impact-title">
              Beyond
              <br />
              the campus.
            </h2>
            <p className="p3-lede">
              Sharing cybersecurity with a wider community, one conversation at a time.
            </p>
          </div>

          <div className="p3-chart-wrap">
            <div
              ref={chartRef}
              className={`p3-chart ${chartSeen ? "is-in" : ""}`}
              role="img"
              aria-label="Monthly views: Facebook about 60 thousand, Instagram about 87 thousand, LinkedIn about 26 thousand, others about 14 thousand"
            >
              {STATS.map((s, i) => (
                <div
                  className="p3-col"
                  key={s.label}
                  style={
                    {
                      "--h": `${(s.value / MAX_VALUE) * 82}%`,
                      "--d": `${i * 0.12}s`,
                    } as CSSProperties
                  }
                >
                  <span className="p3-val">{s.display}</span>
                  <div className="p3-bar" />
                  <span className="p3-cat">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}