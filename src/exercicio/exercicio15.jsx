import Tabela from "../cards/tabela"
export default function Exercicio15(){
   
    const dados = [
        { nome: 'Lucas', idade: 28, cidade: 'São Paulo' },
        { nome: 'Bruno', idade: 22, cidade: 'Rio de Janeiro' },
        { nome: 'Guilherme', idade: 35, cidade: 'Amapa' },
        { nome: 'Joao', idade: 30, cidade: 'Rio Grande Do Sul' }
      ];
    
      return (
        <div>
          <h1>Tabela de Usuários</h1>
          <Tabela dados={dados} />
        </div>
      );
};