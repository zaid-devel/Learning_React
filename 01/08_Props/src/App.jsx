const App = () => {
  return <User img="https://media.istockphoto.com/id/1222254034/photo/a-concept-image-of-a-magnifying-glass-isolated-white-background-with-a-word-example-zoom.jpg?s=612x612&w=is&k=20&c=4cRJ1_07g4DQAYQ6CSzuQMdqQ_0Gf0trHUi5LSiuNdw=" name="Zaid" age={22} isLoggedIn={"True"} hobbies={["Coding ", "Reading ", "Sleeping "]}/>;
};

const User = (props) => {
  return <section>
    <img src={props.img} alt="props.name" width={200}/>
    <h1>Name: { props.name } </h1>
    <h1>age: { props.age } </h1>
    <h1>Is Logged in: { props.isLoggedIn } </h1>
    <h1>Hobbies: { props.hobbies } </h1>
  </section> 
};

export default App