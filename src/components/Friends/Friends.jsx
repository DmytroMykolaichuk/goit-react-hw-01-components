import { FriendCard } from "./FriendCard"
import { FriendsList } from "./styles/Friends.styled"

export const Friends = (props) => {
    return(
        <FriendsList>
            {props.friends.map(({avatar,name,isOnline,id}) => 
                <FriendCard key={id} friend={{avatar, name, isOnline}} />
            )}
        </FriendsList>
    )
}