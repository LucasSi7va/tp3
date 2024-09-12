import React, { useState } from 'react';
import '../exercicio.css/exercicio2.css';

export default function Exercicio2() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const buttonClass = isClicked ? 'button-green' : 'button-blue';
    
    return (
        <div className='container'>
            <h1> Clique no botão e verá a mágica sendo feita!</h1>
            <button className={buttonClass} onClick={handleClick}>
                {isClicked ? 'clicado' : 'clicar'}
            </button>
        </div>
    );
}
