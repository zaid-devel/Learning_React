import Greeting from "./Components/Greeting";
import UserStatus from "./Components/UserStatus";
import Weather from "./Components/Weather";

const App = () => {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather Component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />
      <Weather />

      {/* UserStatus Component */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />

      {/* Greeting Component */}
      <Greeting timeOfDay="morning" />
      <Greeting />
    </div>
  );
};

export default App;
