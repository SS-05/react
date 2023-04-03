import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import FavoriteList from "./FavoriteList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [contactList, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contactlists")) || []
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const [isForm, setIsForm] = useState({
    name: "",
    email: "",
  });
  const [favorite, setFav] = useState([]);

  useEffect(() => {
    localStorage.setItem("contactlists", JSON.stringify(contactList));
  }, [contactList]);

  const handleEdit = (index) => {
    setIsForm({ name: contactList[index].name, email: contactList[index].email });
    const updateContacts = [...contactList];
    updateContacts.splice(index, 1);
    setContacts(updateContacts);
  };

  const handleFav = (index) => {
    const favoriteContact = contactList[index];
    setFav([...favorite, favoriteContact]);
  };

  const addContactList = (contact) => {
    setContacts([...contactList, { ...contact }]);
  };

  const handleDeleteList = (index) => {
    const updatedContacts = [...contactList];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);

    const updatedFavorite = favorite.filter(
      (contact) => contact.id !== contactList[index].id
    );
    setFav(updatedFavorite);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                favorites={favorite}
                handleFav={handleFav}
                contacts={contactList}
                isForm={isForm}
                handleDelete={handleDeleteList}
                setIsEditMode={setIsEditMode}
                isEditMode={isEditMode}
                handleEdit={handleEdit}
              />
            )}
          />

          <Route
            path="/add"
            exact
            render={() => (
              <AddContact
                isForm={isForm}
                addContact={addContactList}
                setIsEditMode={setIsEditMode}
                isEditMode={isEditMode}
              />
            )}
          />
          <Route
            path="/favorite"
            exact
            render={() => (
              <FavoriteList
                favorites={favorite}
                handleFav={handleFav}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}


export default App


