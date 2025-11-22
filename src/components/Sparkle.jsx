import { useState } from "react";

function Sparkle() {
  const [sparkle, addSparkle] = useState(" ");
  return (
    <div>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 "
        onClick={() => addSparkle((prev) => prev + "\u2728")}
      >
        Add some sparkle
      </button>
      <p>{sparkle}</p>
    </div>
  );
}

export default Sparkle;
