import "./App.css";
import React, { useState } from "react";
import contactsDB from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsDB);
  return <div className="App">
    <h1>IronContacts</h1>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {contacts.map((elem, idx) => idx < 4 ? <tr key={idx}><td><img src={elem.pictureUrl} alt="Profile picture" /></td><td>{elem.name}</td><td>{elem.popularity}</td></tr> : null)}
    </table>
  </div>;
}
export default App;