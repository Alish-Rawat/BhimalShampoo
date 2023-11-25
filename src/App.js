import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Footer from "./Components/Footer";
import "./utils.css";
// import { Provider } from "react-redux";

import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";

const AppLayout = () => {
  return (
    <div>
      <Head />
      <Body />
      <About />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/BheemalShampoo/",
    element: <AppLayout />,
  },

  // {
  //   path: "/about",
  //   element: <h1>asdsa</h1>,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <Body />  */}
      <Footer />
    </>
  );
}

export default App;
