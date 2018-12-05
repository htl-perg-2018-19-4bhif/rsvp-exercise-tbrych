import * as loki from "lokijs";
import { IGuest } from "./ifaces";
import { IParty } from "./ifaces";

export class Datastore {
    constructor(public db: loki, public guests: loki.Collection<IGuest>, public party: loki.Collection<IParty>) { }
}

export function init(): Datastore {
    const db = new loki(__dirname + "/data.db", { autoload: true, autosave: true });

    let guests: loki.Collection<IGuest> = db.getCollection("guests");
    if (!guests) {
        guests = db.addCollection("guests");
    }
    let party: loki.Collection<IParty> = db.getCollection("party");
    if (!party) {
        party = db.addCollection("party");
    }
    party.insert({ title: "Cool Party", location: "St. Valentin", date: new Date(2018, 11, 24) });

    return new Datastore(db, guests, party);
}