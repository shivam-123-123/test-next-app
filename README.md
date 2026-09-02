# nextjs-dummy-site

A small dummy website built with Next.js 15 (App Router) and TypeScript.

## Run it

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Pages

| Route      | File                        | Notes                          |
| ---------- | --------------------------- | ------------------------------ |
| `/`        | `src/app/page.tsx`          | Landing page, server component |
| `/about`   | `src/app/about/page.tsx`    | Server component               |
| `/contact` | `src/app/contact/page.tsx`  | Client component, form state   |

Shared nav lives in `src/components/Nav.tsx`, the shell and footer in
`src/app/layout.tsx`, and all styling in `src/app/globals.css`.

The `@/` import alias points at `src/`.
