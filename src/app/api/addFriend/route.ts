import { addFriend, getSnap, getUserData, isUserAlreadyFriend } from "../../../../lib/firebase/firestore"

export async function POST(req: Request) {
    try {
        const { currentUserName, friendName } = await req.json()

        const currentUserSnap = await getSnap(currentUserName)
        const friendSnap = await getSnap(friendName)

        const currentUserData = await getUserData(currentUserSnap)

        const isAlreadyFriend = await isUserAlreadyFriend(currentUserData, friendName)

        if (friendSnap.empty) {
            return Response.json({message: 'There is no user with this name'})
        } else if (isAlreadyFriend) {
            return Response.json({message: 'User is already your friend'}) 
        }

        const docId = await addFriend({ currentUserSnap, currentUserName, friendSnap, friendName })
        return Response.json({message: 'added', chatId: docId})

    } catch (err: any) {
        console.error('Error in POST handler:', err);
        return Response.json({message: err.message});
    }
}