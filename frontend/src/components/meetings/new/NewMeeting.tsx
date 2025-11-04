import { useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { MeetingDraft } from "../../../models/MeetingDraft";
import { DevTeam } from "../../../models/DevTeam";
import { Meeting } from "../../../models/Meeting";
import MeetingService from "../../../services/meetings";
import DevTeamService from "../../../services/teams";
import "./NewMeeting.css";

export default function NewMeeting() {
  const [teams, setTeams] = useState<DevTeam[]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const { register, handleSubmit, reset } = useForm<MeetingDraft>();

  // ✅ Fetch teams on load
  useEffect(() => {
    (async () => {
      try {
        const fetchedTeams = await DevTeamService.getAll();
        setTeams(fetchedTeams);
      } catch (e) {
        alert("Failed to load teams");
      }
    })();
  }, []);

  // Fetch meetings when team changes
  useEffect(() => {
    (async () => {
      if (selectedTeamId) {
        try {
          const meetings = await MeetingService.getByTeamId(selectedTeamId);
          setMeetings(meetings);
        } catch (e) {
          alert("Failed to load meetings");
        }
      }
    })();
  }, [selectedTeamId]);

  // Handle team change
  function teamChanged(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedTeamId(event.currentTarget.value);
  }

  // Handle form submission
  async function submit(draft: MeetingDraft) {
    try {
      const fullDraft = { ...draft, teamId: selectedTeamId };
      const newMeeting = await MeetingService.create(fullDraft);
      reset();
      setMeetings((prev) => [...prev, newMeeting]);
      alert("Meeting created successfully!");
    } catch (e) {
      alert("Error creating meeting");
    }
  }

  return (
    <div className="NewMeeting">
      <h2>Schedule a New Meeting</h2>

      {/* Select Team */}
      <select onChange={teamChanged} value={selectedTeamId}>
        <option value="">Select a Team</option>
        {teams.map(({ teamId, teamName }) => (
          <option key={teamId} value={teamId}>
            {teamName}
          </option>
        ))}
      </select>

      {/* Show form only if a team is selected */}
      {selectedTeamId && (
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Description:</label>
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder="Enter meeting description"
            />
          </div>

          <div>
            <label>Start Time:</label>
            <input
              type="datetime-local"
              {...register("startTime", { required: true })}
            />
          </div>

          <div>
            <label>End Time:</label>
            <input
              type="datetime-local"
              {...register("endTime", { required: true })}
            />
          </div>

          <button type="submit">Create Meeting</button>
        </form>
      )}

      {/* Show meetings list */}
      {meetings.length > 0 && (
        <div className="MeetingsList">
          <h3>Existing Meetings</h3>
          <ul>
            {meetings.map((m) => (
              <li key={m.id}>
                {m.description} — {new Date(m.startTime).toLocaleString()} →{" "}
                {new Date(m.endTime).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
