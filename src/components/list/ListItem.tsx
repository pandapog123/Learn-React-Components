import { useContext } from "react";
import { ListContext, RandomStringItem } from "./ListContext";

interface ListItemProps {
  item: RandomStringItem;
}

export default function ListItem({ item }: ListItemProps) {
  const list = useContext(ListContext);

  if (!list) {
    return;
  }

  return (
    <div>
      <span>The list value is: {item.value}</span>

      <button onClick={() => list.removeItem(item.id)}>Remove</button>
    </div>
  );
}
