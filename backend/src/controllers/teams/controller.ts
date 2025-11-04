import { NextFunction, Request, Response } from "express";
import DevTeam from "../../models/dev-team";

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const teams = await DevTeam.findAll()
        res.json(teams)
    } catch (e) {
        next(e)
    }
}