import React from "react";
import "./CardListItem.scss";

const CardListItem = (props) => {
  const { name, subject, grade, filename, img } = props;
  return (
    <>
      <section className="card">
        <div className="card__container">
          {/* Calling the API from the local server to get the selected resources*/}
          <a
            href={`http://localhost:8080/resources/${grade}_${subject}/${filename}`}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                className="card__container-image"
                src={`/image/${grade}_${subject}/${img}`}
                alt={img}
              />
              <div className="card__container-info"> {name}</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default CardListItem;
