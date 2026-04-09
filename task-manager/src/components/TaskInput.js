import React, { useState } from "react";

const TaskInput = (props) => {
  const [text, setText] = useState(" ");

  const handleAdd = () => {
    if (!text.trim()) return;
    props.addTask(text);
    setText(" ");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter Your Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
