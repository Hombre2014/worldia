import React, { useState } from 'react';

function ResultDisplayer({ getNewResult }) {
  const [result, setResult] = useState(null);

  function handleClick() {
    const newResult = getNewResult();
    setResult(newResult);
  }

  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {result != null && <span id="result">{result}</span>}
    </div>
  );
}

export function Preview() {
  return <ResultDisplayer getNewResult={() => 'testABC'} />;
}

export default ResultDisplayer;
