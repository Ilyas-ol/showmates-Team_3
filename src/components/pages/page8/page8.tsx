import glow from "../../../assets/glow.png";
import "./page8.css";

const SOCIALS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Page8() {
  return (
    <section className="page8" id="join" aria-labelledby="p8-title">
      <img className="p8-glow" src={glow} alt="" aria-hidden="true" />

      <div className="p8-inner">
        <div className="p8-cta">
          <h2 id="p8-title">
            <span>Welcome to</span>
            <span>Shellmates.</span>
          </h2>
          <p>
            Find your place in a community built on learning, experimentation,
            competition and collaboration.
          </p>
          <a className="p8-join" href="#">
            Join Us
            <img src="/fleche.png" alt="" aria-hidden="true" />
          </a>
        </div>

        <footer className="p8-footer">
          <a className="p8-brand" href="#home">
            <img src="/Group.png" alt="" />
            <span>Shellmates</span>
          </a>

          <ul className="p8-socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href}>
                  {social.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="p8-copy">© Shellmates Club — 2025</p>
        </footer>

        <p className="p8-credit">Community photography by Shellmates Multimedia.</p>
      </div>
    </section>
  );
}
