import { useState, FormEvent, useEffect } from "react";
import  {Repositories, Info } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import apiBrazil from "../../services/apiBrazil";


interface Repositorie {
    data: [
    {
        country: String,
        cases: BigInt,
        confirmed: BigInt,
        deaths: BigInt,
        recovered: BigInt,
    }
]
};

const Repository: React.FC = () => {

  const [repositorie, setRepositorie] = useState<Repositorie>(() => {
    const storageRepository = localStorage.getItem(
      "@PesquisaCountry:repositories"
    );

    if (storageRepository) {
      return JSON.parse(storageRepository);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@PesquisaCovid:repositories",
      JSON.stringify(repositorie)
    );
  }, [repositorie]);

  }

  return (
    <>
    
      {repositorie ? (
        <>
          <Repositories>
            
            <Link to={`/repository/${repositorie.country}`}>

              <img src={bandeira} alt={repositorie?.uf} />
              <div>
                <strong>{repositorie?.country}</strong>
                <br />
                <p>Casos: {repositorie?.cases}</p>
                <br />
                <p>Confirmados: {repositorie?.confirmed}</p>
                <br />
                <p>Mortes: {repositorie?.deaths}</p>
                <br />
                <p>Recusados: {repositorie?.recovered}</p>
                <br />
              </div>
              <FiChevronRight size={20} />

            </Link>
            
          </Repositories>
        </>
      ) : (
        <Info>PESQUISE AQUI</Info>
      )}
    </>
  );
};

export default Repository;
