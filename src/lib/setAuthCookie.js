import { cookies } from 'next/headers'

export default function setAuthCookie(key, value) {
    const res = cookies().set(key, value, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });

}