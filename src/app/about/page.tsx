import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const stats = [
  { value: "2014", label: "Founded" },
  { value: "48", label: "People" },
  { value: "12", label: "Countries" },
];

export default function About() {
  return (
    <main>
      <section className="hero">
        <h1>About</h1>
        <p className="sub">
          Placeholder copy so the page has something to show while you build the
          real thing.
        </p>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="value">{s.value}</span>
            <span className="label">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="card wide">
        <strong>What we do</strong>
        <p>
          Northwind is a fictional company used to fill out this template. Swap
          this text for your own and the layout will hold.
        </p>
        <p>
          This page is a server component: it renders to HTML on the server, so
          it ships no JavaScript of its own to the browser.
        </p>
      </section>
    </main>
  );
}
