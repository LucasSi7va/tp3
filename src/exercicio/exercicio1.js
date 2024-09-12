import '../exercicio.css/exercicio1.css';
import Card from '../cards/card';

export default function Exercicio1() {
    return (
        <div className="App">
        <h1>Cards</h1>
        <div className="card-container">
          <Card name="Lucas Silva" description="Fullstack de Java" /> 
        </div>
      </div>
  );
}
