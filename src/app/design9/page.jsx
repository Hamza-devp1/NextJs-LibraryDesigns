import Link from 'next/link';
import { FaClock, FaChartLine, FaClipboardCheck, FaSmile } from 'react-icons/fa';
import { MdMoodBad } from 'react-icons/md'; 

const items = [
  {
    title: "Negative Behavior",
    description: "Insights into negative behavior patterns.",
    link: "#", 
    icon: <MdMoodBad className="h-10 w-10 text-red-600" />,
  },
  {
    title: "Positive Behavior",
    description: "Understanding positive behavior for better outcomes.",
    link: "#",
    icon: <FaSmile className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Tardy Workflows",
    description: "Analyzing tardy workflows and their impact.",
    link: "#",
    icon: <FaClock className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "GPA Insights",
    description: "Exploring GPA insights for academic success.",
    link: "#",
    icon: <FaChartLine className="h-10 w-10 text-yellow-600" />,
  },
  {
    title: "Attendance Insights",
    description: "Insights into attendance patterns and trends.",
    link: "#",
    icon: <FaClipboardCheck className="h-10 w-10 text-purple-600" />,
  },
];

export default function Library() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-green-50 to-blue-100 py-6 sm:py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className="group relative cursor-pointer overflow-hidden bg-white p-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg h-48" // Set a fixed height for the card
            >
              <div className="flex items-center mb-4 h-full"> {/* Ensure flex items fill the card height */}
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-200 transition-all duration-300 group-hover:bg-sky-300 p-3">
                  {item.icon} {/* Displaying the appropriate icon for each item */}
                </div>
                <div className="ml-4 flex-grow"> {/* Allow this to grow and take available space */}
                  <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2 overflow-hidden"> {/* Adjust line-clamp to control height */}
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
