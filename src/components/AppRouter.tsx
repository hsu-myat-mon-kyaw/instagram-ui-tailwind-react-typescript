import Search from "./Search"
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/search" element={<Search/>}></Route>
            </Routes>
    )
}

export default AppRouter;