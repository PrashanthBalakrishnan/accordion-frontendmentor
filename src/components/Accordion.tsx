import data from "../data";
import { useState } from "react";
import "./accordion.css";
import arrow from "../../public/images/icon-arrow-down.svg";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSingleSelection(getCurrentId: number) {
    setSelected((prevSelected) =>
      prevSelected === getCurrentId ? null : getCurrentId
    );
  }

  return (
    <section className="accordion">
      <h1 className="accordion__title">FAQ</h1>
      {data.map((dataItem) => (
        <div className="accordion__item" key={dataItem.id}>
          <div className="accordion__questionContainer">
            <div className="accordion__question">
              <button onClick={() => handleSingleSelection(dataItem.id)}>
                <h3
                  className={
                    selected === dataItem.id
                      ? "accordion__question--bold"
                      : "accordion__question--normal"
                  }
                >
                  {dataItem.question}
                </h3>
              </button>
            </div>
            <img
              src={arrow}
              alt="arrow"
              className={
                selected === dataItem.id
                  ? "accordion__arrow up"
                  : "accordion__arrow"
              }
            />
          </div>

          <p
            className={`accordion__answer ${
              selected === dataItem.id ? "show" : ""
            }`}
          >
            {dataItem.answer}
          </p>
          <hr className="accordion__divider" />
        </div>
      ))}
    </section>
  );
};

export default Accordion;
