import React from "react";

export default function Item({ item, index, editItem, deleteItem }) {
  const { id, task, level } = item;
  return (
    <tbody>
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{task}</td>
        <td className="text-center">
          <span className="badge badge-info">{level}</span>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editItem(id)}
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
