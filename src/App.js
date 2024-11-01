import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardLayout} from "./layouts/DashoboardLayout/DashboardLayout";
import {CategoryPage} from "./pages/CategoryPage/CategoryPage";
import {HomePage} from "./pages/HomePage/HomePage";
import BorrowsPage from "./pages/BorrowsPage/BorrowsPage";
import { RubyOutlined } from '@ant-design/icons';
import UserPage from './pages/UserPage/UserPage';
import BooksPage from './pages/BooksPage/BooksPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />} >
                    <Route path="" element={<HomePage/>} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="borrows" element={<BorrowsPage/>} />
                    <Route path='user' element={<UserPage/>} /> 
                    <Route path='books' element={<BooksPage/>} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
