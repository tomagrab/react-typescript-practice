import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to the TypeScript Challenges App!
        </h1>
        <p className="text-lg text-gray-700">
          This application provides a series of programming challenges to help
          you sharpen your TypeScript skills. From basic array manipulations to
          complex algorithms, you'll find a variety of problems to solve. Each
          challenge is designed to test different aspects of TypeScript
          programming, offering both beginners and experienced developers an
          opportunity to learn and grow.
        </p>
        <div className="mt-8">
          <Link
            to="/challenges"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
