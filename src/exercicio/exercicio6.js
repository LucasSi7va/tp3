import '../exercicio.css/exercicio5.css';

const Perfil = ({ nome, email, endereco }) => {
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <p> email: {email}</p>
        <p>endereco: {endereco}</p>
      </div>
    );
  };


export default function Exercicio6() {

    const usuario = {
        nome: 'Lucas Silva',
        email: 'lucas@gmail.com',
        endereco: 'Estados Unidos'
      };



    return (
        <div>
        <h1>Usuario</h1>
        <Perfil nome={usuario.nome} email={usuario.email} endereco={usuario.endereco} />
      </div>
    )
}