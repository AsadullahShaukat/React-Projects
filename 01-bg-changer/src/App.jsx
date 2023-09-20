import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center">
        <div className="bg-white px-3 py-2 rounded-full shadow-xl flex flex-wrap justify-center gap-3 text-white">
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "olive" }}
            onClick={() => {
              setColor("olive");
            }}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("grey");
            }}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "Gold" }}
            onClick={() => {
              setColor("gold");
            }}
          >
            Gold
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "dodgerBlue" }}
            onClick={() => {
              setColor("dodgerBlue");
            }}
          >
            Dodger Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full shadow-lg font-medium"
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
