import logo from './logo.svg';
import './App.css';

const jsonData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Bob Johnson', age: 35 }
];

function App() {
  const header = Object.keys(jsonData[0]);
  const rows = jsonData.map((ite) => Object.values(ite));
  console.log(header);
  console.log(rows);
  return (
    <table>
      <thead>
        <tr>{header.map((h) => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row) =>
          <tr>
            {row.map((item) => <td>{item}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default App;
