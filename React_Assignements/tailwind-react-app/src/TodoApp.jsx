import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export default function TodoApp() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  return (
    <Card className="max-w-md mx-auto shadow-lg border-orange-200">
      <CardHeader className="bg-orange-50 rounded-t-lg">
        <CardTitle className="text-orange-700">Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={() => {
              if (todo.trim()) {
                setList([...list, { text: todo, done: false }]);
                setTodo("");
              }
            }}
          >
            Add
          </Button>
        </div>

        {list.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-gray-50 p-2 rounded"
          >
            <Checkbox
              checked={item.done}
              onCheckedChange={() =>
                setList(
                  list.map((t, idx) =>
                    idx === i ? { ...t, done: !t.done } : t
                  )
                )
              }
            />
            <span
              className={
                item.done
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }
            >
              {item.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
