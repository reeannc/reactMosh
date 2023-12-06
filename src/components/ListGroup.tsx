import { useState } from "react";

//props = inputs
// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook, used to update states
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //selectedIndex, setSelectedIndex = variable, updating function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

//function to add details = do not implement that logic inside this component
//= wont be reusable component

//props are Immutable vs state wc is immutable
//anytime props or state are re-rendered/changed = updates DOM

//add other details when selected
