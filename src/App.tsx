import './App.css';
import Counter from './Counter';
import TextField from './TextField';

function App() {
  const fnToPass = (name: string) => name;

  const counterEvent = (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <TextField
        text="damon"
        func={(name) => fnToPass(name)}
        obj={{ attr: 'hi' }}
        handleChange={event => { console.log(event.target.value) }}
      />
      {/* using ctrl + space to see which attribute needs to be passed in */}
      <Counter>
        {({count, setCount}) => (
          <div>
            <p>{count}</p>
            <button onClick={() => counterEvent(count, setCount)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
