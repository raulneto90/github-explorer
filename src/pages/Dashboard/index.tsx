import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/30750063?s=460&u=9566feeda9a9321c000c55953e38f3bb212fb1a4&v=4"
            alt="Raul Neto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Unform is a performance focused library that helps you creating
              beautiful forms in ReactJS
            </p>
          </div>
          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/30750063?s=460&u=9566feeda9a9321c000c55953e38f3bb212fb1a4&v=4"
            alt="Raul Neto"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Unform is a performance focused library that helps you creating
              beautiful forms in ReactJS
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
