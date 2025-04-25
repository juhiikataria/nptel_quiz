// import Link from "next/link"
// import { cookies } from "next/headers"
// import { Card, CardContent } from "@/components/ui/card"
// import { BookOpen } from "lucide-react"

// export default function Home() {
//   // Get completed weeks from cookies
//   const cookieStore = cookies()
//   const completedWeeksCookie = cookieStore.get("completedWeeks")
//   const completedWeeks = completedWeeksCookie ? JSON.parse(completedWeeksCookie.value) : []

//   // Generate weeks array
//   const weeks = Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     completed: completedWeeks.includes(i + 1),
//   }))

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
//           Weekly Practice Quiz
//         </h1>

//         <div className="max-w-3xl mx-auto mb-12">
//           <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-8"></div>
//           <p className="text-center text-slate-600 max-w-xl mx-auto">
//             Select a week to start your practice. Track your progress as you complete each week's quiz.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {weeks.map((week) => (
//             <Link
//               href={`/quiz/${week.id}`}
//               key={week.id}
//               className="block transform transition duration-300 hover:scale-105"
//             >
//               <Card
//                 className={`border ${
//                   week.completed
//                     ? "bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-200"
//                     : "bg-white hover:bg-slate-50 border-slate-200"
//                 } rounded-xl overflow-hidden h-full`}
//               >
//                 <CardContent className="p-0">
//                   <div className="flex flex-col items-center justify-center p-8 h-full">
//                     {week.completed && (
//                       <div className="absolute top-3 right-3">
//                         <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
//                       </div>
//                     )}
//                     <div
//                       className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
//                         week.completed ? "bg-emerald-100 text-emerald-600" : "bg-indigo-100 text-indigo-600"
//                       }`}
//                     >
//                       <BookOpen className="w-5 h-5" />
//                     </div>
//                     <h2 className={`text-xl font-semibold ${week.completed ? "text-emerald-700" : "text-slate-800"}`}>
//                       Week {week.id}
//                     </h2>
//                     <p className={`text-sm mt-1 ${week.completed ? "text-emerald-600" : "text-slate-500"}`}>
//                       {week.completed ? "Completed" : "Start Quiz"}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }



import Link from "next/link";
import { cookies } from "next/headers";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function Home() {
  // Get completed weeks from cookies
  const cookieStore = cookies();
  const completedWeeksCookie = cookieStore.get("completedWeeks");
  const completedWeeks = completedWeeksCookie
    ? JSON.parse(completedWeeksCookie.value)
    : [];

  // Generate weeks array
  const weeks = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    completed: completedWeeks.includes(i),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Weekly Practice Quiz
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-8"></div>
          <p className="text-center text-slate-600 max-w-xl mx-auto">
            Select a week to start your practice. Track your progress as you
            complete each week's quiz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {weeks.map((week) => (
            <Link
              href={`/quiz/${week.id}`}
              key={week.id}
              className="block transform transition duration-300 hover:scale-105"
            >
              <Card
                className={`border ${
                  week.completed
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-200"
                    : "bg-white hover:bg-slate-50 border-slate-200"
                } rounded-xl overflow-hidden h-full`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center justify-center p-8 h-full">
                    {week.completed && (
                      <div className="absolute top-3 right-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      </div>
                    )}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        week.completed
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h2
                      className={`text-xl font-semibold ${
                        week.completed ? "text-emerald-700" : "text-slate-800"
                      }`}
                    >
                      Week {week.id}
                    </h2>
                    <p
                      className={`text-sm mt-1 ${
                        week.completed ? "text-emerald-600" : "text-slate-500"
                      }`}
                    >
                      {week.completed ? "Completed" : "Start Quiz"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

