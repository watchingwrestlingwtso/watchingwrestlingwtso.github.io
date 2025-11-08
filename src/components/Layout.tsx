import { useState } from "react";
import type { PropsWithChildren } from "react";
import NavBar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      {/* Mobile toggle */}
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(v => !v)}
      >
        ☰
      </button>

      {/* Dim backdrop when drawer is open */}
      <div
        className={`backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <NavBar open={open} onNavigate={() => setOpen(false)} />
      <main className="main">{children}</main>
    </div>
  );
}
