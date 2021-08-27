// import { PropTypes } from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// import friends from 'data/friends.json';
// import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  console.log(friends);

  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};
