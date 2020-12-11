/* eslint-disable prettier/prettier */
import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;

  line-height: 56px;
  max-width: 450px;

  @media (max-width: 425px) {
    & {
      font-size: 42px;
    }
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  @media (max-width: 425px) {
    & {
      flex-direction: column;

      input {
        width: 100%;
      }

      button {
        margin-top: 8px;
        width: 100%;
        border-radius: 5px;
      }
    }
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;

    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 425px) {
    & {
      flex-direction: column;

      input {
        width: 100%;
        border-radius: 5px;
        flex: inherit;
      }

      button {
        margin-top: 8px;
        width: 100%;
        border-radius: 5px;
      }
    }
  }
`;

export const Error = styled.div`
  margin-top: 16px;
  max-width: 700px;
  padding: 12px;
  border-radius: 5px;
  background-color: #c53030;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  & > div {
    display: flex;
    align-items:center;

    & + div {
      margin-top: 16px;
    }

    svg {
      margin-left: 15px;
      cursor: pointer;
      font-size: 20px;
      color: #c53030;
    }

    a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(5px);
    }



    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbc8d6;
      font-size: 20px;
    }
  }



    @media (max-width: 425px) {
      & {
        img {
          width: 48px;
          height: 48px;
        }

        div {
          strong {
            font-size: 17px;
          }
          p {
            font-size: 15px;
          }
        }

        svg {
          font-size: 48px;
        }
      }
    }
  }
`;
