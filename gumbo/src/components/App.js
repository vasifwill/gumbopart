import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "./Contacts";

function createCard (contact) {
    return (
        <Card 
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
        />
    )
}


function App () {
    return (
        <div>
        <Heading />
        {contacts.map(createCard)}
        </div>
        

    )
    
}

export default App