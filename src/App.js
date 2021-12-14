import React, { useState } from "react";
import "./styles.css";
import Button from "./components/CustomButton";
import List from "./components/List";

/**
P1
- Clicking Buy should create a new row for Bids (buys).
- Clicking Sell should create a new row for Asks (sells).
- For the size, generate a random number between 0 to 1. For Price, generate a random number around 37000.
- Example order generator object:
{
id: Math.random(),
size: Math.random(),
price: 37000 + Math.random() * 2000
}
**/

const initialState = {
  selling: [],
  buying: []
};

export default function App() {
  const [state, setState] = useState(initialState);

  const buyHandler = () => {
    setState((prevState) => ({
      ...prevState,
      buying: [
        ...prevState.buying,
        {
          id: Math.random(),
          size: Math.random().toFixed(4),
          price: (37000 + Math.random() * 2000).toFixed(2)
        }
      ]
    }));
  };

  const sellHandler = () => {
    setState((prevState) => ({
      ...prevState,
      selling: [
        ...prevState.selling,
        {
          id: Math.random(),
          size: Math.random().toFixed(4),
          price: (37000 + Math.random() * 2000).toFixed(2)
        }
      ]
    }));
  };

  console.log(state);

  return (
    <div className="App">
      <Button label="Buy" onClick={buyHandler} color="green" />
      <Button label="Sell" onClick={sellHandler} color="red" />

      <div style={{ marginTop: "100px", marginBottom: "10px" }}>
        {state.buying &&
          state.buying.map((li) => {
            return (
              <List id={li.id} price={li.price} size={li.size} color="green" />
            );
          })}
      </div>
      {(state.buying.length > 0 || state.selling.length > 0) && (
        <div style={{ border: "1px solid #919294" }}></div>
      )}
      <div style={{ marginTop: "10px" }}>
        {state.selling &&
          state.selling.map((li) => {
            return (
              <List id={li.id} price={li.price} size={li.size} color="red" />
            );
          })}
      </div>
    </div>
  );
}
