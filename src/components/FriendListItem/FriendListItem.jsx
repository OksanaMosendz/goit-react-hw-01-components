import { PropTypes } from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={checkIsFriendOnline(isOnline)}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

function checkIsFriendOnline(isOnline) {
  if (isOnline) {
    return 'isOnline';
  } else return 'isNotOnline';
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendListItem.defaultProps = {
  avatar: 'https://ikiwi.website/alteks/wp-content/uploads/2020/11/avatar-placeholder.png',
};
