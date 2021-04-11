/* eslint-disable require-jsdoc, react/react-in-jsx-scope */

import './app.css';
import Menu from './components/menu/menu';
function App() {
  localStorage.clear();
  return (
    <Menu />
  );
}

export default App;
