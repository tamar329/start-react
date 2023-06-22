// import './App.css';
// import React from 'react';
// import AppHw from './comps/appHw';
// import VipList from './comps/vipList';
// import AppRoutes from './comps_routes/appRoutes';
// import AppPixa from './comps_pixa/appPixa';
// // import AppRoutes from './comps_routes/appRoutes';

// function App() {
//     return (
//         <React.Fragment>
//             {/* <AppRoutes /> */}
//             {/* <VipList /> */}
//             <AppRoutes/>
//             {/* <AppPixa/> */}
//         </React.Fragment>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import About from "./comps_routes/about";
import Form from "./comps/form";
import Home from "./comps_routes/home";
import AppEmp from "./comps_employee/appEmp";
import Header from "./comps_static/header";
import Counter from "./redux_comps/counter";
import counterSlice from "./features/counterSlice";
import todosSlice from "./features/todosSlice";

import './App.css';
import AppTodo from "./todoRedux_comps/appTodo";

// הגדרת הסטור הגלובלי שיספוק פרובידר והסלייסים
// של הרידיוסר שהוא מכיל בתוכו
const myStore = configureStore({
  reducer: {
    counterSlice,
    todosSlice
  }
})

function App() {
  return (
    <BrowserRouter>
      <Provider store={myStore}>
        <Header />
        {/* outlet */}
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/employee" element={<AppEmp />} />
          <Route path="/employee/:company" element={<AppEmp />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todos" element={<AppTodo />} />
          {/* כוכבית נשאיר לעמוד 404 אם לא מוצא אף
        ראוט יפעיל את מה שעם פאט' של כוכבית */}
          <Route path="*" element={<h2>Page 404, not found!</h2>} />
        </Routes>
        {/* outlet */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;