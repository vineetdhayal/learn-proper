import React, { useState } from 'react'
import './styles.css';

const UndoableCounter = () => {
    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]);
    const [undoHistory, setUndoHistory] = useState([]);

    const OPERATION_LABELS = {
      "/2": {type: 'divide', number: 2},
      "-1": {type: 'decrement', number: 1},
      "+2": {type: 'increment', number: 2},
      "*2": {type: 'multiply', number: 2},
    };

    const performOperation = (counter, operationLabel) => {
        const operation = OPERATION_LABELS[operationLabel];
        switch(operation.type) {
          case 'increment':
            return counter + operation.number;
        }
    }

    const onClickOperation = (operation) => {
      const oldCounter = counter;
      const newCOunter = performOperation(counter, operation);
      setCounter(newCOunter);
      setHistory([{operation, oldCounter, newCOunter}, ...history]);
    }

  return (
    <div className='App'>
      <div className='row'>
        <button disabled={history.length === 0}>Undo</button>
        <button disabled={undoHistory.length === 0}>Redo</button>
        <button>Reset</button>
      </div>
      <div className='row'>
        <button onClick={() => onClickOperation("/2")}>/2</button>
        <button onClick={() => onClickOperation("-1")}>-1</button>
        <button>{counter}</button>
        <button onClick={() => onClickOperation("+1")}>+1</button>
        <button onClick={() => onClickOperation("+2")}>+2</button>
      </div>
    </div>
  )
}

export default UndoableCounter
