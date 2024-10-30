

const items = [
  "Negative Behavior",
  "Positive Behavior",
  "Tardy Workflows",
  "GPA Insights",
  "Attendance Insights"
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((title, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{title}</h3>
            <p className="text-gray-700 text-center mt-2">
              Description for <span className="font-bold">{title}</span>.
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-4 absolute bottom-0 left-0 right-0">

</div>
</div>

  );
}
