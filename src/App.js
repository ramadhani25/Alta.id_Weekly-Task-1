// Components
import Tasks from "./components/Tasks";
import { dataTasks } from "./dataTasks";
import { useState } from "react";

function App() {
  const [data] = useState(dataTasks);

  return (
    <div className="App bg-light">
      <h1 className="text-center py-5">My Tasks</h1>
      <Tasks data={data} />
    </div>
  );
}

export default App;
