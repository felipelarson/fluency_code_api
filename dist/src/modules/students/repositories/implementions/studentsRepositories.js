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
exports.StudentsRepositories = void 0;
const typeorm_1 = require("typeorm");
const Student_1 = require("../../entities/Student");
class StudentsRepositories {
    create(student) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(Student_1.Students);
            const { email, name, password } = student;
            if (yield repo.findOne({ email })) {
                return new Error("E-mail already registered");
            }
            const studentCreate = repo.create({ email, name, password });
            yield repo.save(studentCreate);
            return "User created successfully";
        });
    }
}
exports.StudentsRepositories = StudentsRepositories;
//# sourceMappingURL=studentsRepositories.js.map