import { useImperativeHandle, useRef, useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import Cards from "./components/clock/cards/Cards";
import AddItem from "./components/addItem/AddItem";

function App() {
    const cardsRef = useRef(null);

    const onAddCard = (card) => {
        if(cardsRef.current) {
            cardsRef.current.addCard(card)
        }
    }

    return (
        <>
            <Clock />
            <AddItem addCard={onAddCard}/>
            <Cards ref={cardsRef}/>
        </>
    );
}

export default App;
