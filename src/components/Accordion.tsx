import data from "../data";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div>
      {data.map((dataItem) => (
        <div key={dataItem.id}>
          <button onClick={() => handleSingleSelection(dataItem.id)}>
            <h3>{dataItem.question}</h3>
          </button>

          {selected === dataItem.id && <p>{dataItem.answer}</p>}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
