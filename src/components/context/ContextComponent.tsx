import { useContext } from "react";
import { FakeStateContext } from "./FakeStateContext";

export default function ContextComponent() {
  const fakeState = useContext(FakeStateContext);

  if (!fakeState) {
    return;
  }

  return (
    <>
      <h1>Context Component</h1>

      <p>The input is: {fakeState.input}</p>

      <div style={{ display: "flex" }}>
        <button onClick={fakeState.decrementCount}>-</button>
        <p>{fakeState.count}</p>
        <button onClick={fakeState.incrementCount}>+</button>
      </div>
    </>
  );
}
