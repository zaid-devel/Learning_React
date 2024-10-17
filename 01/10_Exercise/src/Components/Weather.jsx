const Weather = (props) => {
  if (props.temperature < 15) {
    return <h1>Its cold outside!</h1>;
  }
  else if (props.temperature >= 15 && props.temperature <= 25) {
    return <h1>Its nice outside!</h1>;
  }
  else if (props.temperature > 25) {
    return <h1>Its hot outside!</h1>;
  }
};

export default Weather;
