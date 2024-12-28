import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
  }
`;

export const RightContainer = styled.div`
  background: url('${Background}');
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  color: ${(props) => props.theme.white};
  font-size: 18px;
  font-weight: 800;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.roadRageFont};
  font-size: 40px;
  color: ${(props) => props.theme.white};

  span {
    font-family: ${(props) => props.theme.roadRageFont};
    color: ${(props) => props.theme.purple};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 400;
    height: 10px;
  }
`;
export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;
