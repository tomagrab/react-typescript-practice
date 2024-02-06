import { useState } from 'react';

export default function ArrayDeduplication() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleDeduplication = (str: string) => {
    setInput(str);

    if (str.length === 0) {
      setOutput('');
      return;
    }

    const result = Array.from(new Set(str.split(''))).join('');
    setOutput(result);
  };

  return (
    <main>
      <div className="flex h-full flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Array Deduplication
        </h1>
        <p className="text-gray-700">
          Given an array of strings, write a function that deduplicates the
          array and returns the result.
        </p>
        <div className="mt-8">
          <input
            type="text"
            value={input}
            onChange={e => handleDeduplication(e.target.value)}
            className="rounded-l px-4 py-2"
          />
          <div>
            <span className="text-gray-700">Deduplicated Array: </span>
            <span className="font-bold text-gray-800">{output}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
