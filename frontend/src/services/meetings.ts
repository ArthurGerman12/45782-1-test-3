import axios from "axios";
import { Meeting } from "../models/Meeting";
import { MeetingDraft } from "../models/MeetingDraft";

class MeetingService {
    async getByTeamId(teamId: string): Promise<Meeting[]> {
        const { data } = await axios.get<Meeting[]>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/meetings-by-team/${teamId}`);
        return data
    }

    async create(draft: MeetingDraft): Promise<Meeting> {
        const { data } = await axios.post<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/add-meeting`, draft);
        return data
    }
}

export default new MeetingService()