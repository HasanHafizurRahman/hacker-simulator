import React, { useState } from "react";
import { useHacking } from "usehacking";
import HackerTerminal from "./components/HackerTerminal";
import TargetSelector from "./components/TargetSelector";

const App = () => {
  const [target, setTarget] = useState("NASA");
  const [skills, setSkills] = useState(["HTML"]);
  const { logs, status, startHacking, reset } = useHacking(target, skills);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
          alt="NASA Logo"
          className="w-16 h-16"
        />
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Hacking NASA with HTML
        </h1>
      </div>
      <p className="text-sm sm:text-base text-gray-500 mb-4 italic">
        Powered by the{" "}
        <a
          href="https://www.npmjs.com/package/usehacking"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-blue-400 hover:text-blue-500"
        >
          usehacking
        </a>{" "}
        package
      </p>
      <TargetSelector
        target={target}
        setTarget={setTarget}
        skills={skills}
        setSkills={setSkills}
      />
      <div className="flex space-x-4 mt-4">
        <button
          onClick={startHacking}
          disabled={status === "hacking"}
          className={`px-6 py-2 text-lg font-semibold border rounded ${
            status === "hacking"
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-900 hover:bg-green-700"
          }`}
        >
          Start Hacking
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 text-lg font-semibold border rounded bg-gray-900 hover:bg-red-700"
        >
          Reset
        </button>
      </div>
      <HackerTerminal logs={logs} status={status} />
    </div>
  );
};

export default App;
