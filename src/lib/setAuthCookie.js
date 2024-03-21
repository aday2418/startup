import { cookies } from 'next/headers'

export default function setAuthCookie(res, authToken) {
    cookies().set("token", authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        });
    }