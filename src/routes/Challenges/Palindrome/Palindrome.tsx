import { useState } from 'react';

export default function Palindrome() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const isPalindrome = (str: string): boolean => {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  };

  const handleCheck = (str: string) => {
    setInput(str);

    if (str.length === 0) {
      setOutput('');
      return;
    }

    const result = isPalindrome(str);
    setOutput(result ? 'Yes' : 'No');
  };

  return (
    <main>
      <div className="flex h-full flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Palindrome</h1>
        <p className="text-gray-700">
          A palindrome is a word, phrase, number, or other sequence of
          characters that reads the same forward and backward. For example,
          "madam" or "nurses run".
        </p>
        <div className="mt-8">
          <input
            type="text"
            value={input}
            onChange={e => handleCheck(e.target.value)}
            className="rounded-l px-4 py-2"
          />
          <div>
            <span className="text-gray-700">Is Palindrome: </span>
            <span className="font-bold text-gray-800">{output}</span>
          </div>
        </div>
        <div>
          <h4>The code:</h4>
          <pre className="rounded bg-slate-500 p-4 text-white">{`
const isPalindrome = (str: string): boolean => {
  const cleanStr = str.replace(/[\\W_]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
};
          `}</pre>
        </div>
      </div>
    </main>
  );
}
