import Link from 'next/link';

const items = [
  {
    title: "Negative Behavior",
    description: "Shows report for negative behavior.",
    imageUrl: "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
  },
  {
    title: "Positive Behavior",
    description: "Shows report for positive behavior.",
    imageUrl: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
  },
  {
    title: "Tardy Workflows",
    description: "Shows report for tardy students.",
    imageUrl: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
  },
  {
    title: "GPA Insights",
    description: "Shows report for GPA insights.",
    imageUrl: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
  },
  {
    title: "Attendance Insights",
    description: "Shows report for attendance insights.",
    imageUrl: "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
  }
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-blue-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Library</h1>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {items.map((item, index) => (
          <li key={index} className="relative flex flex-col border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer bg-white">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" // Image zoom on hover
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mb-4 text-gray-600">{item.description}</p>
              <Link href="#" className="flex items-center justify-center h-10 rounded-full text-sm font-semibold whitespace-nowrap px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg">
                <span className="mr-2">Discover More</span>
                <svg 
                  className="overflow-visible transition-transform duration-300 transform group-hover:scale-125" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M10 1L10 10M10 10L14 7M10 10L6 7"></path>
                </svg>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
