import express from "express";
import APIController, { CreateNewUser } from '../controller/APIController';
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.GetAllUsers);
    router.post('/create-user', APIController.CreateNewUser);
    router.put('/update-user', APIController.updateUser);
    router.delete('/delete-user/:id', APIController.deleteUser);
    return app.use('/api/v1/', router)

}
export default initAPIRoute;
//module.exports = initWebRoute;