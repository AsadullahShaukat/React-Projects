import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("12345sfgsfkl");

  const passwordRef = useRef(null);

  function passwordGenerator() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "123456789";
    if (characterAllowed) str += "~`!@#$%^&*()_-+=[]{};/.,";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }
    setPassword(pass);
  }

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, characterAllowed, length]);

  return (
    <div className="w-full h-screen bg-black pt-6">
      <div className="max-w-2xl bg-gray-700 m-auto min-w-fit px-4 py-6 rounded-lg">
        <h1 className="text-white text-4xl text-center mb-3">
          Password Generator
        </h1>
        <div className="flex mb-3">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none p-3 rounded-s-lg flex-grow text-2xl font-medium text-orange-500"
            ref={passwordRef}
          />
          <button
            className="outline-none text-white font-medium bg-blue-600 py-3 px-6 rounded-e-lg text-lg active:bg-blue-800"
            onClick={() => {
              window.navigator.clipboard.writeText(password);
              passwordRef.current?.select();
            }}
          >
            copy
          </button>
        </div>
        <div className="flex gap-6">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-1/4"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <h3 className="text-orange-500 text-xl font-medium">
            Length: {length}
          </h3>

          <div className="flex items-center justify-center gap-3">
            <label
              htmlFor="number"
              className="text-orange-500 text-xl font-medium"
            >
              Numbers
            </label>
            <input
              type="checkbox"
              id="number"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <label
              htmlFor="character"
              className="text-orange-500 text-xl font-medium"
            >
              Characters
            </label>
            <input
              type="checkbox"
              id="character"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
