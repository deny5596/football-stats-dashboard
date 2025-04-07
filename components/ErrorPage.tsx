export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md text-center">
        <div className="text-5xl mb-4 text-red-500">🚨</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Something went wrong in the application.
        </h1>
        <p className="text-gray-600 mb-6">
          We weren't able to load the data. Try again later or check you
          connection to the server.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
