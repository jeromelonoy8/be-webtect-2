import { Hono } from 'hono';
import { createStudent, getStudents, updateStudent, deleteStudent,  getStudentById} from './students.controller.js';

const studentsRoute = new Hono();

studentsRoute.get('/', getStudents);
studentsRoute.get('/:id', getStudentById);
studentsRoute.post('/', createStudent);
studentsRoute.put('/:id', updateStudent);
studentsRoute.delete('/:id', deleteStudent);

export default studentsRoute;