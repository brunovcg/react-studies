import { useQuery } from "react-query"
import usersServices from "../services/usersService"

const useUser = (email) => {



    const { getUserByEmail } = usersServices




    const { data: user } = useQuery(["user", email], () => getUserByEmail(email))


    return { user }

}

export default useUser