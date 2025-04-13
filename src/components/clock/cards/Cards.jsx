import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./cards.css";
import axios from "axios";
import Modal from "./../../modal/Modal";
import Card from "./Card";

const Cards = React.memo(({ ref }) => {
    const [cards, setCards] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const adressAPI = "https://jsonplaceholder.typicode.com/posts/";
    const fetch = async () => {
        const response = await axios.get(adressAPI);
        setCards(response.data);
    };
    useEffect(() => {
        fetch();
    }, []);
    useImperativeHandle(ref, () => ({
        addCard(newCard) {
            setCards([newCard,...cards, ]);
        },
    }));

    const removeCard = useCallback((card) => {
        setCards(prev => prev.filter(c => c.id !== card.id));
    },[]);

    const editItem = useCallback((card) => {
        setModal(true);
        setSelectedCard(card);
    },[]);
    const saveChanges = (newCard) => {
        setCards(cards.map(c => c.id === newCard.id ? newCard : c))
        setModal(false);
    };
    useEffect(() => {
        console.log("render");
    }, [cards]);

    return (
        <div className="wrapper">
            <Modal
                select={selectedCard}
                closeModal={setModal}
                onSave={saveChanges}
                isOpen={modal}
            />
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    editItem={editItem}
                    removeCard={removeCard}
                />
            ))}
        </div>
    );
});

export default Cards;
