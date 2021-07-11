import Navigation from '../Components/Navigation/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import '../Styles/main.scss';
library.add(faPizzaSlice);

function App() {
  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}

export default App;
