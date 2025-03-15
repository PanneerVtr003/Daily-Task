import React, { useState } from 'react';
import { useRef } from 'react';

export default function Item({ items, setItems }) { 
  const [newItem, setNewItem] = useState('');

  function addItem(newItemText) {
    if (!newItemText) return;

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newTask = { id, checked: false, item: newItemText };

    const updatedList = [...items, newTask];  
    setItems(updatedList);

    localStorage.setItem("task", JSON.stringify(updatedList));  
  }

  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  const inputRef =useRef();
  return (
    <form className='item-add' onSubmit={handleSubmit}>  
      <input 
      ref={inputRef}
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit"
      onClick={()=> inputRef.current.focus}
      > + </button> 
    </form>
  );
}
