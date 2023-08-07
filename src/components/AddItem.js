import React,{useRef} from "react";

export default function AddItem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef();
  return (
    <form id="addList" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        autoFocus
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button id="addBtn" aria-label="Add Btn" onClick={()=> inputRef.current.focus()}>
        +
      </button>
    </form>
  );
}
