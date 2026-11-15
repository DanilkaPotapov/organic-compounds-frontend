import Card from "react-bootstrap/Card";
export const DEFAULT_IMAGE = `${import.meta.env.BASE_URL}media/default-organic-compound.svg`;
interface Props {
  src: string | null;
  name: string;
}
export default function CompoundImage({ src, name }: Props) {
  return (
    <Card.Img
      variant="top"
      src={src || DEFAULT_IMAGE}
      alt={src ? `Модель молекулы ${name}` : "Изображение по умолчанию"}
      onError={(event) => {
        const image = event.currentTarget;
        if (!image.dataset.fallback) {
          image.dataset.fallback = "true";
          image.src = DEFAULT_IMAGE;
        }
      }}
    />
  );
}
