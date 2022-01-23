import React from "react";
import CardListItem from "../CardListItem/CardListItem";
import "./CardList.scss";

const CardList = (props) => {
  return (
    <div className="cardList">
      {props.resourceList.map((resourceList) => {
        return (
          <CardListItem
            key={resourceList.id}
            id={resourceList.id}
            name={resourceList.name}
            resourceList={resourceList.resourceList}
            grade={resourceList.grade}
            subject={resourceList.subject}
            filename={resourceList.filename}
            img={resourceList.img}
          />
        );
      })}
    </div>
  );
};

export default CardList;
