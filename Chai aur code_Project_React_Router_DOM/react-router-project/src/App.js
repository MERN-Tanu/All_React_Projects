import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <RouterProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </RouterProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
