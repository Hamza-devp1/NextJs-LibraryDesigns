import Link from 'next/link';
import { MdMoodBad } from 'react-icons/md';
import { FaBook, FaClock, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

const items = [
  {
    title: "Negative Behavior",
    description: "Insights into negative behavior patterns.",
    link: "#",
    icon: <MdMoodBad className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Positive Behavior",
    description: "Understanding positive behavior for better outcomes.",
    link: "#",
    icon: <FaBook className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Tardy Workflows",
    description: "Analyzing tardy workflows and their impact.",
    link: "#",
    icon: <FaClock className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "GPA Insights",
    description: "Exploring GPA insights for academic success.",
    link: "#",
    icon: <FaChartLine className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Attendance Insights",
    description: "Insights into attendance patterns and trends.",
    link: "#",
    icon: <FaClipboardCheck className="h-8 w-8 text-purple-500" />,
  },
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black mb-10 text-center leading-tight">
        Library
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:bg-blue-100 hover:shadow-2xl hover:scale-105"
            style={{ height: '200px' }} 
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-2">
              {item.icon}
            </div>
            <h5 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h5>
            <p className="text-base text-gray-600 text-center flex-grow">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
