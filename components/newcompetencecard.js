import React, {useState} from "react";
import ReactDOM from "react-dom";

const NewCompetenceModal = ({ onClose, onSave}) => {
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');

    const handleSave = () => {
        if (level < 0 || level > 100){
            alert('Уровень осовения должен быть в диапазоне от 0 до 100');
        } else {
        onSave ({ title, description, level:parseInt(level) });
        onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Добавить новую компетенцию</h2>
                <input type='text' placeholder="Название компетенции" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder="Описание компетенции" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type='number' placeholder="Уровень освоения" value={level} onChange={(e) => setLevel(e.target.value)}/>
                <button onClick={handleSave}>Сохранить</button>
            </div>
        </div>,
            document.getElementById('modal-root')
    );
};

export default NewCompetenceModal;
