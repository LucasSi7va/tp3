import React, { useState } from 'react';
import '../exercicio.css/exercicio4.css'

function Exercicio4() {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]);

  return (
    <div className="items">

        <h1>...clique no botao la em baixo para adicionar mais itens...</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setItems([...items, `Item ${items.length + 1}`])}>
        clique para adicionar o item
      </button>
    </div>
  );
}

export default Exercicio4;
