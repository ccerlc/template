import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <DatePicker />
      <Link to="/about">About</Link>
    </>
  );
}

export default App;
