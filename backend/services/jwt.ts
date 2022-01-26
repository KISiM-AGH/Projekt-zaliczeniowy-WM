import jwt from "jsonwebtoken"


export const sign = (id: number) =>
    jwt.sign({ sub: id}, "DiscoPacketRacer", { expiresIn: '1 hour' })
export const verifyJwt = (token: string) =>
    jwt.verify(token, "DiscoPacketRacer");