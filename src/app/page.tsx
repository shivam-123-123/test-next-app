import Link from "next/link";

const features = [
  {
    title: "App Router",
    body: "Every folder under src/app is a route. Add a folder with a page.tsx and it goes live.",
  },
  {
    title: "Server Components",
    body: "Pages render on the server by default. Add \"use client\" only where you need interactivity.",
  },
  {
    title: "TypeScript",
    body: "Configured out of the box, with the @/* alias pointing at src/.",
  },
  {
    title: "Plain CSS",
    body: "One global stylesheet, no build plugins or utility framework to learn.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <span className="badge">Next.js 15 · App Router</span>
        <h1>A starter site with nothing you have to undo.</h1>
        <p className="sub">
          Three pages, a shared nav and a stylesheet. Rename things and start
          building.
        </p>
        <div className="actions">
          <Link className="btn" href="/about">
            Read more
          </Link>
          <Link className="btn ghost" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="grid">
        {features.map((f) => (
          <article className="card" key={f.title}>
            <strong>{f.title}</strong>
            <p>{f.body}</p>
          </article>
        ))}
      </section>

      <section className="card wide">
        <strong>Where to edit</strong>
        <ul>
          <li>
            Home page — <code>src/app/page.tsx</code>
          </li>
          <li>
            Nav and footer — <code>src/components/Nav.tsx</code>,{" "}
            <code>src/app/layout.tsx</code>
          </li>
          <li>
            Styles — <code>src/app/globals.css</code>
          </li>
        </ul>
      </section>
    </main>
  );
}
