import React from "react";

const NameList = () => {
  const names = ["virat", "faf", "DK"];
  const persons = [
    {
      id: "1",
      name: "virat",
      age: "32",
      skill: "all-rounder",
    },
    {
      id: "2",
      name: "faf",
      age: "34",
      skill: "batsmen",
    },
    {
      id: "3",
      name: "maxi",
      age: "36",
      skill: "all-rounder",
    },
    {
      id: "4",
      name: "siraj",
      age: "38",
      skill: "bowler",
    },
  ];
  // const personsList = persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));
  const namesList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{namesList}</div>;
};

export default NameList;
