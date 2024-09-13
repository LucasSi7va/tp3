import '../exercicio.css/exercicio10.css'

const tarefa = ({ nome, status }) => {
  return (
    <div className="tarefas">
      <span>{nome}</span>
      <span>status:</span>
      <span>{status}</span>
    </div>
  );
};

export default tarefa;
