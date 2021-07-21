import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './style';
import LogoImg from '../../assets/logo.svg';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import api from '../../services/apiBrazil';

interface RepositoryParams{
  repository: string;
}

interface Repositorio{
  data: {
    country: string;
    cases: BigInt;
    confirmed: BigInt;
    deaths: BigInt;
    recovered: BigInt;
  }
}

const Repository: React.FC = () => {

  const [ repository, setRepository] = useState<Repositorio | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get('repos/${params.repository}').then((response) => {
      setRepository(response.data);
    });

  }, [params.repository]);

  return (
  <>
    <Header>
        <img src={LogoImg} alt="GitHubExplorer"/>
      <Link to='/'>
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
        <header>
          <img src={repository?.} alt={repository?}/>
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
  </>
  )
};

export default Repository;