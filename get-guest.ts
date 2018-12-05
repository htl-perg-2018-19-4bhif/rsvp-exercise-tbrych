import { Request, Response } from "express";
import { Datastore } from "./db";

export function getGuests(req: Request, res: Response): void {
    res.send((<Datastore>req.app.locals).guests.find());
}