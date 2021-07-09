import { useState, FormEvent } from 'react';
import { Barra, Cont, Title, Texto, Form, Repositories, Bandeiras, Option } from './styles';
import {FiChevronRight} from 'react-icons/fi';
import api from '../services/api';

interface Repository{
  state: string;
  cases: BigInt;
  deaths: BigInt;
  suspects: BigInt;
  refuses: BigInt;
}

const Dashboard: React.FC = () => {
  const[newRepo, setNewRepo] = useState('');
  const[repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault();

      const response = await api.get<Repository>(`uf/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
  }
  
  return (
    <>
      <Cont>

        <Barra>
          <Option>Home</Option> 
          <Option> | </Option> 
          <Option><a href="https://www.gov.br/saude/pt-br/vacinacao?utm_source=google&utm_medium=search&utm_campaign=MS_Vacinacao_Covid&utm_term=vacinacao_coronavirus_googleads&utm_content=gads002">Notícias</a></Option>
          <Bandeiras>
            <option >Select Country</option>
            <option>BR</option>
            <option>US</option>
            <option>AU</option>
          </Bandeiras>
        </Barra>  

        <Title>Covid-19 Brasil</Title>
        <Texto>Obtenha aqui informções em relação ao Covid-19 no Brasil</Texto>

        <Form onSubmit={handleAddRepository}>
          <input onChange={e => setNewRepo(e.target.value)} placeholder="Digite a UF do estado desejado" value={newRepo}/>
          <button type="submit">Pesquisar</button>
        </Form>
      </Cont>
      
      <Repositories>
          {repositories.map(repository => (
            <a href="teste">
                <img
                  src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/02/2-bandeira-santa-catarina.jpg"
                  alt="SantaCatarina"
                />
                <div>
                  <strong>{repository.state}</strong><br/>
                  <p>Casos: {repository.cases}</p><br/>
                  <p>Mortes: {repository.deaths}</p><br/>
                  <p>Suspeitos: {repository.suspects}</p><br/>
                  <p>Recusados: {repository.refuses}</p><br/>
                </div>
                <FiChevronRight size={20}/>
            </a>
            ))
            }
        </Repositories>
    </>
  );
};

export default Dashboard;