import React, { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("react");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleComments = (event) => {
    setComments(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`${userName} ${comments} ${topic}`);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" value={userName} onChange={handleUserName} />
        </div>
        <div>
          <label>Comments: </label>
          <textarea type="text" value={comments} onChange={handleComments} />
        </div>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
