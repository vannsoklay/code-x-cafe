import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Users } from "../model/user";

export class AuthRepository {

    private logger: APILogger;
    private db: any = {};
    private userRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.userRespository = this.db.sequelize.getRepository(Users);
    }

    async getTasks() {
        
        try {
            const tasks = await this.userRespository.findAll();
            console.log('tasks:::', tasks);
            return tasks;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createTask(task) {
        let data = {};
        try {
            task.createdate = new Date().toISOString();
            data = await this.userRespository.create(task);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async updateTask(task) {
        let data = {};
        try {
            task.updateddate = new Date().toISOString();
            data = await this.userRespository.update({...task}, {
                where: {
                    id: task.id
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTask(taskId) {
        let data = {};
        try {
            data = await this.userRespository.destroy({
                where: {
                    id: taskId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}