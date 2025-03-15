import React from 'react';

export default function Body({ items, setItems }) {  
  function handleCheck(id) {
    const updatedList = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedList);
    localStorage.setItem("task", JSON.stringify(updatedList));
  }

  function handleDelete(id) {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
    localStorage.setItem("task", JSON.stringify(updatedList));
  }

  return (
    <div>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked} 
              />
              <label onDoubleClick={() => handleCheck(item.id)}>{item.item}</label> 
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty</p>
      )}
    </div>
  );
}
