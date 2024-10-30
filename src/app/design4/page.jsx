import Link from 'next/link';

const items = [
  {
    title: "Negative Behavior",
    description: "Generate emails on negative behavior patterns and their impact.",
    imageUrl: "https://images.unsplash.com/photo-1603539240352-8f2cce3257c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1haWwlMjBmb3IlMjB0YXJkeSUyMHN0dWRlbnRzfGVufDB8fDB8fHww"
  },
  {
    title: "Positive Behavior",
    description: "Learn about positive behavior reinforcement strategies.",
    imageUrl: "https://images.unsplash.com/photo-1609348955382-71d6d3036160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvc2l0aXZlJTIwYmVoYXZpb3IlMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Tardy Workflows",
    description: "Shows report & insights for tardy students.",
    imageUrl: "https://media.istockphoto.com/id/2008067253/photo/portrait-of-smiling-schoolgirl-with-perfect-grade.webp?a=1&b=1&s=612x612&w=0&k=20&c=KfiUWlMmyZHKj1wMiCmLvihUX0G8jsBwPBXlAFAD_W8="
  },
  {
    title: "GPA Insights",
    description: "Get insights into GPA metrics and how they affect students.",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Attendance Insights",
    description: "Explore attendance patterns and their implications.",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export default function Library() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-gray-800 mb-12 text-center">Our Insights</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <Link href={`/details/${index}`} key={index}>
            <div className="max-w-xs w-full p-6 border rounded-lg backdrop-blur-lg bg-white/30 transition-transform duration-300 transform hover:rotate-2 hover:scale-105 shadow-xl flex flex-col" style={{ minHeight: '400px' }}>
              <img 
                src={item.imageUrl} 
                className="h-48 w-full object-cover rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110" 
                alt={item.title} 
              />
              <div className="flex-1 flex flex-col">
                <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                <p className="mt-2 text-gray-600 flex-1">{item.description}</p>
                <div className="mt-4">
                  <button 
                    type="button" 
                    className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-transform duration-300 shadow-lg px-4 py-2 text-sm font-medium hover:scale-105"
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
