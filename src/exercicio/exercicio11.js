
import React, { useState } from 'react';
import Formulario from '../cards/formulario'; 
import Resumo from '../cards/Resumo'; 

const Exercicio11 = () => {
  const [dados, setDados] = useState(null);

  const enviarFormulario = (formData) =>{
    setDados(formData); 
  };

  return (
    <div>
      <h1>Aplicação de Formulário</h1>
      <Formulario enviarFormulario={enviarFormulario} /> 
      <Resumo dados={dados} />
    </div>
  );
};

export default Exercicio11;
