
const items = [
  "Negative Behavior",
  "Positive Behavior",
  "Tardy Workflows",
  "GPA Insights",
  "Attendance Insights"
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((title, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl border-l-4 border-indigo-500"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">{title}</h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              Description for <span className="font-semibold">{title}</span>.
            </p>
            <button className="mt-2 px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full hover:from-yellow-500 hover:to-orange-600 transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>

  
    </div>
  );
}
