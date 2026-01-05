import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const images = [
  "https://via.placeholder.com/400x200/60A5FA/FFFFFF?text=Image+1",
  "https://via.placeholder.com/400x200/34D399/FFFFFF?text=Image+2",
  "https://via.placeholder.com/400x200/F472B6/FFFFFF?text=Image+3",
];


export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  return (
    <Card className="max-w-md mx-auto shadow-lg border-purple-200">
      <CardContent className="space-y-4 text-center">
        <img src={images[index]} className="rounded-lg shadow-md" />

        <div className="flex justify-between">
          <Button
            variant="outline"
            className="border-purple-500 text-purple-600"
            onClick={() => setIndex((index - 1 + images.length) % images.length)}
          >
            Previous
          </Button>

          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setIndex((index + 1) % images.length)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
