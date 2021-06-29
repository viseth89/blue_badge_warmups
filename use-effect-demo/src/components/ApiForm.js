import { Form, Input } from 'reactstrap';
import {useState} from 'react'

const ApiForm = (props) => {
    const [choice, setChoice] = useState("")

  return (
    <Form>
        <label for='query'>Pick an Api Query:</label>
        <select name="query" id="query">
            <option value="species">Species</option>
            <option value="terrain">Terrain</option>
        </select>
        <label for="species">Species:</label>
        <select name="species" id="cars">
            <option value="mammal">Mammal</option>
            <option value="deer">deer</option>
            <option value="spirit">spirit</option>
        </select>
        <label for="terrain">Terrain:</label>
        <select name="terrain" id="cars">
            <option value="mountain">Mountain</option>
            <option value="hill">Hill</option>
            <option value="plain">Plain</option>
        </select>
    </Form>
  );
}

export default ApiForm;