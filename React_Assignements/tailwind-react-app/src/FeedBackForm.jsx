import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function FeedbackForm() {
  const [data, setData] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  return (
    <Card className="max-w-md mx-auto border-blue-200 shadow-lg">
      <CardHeader className="bg-blue-50 rounded-t-lg">
        <CardTitle className="text-blue-700">Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Name"
          value={data.name}
          className="focus:ring-blue-400"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          value={data.email}
          className="focus:ring-blue-400"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <Textarea
          placeholder="Your Feedback"
          value={data.feedback}
          className="focus:ring-blue-400"
          onChange={(e) => setData({ ...data, feedback: e.target.value })}
        />

        <Button
          className="bg-blue-600 hover:bg-blue-700 w-full"
          onClick={() => {
            setSubmitted(data);
            setData({ name: "", email: "", feedback: "" });
          }}
        >
          Submit Feedback
        </Button>

        {submitted && (
          <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
