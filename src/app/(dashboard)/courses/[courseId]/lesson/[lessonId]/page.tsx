import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, Maximize } from "lucide-react";

interface VideoPlayerProps {
  params: {
    courseId: string;
    lessonId: string;
  };
}

export default function VideoPlayer({ params }: VideoPlayerProps) {
  return (
    <div className="space-y-6">
      {/* Video Player */}
      <Card>
        <CardContent className="p-0">
          <div className="relative aspect-video bg-black">
            {/* Video Player */}
            <video
              className="w-full h-full"
              controls
              poster="/placeholder-video.jpg"
            >
              <source src="/sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <Play className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                  <Progress value={33} className="h-1" />
                </div>
                <Button variant="ghost" size="icon" className="text-white">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lesson Content */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>CSS Grid Layout</CardTitle>
              <CardDescription>Lesson 3 of Introduction to Web Development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose max-w-none">
                <p>
                  CSS Grid is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces.
                </p>
                <h2>Key Concepts</h2>
                <ul>
                  <li>Grid Container</li>
                  <li>Grid Items</li>
                  <li>Grid Lines</li>
                  <li>Grid Tracks</li>
                  <li>Grid Cells</li>
                  <li>Grid Areas</li>
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t">
                <Button variant="outline" className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Lesson
                </Button>
                <Button className="flex items-center">
                  Next Lesson
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
            <CardDescription>Your progress through this course</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Upcoming Lessons</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Flexbox Layout</span>
                    <Button variant="ghost" size="sm">
                      Preview
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Responsive Design</span>
                    <Button variant="ghost" size="sm">
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 