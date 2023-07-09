import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  gap: 0.8rem;

  .description {
    display: flex;
    justify-content: space-around;
    max-height: 500px;
  }

  section {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 0;

      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .version {
        font-size: 1.2rem;
      }
    }

    .codeContainer {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
    }

    .codeContainer::before,
    .codeContainer::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${(props) => props.theme['gray-300']};
    }

    .codeContainer::before {
      top: 0;
    }

    .codeContainer::after {
      bottom: 0;
    }

    .productModel {
      max-height: 220px;
      min-height: 220px;
      overflow: auto;
    }

    h3 {
      padding-bottom: 1rem;
    }

    .buttonContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      .button {
        min-height: 3rem;
        border: none;
        background-color: #00b945;
        border-radius: 0.5rem;
        width: 100%;
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.3rem;
        font-weight: 700;
        color: ${(props) => props.theme.white};

        &:hover {
          background: #00792d;
          cursor: pointer;
        }
      }

      .link {
        min-height: 3rem;
        border: none;
        background-color: ${(props) => props.theme['red-500']};
        border-radius: 0.5rem;
        width: 100%;
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.3rem;
        font-weight: 700;
        color: ${(props) => props.theme.white};

        &:hover {
          background: ${(props) => props.theme['red-700']};
          cursor: pointer;
        }
      }
    }
  }

  .ImageContainer {
    height: 500px;
    width: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 0.5rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`
