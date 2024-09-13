
import Imagem from '../cards/imagem';


const fotos = () => {

  const imagens = [
    {
      url: 'https://conteudize.ai/blog/wp-content/uploads/2024/06/como-criar-prompts-para-geracao-de-imagens-com-ia.webp',
      descricao: 'Imagem 1'
    },
    {
      url: 'https://static.vecteezy.com/ti/fotos-gratis/t2/17323707-close-up-de-um-reptil-em-um-galho-de-arvore-contra-um-impressionante-papel-de-parede-de-fundo-natural-hd-foto.jpg',
      descricao: 'Imagem 2'
    },
    {
      url: 'https://i.pinimg.com/236x/2c/80/fa/2c80fa1128ae7769a9362596346ba9d8.jpg',
      descricao: 'Imagem 3'
    },
    {
      url: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
      descricao: 'Imagem 4'
    }
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {imagens.map((img, index) => (
        <Imagem key={index} imagem={img.url} descricao={img.descricao} />
      ))}
    </div>
  );
};

export default fotos;
