import React, { useState } from 'react';

function SearchBar(props) {

    const [term, useTerm] = useState('')

    const onFormSubmit = event => {
        event.preventDefault();
        props.onSubmit(term);
    };

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Repo search: </label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => useTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;