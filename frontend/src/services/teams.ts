import axios from "axios";
import { DevTeam } from "../models/DevTeam";


class TeamService {
    async getAll(): Promise<DevTeam[]> {
        const { data } = await axios.get<DevTeam[]>(`${import.meta.env.VITE_REST_SERVER_URL}/teams`);
        return data
    }
}

export default new TeamService();