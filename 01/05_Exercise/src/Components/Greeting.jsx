const Greeting = () => {

    const name = "Bunty";
    const currentDate = new Date();
  return (
    <div>
        <h1>{name}</h1>
        <p>Date is {currentDate.getDate()}</p>
    </div>
  )
}

export default Greeting