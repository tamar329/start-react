// import React, { useState } from 'react'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import CarsList from '../comps_cars/carsList'
// import AppAtlas from '../comps/appAtlas'
// import VipList from '../comps/vipList'
// import AppPixa from '../comps_pixa/appPixa'
// import About from './about'
// import Home from './home'
// import { AppContext } from "../context/context"
// import Counter from './counter'
// import Header from '../comps_static/header'
// import AppEmp from '../comps_employee/appEmp'
// import { configureStore } from '@reduxjs/toolkit'
// import todosSlice from "./features/todosSlice";
// import AppTodo from '../todoRedux_comps/appTodo'
// // import AppCasino from '../comps_casino/appCasino'
// import counterSlice from "./features/counterSlice";

// const myStore = configureStore({
//     reducer: {
//         counterSlice,
//         todosSlice
//     }
// })

// export default function AppRoutes() {
//     const [number, setNumber] = useState(4);
//     const [coins, setCoins] = useState(5);

//     // const myStore = configureStore({
//     //     reducer: {
//     //         counterSlice,
//     //         todosSlice
//     //     }
//     // })


//     return (
//         <BrowserRouter>
//             {/* <Provider store={myStore}> */}

//                 <AppContext.Provider value={{
//                 val: "koko2",
//                 number, setNumber,
//                 coins, setCoins
//             }}>
//                 <Header />
//                 {/* <header className='p-2 container bg-warning'>
//                     <div className='float-end h5'>Coins:</div>
//                     <Link to="/">Home</Link> |
//                     <Link to="/about">About</Link> |
//                     <Link to="/counter">Counter</Link> |
//                     <Link to="/vip">Vip</Link> |
//                     <Link to="/atlas">Atlas</Link> |
//                     <Link to="/pixa/cats">Pixa</Link> |
//                     <Link to="/cars">Cars</Link> |
//                     <Link to="/casino">Casino</Link>
//                 </header> */}
//                 {/* outlet */}
//                 <Routes>
//                     {/* <Route path="/" element={<Home />} /> */}
//                     <Route index element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/counter" element={<Counter />} />
//                     <Route path='/employee' element={<AppEmp />} />
//                     <Route path='/employee/:company' element={<AppEmp />} />
//                     <Route path="/vip" element={<VipList />} />
//                     <Route path="/atlas" element={<AppAtlas />} />
//                     <Route path="/pixa/:searchQ" element={<AppPixa />} />
//                     {/* <Route path="/casino" element={<AppCasino />} /> */}
//                     {/* ?s= */}
//                     <Route path="/cars" element={<CarsList />} />
//                     <Route path="/todos" element={<AppTodo />} />
//                     {/* כוכבית נשאיר לעמוד 404 אם לא מוצא אף
//         ראוט יפעיל את מה שעם פאט' של כוכבית */}
//                     <Route path="*" element={<h2>Page 404, not found!</h2>} />

//                 </Routes>
//                 {/* outlet */}
//                 <footer className='p-2 container bg-danger'>footer</footer>
//                 </AppContext.Provider>
//             {/* </Provider> */}
//         </BrowserRouter >
//     )
// }

