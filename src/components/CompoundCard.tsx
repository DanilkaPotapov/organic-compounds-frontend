import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import type { OrganicCompound } from "../types/organicCompound";
import CompoundImage from "./CompoundImage";
import Icon from "./Icon";
interface Props {
  compound: OrganicCompound;
}
export default function CompoundCard({ compound }: Props) {
  return (
    <Card
      as={Link}
      to={`/organic_compounds/feed/${compound.id}`}
      className="compound-card"
      aria-label={`Открыть ${compound.name}`}
    >
      <div className="compound-card__media">
        <CompoundImage src={compound.imageUrl} name={compound.name} />
        <span className="compound-card__index">
          {String(compound.id).padStart(2, "0")}
        </span>
      </div>
      <Card.Body>
        <div className="compound-card__heading">
          <Card.Title as="h2">{compound.name}</Card.Title>
          <small>{compound.family}</small>
        </div>
        <p className="compound-card__formula">{compound.displayFormula}</p>
        <div className="compound-card__meta">
          <span>
            C: {compound.carbonCount} · H: {compound.hydrogenCount}
          </span>
          <span>
            <Icon name="heart" /> {compound.likeCount}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}
