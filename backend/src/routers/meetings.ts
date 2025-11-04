import { Router } from "express";
import validation from "../middlewares/validation";
import paramValidation from "../middlewares/param-validation";
import { meetingByTeamValidator, meetingValidator } from "../controllers/meetings/validator";
import { addMeeting, filterByTeam } from "../controllers/meetings/controller";

const router = Router()

router.get('/meetings-by-team/:teamId', paramValidation(meetingByTeamValidator), filterByTeam)
router.post('/add-meeting', validation(meetingValidator), addMeeting)



export default router