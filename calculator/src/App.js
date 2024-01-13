import { useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const calculateTotal = () => {
    const totalService = (service + friendService) / 2;
    const tipAmount = parseFloat(bill) * (totalService / 100);
    return parseFloat(bill) + tipAmount;
  };

  const reset = () => {
    setBill(0);
    setService(0);
    setFriendService(0);
  };

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Service setService={setService} />
      <FriendService setFriendService={setFriendService} />
      <Rest total={calculateTotal()} reset={reset} />
    </div>
  );
}

function Bill({ bill, setBill }) {
  const handleChange = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className="div">
      <p>How much was the bill?</p>
      <input type="number" value={bill} onChange={handleChange} />
    </div>
  );
}

function Service({ setService }) {
  const handleServiceChange = (e) => {
    setService(parseInt(e.target.value, 10));
  };

  return (
    <div className="div">
      <p>How did you like the service?</p>
      <select onChange={handleServiceChange} defaultValue="0">
        {" "}
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function FriendService({ setFriendService }) {
  const handleFriendServiceChange = (e) => {
    setFriendService(parseInt(e.target.value, 10));
  };

  return (
    <div className="div">
      <p>How did your friend like the service?</p>
      <select onChange={handleFriendServiceChange} defaultValue="0">
        {" "}
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Rest({ total, reset }) {
  return (
    <div className="rest">
      <h2>You pay ${total ? total.toFixed(2) : 0}</h2>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
