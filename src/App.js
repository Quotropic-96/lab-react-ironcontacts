import "./App.css";
import React, { useState } from "react";
import contactsDB from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsDB.slice(0,5));

  const handleAddRandomStar = () => {
    const randomContacts = [...contacts]
    randomContacts.push(contactsDB[Math.floor(Math.random() * (contactsDB.length - 5) + 5)]);
    setContacts(randomContacts);
  }
  return <div className="App">
    <h1>IronContacts</h1>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Oscar</th>
        <th>Emmy</th>
      </tr>
      {contacts.map((elem, idx) => 
          <tr key={idx}>
            <td><img src={elem.pictureUrl} alt="Profile" /></td>
            <td>{elem.name}</td>
            <td>{elem.popularity}</td>
            <td>{elem.wonOscar && <span>🏆</span>}</td>
            <td>{elem.wonEmmy && <span>🏆</span>}</td>
          </tr>
        )}
    </table>
    <button className="btn" onClick={handleAddRandomStar}>Add random star</button>
  </div>;
}
export default App;