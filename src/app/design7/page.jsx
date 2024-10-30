import Link from 'next/link';
import { FaBook, FaUserGraduate, FaClock, FaChartLine, FaClipboardCheck } from 'react-icons/fa';
import { MdMoodBad } from 'react-icons/md'; 

const items = [
    {
      title: "Negative Behavior",
      description: "Insights into negative behavior patterns.",
      link: "#", // Add your link here
      icon: <MdMoodBad className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Positive Behavior",
      description: "Understanding positive behavior for better outcomes.",
      link: "#",
      icon: <FaBook className="h-6 w-6 text-green-600" />,
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
    <div className="min-h-screen bg-gray-100 p-10 relative">
      <div className="absolute w-auto rounded-b-lg border-b uppercase -translate-y-px tracking-wide leading-none border-l border-r border-gray-200 dark:border-gray-800 shadow-sm top-0 left-1/2 -translate-x-1/2 px-3 pt-1 pb-2 bg-white dark:bg-black text-gray-400 text-[0.65rem]">
        📚 Explore Our Library Resources Below 👇
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Library Resources</h1>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col space-y-5">
          {items.map(({ title, description, link, icon }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center p-4 overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-white transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex-shrink-0">{icon}</span>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">{description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
