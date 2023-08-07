import React from "react";

export default function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form id="addList" onSubmit={handleSubmit}>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        autoFocus
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button id="addBtn" aria-label="Add Btn">
        +
      </button>
    </form>
  );
}
