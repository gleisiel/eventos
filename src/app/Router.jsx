import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { EventDetailsPage } from "../pages/EventDetails/EventDetails";
import { NotFound } from "../pages/NotFound/NotFound";

export function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos/:id" element={<EventDetailsPage />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}