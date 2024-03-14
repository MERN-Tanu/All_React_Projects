import { useState } from "react";
import moment from "moment";
// Created at
// updated
// delete - debug
// css

function MainContainer() {
  const [add, setAdd] = useState(""); // add = ""
  const [item, setItem] = useState([]); // item = [] (initial value)
  const [editIndex, setEditIndex] = useState(null); // editIndex = null
  const [editInput, setEditInput] = useState(""); // editInput = ""

  // const [currentDate, setCurrentDate] = useState(new Date());
  // console.log(currentDate);

  console.log("item", item);

  function HandleOnChange(event) {
    setAdd(event.target.value);
  }

  function addToDoHandler() {
    setItem([...item, { todo: add, createdAt: new Date(), updatedAt: "N/A" }]);
    setAdd("");
  }

  function deleteHandler(i) {
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
        save.todo = editInput;
        save.updatedAt = new Date();
      }
      return save;
    });
    console.log(updatedSave);

    setItem(updatedSave);
    setEditIndex("");
  }

  return (
    <div>
      {/* Heading start */}
      <h1 className="font-serif font-bold text-fuchsia-900 mt-8 text-5xl text-ellipsis shadow-md opacity-1 hover:opacity-100 ">
        TODO APP
      </h1>
      {/* Heading end */}

      <br />

      {/* Input Element we will add the value in textBar : variable = add */}
      <input
        value={add}
        placeholder="Add a new task..... "
        onChange={(event) => HandleOnChange(event)}
        className="border border-red-900 mr-3 outline-double rounded-md px-10 py-3 font-semibold text-red-800"
      />
      {/* Input Element we will add the value in textBar : variable = add */}

      {/* Add todo Button */}

      <button
        onClick={addToDoHandler}
        className="border border-amber-700 gap-6 mr-3 outline-double bg-white text-red-800  px-5 py-3 rounded-md font-extrabold">
        Add ToDo
      </button>
      {/* Add todo Button */}

      <div className="border-red-600 text-center text-lg">
        {item.map((ele, i) => (
          <div key={i} className="border border-red-800 mt-5 outline-double ">
            {editIndex === i ? (
              <input
                type="text"
                className="bg-white border border-red-900 outline-double px-6 py-2 rounded-md font-semibold"
                value={editInput}
                onChange={(e) => editHandler(e)}
              />
            ) : (
              <div>
                <p className="text-start px-3 py-3 text-3xl font-serif">
                  {ele.todo}
                </p>
                <p className="text-end mb-8 -mt-11 font-bold mr-4 text-sm">
                  createdAt: {moment(ele.createdAt).format("LLLL")}
                </p>
                <p className="text-end -mt-7 font-bold text-sm mr-4">
                  updatedAt :{" "}
                  {ele.updatedAt === "N/A"
                    ? "N/A"
                    : moment(ele.updatedAt).format("LLLL")}
                </p>
              </div>
            )}

            {editIndex === i ? (
              <button
                className="font-bold bg-blue-700 border border-red-800 px-4 py-2  rounded-md mt-5 mr-3 ml-4 text-white mb-12"
                onClick={() => {
                  saveHandler();
                }}>
                Save
              </button>
            ) : (
              <div className="inline-flex mb-7">
                {/* <input
                  type="text"
                  className="bg-white border border-red-900 outline-double px-6 py-2 rounded-md font-semibold"
                  value={editIndex}
                  onChange={(e) => setEditIndex(e)}
                /> */}

                <button
                  onClick={() => {
                    setEditIndex(i);
                    setEditInput(ele.todo);
                  }}
                  className="font-bold bg-green-700 text-white border border-red-800 px-4 py-2 mr-28 rounded-md ">
                  Edit
                </button>
              </div>
            )}

            {editIndex === i ? (
              <button
                onClick={() => {
                  setEditIndex(i);
                  setEditInput(ele);
                }}
                className="font-bold bg-green-700 text-white border border-red-800 px-4 py-2 rounded-md gap-[-4]">
                Edit
              </button>
            ) : (
              <button
                onClick={() => deleteHandler(i)}
                className="font-bold bg-red-500 text-white border border-red-800 px-4 py-2  rounded-md  ">
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContainer;
