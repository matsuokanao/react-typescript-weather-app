//Form.tsx

import {useState} from'react';

const Form = () =>{
  const[city,setCity] = useState<string>("");
  const getWeather = () =>{
    fetch("https://api.weatherapi.com/v1/current.json?key=606040710a0b40b2ae334926230502&q=London&aqi=no").then(res => console.log(res))
  }
  return(
<form>
  <input type="text" name="city" placeholder="都市名"onChange={e => setCity(e.target.value)}/>
  <button type="submit" onClick={getWeather}>Get Weather</button>
</form>
  );
}

export default Form;