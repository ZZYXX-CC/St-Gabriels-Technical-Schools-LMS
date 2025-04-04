"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface QuizProps {
  params: {
    courseId: string;
    quizId: string;
  };
}

const questions = [
  {
    id: 1,
    question: "What is CSS Grid?",
    options: [
      { id: "a", text: "A one-dimensional layout system" },
      { id: "b", text: "A two-dimensional layout system" },
      { id: "c", text: "A three-dimensional layout system" },
      { id: "d", text: "A database system" },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    question: "Which property is used to define grid columns?",
    options: [
      { id: "a", text: "grid-columns" },
      { id: "b", text: "grid-template-columns" },
      { id: "c", text: "columns" },
      { id: "d", text: "grid-cols" },
    ],
    correctAnswer: "b",
  },
  {
    id: 3,
    question: "What is the default value of display: grid?",
    options: [
      { id: "a", text: "block" },
      { id: "b", text: "inline" },
      { id: "c", text: "grid" },
      { id: "d", text: "none" },
    ],
    correctAnswer: "c",
  },
];

export default function Quiz({ params }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    const correctAnswers = Object.entries(answers).filter(
      ([questionIndex, answer]) => answer === questions[Number(questionIndex)].correctAnswer
    ).length;
    return (correctAnswers / questions.length) * 100;
  };

  if (showResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
          <CardDescription>Here's how you did on the quiz</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600">
              {calculateScore()}%
            </div>
            <p className="text-gray-500">Your Score</p>
          </div>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={q.id} className="space-y-2">
                <p className="font-medium">{q.question}</p>
                <p className={`text-sm ${answers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                  Your answer: {answers[index] ? q.options.find(opt => opt.id === answers[index])?.text : "Not answered"}
                </p>
                <p className="text-sm text-gray-500">
                  Correct answer: {q.options.find(opt => opt.id === q.correctAnswer)?.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle>CSS Grid Quiz</CardTitle>
          <CardDescription>Test your knowledge of CSS Grid</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg font-medium">{questions[currentQuestion].question}</p>
            <RadioGroup
              value={answers[currentQuestion]}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 