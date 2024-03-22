import { cookies } from 'next/headers'

export default function setAuthCookie(authToken) {
    cookies().set("token", authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });

    console.log(authToken)
}