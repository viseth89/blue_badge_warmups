import { useEffect, useState } from "react";
import "./ApiForm.css";

const ApiForm = (props) => {
  const [choice, setChoice] = useState("");

  const API_URL = "";
  useEffect(() => {
    if (choice) {
        let endpoint = choice == "species" ? "species" : "locations"
      fetch(API_URL + endpoint)
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
  }, [choice]);



  useEffect(() => {
      console.log(data.map(l => l.terrain))
      console.log(data.map(s => s.name))
  }, [data])

  return (
    <form>
      <p>{choice}</p>
      <label htmlfor="query">Pick an Api Query:</label>
      <select
        onChange={(e) => {
          setChoice(e.target.value);
        }}
        name="query"
        id="query"
      >
        <option value="species">Species</option>
        <option value="terrain">Terrain</option>
      </select>
      {choice == "terrain" ? (
        <>
          <label htmlfor="species">Species:</label>
          <select name="species" id="cars">
            <option value="mammal">Mammal</option>
            <option value="deer">deer</option>
            <option value="spirit">spirit</option>
          </select>
        </>
      ) : (
        <>
          <label htmlfor="terrain">Terrain:</label>
          <select name="terrain" id="cars">
            <option value="mountain">Mountain</option>
            <option value="hill">Hill</option>
            <option value="plain">Plain</option>
          </select>
        </>
      )}
    </form>
  );
};

export default ApiForm;
