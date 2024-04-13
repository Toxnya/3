import React, {useState} from 'react';

const CompetenceCard = ({ id, title, description, level, onDelete }) => {
    const [learned, setLearned] = useState(false);

    const handleCheckboxChange = () => {
        setLearned(!learned);
    }
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div className="competence-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Level: {level}%</p>
            <button onClick={handleDelete}>Удалить</button>
            <label>
                <input type="checkbox" checked={learned} onChange={handleCheckboxChange} />
                Изучен
            </label>
        </div>
    );
};

export default CompetenceCard;
