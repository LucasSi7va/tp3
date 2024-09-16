import React, { useState } from 'react';



const Produto = ({ produto }) => {
  return (
    <div>
      <h2>{produto.nome}</h2>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
      <p><strong>Disponível:</strong> {produto.disponivel ? 'Sim' : 'Não'}</p>
    </div>
  );
};


const ListaProdutos = ({ produtos }) => {
  const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);

 
  const disponiveis = () => {
    setMostrarDisponiveis(!mostrarDisponiveis);
  };

  
  const produtosFiltrados = mostrarDisponiveis
    ? produtos.filter(produto => produto.disponivel)
    : produtos;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mostrarDisponiveis}
          onChange={disponiveis}
        />
       <p> Mostrar apenas produtos disponíveis </p>
      </label>

      {produtosFiltrados.length > 0 ? (
        produtosFiltrados.map((produto, index) => (
          <Produto key={index} produto={produto} />
        ))
      ) : (
        <p>Nenhum produto disponível</p>
      )}
    </div>
  );
};

export default ListaProdutos;
