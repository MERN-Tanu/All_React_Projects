import { useState } from "react";
// import { Todo } from "./Todo";

function TodoList() {
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [item, setItem] = useState([]);

  function deletehandler(i) {
    const updatedValue = item.filter((e, index) => i !== index);
    setItem(updatedValue);
  }

  function editHandler(event) {
    console.log("event", event);
    setEditInput(event.target.value);
  }

  function saveHandler() {
    const updatedSave = item.map((save, index) => {
      if (index === editIndex) {
        save = editInput;
      }
      return save;
    });
    console.log(updatedSave);
    setItem(updatedSave);
    setEditIndex("");
  }

  return (
    <div>
      {item.map((ele, i) => (
        <div key={i}>
          {editIndex === i ? (
            <input
              type="text"
              value={editInput}
              onChange={(e) => editHandler(e)}
            />
          ) : (
            <>
              <input type="text" value={ele} placeholder="Edit here.." />
            </>
          )}

          {editIndex === i ? (
            <button
              onClick={() => {
                saveHandler();
              }}>
              Save
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setEditIndex(i);
                  setEditInput(ele);
                }}>
                Edit
              </button>
            </>
          )}

          {editIndex === i ? (
            <button
              onClick={() => {
                setEditIndex(i);
                setEditInput(ele);
              }}>
              Edit
            </button>
          ) : (
            <button onClick={() => deletehandler(i)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
