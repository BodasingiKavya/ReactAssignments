import * as React from "react";

export function Checkbox({ checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onCheckedChange}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
  );
}
