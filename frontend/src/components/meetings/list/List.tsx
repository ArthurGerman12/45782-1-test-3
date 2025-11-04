import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import { DevTeam } from '../../../models/DevTeam'
import TeamsService from '../../../services/teams'
import MeetingService from '../../../services/meetings'
import { Meeting } from '../../../models/Meeting'
import { format } from 'date-fns';


export default function List() {

    const [teams, setTeams] = useState<DevTeam[]>([])
    const [selectedTeamId, setSelectedTeamId] = useState<string>('')
    const [meetings, setMeetings] = useState<Meeting[]>([])

    //theater effect
    useEffect(() => {
        (async () => {
            try { 
                const teams = await TeamsService.getAll()
                setTeams(teams)
            } catch(e) {
                alert(e)
            }
        })()
    }, [])



    //movies effect
    useEffect(() => {
        (async () => {
            if(selectedTeamId) {
            try{ 
                const meetings = await MeetingService.getByTeamId(selectedTeamId)
                setMeetings(meetings)
            } catch(e) {
                alert(e)
            }}
        })()
    }, [selectedTeamId])

    function teamChanged(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedTeamId(event.currentTarget.value)
    }

    // const formatDate = (isoString: string): string => {
    //     const date = new Date(isoString);
    //     // en-GB locale gives dd/mm/yyyy — replace / with -
    //     return date.toLocaleDateString('en-GB').replaceAll('/', '-');
    // };

    const formatDateTime = (isoString: string): string => {
        return format(new Date(isoString), 'dd-MM-yyyy HH:mm');
    };




    return (
        <div className='List'>
            <h2>View All Meetings!!!</h2>
            <div>
                <select onChange={teamChanged}>
                    {teams.map(({teamId, teamName}) => <option key={teamId} value={teamId}>{teamName}</option>)}
                </select>

                <ul>
                    {meetings.map(({id, startTime, endTime, description}) => <li key={id}> this meeting starts at:{formatDateTime(startTime)} and ends at:{formatDateTime(endTime)}, in {description} </li>)}
                </ul>
            </div>
        </div>
    )
}