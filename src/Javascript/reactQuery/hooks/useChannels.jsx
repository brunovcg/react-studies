import { useQuery } from "react-query"
import channelsServices from "../services/channelsServices"

const useChannel = (id, enabled) => {


    
    const { getChannelById } = channelsServices
   

    const { data: channel } = useQuery(["channel", id], () => getChannelById(id), {enabled})


    return { channel }

}

export default useChannel