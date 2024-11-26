
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UserRepository } from "../modules/user/repository/implementations/User.repository";
import { AppError } from "../errors/appError";

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
    const { sub: user_id } = verify(token, process.env.JWT_SECRET) as IPayload
    
    const userRepository = new UserRepository()
    const user = userRepository.findById(user_id)

    if (!user) {
        throw new AppError("User does not exists", 404)
    }

    request.user = {
        id: user_id
    }

    next()

    } catch {
        throw new AppError("invalid token!")
    }
}