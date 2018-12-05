import { Request, Response } from "express";
import { CREATED, BAD_REQUEST, UNAUTHORIZED } from "http-status-codes";
import { Datastore } from "./db";

export function postRegister(req: Request, res: Response): void {
    if (!req.body.firstName || !req.body.lastName) {
        res.status(BAD_REQUEST).send("Missing mandatory member(s)");
    } else {
        const data = <Datastore>req.app.locals;
        const count = data.guests.count();
        if (count < 10) {
            const newDoc = data.guests.insert({ firstName: req.body.firstName, lastName: req.body.lastName });
            res.status(CREATED).send(newDoc);
        } else {
            res.status(UNAUTHORIZED).send("Maximum number of guests has already been reached!");
        }
    }
}