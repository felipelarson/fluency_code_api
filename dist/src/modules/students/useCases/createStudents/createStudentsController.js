"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentsController = void 0;
const tsyringe_1 = require("tsyringe");
const createStudentsUseCase_1 = require("./createStudentsUseCase");
class CreateStudentsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = request.body;
            const createStudentsUseCase = tsyringe_1.container.resolve(createStudentsUseCase_1.CreateStudentsUseCase);
            const result = yield createStudentsUseCase.execute({
                name,
                email,
                password,
            });
            if (result instanceof Error) {
                return response.status(409).json({ error: "User already exists" });
            }
            return response.status(201).json({ message: result });
        });
    }
}
exports.CreateStudentsController = CreateStudentsController;
//# sourceMappingURL=createStudentsController.js.map