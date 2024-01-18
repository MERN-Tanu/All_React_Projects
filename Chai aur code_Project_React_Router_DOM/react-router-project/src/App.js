import React from "react";

function App() {
  <div></div>;
}

export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from "./App.js";
// import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createRoutesFromElements,
// } from "react-router-dom";

// import createBrowserRouter from "react-router-dom";

// import Layout from "./Layout.js";
// import Home from "./components/Home/Home.js";
// import About from "./components/About/About.js";
// import Contact from "./components/Contact/Contact.js";
// import User from "./components/User/User.js";
// // import Github, { githubInfoLoader } from "./components/Github/Github.js";
// // this is one way of creating React-Router

// // const router = creatBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <Home />,
// //       },
// //       {
// //         path: "about",
// //         element: <About />,
// //       },
// //       {
// //         path: "contact",
// //         element: <Contact />,
// //       },
// //     ],
// //   },
// // ]);

// // this is another way of creating React-Routes : this is pretty easy syntax compare to above one

// const router = creatBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userid" element={<User />} />
//       {/* <Route loader={githubInfoLoader} path="github" element={<Github />} /> */}
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
