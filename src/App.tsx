import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Baguio", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="primary" onClick={() => console.log("clicked")}>
        Botones
      </Button>
    </div>
  );
}

export default App;

//when onSelectItem, first needs a function handleSelectItem

//exercise: add error boundary
