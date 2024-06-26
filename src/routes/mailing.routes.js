import { Router } from "express";

import { MailingControllerMongo } from "../controllers/database/MailingControllerMongo.js";

const routerMailing = Router();

routerMailing.post('/recoverpassword', MailingControllerMongo.recoverPassword)

routerMailing.post('/purchase/:cid', MailingControllerMongo.purchase)

export default routerMailing