import React, { useState, useEffect } from "react";
import { Card, CardContent, Input } from "@mui/joy";
import "./index.css";
import Button from "@mui/material/Button";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    return () => {};
  }, [searchTerm]);

  return (
    <div>
      <div>
        <Card>
          <CardContent>
            <div>Search Box</div>
            <Input
              placeholder="Input Some Search Word"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
              You Search <span className="text-blue-500">{searchTerm}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button variant="contained" color="error">
        Hello World
      </Button>
      <Button variant="contained" color="error">
        say hi
      </Button>
      <link
        rel="stylesheet"
        href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
      />
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] bg-white undefined">
          <div className="relative flex flex-row justify-between">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-3">
              Horizon UI Inputs
            </h4>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-sm text-navy-700 dark:text-white font-bold"
            >
              Default
            </label>
            <input
              type="text"
              id="email"
              placeholder="@horizon.ui"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email2"
              className="text-sm text-navy-700 dark:text-white font-bold"
            >
              Success
            </label>
            <input
              type="text"
              id="email2"
              placeholder="Success input"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email3"
              className="text-sm text-navy-700 dark:text-white font-bold"
            >
              Error
            </label>
            <input
              type="text"
              id="email3"
              placeholder="Error input"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            />
          </div>
          <div>
            <label
              htmlFor="email4"
              className="text-sm text-navy-700 dark:text-white font-bold"
            >
              Disabled
            </label>
            <input
              disabled
              type="text"
              id="email4"
              placeholder="@horizon.ui"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none !border-none !bg-gray-100 cursor-not-allowed dark:!bg-white/5 "
            />
          </div>
        </div>
      </div>
      <p className="font-normal text-navy-700 mt-20 mx-auto w-max">
        Notifications Card component from{" "}
        <a
          href="https://horizon-ui.com?ref=tailwindcomponents.com"
          target="_blank"
          className="text-brand-500 font-bold"
        >
          Horizon UI Tailwind React
        </a>
      </p>
    </div>
  );
}

export default App;
