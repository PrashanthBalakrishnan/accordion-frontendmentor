import data from "../data";
import { useState } from "react";
import "./accordion.css";
import arrow from "/images/icon-arrow-down.svg";

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
          <div className="accordion__container">
            <button
              className="accordion__questionContainer"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="accordion__question">
                <p
                  className={
                    selected === dataItem.id ? "accordion__question--bold" : ""
                  }
                >
                  {dataItem.question}
                </p>
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
            </button>

            <p
              className={`accordion__answer ${
                selected === dataItem.id ? "show" : ""
              }`}
            >
              {dataItem.answer}
            </p>
          </div>
          <hr className="accordion__divider" />
        </div>
      ))}
    </section>
  );
};

export default Accordion;
