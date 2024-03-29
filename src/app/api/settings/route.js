import getUser from "../../../lib/getUser"
import userIdFromToken from "../../../lib/userIdFromToken"

export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)
    console.log({ dark: user?.darkMode})
    return Response.json({ data: user.darkMode})
}