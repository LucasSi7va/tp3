import '../exercicio.css/exercicio13.css'

const Produto = ({ produto }) => {
  return (
    <div  className={`produto ${produto.disponivel ? 'disponivel' : 'indisponivel'}`}>
      <h2>{produto.nome}</h2>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
      <p><strong>Disponível:</strong> {produto.disponivel ? 'Sim' : 'Não'}</p>
    </div>
  );
};

const ListaProdutos = ({ produtos }) => {
  return (
    <div>
      {produtos.map((produto, index) => (
        <Produto key={index} produto={produto} />
      ))}
    </div>
  );
};

export default ListaProdutos;
