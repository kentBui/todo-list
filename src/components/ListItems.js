import React from "react";
import Item from "./Item";

export default function ListItems(props) {
  const { items, editItem, deleteItem } = props;
  return (
    <div className="col-12 panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "160px" }}>Action</th>
          </tr>
        </thead>
        {items.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            index={index}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </table>
    </div>
  );
}
