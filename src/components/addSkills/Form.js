import React, { useState } from 'react';
import SkillInputs from './SkillsInputs';

const Form = () => {
    const blankSkill = { name: ''};
    const [skillState, setSkillState] = useState([
        { ...blankSkill },
    ]);

    const addSkill = () => {
        setSkillState([...skillState, { ...blankSkill }]);
    };

    const handleSkillsChange = (e) => {
        const updatedSkills = [...skillState];
        updatedSkills[e.target.dataset.idx][e.target.className] = e.target.value
        console.log(e.target.value); 
        setSkillState(updatedSkills);
    };
 
    return (
        <form>
            <input
                type="button"
                value="Add New Skill"
                onClick={addSkill}
            />
            {
                skillState.map((val, idx) => (
                    <SkillInputs
                        key={`skill-${idx}`}
                        idx={idx}
                        skillState={skillState}
                        OnChange={handleSkillsChange}
                    />
                ))
            }
        </form>
    );
};

export default Form;