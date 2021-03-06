import React from "react";

const ListGroup = ( {
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={selectedItem === item ? "list-group-item active" : "list-group-item"}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

//setting default props -> if we receive a different prop name, can change
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
