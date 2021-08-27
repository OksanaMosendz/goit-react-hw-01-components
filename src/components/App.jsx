import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FreindList/FriendList';
import user from 'data/user.json';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
      </div>
    </>
  );
};
