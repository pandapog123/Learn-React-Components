import { FormEvent, useState } from "react";
import BasicComponent from "./components/basic/BasicComponent";
import PropsComponent from "./components/props/PropsComponent";
import { FakeStateContext } from "./components/context/FakeStateContext";
import ContextComponent from "./components/context/ContextComponent";
import { ListContext, RandomStringItem } from "./components/list/ListContext";
import ListComponent from "./components/list/ListComponent";
// ListComponent
import { randomString } from "./utils/randomString";
// StyleComponent
import "./styles/main.css";
import StyleComponent from "./components/style/StyleComponent";

function App() {
  const [input, setInput] = useState("test");

  function handleInput(event: FormEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }

  // ContextComponent

  // const [count, setCount] = useState(0);

  // function incrementCount() {
  //   setCount((previousCount) => previousCount + 1);
  // }

  // function decrementCount() {
  //   setCount((previousCount) => previousCount - 1);
  // }

  // ListItem
  // const [stringList, setStringList] = useState<RandomStringItem[]>([]);

  // function addItem() {
  //   setStringList((previousList) => {
  //     return [
  //       ...previousList,
  //       {
  //         id: Math.random().toString(),
  //         value: randomString(),
  //       },
  //     ];
  //   });
  // }

  // function removeItem(id: string) {
  //   setStringList((previousList) =>
  //     previousList.filter((item) => item.id !== id)
  //   );
  // }

  return (
    <>
      {/* <BasicComponent /> */}

      {/* <PropsComponent input={input} />

      <input type="text" onInput={handleInput} /> */}

      {/* <FakeStateContext.Provider
        value={{ input, count, incrementCount, decrementCount }}
      >
        <ContextComponent />
      </FakeStateContext.Provider>

      <input type="text" onInput={handleInput} /> */}

      {/* <ListContext.Provider value={{ list: stringList, addItem, removeItem }}>
        <ListComponent />
      </ListContext.Provider> */}

      <StyleComponent />

      <div className="conflicting-style">Conflicting with child</div>
    </>
  );
}

export default App;
