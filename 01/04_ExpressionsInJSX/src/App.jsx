const App = () => {
  const myName = "Mohammad Zaid Siddiqui";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friends List: {['Mickey', 'Carry', 'Donald', 'Sparrow']}</p>
      <p>2 * 2 = {multiply(2,2)}</p>
      <p className={specialClass}>This is Special Class</p>
      <p className="abc">abc</p>
    </section>
  )
}

export default App