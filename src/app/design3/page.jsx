import Link from 'next/link';

const items = [
  "Negative Behavior",
  "Positive Behavior",
  "Tardy Workflows",
  "GPA Insights",
  "Attendance Insights"
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-gray-800 mb-12 text-center">Our Insights</h1>
      
      <div className="flex flex-wrap justify-center gap-10">
        {items.map((title, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col"
          >
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{title}</h3>
              <p className="text-gray-600 mb-6">
                Dive into the details of <span className="font-semibold">{title}</span> to gain a deeper understanding.
              </p>
            </div>
            <Link href={`/details/${index}`}>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-b-3xl transition duration-300 hover:bg-blue-600">
                Explore
              </button>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
