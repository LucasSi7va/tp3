
const Imagem = ({ imagem, descricao }) => {
  return (
    <div>
      <img src={imagem} alt={descricao} style={{ width: '200px', height: 'auto', margin: '10px' }} />
      <p>{descricao}</p>
    </div>
  );
};

export default Imagem;
