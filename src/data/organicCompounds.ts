import type { OrganicCompound } from "../types/organicCompound";
const asset = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;
export const organicCompounds: readonly OrganicCompound[] = [
  {
    id: 1,
    name: "Метан",
    displayFormula: "CH₄",
    family: "Алкан",
    carbonCount: 1,
    hydrogenCount: 4,
    likeCount: 12,
    imageUrl: asset("methane.svg"),
    videoUrl: asset("methane.mp4"),
    shortDescription:
      "Простейший алкан. Молекула содержит один атом углерода и четыре атома водорода. Основной компонент природного газа; при полном сгорании образуются углекислый газ и вода.",
  },
  {
    id: 2,
    name: "Этан",
    displayFormula: "C₂H₆",
    family: "Алкан",
    carbonCount: 2,
    hydrogenCount: 6,
    likeCount: 8,
    imageUrl: asset("ethane.svg"),
    videoUrl: asset("ethane.mp4"),
    shortDescription:
      "Предельный углеводород с двумя атомами углерода, соединёнными одинарной связью. Входит в состав природного газа. Относится к гомологическому ряду алканов.",
  },
  {
    id: 3,
    name: "Этен",
    displayFormula: "C₂H₄",
    family: "Алкен",
    carbonCount: 2,
    hydrogenCount: 4,
    likeCount: 15,
    imageUrl: asset("ethene.svg"),
    videoUrl: asset("ethene.mp4"),
    shortDescription:
      "Простейший алкен, также известный как этилен. Между атомами углерода находится двойная связь. Используется как исходное вещество для получения полиэтилена.",
  },
  {
    id: 4,
    name: "Пропен",
    displayFormula: "C₃H₆",
    family: "Алкен",
    carbonCount: 3,
    hydrogenCount: 6,
    likeCount: 6,
    imageUrl: asset("propene.svg"),
    videoUrl: asset("propene.mp4"),
    shortDescription:
      "Непредельный углеводород с тремя атомами углерода и одной двойной связью. Второе название — пропилен. Служит исходным веществом для получения полипропилена.",
  },
  {
    id: 5,
    name: "Метанол",
    displayFormula: "CH₃OH",
    family: "Спирт",
    carbonCount: 1,
    hydrogenCount: 4,
    likeCount: 4,
    imageUrl: null,
    videoUrl: null,
    shortDescription:
      "Простейший одноатомный спирт. В молекуле есть гидроксильная группа OH. Общее число атомов водорода равно четырём. Формула включает кислород, поэтому состав не сводится только к C и H.",
  },
  {
    id: 6,
    name: "Этанол",
    displayFormula: "C₂H₅OH",
    family: "Спирт",
    carbonCount: 2,
    hydrogenCount: 6,
    likeCount: 10,
    imageUrl: asset("ethanol.svg"),
    videoUrl: null,
    shortDescription:
      "Одноатомный спирт с двумя атомами углерода и гидроксильной группой OH. Общее число атомов водорода равно шести. Формула C₂H₅OH соответствует молекулярной формуле C₂H₆O.",
  },
];
export function filterOrganicCompounds(carbonCount: string): OrganicCompound[] {
  return organicCompounds.filter(
    (compound) =>
      carbonCount === "" || compound.carbonCount === Number(carbonCount),
  );
}
export function getOrganicCompound(id?: string): OrganicCompound | undefined {
  if (id === undefined) return organicCompounds[0];
  return organicCompounds.find((compound) => String(compound.id) === id);
}
export function nextOrganicCompound(id: number): OrganicCompound {
  const index = organicCompounds.findIndex((compound) => compound.id === id);
  return organicCompounds[(index + 1) % organicCompounds.length];
}
