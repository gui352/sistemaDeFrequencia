import { useState, FormEvent } from "react";
import {
  Barra,
  Cont,
  Title,
  Texto,
  Form,
  Error,
  Repositories,
  Bandeiras,
  Option,
  Info,
} from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../services/api";
import { bandeiras } from "./bandeiras";
import { repositorio } from "./repos";
import { useEffect } from "react";

interface estado {
  uf: string;
}

interface Repository {
  uf: string;
  state: estado;
  cases: BigInt;
  deaths: BigInt;
  suspects: BigInt;
  refuses: BigInt;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setInputError] = useState("");
  const [bandeira, setBandeira] = useState(() => {
    const storageBandeira = localStorage.getItem("@Flag:bandeira");

    if (storageBandeira) {
      return JSON.parse(storageBandeira);
    }

    return "";
  });

  useEffect(() => {
    localStorage.setItem("@Flag:bandeira", JSON.stringify(bandeira));
  }, [bandeira]);

  const [repos, setRepos] = useState(() => {
    const storageRepos = localStorage.getItem("@Repos:repos");

    if (storageRepos) {
      return JSON.parse(storageRepos);
    }

    return "";
  });

  useEffect(() => {
    localStorage.setItem("@Repos:repos", JSON.stringify(repos));
  }, [repos]);

  const [repositories, setRepositories] = useState<Repository>(() => {
    const storageRepository = localStorage.getItem(
      "@PesquisaCovid:repositories"
    );

    if (storageRepository) {
      return JSON.parse(storageRepository);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@PesquisaCovid:repositories",
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError("Digite um estado válido para pesquisa. ");
      return;
    }

    try {
      const response = await api.get<Repository>(`${newRepo}`);
      const repository = response.data;

      setRepositories(repository);
      setNewRepo("");
      setInputError("");

      for (var x = 0; x < bandeiras.length; x++) {
        if (String(repository?.uf) === bandeiras[x].uf) {
          setBandeira(bandeiras[x].link);
        }
      }

      for (var y = 0; y < repositorio.length; y++) {
        if (String(repository?.uf) === repositorio[y].uf) {
          setRepos(repositorio[y].link);
        }
      }
    } catch (err) {
      setInputError("Repositório não encontrado ou inexistente. ");
    }
  }

  return (
    <>
      <Cont>
        <Barra>
          <Option>
            <a href="https://covid.saude.gov.br/">Home</a>
          </Option>
          <Option> | </Option>
          <Option>
            <a href="https://www.gov.br/saude/pt-br/vacinacao?utm_source=google&utm_medium=search&utm_campaign=MS_Vacinacao_Covid&utm_term=vacinacao_coronavirus_googleads&utm_content=gads002">
              Notícias
            </a>
          </Option>
          <Bandeiras>
            <option>Escolha um país</option>
            <option>BR</option>
            <option>US</option>
            <option>AU</option>
          </Bandeiras>
        </Barra>

        <Title>Covid-19 Brasil</Title>
        <Texto>Obtenha aqui informções em relação ao Covid-19 no Brasil</Texto>

        <Form hasError={!!inputError} onSubmit={handleAddRepository}>
          <input
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite a UF do estado desejado"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}
      </Cont>

      {repositories ? (
        <>
          <Repositories>
            <Link to={repos}>
              <img src={bandeira} alt={repositories?.uf} />
              <div>
                <strong>{repositories?.state}</strong>
                <br />
                <p>Casos: {repositories?.cases}</p>
                <br />
                <p>Mortes: {repositories?.deaths}</p>
                <br />
                <p>Suspeitos: {repositories?.suspects}</p>
                <br />
                <p>Recusados: {repositories?.refuses}</p>
                <br />
              </div>
              <FiChevronRight size={20} to={repos} />
            </Link>
          </Repositories>
        </>
      ) : (
        <Info>PESQUISE AQUI</Info>
      )}
    </>
  );
};

export default Dashboard;
