
import Cartao from '../cards/cartao'; 

export default function Exercicio7() {

    return (
        <div>
          <h1>Cartão Informativo</h1>
          <Cartao
            titulo="React"
            subtitulo="Componentes e Props"
            conteudo="Este é um exemplo básico de como criar componentes reutilizáveis no React utilizando propriedades."
          />
        </div>
      );
    }