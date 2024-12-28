import styled from 'styled-components';

export const Container = styled.div`
  background-color: (props) => props.theme.whitefff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: (props) => props.theme.secondBlack;
    font-weight: 500;
  }

  .container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      background-color: (props) => props.theme.secondBlack;
      color: (props) => props.theme.whitefff;
      width: 100%;
      padding: 15px;
      text-align: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
    .items {
      grid-area: items;
      padding-left: 20px;
    }
    .items-price {
      grid-area: items-price;
      padding-right: 20px;
    }
    .delivery-tax {
      grid-area: delivery-tax;
      padding-left: 20px;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
      padding-right: 20px;
    }
  }
  .container-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;

    * {
      font-weight: 700;
    }
  }
`;
