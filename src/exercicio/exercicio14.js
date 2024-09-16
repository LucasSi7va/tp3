import ListaProdutos from '../produtos/produto3';

export default function Exercicio14(){

    const produtos = [
        { nome: 'Produto 1', preco: 29.99, disponivel: true },
        { nome: 'Produto 2', preco: 49.99, disponivel: false },
        { nome: 'Produto 3', preco: 19.99, disponivel: true },
    ];


    return (
        <header>

        <h1>Lista de Produtos</h1>
          <ListaProdutos produtos={produtos} />
      
        </header>    
    );

}