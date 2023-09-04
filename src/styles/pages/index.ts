import styled from 'styled-components'

export const Container = styled.div`
  width: 99%;
  display: flex;
  justify-content: center;

  span {
    color: red;
    font: 2rem;
    padding: 0.5rem;
  }

  .gridContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width: 99vw;
    max-width: 1440px;

    justify-content: center;
  }

  .productContainer {
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .productContent {
    width: 240px;
    height: 300px;
    background: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: solid 1px ${(props) => props.theme['gray-300']};
    border-radius: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.8rem;
  }

  .code {
    font-size: 1.2rem;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 1rem;
    padding: 0.2rem;
    text-align: center;
    min-height: 60px;
  }

  .brand {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-600']};
  }

  section {
    display: flex;
    gap: 0.5rem;
  }

  .productButton {
    border: none;
    height: 1.8rem;
    width: 6rem;
    border-radius: 0.3rem;

    font-size: 0.85rem;
    font-weight: 700;
  }

  #add {
    background: #00b945;
    color: #fff;

    &:hover {
      color: #fff;
      background: #00792d;
      cursor: pointer;
    }
  }

  #verify {
    background: #00a5b9;
    color: #fff;

    &:hover {
      color: #fff;
      background: #006a77;
      cursor: pointer;
    }
  }

  @media all and (max-width: 510px) {
    .gridContainer {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    .productContainer {
      height: 280px;
      width: 170px;
      margin-left: auto;
      margin-right: auto;
    }

    .productContent {
      width: 170px;
      height: 260px;
    }

    .name {
      font-size: 0.8rem;
      min-height: 3.5rem;
      padding: 0.2rem;
      text-align: center;
    }

    .code {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }

    .logo {
      font-weight: 500;
    }

    img {
      height: 3.7rem;
      width: 3.7rem;
    }

    .price {
      color: #5a5a5a;
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
    }

    section {
      display: flex;
      flex-direction: column;

      .cardButton {
        font-weight: 500;
        border: none;
        height: 1.8rem;
        width: 6rem;
        border-radius: 0.3rem;
        font-size: 0.7rem;

        & + button {
          margin-left: 0;
          margin-top: 0.5rem;
        }
      }

      #add {
        background: #00b945;
        color: #fff;

        &:hover {
          background: #00792d;
        }
      }

      #verify {
        background: #00a5b9;
        color: #fff;

        &:hover {
          background: #006a77;
        }
      }
    }
  }
`
