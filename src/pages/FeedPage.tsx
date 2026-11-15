import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  getOrganicCompound,
  nextOrganicCompound,
} from "../data/organicCompounds";
import CompoundVideo from "../components/CompoundVideo";
import Icon from "../components/Icon";
export default function FeedPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const compound = getOrganicCompound(id);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setExpanded(false);
  }, [id]);
  if (!compound)
    return (
      <main className="empty-state">
        <h1>Соединение не найдено</h1>
        <Link to="/organic_compounds/grid">Открыть плитку</Link>
      </main>
    );
  return (
    <main className="feed-screen">
      <CompoundVideo
        key={compound.id}
        src={compound.videoUrl}
        name={compound.name}
      />
      <div className="feed-shade" />
      <div className="feed-side">
        <span
          className="feed-likes"
          aria-label={`${compound.likeCount} лайков`}
        >
          <Icon name="heart" />
          <strong>{compound.likeCount}</strong>
        </span>
        <Button
          type="button"
          className="next-button"
          aria-label="Следующее соединение"
          onClick={() =>
            navigate(
              `/organic_compounds/feed/${nextOrganicCompound(compound.id).id}`,
            )
          }
        >
          <Icon name="next" />
        </Button>
        <span>Следующее</span>
      </div>
      <section className="feed-copy">
        <span className="feed-family">{compound.family}</span>
        <h1>{compound.name}</h1>
        <p className="feed-formula">{compound.displayFormula}</p>
        <div className="atom-counts">
          <span>
            Атомов C: <b>{compound.carbonCount}</b>
          </span>
          <span>
            Атомов H: <b>{compound.hydrogenCount}</b>
          </span>
        </div>
        <p className={`feed-description ${expanded ? "is-expanded" : ""}`}>
          {compound.shortDescription}
        </p>
        <button
          className="description-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Свернуть" : "Ещё"}
        </button>
      </section>
    </main>
  );
}
