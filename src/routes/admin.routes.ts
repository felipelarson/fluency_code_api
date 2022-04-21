import { Router } from "express";

import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { GetAdminController } from "../modules/admin/useCases/getAdmin/GetAdminController";
import { LoginAdminController } from "../modules/admin/useCases/loginAdmin/LoginAdminController";


const adminRoutes = Router();

const createAdminControler = new CreateAdminController();
const getAdminController = new GetAdminController();
const loginAdminController = new LoginAdminController();

adminRoutes.post("/admin", loginAdminController.handle);
adminRoutes.post("/", createAdminControler.handle);
adminRoutes.get("/", getAdminController.handle);



export { adminRoutes };
