"use client"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Library Designs</h1>

        <div className="mb-8 flex flex-wrap justify-center">
  <Link href="/design1" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 1</Link>
  <Link href="/design2" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 2</Link>
  <Link href="/design3" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 3</Link>
  <Link href="/design4" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 4</Link>
  <Link href="/design5" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 5</Link>
  <Link href="/design6" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 6</Link>
  <Link href="/design7" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 7</Link>
  <Link href="/design8" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 8</Link>
  <Link href="/design9" className="mr-4 mb-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-6 py-2 transition duration-300 ease-in-out">Design 9</Link>
</div>


        
        <div className="swatch">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <style jsx>{`
          body {
            background: #663399; /* Rebecca Purple */
            margin: 0;
          }

          .swatch {
            display: block;
            text-align: center;
            position: relative;
            margin: 100px;
          }

          .swatch div {
            width: 70px;
            height: 225px;
            position: absolute;
            top: 0;
            border-radius: 5px;
            border-top: solid 2px rgba(0, 0, 0, 0.2);
            border-left: solid 3px rgba(255, 255, 255, 0.2);
            border-bottom: solid 3px rgba(0, 0, 0, 0.2);
            text-align: center;
            box-sizing: border-box;
            transform-origin: center 90%;
            display: inline-block;
            backface-visibility: hidden;
            margin-left: -35px;
          }

          .swatch div:before {
            width: 16px;
            height: 16px;
            content: "";
            background-color: #FFFFFF; /* White */
            display: inline-block;
            border-radius: 8px;
            bottom: 10px;
            position: absolute;
            margin-left: -8px;
          }

          .swatch div:nth-child(1) {
            background-color: #815A8F; /* Purple */
            animation: swatch-purple-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          .swatch div:nth-child(2) {
            background-color: #6730EC; /* Blue */
            animation: swatch-blue-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          .swatch div:nth-child(3) {
            background-color: #9ED763; /* Green */
            animation: swatch-green-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          .swatch div:nth-child(4) {
            background-color: #FBD400; /* Yellow */
            animation: swatch-yellow-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          .swatch div:nth-child(5) {
            background-color: #FF9000; /* Orange */
            animation: swatch-orange-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          .swatch div:nth-child(6) {
            background-color: #F73F52; /* Red */
            animation: swatch-red-motion 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
          }

          @keyframes swatch-purple-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(-65deg); }
            90%, 10% { transform: rotate(0deg); }
          }

          @keyframes swatch-blue-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(-40deg); }
            90%, 10% { transform: rotate(0deg); }
          }

          @keyframes swatch-green-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(-15deg); }
            90%, 10% { transform: rotate(0deg); }
          }

          @keyframes swatch-yellow-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(15deg); }
            90%, 10% { transform: rotate(0deg); }
          }

          @keyframes swatch-orange-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(40deg); }
            90%, 10% { transform: rotate(0deg); }
          }

          @keyframes swatch-red-motion {
            0% { transform: rotate(0deg); }
            30%, 70% { transform: rotate(65deg); }
            90%, 10% { transform: rotate(0deg); }
          }
        `}</style>
      </div>
    </>
  );
}
