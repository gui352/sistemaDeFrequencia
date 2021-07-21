import { useState, useEffect } from 'react';
import { Header, RepositoryInfo } from './style';
import api from '../../services/api';
import apiBrazil from '../../services/apiBrazil';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import Imagem from '../../assets/banner-covid-19-1280x549.jpg'

interface RepositoryParams{
  repository: string;
}

interface Repositorio{
  uf: string;
  state: string;
  cases: BigInt;
  deaths: BigInt;
  suspects: BigInt;
  refuses: BigInt;
}

interface Issues{
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
  const [ issues, setIssues ] = useState<Issues[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get('repos/${params.repository}').then((response) => {
      setRepository(response.data);
    });

    apiBrazil.get('repos/${params.repository}').then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
          <img src={Imagem} alt="Covid19"/>
          <Link to='/'>
            <FiChevronLeft size={16} />
            Voltar
          </Link>
      </Header>

      {issues.map((issues =>
      <RepositoryInfo>
            <header>
              <img src="data:image/jpeg;base64,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" 
              alt={issues.data.country}/>
              <div>
                <strong>{issues.data.country}</strong>
                <p>{issues.data.cases}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{issues.data.confirmed}</strong>
                <span>Confirmados</span>
              </li>
              <li>
                <strong>{issues.data.deaths}</strong>
                <span>Mortes</span>
              </li>
              <li>
                <strong>{issues.data.recovered}</strong>
                <span>Recusados</span>
              </li>
            </ul>
      </RepositoryInfo>
       ))}
    </>
  );
};

export default Repository;