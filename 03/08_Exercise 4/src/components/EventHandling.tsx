

const EventHandling = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Mouse Entered!',e.currentTarget)
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked", e.currentTarget)
  }
  return (
  <div onMouseEnter={handleMouseEnter}>
    <button onClick={handleClick}>Click Me</button>
  </div>
  )
}

export default EventHandling


