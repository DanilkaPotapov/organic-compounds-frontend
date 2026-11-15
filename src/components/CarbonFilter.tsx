import { useState, type FormEvent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Icon from "./Icon";
interface Props {
  value: string;
  onApply: (value: string) => void;
}
export default function CarbonFilter({ value, onApply }: Props) {
  const [draft, setDraft] = useState(value);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onApply(draft === "" ? "" : String(Number(draft)));
  }
  return (
    <Form className="carbon-filter" onSubmit={submit}>
      <Form.Group controlId="carbonCount">
        <Form.Label>Количество атомов C</Form.Label>
        <Form.Control
          type="number"
          min={1}
          step={1}
          placeholder="Все соединения"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="apply-button">
        <Icon name="search" /> Найти
      </Button>
      {value !== "" && (
        <button
          className="reset-filter"
          type="button"
          onClick={() => {
            setDraft("");
            onApply("");
          }}
        >
          Сбросить фильтр
        </button>
      )}
    </Form>
  );
}
