import '../exercicio.css/exercicio5.css';

const Produto = ({ nome, preco, descricao }) => {
    return (
      <div>
        <h2>{nome}</h2>
        <p>Preço: R${preco}</p>
        <p>Descrição: {descricao}</p>
      </div>
    );
  };


export default function Exercicio5() {

    const produto = {
        nome: 'Notebook Gamer',
        preco: 11000.90,
        descricao: 'Um notebook potente para jogos e trabalhos pesados.'
      };



    return (
        <div>
        <h1>Detalhes do Produto</h1>
     
        <Produto nome={produto.nome} preco={produto.preco} descricao={produto.descricao} />
      </div>
    )
}