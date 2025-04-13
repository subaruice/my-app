import React from "react";

const Card = React.memo(({card, editItem, removeCard}) => {
    console.log('render: ', card.id)
    return (
        <div className="card">
            <img
                src="https://milotec.com.ua/design/user/default/images/header.jpg"
                alt=""
            />
            <div className="card-body">
                <p className="card-title">{card.title}</p>
                <p className="card-price">{card.body}</p>
            </div>
            <div className="card-btns">
                <button
                    onClick={() => editItem(card)}
                    className="card-btn-edit"
                >
                    Редактировать
                </button>
                <button
                    onClick={() => removeCard(card)}
                    className="card-btn-del"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
});

export default Card;
