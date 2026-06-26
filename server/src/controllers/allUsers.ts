import { Request, Response } from "express";
import { allUsers } from "../services/allUsers.js";

const allUsersController = async (req: Request, res: Response): Promise<void> => {
    await allUsers(req, res);
};

export default allUsersController;
