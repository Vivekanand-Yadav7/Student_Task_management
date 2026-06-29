import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export interface AuthRequest extends Request {
    user?: string | jwt.JwtPayload;
}
export declare const authCheck: (req: AuthRequest, res: Response, next: NextFunction) => void;
export default authCheck;
//# sourceMappingURL=authCheck.d.ts.map