import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventItem from "./pages/EventItem/EventItem";
import Page404 from "./pages/Page404/Page404";

const RoutIng = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventItem />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutIng;
