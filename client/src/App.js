import './App.css';
import { useUpdatePostQuery } from './services/postApi.js'

function App() {
const body = {
  id : '61b99d049f762bea65140f23',
  title: "testinsg",
  message: "ankush",
  creator: "creatossr",
  tags: "tags",
  selectFile: "selectFile"
}

  console.log(useUpdatePostQuery(body))
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
