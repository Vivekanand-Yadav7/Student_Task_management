import { Request, Response } from "express";
import subComplete from "../services/subtitlecomplete.js";

const subTitleCompleteController = async (req: Request, res: Response): Promise<void> => {
    await subComplete(req, res);
};

export default subTitleCompleteController;