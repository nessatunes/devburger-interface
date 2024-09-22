import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url('${Texture}');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 180px;

  img {
    height: 130px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% + -28px);

    width: 56px;
    height: 4px;
    background-color: #61a120;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

// export const CartItems = styled.div``;

// export const CartResume = styled.div``;
