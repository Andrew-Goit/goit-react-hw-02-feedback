import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

const Notification = ({ message }) => {
    // console.log(message);
  return <NotificationMessage>{message}</NotificationMessage>; 
};

export {Notification};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};
