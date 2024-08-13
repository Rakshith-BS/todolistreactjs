import React from "react";

function Person({ person }) {
  return (
    <div>
      {" "}
      <h2>
        I'm {person.name}. I'm {person.age} years old. I'm a {person.skill}
      </h2>
    </div>
  );
}

export default Person;
