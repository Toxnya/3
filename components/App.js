import React, { useState } from 'react';
import CompetenceCard from "./CompetenceCard";
import ShowCompetenceCard from "./ShowCompenceCard";
import NewCompetenceModal from "./newcompetencecard";
import "./App.css"
import "./newcompetence.css"

const App = () => {
    const [competences, setCompetences] = useState([
        { id: 1, title: 'React', description: 'JavaScript library', level: 80 },
        { id: 2, title: 'Node.js', description: 'JavaScript runtime environment', level: 45 },
        { id: 3, title: 'HTML', description: 'Hypertext Markup Language', level: 90 },
        { id: 4, title: 'CSS', description: 'Cascading Style Sheets', level: 14 },
    ]);

    const [nextId, setNextId] = useState(5);
    const [showCompetences, setShowCompetences] = useState(false);
    const [filteredCompetences, setFilteredCompetences] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState((false));

    const toggleCompetences = () => {
        setShowCompetences(!showCompetences);
        if (!showCompetences) {
            setFilteredCompetences([]);
        }
    };

    const filterCompetences = (threshold) => {
        const filtered = competences.filter((competence) => {
            return threshold === 'greater' ? competence.level > 50 : competence.level < 50;
        });
        setShowCompetences(true);
        setFilteredCompetences(filtered);
    };

    const handleCreateCompetence = (newCompetence) => {
        const competenceToAdd = { id: nextId, ...newCompetence };
        setCompetences([...competences,competenceToAdd]);
        setNextId(nextId + 1);
        setIsModalOpen(false);
    };

    const handleDeleteCompetence = (id) => {
        setCompetences(competences.filter((competence) => competence.id !== id));
    };

    return (
        <div className="app">
            <ShowCompetenceCard onClick={toggleCompetences} isShowing={showCompetences} />
            <button onClick={() => filterCompetences('greater')}>
                Показать компетенции с уровнем изучения >50%
            </button>
            <button onClick={() => filterCompetences('lesser')}>
                Показать компетенции с уровнем изучения &lt;50%
            </button>
            <button className="add-competence-button" onClick={()=> setIsModalOpen(true)}>Добавить новую компетенцию</button>
            {isModalOpen && (
                <NewCompetenceModal onClose={() => setIsModalOpen(false)} onSave={handleCreateCompetence} />
            )}
            {showCompetences && (
                <div className="competences">
                    {filteredCompetences.length > 0 ? (
                        filteredCompetences.map((competence) => (
                            <CompetenceCard
                                key = {competence.id}
                                {...competence}
                                onDelete={handleDeleteCompetence}
                            />
                        ))
                    ) : (
                        competences.map((competence) => (
                            <CompetenceCard
                                key={competence.id}
                                {...competence}
                                onDelete={handleDeleteCompetence}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
