export interface OrganicCompound {
  id: number;
  name: string;
  shortDescription: string;
  carbonCount: number;
  hydrogenCount: number;
  imageUrl: string | null;
  videoUrl: string | null;
  likeCount: number;
  displayFormula: string;
  family: string;
}
