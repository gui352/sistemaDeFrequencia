import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './style';
import LogoImg from '../../assets/logo.svg';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams{
  repository: string;
}

interface Repositorio{
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue{
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  }
}

const Repository: React.FC = () => {

  const [ repository, setRepository] = useState<Repositorio | null>(null);
  const [ issues, setIssues ] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get('${params.repository}').then((response) => {
      setRepository(response.data);
    });

    api.get('${params.repository}').then((response) => {
      setIssues(response.data);
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

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository?.owner.avatar_url} alt={repository.owner.login}/>
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
      )}

      <Issues>
        {issues.map((issues =>
          <a key={issues.id} href={issues.html_url} target="blank">
            <img
              src={issues.user.avatar_url}
              alt={issues.user.login}
            />
            <div>
              <strong>{issues.title}</strong>
              <p>{issues.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
};

export default Repository;
