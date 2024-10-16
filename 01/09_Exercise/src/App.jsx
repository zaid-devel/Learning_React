import Card from "./Components/Card"
import Person from "./Components/Person"
import Product from "./Components/Product"



const App = () => {
  return (
    <div>
      <Person name="Ninja" age={23} />
      <Product name="Sword" price={"$"+500} />
      <br />
    <Card>
      <h1>My Card 1</h1>
      <p>This is some content for card 1</p>
    </Card>
    <br />
    <Card>
      <h1>My Card 2</h1>
      <p>This is some content for card 2</p>
    </Card>
    <br />
    <Card>
      <h1>My Card 3</h1>
      <p>This is some content for card 3</p>
    </Card>
    <br />
    </div>
// props.children grabs whatever you put between <Card>...</Card>.
  )
}

export default App