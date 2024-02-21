import "./App.css";
import Counter from "./componets/Counter";
import { useState } from "react";

function App() {
  const [subscribe, setSubscribe] = useState(true);
  const [subscribe2, setSubscribe2] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-400">
      <div className="flex gap-24  text-center pt-8 text-lg font-medium">
        <div className={"bg-white p-4 rounded shadow"}>
          <h2>Counter</h2>
          <Counter subscribe={subscribe} setSubscribe={setSubscribe} />
        </div>

        <div className={"bg-white p-4 rounded shadow"}>
          <h2>Counter</h2>
          <Counter subscribe={subscribe2} setSubscribe={setSubscribe2} />
        </div>
      </div>
    </div>
  );
}

export default App;
