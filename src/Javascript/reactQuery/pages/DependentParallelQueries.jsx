import useUser from "../hooks/useUser"
import useChannel from "../hooks/useChannels"

function DependentParallelQueries({ email }) {


    const { user } = useUser(email)

    const channelId = user?.data.channelId

    // ! See useChannel, this second argument is the ENABLED config, it will only trigger after channelId === true
    const { channel } = useChannel(channelId, !!channelId)

    return <div>
        <h3> {user?.data?.id}:</h3>
        <p>Techs:</p>
        <ul> {channel?.data?.courses?.map(item => <li key={item}>{item}</li>)}

        </ul>
    </div>

}

export default DependentParallelQueries