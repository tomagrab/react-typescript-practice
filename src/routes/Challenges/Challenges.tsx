import { Link } from 'react-router-dom';

export default function Challenges() {
  return (
    <div className="flex h-full flex-col items-center justify-center  bg-gray-100">
      <Link
        to="/challenges/palindrome"
        className="text-4xl font-bold text-gray-800"
      >
        Palindrome
      </Link>
      <Link
        to="/challenges/arraydeduplication"
        className="text-4xl font-bold text-gray-800"
      >
        Array Deduplication
      </Link>
    </div>
  );
}
