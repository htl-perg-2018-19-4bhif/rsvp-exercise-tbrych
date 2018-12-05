import { Request, Response } from "express";
import { Datastore } from "./db";

export function getParty(req: Request, res: Response): void {
    res.send((<Datastore>req.app.locals).party.find());
}