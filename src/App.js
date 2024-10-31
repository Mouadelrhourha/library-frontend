import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardLayout} from "./layouts/DashoboardLayout/DashboardLayout";
import {CategoryPage} from "./pages/CategoryPage/CategoryPage";
import {HomePage} from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />} >
                    <Route path="" element={<HomePage/>} />
                    <Route path="category" element={<CategoryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
