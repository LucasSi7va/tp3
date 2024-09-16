
import React from 'react';

const Resumo = ({ dados }) => {
  if (!dados) {
    return <p>Preencha o formulário para ver o resumo.</p>;
  }

  return (
    <div>
      <h2>Resumo dos Dados</h2>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Email:</strong> {dados.email}</p>
    </div>
  );
};

export default Resumo;
