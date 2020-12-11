import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
    font-size: 20px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    @media (max-width: 425px) {
      img {
        width: 90px;
        height: 90px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

      @media (max-width: 425px) {
        strong {
          font-size: 30px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

      @media (max-width: 425px) {
        & + li {
          margin-left: 40px;
        }

        strong {
          font-size: 30px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    & + a {
      margin-top: 16px;
    }

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(5px);
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
`;
