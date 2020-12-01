import React from 'react';
import PropTypes from 'prop-types';

const SkillInputs = ({ idx, handleSkillChange }) => {
    const skillId = `name-${idx}`;
    console.log(handleSkillChange)
    return (
        <div key={`skill-${idx}`}>
            <input
                type="text"
                name={skillId}
                data-idx={idx}
                id={skillId}
                className="name"
                onChange={handleSkillChange}
            />
        </div>
    );
};

SkillInputs.propTypes = {
    idx: PropTypes.number,
    catState: PropTypes.array,
    handleCatChange: PropTypes.func,
};

export default SkillInputs;
