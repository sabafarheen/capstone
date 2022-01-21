import React from "react";
import "./CardListItem.scss";
// import Image from "../../assets/3_english";

const CardListItem = (props) => {
  const { id, name, subject, grade, filename, img } = props;
  return (
    <div className="card">
      <div className="card__container">
        <div>
          <img
            className="card__container-image"
            src={`../../assets/3_english/${img}`}
            alt={img}
          />
          <div className="card__container-info"> {name}</div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
