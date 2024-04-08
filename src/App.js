import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import Footer from "./Components/Footer";
import "./utils.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";

import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Login from "./Components/Login";
import ProductDisplay from "./Components/ProductDisplay";

const AppLayout = () => {
  return (
    <div>
      <Body />
      <About />
    </div>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/BheemalShampoo/",
//     element: <AppLayout />,
//   },

//   // {
//   //   path: "/about",
//   //   element: <h1>asdsa</h1>,
//   // },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/BheemalShampoo" element={<AppLayout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/productdisplay" element={<ProductDisplay />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={appRouter} /> */}
      {/* <Body />  */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
