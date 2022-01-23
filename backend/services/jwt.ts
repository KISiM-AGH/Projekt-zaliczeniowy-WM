import jwt from "jsonwebtoken"


// w payload mozesz dac dowolne dane, np. rolę w systemie
export const sign = (id: number) =>
    jwt.sign({ sub: id}, "DiscoPacketRacer", { expiresIn: '1 hour' })      // lub w sekundach

// Weryfikacja poprawnosci i waznosci JWT
export const verifyJwt = (token: string) =>
    jwt.verify(token, "DiscoPacketRacer");