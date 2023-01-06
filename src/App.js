import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'Shopno' },
  { name: 'Shuvro', job: 'Pathor' },
];

const styleSinger = {
  color: 'red',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika='Mowshumi'></Person>
      <Person name={nayoks[1]} nayika='Cheka'></Person>
      <Person name={nayoks[2]} nayika='Kopila'></Person> */}
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
      <p>{props.nayika}</p>
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
