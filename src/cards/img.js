import React from 'react';


const img = ({ imagem, descricao, link }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img src={imagem} alt={descricao}/>
    </a>
  );
};

export default img;