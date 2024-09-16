import "../exercicio.css/exercicio15.css"

const Tabela = ({ dados }) => {
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
            <td>{item.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
