import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
        <p>{props.hasOptions ? `You have ${props.options.length} options:` : 'There are no available options'}</p>
        <button 
            onClick={props.handleDeleteOptions}
            disabled={!props.hasOptions}
        >
            Remove All
        </button>
            <ul>
                {
                    props.options.map((option) => (
                        <Option 
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )) 
                } 
            </ul>
        </div>
    );   
}

export default Options