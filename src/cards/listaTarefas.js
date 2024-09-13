
import Tarefa from '../cards/tarefa'; 


const listaDeTarefas = () => {
  
  const tarefas = [
    { nome: 'Estudar React', status: 'Completa' },
    { nome: 'Fazer compras', status: 'Pendente' },
    { nome: 'Limpar a casa', status: 'Completa' },
    { nome: 'Resolver exercícios', status: 'Pendente' }
  ];

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} nome={tarefa.nome} status={tarefa.status} />
      ))}
    </div>
  );
};

export default listaDeTarefas;
