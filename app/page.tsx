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



// import Link from "next/link";
// import { cookies } from "next/headers";
// import { Card, CardContent } from "@/components/ui/card";
// import { BookOpen } from "lucide-react";

// export default function Home() {
//   // Get completed weeks from cookies
//   const cookieStore = cookies();
//   const completedWeeksCookie = cookieStore.get("completedWeeks");
//   const completedWeeks = completedWeeksCookie
//     ? JSON.parse(completedWeeksCookie.value)
//     : [];

//   // Generate weeks array
//   const weeks = Array.from({ length: 13 }, (_, i) => ({
//     id: i,
//     completed: completedWeeks.includes(i),
//   }));

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
//       <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
//           Weekly Practice Quiz
//         </h1>

//         <div className="max-w-3xl mx-auto mb-12">
//           <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-8"></div>
//           <p className="text-center text-slate-600 max-w-xl mx-auto">
//             Select a week to start your practice. Track your progress as you
//             complete each week's quiz.
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
//                         week.completed
//                           ? "bg-emerald-100 text-emerald-600"
//                           : "bg-indigo-100 text-indigo-600"
//                       }`}
//                     >
//                       <BookOpen className="w-5 h-5" />
//                     </div>
//                     <h2
//                       className={`text-xl font-semibold ${
//                         week.completed ? "text-emerald-700" : "text-slate-800"
//                       }`}
//                     >
//                       Week {week.id}
//                     </h2>
//                     <p
//                       className={`text-sm mt-1 ${
//                         week.completed ? "text-emerald-600" : "text-slate-500"
//                       }`}
//                     >
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
//   );
// }

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, ArrowRight, ArrowLeftIcon, Shuffle, XCircle } from "lucide-react"
import { quizData } from "@/data/quiz-data"

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function QuizPage({ params }: { params: { week: string } }) {
  const router = useRouter()
  const weekId = Number.parseInt(params.week)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(0)
  const [questionResults, setQuestionResults] = useState<
    {
      question: string
      userAnswer: string
      correctAnswer: string
      isCorrect: boolean
    }[]
  >([])

  // Find the quiz data by week number
  const weekQuizData = quizData.find((quiz) => quiz.week === weekId)

  // State to hold the questions (original or shuffled)
  const [weekQuestions, setWeekQuestions] = useState<any[]>([])
  const [isShuffled, setIsShuffled] = useState(false)

  // Initialize questions when component loads
  useEffect(() => {
    if (weekQuizData?.questions) {
      setWeekQuestions([...weekQuizData.questions])
    }
  }, [weekQuizData])

  const currentQuestion = weekQuestions[currentQuestionIndex]

  useEffect(() => {
    // Update progress whenever current question changes
    if (weekQuestions.length > 0) {
      setProgress(((currentQuestionIndex + 1) / weekQuestions.length) * 100)
    }
  }, [currentQuestionIndex, weekQuestions.length])

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < weekQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const results = calculateScore()
      setShowResults(true)
      markWeekAsCompleted()
      setQuestionResults(results)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    const results = weekQuestions.map((question, index) => {
      const isCorrect = selectedAnswers[index] === question.correctAnswer
      if (isCorrect) correctAnswers++

      return {
        question: question.question,
        userAnswer: selectedAnswers[index] || "No answer",
        correctAnswer: question.correctAnswer,
        isCorrect,
      }
    })

    setScore(correctAnswers)
    return results
  }

  const markWeekAsCompleted = () => {
    // Get existing completed weeks from cookies
    const completedWeeksCookie = document.cookie.split("; ").find((row) => row.startsWith("completedWeeks="))

    let completedWeeks = []
    if (completedWeeksCookie) {
      completedWeeks = JSON.parse(completedWeeksCookie.split("=")[1])
    }

    // Add current week if not already included
    if (!completedWeeks.includes(weekId)) {
      completedWeeks.push(weekId)
    }

    // Save updated completed weeks to cookies
    document.cookie = `completedWeeks=${JSON.stringify(completedWeeks)}; path=/; max-age=31536000`
  }

  const goToHome = () => {
    router.push("/")
  }

  // Function to shuffle questions
  const shuffleQuestions = () => {
    // Only shuffle if we haven't started the quiz yet
    if (currentQuestionIndex === 0 && selectedAnswers.length === 0) {
      setWeekQuestions(shuffleArray(weekQuestions))
      setIsShuffled(true)
    } else {
      // If quiz already started, confirm before shuffling
      if (window.confirm("Shuffling will reset your current progress. Continue?")) {
        setWeekQuestions(shuffleArray(weekQuestions))
        setCurrentQuestionIndex(0)
        setSelectedAnswers([])
        setIsShuffled(true)
      }
    }
  }

  // Function to reset to original order
  const resetQuestions = () => {
    if (window.confirm("This will reset your current progress. Continue?")) {
      if (weekQuizData?.questions) {
        setWeekQuestions([...weekQuizData.questions])
        setCurrentQuestionIndex(0)
        setSelectedAnswers([])
        setIsShuffled(false)
      }
    }
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Week {weekId}</h1>
          <p className="mb-8 text-slate-600">No questions available for this week yet.</p>
          <Button onClick={goToHome} className="bg-indigo-600 hover:bg-indigo-700">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" onClick={goToHome} className="text-slate-600 hover:text-indigo-600">
            <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Home
          </Button>

          {!showResults &&
            (isShuffled ? (
              <Button variant="outline" onClick={resetQuestions} className="border-slate-300 text-slate-700">
                Reset Order
              </Button>
            ) : (
              <Button variant="outline" onClick={shuffleQuestions} className="border-slate-300 text-slate-700">
                <Shuffle className="mr-2 h-4 w-4" /> Shuffle Questions
              </Button>
            ))}
        </div>

        {!showResults ? (
          <Card className="border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-indigo-600">Week {weekId}</span>
                <span className="text-sm font-medium text-slate-600">
                  Question {currentQuestionIndex + 1} of {weekQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2 bg-slate-200" indicatorClassName="bg-indigo-600" />
              <CardTitle className="mt-4 text-xl text-slate-800">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <RadioGroup value={selectedAnswers[currentQuestionIndex] || ""} onValueChange={handleAnswerSelect}>
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 mb-3 rounded-lg border transition-all ${
                      selectedAnswers[currentQuestionIndex] === option
                        ? "border-indigo-300 bg-indigo-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} className="text-indigo-600" />
                    <Label htmlFor={`option-${index}`} className="w-full cursor-pointer font-medium text-slate-700">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between py-4 border-t border-slate-100">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="border-slate-300 text-slate-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionIndex]}
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {currentQuestionIndex === weekQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                {currentQuestionIndex !== weekQuestions.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-slate-100 text-center">
              <CardTitle className="text-2xl text-slate-800">Quiz Results</CardTitle>
            </CardHeader>
            <CardContent className="py-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold mb-2 text-slate-800">
                  Your Score: {score} / {weekQuestions.length}
                </h2>
                <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6 max-w-md mx-auto">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full"
                    style={{ width: `${(score / weekQuestions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-slate-600 max-w-md mx-auto mb-8">
                  {score === weekQuestions.length
                    ? "Perfect score! Excellent work! You've mastered this week's content."
                    : score >= weekQuestions.length / 2
                      ? "Good job! You're making great progress. Keep practicing to improve further."
                      : "Keep practicing! Review the material and try again to improve your score."}
                </p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Question Review</h3>
                <div className="space-y-6">
                  {questionResults.map((result, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        result.isCorrect ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {result.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-rose-600 mt-0.5 shrink-0" />
                        )}
                        <div>
                          <p className="font-medium text-slate-800 mb-2">
                            {index + 1}. {result.question}
                          </p>

                          {!result.isCorrect && (
                            <div className="space-y-1 mt-2">
                              <p className="text-sm text-slate-600">
                                <span className="font-medium text-rose-600">Your answer:</span> {result.userAnswer}
                              </p>
                              <p className="text-sm text-slate-600">
                                <span className="font-medium text-emerald-600">Correct answer:</span>{" "}
                                {result.correctAnswer}
                              </p>
                            </div>
                          )}

                          {result.isCorrect && (
                            <p className="text-sm text-emerald-600">Correct: {result.correctAnswer}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center border-t border-slate-100 py-6">
              <Button onClick={goToHome} className="bg-indigo-600 hover:bg-indigo-700 px-6">
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

