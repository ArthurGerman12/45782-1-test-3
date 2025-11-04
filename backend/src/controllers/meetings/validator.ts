import Joi from "joi";

export const meetingValidator = Joi.object({
    teamId: Joi.string().uuid().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    description: Joi.string().min(1).max(255).required()
})

export const meetingByTeamValidator = Joi.object({
    teamId: Joi.string().uuid().required()
})