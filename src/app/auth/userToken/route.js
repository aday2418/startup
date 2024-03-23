import { cookies } from "next/headers";


export async function GET(req) {
    const token = cookies().get("token")

    return Response.json({ data: token?.value || null })
}