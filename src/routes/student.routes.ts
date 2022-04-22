import { Router } from "express";
import multer from "multer";

import multerConfig from "../configs/multer/multerConfig";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { GetStudentController } from "../modules/students/useCases/getStudent/getStudentController";
import { LoginStudentController } from "../modules/students/useCases/loginStudents/loginStudentsController";
import { UpdatePhotoStudentsController } from "../modules/students/useCases/updatePhotoStudents/updatePhotoStudentsController";
import { registerStudentSchema } from "../schemas";

const studentsRouter = Router();

const getStudentController = new GetStudentController();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.post(
  "/register",
  validateMiddleware(registerStudentSchema),
  new CreateStudentsController().handle
);

studentsRouter.post("/login", new LoginStudentController().login);

studentsRouter.get("/", getStudentController.handle);

studentsRouter.post(
  "/upload",
  uploadPhoto.single("file"),
  new UpdatePhotoStudentsController().handle
);

export { studentsRouter };
