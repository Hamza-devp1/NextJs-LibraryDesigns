import Link from 'next/link';
import { FaClock, FaChartLine, FaClipboardCheck, FaSmile } from 'react-icons/fa';
import { MdMoodBad } from 'react-icons/md'; 

const items = [
  {
    title: "Negative Behavior",
    description: "Insights into negative behavior patterns.",
    link: "#", 
    icon: <MdMoodBad className="h-6 w-6 text-red-600" />,
  },
  {
    title: "Positive Behavior",
    description: "Understanding positive behavior for better outcome.",
    link: "#",
    icon: <FaSmile className="h-6 w-6 text-green-600" />, 
  },
  {
    title: "Tardy Workflows",
    description: "Analyzing tardy workflows and their impact.",
    link: "#",
    icon: <FaClock className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "GPA Insights",
    description: "Exploring GPA insights for academic success.",
    link: "#",
    icon: <FaChartLine className="h-6 w-6 text-yellow-600" />,
  },
  {
    title: "Attendance Insights",
    description: "Insights into attendance patterns and trends.",
    link: "#",
    icon: <FaClipboardCheck className="h-6 w-6 text-purple-600" />,
  },
  
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10 pt-28">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-3 drop-shadow-md">Library</h1>
        <p className="text-lg text-gray-600 font-light">Explore our insights to understand the school's performance better.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl cursor-pointer">
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className="relative h-40 rounded-lg border border-gray-300 p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-200 to-blue-50"
            >
              <div className="flex items-center mb-4">
                <span className="inline-block mr-3">
                  <div className="flex items-center justify-center select-none">
                    {item.icon}
                  </div>
                </span>
                <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
              </div>
              <p className="mt-1 text-sm text-gray-600 line-clamp-3 overflow-hidden">
                {item.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent opacity-20 rounded-lg"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
