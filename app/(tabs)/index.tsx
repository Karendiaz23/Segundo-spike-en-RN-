import { useState } from "react";
import Contenedor from "./componentes/Contenedor";
import FormularioParaItem from "./componentes/FormularioParaItem";
import ListaDeCompras from "./componentes/ListaDeCompras";
import Titulo from "./componentes/Titulo";

type Item = {
  id: string;
  name: string;
  done: boolean;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setItems((prev) => [
      ...prev,
      { id: String(Date.now()), name: trimmed, done: false },
    ]);

    setText("");
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <Contenedor>
      <Titulo />

      <FormularioParaItem text={text} setText={setText} addItem={addItem} />

      <ListaDeCompras
        items={items}
        onToggle={toggleItem}
        onRemove={removeItem}
      />
    </Contenedor>
  );
}

