import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data'

function App() {
  const cards = data.map(obj => {
    return(
      <Card 
        key={obj.title}
        {...obj}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='cards'>
        {cards}
      </section>
    </div>
  );
}

export default App;
