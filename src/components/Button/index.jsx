import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

export const Button = ({ children, ...props }) => {
  return <ContainerButton {...props}>{children}</ContainerButton>;
};

Button.propTypes = {
  children: PropTypes.string,
};
