import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
interface Props {
  firstId?: number;
}
export default function BottomNavigation({ firstId }: Props) {
  const { pathname } = useLocation();
  const feed = pathname.includes("/feed");
  return (
    <Navbar className="bottom-nav" aria-label="Основная навигация">
      <Link
        to={`/organic_compounds/feed${firstId ? `/${firstId}` : ""}`}
        className={`bottom-nav__item ${feed ? "is-active" : ""}`}
        aria-current={feed ? "page" : undefined}
      >
        <Icon name="feed" />
        <span>Лента</span>
      </Link>
      <button
        type="button"
        disabled
        className="bottom-nav__item"
        title="Доступно после входа"
      >
        <Icon name="plus" />
        <span>Добавление</span>
      </button>
      <Link
        to="/organic_compounds/grid"
        className={`bottom-nav__item ${!feed ? "is-active" : ""}`}
        aria-current={!feed ? "page" : undefined}
      >
        <Icon name="grid" />
        <span>Плитка</span>
      </Link>
      <button
        type="button"
        disabled
        className="bottom-nav__item"
        title="Вход будет доступен на следующем этапе"
      >
        <Icon name="user" />
        <span>Вход</span>
      </button>
    </Navbar>
  );
}
