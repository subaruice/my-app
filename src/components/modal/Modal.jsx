import React, { useEffect, useState } from "react";
import "./modal.css";

const Modal = ({ closeModal, isOpen, select, onSave }) => {
    const [changedCard, setChangedCard] = useState({
        title: "",
        body: "",
        id: "",
    });

    useEffect(() => {
        if(select) setChangedCard(select)
    },[select])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(changedCard)
    };

    return (
        <div className={isOpen ? "modal active" : "modal"}>
            <div className="modal-form">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Поменять название</p>
                    <input
                        onChange={(e) =>
                            setChangedCard((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        value={changedCard.title}
                        name="title"
                        type="text"
                    />
                    <p>Поменять описание</p>
                    <input
                        onChange={(e) =>
                            setChangedCard((prev) => ({
                                ...prev,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        value={changedCard.body}
                        name="body"
                        type="text"
                    />
                    <button type='submit'>Редактировать</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
