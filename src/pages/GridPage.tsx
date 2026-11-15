import type { OrganicCompound } from "../types/organicCompound";
import CarbonFilter from "../components/CarbonFilter";
import CompoundCard from "../components/CompoundCard";
interface Props {
  compounds: OrganicCompound[];
  total: number;
  carbonCount: string;
  onFilter: (value: string) => void;
}
export default function GridPage({
  compounds,
  total,
  carbonCount,
  onFilter,
}: Props) {
  return (
    <main className="grid-page">
      <div className="page-title">
        <div>
          <span className="eyebrow">СПРАВОЧНИК</span>
          <h1>
            Плитка
            <br />
            соединений
          </h1>
        </div>
        <span className="result-count" aria-live="polite">
          {compounds.length}
          <small> / {total}</small>
        </span>
      </div>
      <CarbonFilter value={carbonCount} onApply={onFilter} />
      <section className="compound-grid" aria-label="Органические соединения">
        {compounds.map((compound) => (
          <CompoundCard key={compound.id} compound={compound} />
        ))}
      </section>
      {compounds.length === 0 && (
        <div className="empty-state">
          <strong>Соединений не найдено</strong>
          <p>Измени число атомов C или сбрось фильтр.</p>
        </div>
      )}
    </main>
  );
}
