import ContactForm from "./components/ContactForm"
import Counter from "./components/Counter"
import FocusInput from "./components/FocusInput"

const App = () => {
  return (
    <div>
      <h1>Focus Input</h1>
      <FocusInput />
      <br />  
      <h1>Contact Form</h1>
      <ContactForm />
      <br />
      <h1>Event Handling</h1>
      <Counter/>
    </div>
  )
}

export default App