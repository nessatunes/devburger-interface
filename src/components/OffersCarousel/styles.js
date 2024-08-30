import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  overflow-x: hidden;
  .react-multi-carousel-list {
    overflow: visible;
  }
  padding-left: 40px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #61a120;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  font-weight: 800;
  margin: 70px 0;
  margin-top: 70px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;
    left: calc(50% - 28px);
  }
`;

// export const ContainerItems = styled.div`
//   background: url('${(props) => props.imageUrl}');
//   background-position: center;
//   background-size: cover;
//   border-radius: 20px;

//   display: flex;
//   align-items: center;
//   padding: 20px 10px;
//   width: 100%;
//   height: 250px;

//   p {
//     color: #ffffff;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 10px 30px;
//     border-radius: 30px;
//     font-size: 22.5px;
//     font-weight: bold;
//     margin-top: 60px;
//   }
// `;
