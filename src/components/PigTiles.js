import React from "react";

function PigTiles({ pigs, onDisplayDetails }) {
    return (
        <div>
            {pigs.map(pig => (
                <div
                    key={pig.name}
                    className="pig-tile"
                    onClick={() => onDisplayDetails(pig.name)}
                >
                    <h1>{pig.name}</h1>
                    <img
                        className="pig"
                        src={pig.image}
                        alt={pig.name}
                    />
                </div>
            ))}
        </div>
    )
}

export default PigTiles;
