import './App.css';
import { Routess, store } from '../config';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routess />
    </Provider>
  );
}

export default App;
