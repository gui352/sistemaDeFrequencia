import { useState, FormEvent } from 'react';
import { Barra, Cont, Title, Texto, Form, Repositories, Bandeiras, Option } from './styles';
import {FiChevronRight} from 'react-icons/fi';
import api from '../services/api';
import { bandeiras } from "./bandeiras";

interface estado {
  uf: string;
}

interface Repository{
  uf: string;
  state: estado;
  cases: BigInt;
  deaths: BigInt;
  suspects: BigInt;
  refuses: BigInt;
}

const Dashboard: React.FC = () => {
  const[newRepo, setNewRepo] = useState('');
  const[repositories, setRepositories] = useState<Repository>();
  const [bandeira, setBandeira] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault();

      const response = await api.get<Repository>(`uf/${newRepo}`);
      const repository = response.data;

      setRepositories(repository);
      setNewRepo('');

      for(var x = 0; x < bandeiras.length; x++){
        if(String(repository?.uf) === bandeiras[x].uf){
          setBandeira(bandeiras[x].link);
        }
      }
  }
  
  return (
    <>
      <Cont>

        <Barra>
          <Option>Home</Option> 
          <Option> | </Option> 
          <Option><a href="https://www.gov.br/saude/pt-br/vacinacao?utm_source=google&utm_medium=search&utm_campaign=MS_Vacinacao_Covid&utm_term=vacinacao_coronavirus_googleads&utm_content=gads002">Notícias</a></Option>
          <Bandeiras>
            <option >Escolha um país</option>
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
            <a href="teste">
                <img
                  src={bandeira}
                  alt={repositories?.state.uf}
                />
                <div>
                  <strong>{repositories?.state}</strong><br/>
                  <p>Casos: {repositories?.cases}</p><br/>
                  <p>Mortes: {repositories?.deaths}</p><br/>
                  <p>Suspeitos: {repositories?.suspects}</p><br/>
                  <p>Recusados: {repositories?.refuses}</p><br/>
                </div>
                <FiChevronRight size={20}/>
            </a>
        </Repositories>
    </>
  );
};

export default Dashboard;