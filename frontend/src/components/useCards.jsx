import React from 'react';
import Card from './cards'; // Make sure the path is correct

const testimonials = [
  {
    quote: "The AI Question Generator has been a game-changer in my interview preparations. It quickly generates relevant questions that help me anticipate responses better.",
    name: "John Smith",
    title: "Job Applicant",
  },
  {
    quote: "As an educator, I find this tool invaluable for creating thought-provoking questions. It saves time and brings fresh ideas to my lessons with AI Question Generator.",
    name: "Sarah Johnson",
    title: "High School Teacher",
  },
  {
    quote: "This tool helps me generate insightful questions for my students’ research projects, sparking curiosity and deeper thinking. Best AI Question Generator for me.",
    name: "Dr. Emily Chang",
    title: "University Professor",
  },
  {
    quote: "The AI Question Generator provides accurate, engaging questions that help keep my tutoring sessions dynamic and interactive.",
    name: "Alex Johnson",
    title: "Tutor",
  },
  {
    quote: "Using this tool for study review has helped me create questions and answers that enhance my understanding of complex topics. Vote AI Question Generator Now.",
    name: "Michael Lee",
    title: "Student",
  },
  {
    quote: "I love how the AI quickly turns text into detailed questions with AI Question Generator. It’s ideal for my team’s training sessions and brainstorming meetings.",
    name: "Sophia Martinez",
    title: "Team Lead",
  },
];


 function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        What Users Say About the AI Question Generator
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="mb-4 flex items-center justify-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.237 3.812a.75.75 0 00.711.507h3.978c.969 0 1.371 1.24.588 1.81l-3.215 2.338a.75.75 0 00-.273.832l1.237 3.812c.3.921-.755 1.686-1.541 1.056l-3.215-2.338a.75.75 0 00-.88 0l-3.215 2.338c-.786.63-1.841-.135-1.541-1.056l1.237-3.812a.75.75 0 00-.273-.832L2.272 9.056c-.783-.57-.38-1.81.588-1.81h3.978a.75.75 0 00.711-.507l1.237-3.812z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-4 italic">
              “{testimonial.quote}”
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;