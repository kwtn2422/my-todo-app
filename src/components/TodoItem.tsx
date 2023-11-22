import React from "react";

type Status = "Done" | "Progress" | "Incomplete";

export type ToDoItemProps = {
  task: string;
  status: Status;
};

export const TodoItem: React.FC<ToDoItemProps> = ({ task, status }) => {
  let STATUS: string = "";

  switch (status) {
    case "Done":
      STATUS = "完了";
      break;
    case "Progress":
      STATUS = "進行中";
      break;
    case "Incomplete":
      STATUS = "未対応";
      break;
  }

  return (
    <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md border">
      <div className="flex items-center justify-center w-12 bg-emerald-500">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>

      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-emerald-500">{STATUS}</span>
          <p className="text-sm text-gray-600">{task}</p>
        </div>
      </div>
    </div>
  );
};
