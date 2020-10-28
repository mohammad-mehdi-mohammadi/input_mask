import React, {useState} from 'react';
import cities from './cities.json'
import Input from "./Input";
function App() {
   const [hint, setHint] = useState('');
   const textFiltered = event => {
      setHint(event)
      if (event && event !== event.toLowerCase()) {
         let filterResult = cities.filter(
             city => city.startsWith(event)
         );
         setHint(filterResult[0])
      } else {
         setHint('')
      }
   };
   return <div><Input handleChange={event => textFiltered(event.target.value)} hint={hint}/></div>
}

export default App;
