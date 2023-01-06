import './App.css';
import Artigo from './components/artigos/artigo';

function App() {
  return (
    <body className='container'>
      <Artigo>
        <h2 className='title'>Héracles</h2>
        <p className='text'>Na Grécia Antiga o grande herói nacional foi Héracles, ou Hércules, como se chamou depois. Era o maior de todos — e ser o maior de todos na Grécia daquele tempo equivale a ser o maior do mundo. Por isso até hoje vive Hércules em nossa imaginação. A cada momento, na conversa comum a ele nos referimos, à sua imensa força ou às suas façanhas lendárias. Dele nasceu uma palavra muito popular em todas as línguas, o adjetivo "hercúleo", com a significação de extraordinariamente forte.</p>
      </Artigo>
    </body>
  );
}

export default App;
