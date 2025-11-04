import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../meetings/list/List";
import NewMeeting from "../../meetings/new/NewMeeting";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/teams" />} />
            <Route path="/teams" element={<List />} />
            <Route path="/add-meeting" element={<NewMeeting />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
