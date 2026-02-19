# Customer Health Dashboard (Demo)

This repository contains a **frontend demo** for a *Customer Health Overview* dashboard, inspired by internal tools used by Customer Success teams.

<img width="1300" height="219" alt="image" src="https://github.com/user-attachments/assets/d25a8884-608b-45a4-bd5d-87bf7e53e641" />

The goal of this project is **not feature completeness**, but to demonstrate **frontend architecture, UI composition, and design-system usage** in a realistic SaaS context.

---

## ✨ What this demo shows

- A **Customer Health table** with:
  - health score visualization
  - status-driven actions
  - consistent, type-safe domain modeling
- Integration of **shadcn/ui** as low-level UI primitives
- A custom **retro / Win95-inspired visual language**
- Strong **TypeScript modeling**:
  - exhaustively typed customer states
  - action mappings enforced at compile time
- Clean separation between:
  - presentation
  - domain types
  - UI primitives

This project intentionally focuses on **structure and correctness** over breadth of features.

---

## 🧠 Technical decisions

- **Next.js (App Router)**  
  Chosen for modern routing, layout composition, and server/client boundaries.

- **shadcn/ui**  
  Used as an accessible, composable primitive layer — not as a visual design system.

- **Tailwind CSS v4**  
  Used for explicit, predictable styling. Global tokens are intentionally minimal.

- **TypeScript-first modeling**  
  Domain concepts (e.g. customer status) are treated as source-of-truth types, not strings.

---

## Next.js App Router – useSearchParams and Suspense

This project uses the Next.js App Router.

When using `useSearchParams()` inside a client component rendered at the
page level, the component **must be wrapped in a `<Suspense>` boundary**.
Otherwise, the production build will fail during prerendering.

This is required because `useSearchParams()` can trigger a CSR bailout
during static generation, and Next.js enforces an explicit Suspense
boundary for this case.

Reference:
https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

---

## Architectural note

A more production-oriented pattern is to keep the page as a **Server
Component**, read `searchParams` on the server, and move only the
interactive UI into a client component (client island pattern). That
approach avoids the Suspense bailout and enables better static and
streaming optimizations.

The current implementation uses a client page wrapped in Suspense to
keep the fix minimal and localized.

---

## 🚫 What this demo does NOT include (yet)

This is intentional and by design:

- No backend or real API integration
- No persistence or pagination
- No customer detail panel (planned next step)
- No authentication

Those would be part of a **second iteration** focused on interaction and data flow.

---

## ▶️ Running locally

```bash
npm install
npm run dev



