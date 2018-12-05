import * as express from "express";
import * as basic from 'express-basic-auth';

import { init } from "./db";
import { getParty } from "./get-party";
import { getGuests } from "./get-guest";
import { postRegister } from "./post-register";

const app = express();
app.use(express.json());
app.locals = init();

const adminFilter = basic({ users: { admin: 'P@ssw0rd!' } });

// Add routes
app.get("/party", getParty);
app.get("/guests", adminFilter, getGuests);
app.post("/register", postRegister);

app.listen(8080, () => console.log("API is listening on port 8080"));