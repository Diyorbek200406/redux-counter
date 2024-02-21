import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/actions";

const Counter = ({ subscribe, setSubscribe }) => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(increment());

  const decrementHandler = () => dispatch(decrement());

  const resetHandler = () => dispatch(reset());

  return (
    <div className="p-4 h-72 w-96 flex flex-col items-center justify-center space-y-5 ">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button className="bg-red-400 text-white px-8 py-4 rounded shadow" onClick={() => subscribe && decrementHandler()}>
          -
        </button>

        <button className="bg-gray-600 text-white px-3 py-2 rounded shadow" onClick={() => subscribe && resetHandler()}>
          Reset
        </button>

        <button className="bg-blue-700 text-white px-8 py-4 rounded shadow" onClick={() => subscribe && incrementHandler()}>
          +
        </button>
      </div>

      <button className={`${subscribe ? "bg-red-400" : "bg-green-700"} w-full text-white px-3 py-2 rounded shadow`} onClick={() => setSubscribe(!subscribe)}>
        {subscribe ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
};

export default Counter;
