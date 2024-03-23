import { cookies } from "next/headers"
import authenticate from "./authenticate"

export default function userIdFromToken() {
    const token = cookies().get("token")
    return authenticate(token.value)
}