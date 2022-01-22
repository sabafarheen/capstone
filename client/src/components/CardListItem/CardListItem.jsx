import React from "react";
import "./CardListItem.scss";

const CardListItem = (props) => {
  const { id, name, subject, grade, filename, img } = props;
  console.log(`../../assets/3_english/${img}`);
  return (
    <>
      <section className="card">
        <div className="card__container">
          <div>
            <img
              className="card__container-image"
              src={`http://localhost:8080/image/3_english/${img}`}
              alt={img}
            />
            <div className="card__container-info"> {name}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardListItem;
