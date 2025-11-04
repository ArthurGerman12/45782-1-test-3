import { MeetingDraft } from "./MeetingDraft";

export interface Meeting extends MeetingDraft {
    id: string
    createdAt: string
    updatedAt: string
}