import { NavLink } from "react-router-dom";

type Props = {
  open?: boolean;
  onNavigate?: () => void;
};

export default function NavBar({ open = false, onNavigate }: Props) {
  return (
    <aside id="mobile-nav" className={`sidebar ${open ? "open" : ""}`}>
      <div className="brand">
        <span>🎞️</span> <span>Watching Wrestling WTSO</span>
      </div>

      <nav>
        <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? "active": ""}`} onClick={onNavigate}>Home</NavLink>
        <NavLink to="/wrestling" className={({isActive}) => `nav-link ${isActive ? "active": ""}`} onClick={onNavigate}>Wrestling Edits</NavLink>
        <NavLink to="/matches" className={({isActive}) => `nav-link ${isActive ? "active": ""}`} onClick={onNavigate}>Match Edits</NavLink>
        <NavLink to="/other" className={({isActive}) => `nav-link ${isActive ? "active": ""}`} onClick={onNavigate}>Other Edits</NavLink>
      </nav>
    </aside>
  );
}
