import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
const singer2 = { name: 'Eva Rahman', job: 'Singer2' };

const styleSinger = {
  color: 'red',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Joshim'];
  return (
    <div className="App">
      <Person name={nayoks[0]} nayika='Mowshumi'></Person>
      <Person name={nayoks[1]} nayika='Cheka'></Person>
      <Person name={nayoks[2]} nayika='Kopila'></Person>
      <h4>New Component. YAY!</h4>
      <p>Rock mama React mama</p>
      <Friend movie='Singam' phone='01333'></Friend>
      <Friend phone='01999'></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className='container'>
      <h1>Name: {props.movie}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
