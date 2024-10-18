import { FaCartArrowDown } from "react-icons/fa";
import './index.css';

const App = () => {
  const styles = { color: 'white', backgroundColor: 'purple', padding: '2rem' }
  return (
    <section>
      {/* <h1 style={{ color: 'white', backgroundColor: 'teal', padding: '2rem' }}>Inline Style</h1>
      <h1 style={styles}>Inline Style</h1> */}
      <FaCartArrowDown />
    </section>
  )
}

export default App