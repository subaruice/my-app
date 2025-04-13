import React, { useState } from "react";
import "./addItem.css";

const AddItem = ({ addCard }) => {
    const [newForm, setNewForm] = useState({title:'',body:'' });

    const sendForm = (e) => {
        e.preventDefault();
        const card = { ...newForm, id: Date.now()}        
        addCard(card);
        setNewForm({ title: "", body: "", id: "" });
    };

    return (
        <div  className="add-block">
            <form onSubmit={sendForm} className="add-form">
                <p>Заголовок</p>
                <input
                    name="title"
                    value={newForm.title}
                    onChange={(e) =>
                        setNewForm((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                    type="text"
                />
                <p>Описание</p>
                <input
                    value={newForm.body}
                    type="text"
                    name="body"
                    onChange={(e) =>
                        setNewForm((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
                <button type="submit">Добавить</button>
            </form>
        </div>

    );
};

export default AddItem;