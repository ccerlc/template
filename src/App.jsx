import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';

const a = 1;

function App() {
  return (
    <>
      <DatePicker />
      <Link to="/about">About</Link>
    </>
  );
}

export default App;
