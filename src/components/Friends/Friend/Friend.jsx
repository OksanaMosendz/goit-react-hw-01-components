import { PropTypes } from 'prop-types';
import css from './Friend.module.css';
export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.isNotOnline}></span>
      <img className={css.avatar} src={avatar} alt="" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

Friend.defaultProps = {
  avatar: 'https://ikiwi.website/alteks/wp-content/uploads/2020/11/avatar-placeholder.png',
};
