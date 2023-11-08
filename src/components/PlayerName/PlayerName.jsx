import React from 'react';

const PlayerName = ({ p }) => {
    return (
        <div>
            <h4 style={{ margin: '10px 0px' }}>{p.name}</h4>
        </div>
    );
};

export default PlayerName;