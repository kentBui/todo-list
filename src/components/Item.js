import React from "react";

const changeLevelValueToLevel = (value) => {
  let equal;
  if (value === "0") {
    equal = "Easy";
  }
  if (value === "1") {
    equal = "Medium";
  }
  if (value === "2") {
    equal = "High";
  }
  return equal;
};

export default function Item({ item, index, editItem, deleteItem }) {
  const { id, task, level } = item;
  let levelValue = changeLevelValueToLevel(level);

  return (
    <tbody>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task}</td>
        <td className="text-center">
          <span className="badge badge-info">{levelValue}</span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editItem(id, index)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(id, index)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
