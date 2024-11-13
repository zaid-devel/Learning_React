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

const App = () => {
  return (
    <div>
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </div>  
  )
}

export default App