import { NextFunction, Request, Response } from "express";
import DevTeam from "../../models/dev-team";
import Meeting from "../../models/meeting";

export async function filterByTeam(req: Request<{teamId: string}>, res: Response, next: NextFunction) {
    try{
        const { meetings } = await DevTeam.findByPk(req.params.teamId, {
            include: [Meeting]
        })
        res.json(meetings)
    } catch(e) {
        next(e)
    }
}


export async function addMeeting(req: Request, res: Response, next: NextFunction) {
    try{ 
        const newMeeting = await Meeting.create(req.body)
        await newMeeting.reload({include: DevTeam})
        res.json(newMeeting)
    } catch(e) {
        next(e)
    }
}