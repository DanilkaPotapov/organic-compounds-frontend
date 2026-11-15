import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
interface Props {
  overlay?: boolean;
}
export default function Header({ overlay = false }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`organic-header ${overlay ? "organic-header--overlay" : ""}`}
    >
      <Link to="/organic_compounds/grid" className="organic-brand">
        <span className="organic-brand__mark">OC</span>
        <span>
          <strong>Organic Compounds</strong>
          <small>Органические соединения</small>
        </span>
      </Link>
      <button
        className="settings-button"
        aria-label="Настройки"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name="settings" />
      </button>
      {open && (
        <section className="settings-panel" aria-label="Настройки просмотра">
          <strong>Режим гостя</strong>
          <p>Органические соединения · ЛР5</p>
          <p>Данные из локальной коллекции. Звук видео выключен.</p>
          <button onClick={() => setOpen(false)}>Закрыть</button>
        </section>
      )}
    </header>
  );
}
