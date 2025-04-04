import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Calendar, Award } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    progress: 75,
    nextLesson: "CSS Grid Layout",
    instructor: "John Doe",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    progress: 45,
    nextLesson: "Async/Await Patterns",
    instructor: "Jane Smith",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    progress: 30,
    nextLesson: "User Research Methods",
    instructor: "Mike Johnson",
  },
];

const upcomingActivities = [
  {
    id: 1,
    title: "Web Development Quiz",
    date: "Tomorrow, 2:00 PM",
    type: "quiz",
  },
  {
    id: 2,
    title: "JavaScript Assignment Due",
    date: "Friday, 11:59 PM",
    type: "assignment",
  },
  {
    id: 3,
    title: "UI/UX Design Workshop",
    date: "Next Monday, 3:00 PM",
    type: "workshop",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Student!</h1>
        <p className="text-gray-500">Here's what's happening with your courses today.</p>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Active courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12h</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Activities</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-gray-500">Badges earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your current courses and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{course.title}</h3>
                    <span className="text-sm text-gray-500">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Next: {course.nextLesson}</span>
                    <Button variant="ghost" size="sm">
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            <CardDescription>Your schedule for the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 