import { useContext } from "react";
import { ListContext } from "./ListContext";
import ListItem from "./ListItem";

export default function ListComponent() {
  const list = useContext(ListContext);

  if (!list) {
    return;
  }

  return (
    <>
      <div>
        <p>Add a new list item!</p>

        <button onClick={list.addItem}>Add</button>
      </div>

      <div>
        {list.list.map((item) => {
          return (
            <div key={item.id}>
              <ListItem item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
