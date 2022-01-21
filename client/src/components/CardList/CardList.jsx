import React from "react";
import CardListItem from "../CardListItem/CardListItem";

const CardList = (props) => {
  return (
    <>
      {props.resourceList.map((resourceList) => {
        return (
          <CardListItem
            key={resourceList.id}
            id={resourceList.id}
            name={resourceList.name}
            resourceList={resourceList.resourceList}
            grade={resourceList.grade}
            filename={resourceList.filename}
            img={resourceList.img}
          />
        );
      })}
    </>
  );
};

export default CardList;
