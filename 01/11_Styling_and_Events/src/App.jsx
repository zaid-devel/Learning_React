// import { FaCartArrowDown } from "react-icons/fa";
// import './index.css';

// const App = () => {
//   const styles = { color: 'white', backgroundColor: 'purple', padding: '2rem' }
//   return (
//     <section>
//       {/* <h1 style={{ color: 'white', backgroundColor: 'teal', padding: '2rem' }}>Inline Style</h1>
//       <h1 style={styles}>Inline Style</h1> */}
//       <FaCartArrowDown />
//     </section>
//   )
// }

// export default App
import IconComponent from "./Components/IconComponent"
import ProfileCard from "./Components/ProfileCard"
import StyleCard from "./Components/StyleCard"

const copyHandler = () => {
  console.log("Stop stealing my content!!!")
}

const Button = () => {
  return <button style={{padding: '20px', backgroundColor: 'aqua', fontSize: '20px'}} onClick={() => console.log('You Clicked Me!')}>Click Me</button>
}
const handleClick = () => console.log(Math.round(Math.random()*10))

const Button2 = () => {
  return <button style={{padding: '20px', backgroundColor: 'pink', fontSize: '20px'}} onClick={handleClick}>Get Random Number</button>
}

const moveHandler = () => {
  alert('Mouse move event fired')
  console.log('Mouse move event fired')
}

const App = () => {
  return (
    <div>
      <StyleCard />
      <br />
      <ProfileCard />
      <br />
      <IconComponent />
      <br />
      <Button/>
      <br />
      <br />
      <Button2 />
      <p onCopy={copyHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quibusdam voluptatum nisi veniam iste delectus, architecto eligendi expedita. Et dignissimos ipsum officiis culpa enim, autem ducimus deleniti magnam voluptate sed.</p>

      <p onMouseMove={moveHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio at error excepturi. Quas, reiciendis tempore.</p>
    </div>
  )
}

export default App