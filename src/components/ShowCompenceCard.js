import React from "react";

const ShowCompetenceCard = ({ onClick, isShowing }) => {
    return(
        <button onClick={onClick}>
            {isShowing ? 'Убрать компетенции' : 'Показать компетенции'}
        </button>
    );
};

export default ShowCompetenceCard;