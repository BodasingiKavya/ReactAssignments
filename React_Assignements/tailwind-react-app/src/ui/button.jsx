import * as React from "react";

export function Button({
  className = "",
  variant = "default",
  ...props
}) {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
