import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props) {

    const [displayMole, setDisplayMole] = useState(false);

    const handleClick = () => {
        props.setScore(props.score + 1);
        setDisplayMole(false);
    };

    useEffect(() => {
        const moleTimer = setInterval(() => {
            setDisplayMole(prevDisplayMole => !prevDisplayMole);
        }, Math.random() * 2000 + 1000);

        return () => clearInterval(moleTimer);
    }, []);

    const displayMoleComponent = displayMole ? (
        <Mole onBop={handleClick} />
    ) : (
        <EmptySlot />
    );

    return (
        <div className="mole-container">
            {displayMoleComponent}
        </div>
    );
}

export default MoleContainer;