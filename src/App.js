import Footer from './components/Footer';
import Header from './components/Header';
import Chart from './components/Chart';
import Container from './components/Container';

function App() {
  return (
    <div className='App'>
      <Header />

      <Container>
        <Chart />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
