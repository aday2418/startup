import getUser from "../../../lib/getUser"
import userIdFromToken from "../../../lib/userIdFromToken"

export async function GET(request) {
    const userId = userIdFromToken()
    const user = await getUser(userId)
    return Response.json({ data: user.username})
}