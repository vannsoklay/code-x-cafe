import { AuthRepository } from '../repository/auth.repository';

export class AuthService {

    private authRepository: AuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }

    // async getTasks() {
    //     return await this.taskRepository.getTasks();
    // }

    // async createTask(task) {
    //     return await this.taskRepository.createTask(task);
    // }

    // async updateTask(task) {
    //     return await this.taskRepository.updateTask(task);
    // }

    // async deleteTask(taskId) {
    //     return await this.taskRepository.deleteTask(taskId);
    // }

}