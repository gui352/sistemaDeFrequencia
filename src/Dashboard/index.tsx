import React from 'react';
import { Title, Repositories, Form } from './styles';
import { FiChevronRight } from 'react-icons/fi';


const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Pesquisas de CNPJ</Title>

      <Form >
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>

        <a href="teste">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAAY1BMVEUAXaT///8AXKQmaaoAWaI7cK1ghbj7/f4AUp+wv9gAV6EAR5uEn8UAVKCds9GZsM9mjLzt8fceYKZGc64ATZ0ASpz09/rY4u3V3Onk6fHF0+SSpsl/msN5lsHAzeGludQAQJjhcMDrAAABbklEQVRoge3Y7W6CMBSAYahDSwEZrnzIFL3/q9xcD12ltREcZ5Cc92c94SEmlIYgoCiKmt4bYgYrtogZblKFeJluQS6587mVbofpFvrZ5incyDmFTp1a6U6pp5MauviGXC6DMnCPVwHJXK3kUnjiauide2YcLmP9Bta7ST/C9+Bmrn0WYgJc4Rkil1xyF+DKUiV9rr1ZvOpmDezljYZt95B+3krd/9Ikl9chDJUeV52gKn0dLBeuTC65C3dF3KpijuoGXKo0i+TakUsuuStx2eZgh+DyemeH4oaPInclbjGvK9vmVhto91z/rHT6SO5wj8+43vNzAG9wphfE8JXueH6jj2HRZegG8IP5FXZUjv2KWZ94eW65aoi5LjnVtcts99XIJXfhLh9T0n8XTTxDJQxt5eCHu5uNR9WoSzbPDHXD9T033Ifb6993914gl9w5XMfxd65+P4F8FyFmnjcYYr59k6LWHOZzZD5Sm//pCxH1WZCU+n4JAAAAAElFTkSuQmCC"
              alt="WEG"
            />
            <div>
              <strong>WEG S.A</strong><br/>
              <strong>weg@net.com</strong><br/>
              <strong>Jaraguá do Sul</strong>
              <strong> - SC</strong><br/>
              <strong>11.451.292/0001-03</strong><br/>
              <p>Sistema de cadastro, edição, exclusão e listagem de produtos. Desenvolvido em Java</p>
            </div>
            <FiChevronRight size={20}/>
        </a>

        <a href="teste">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAAY1BMVEUAXaT///8AXKQmaaoAWaI7cK1ghbj7/f4AUp+wv9gAV6EAR5uEn8UAVKCds9GZsM9mjLzt8fceYKZGc64ATZ0ASpz09/rY4u3V3Onk6fHF0+SSpsl/msN5lsHAzeGludQAQJjhcMDrAAABbklEQVRoge3Y7W6CMBSAYahDSwEZrnzIFL3/q9xcD12ltREcZ5Cc92c94SEmlIYgoCiKmt4bYgYrtogZblKFeJluQS6587mVbofpFvrZ5incyDmFTp1a6U6pp5MauviGXC6DMnCPVwHJXK3kUnjiauide2YcLmP9Bta7ST/C9+Bmrn0WYgJc4Rkil1xyF+DKUiV9rr1ZvOpmDezljYZt95B+3krd/9Ikl9chDJUeV52gKn0dLBeuTC65C3dF3KpijuoGXKo0i+TakUsuuStx2eZgh+DyemeH4oaPInclbjGvK9vmVhto91z/rHT6SO5wj8+43vNzAG9wphfE8JXueH6jj2HRZegG8IP5FXZUjv2KWZ94eW65aoi5LjnVtcts99XIJXfhLh9T0n8XTTxDJQxt5eCHu5uNR9WoSzbPDHXD9T033Ifb6993914gl9w5XMfxd65+P4F8FyFmnjcYYr59k6LWHOZzZD5Sm//pCxH1WZCU+n4JAAAAAElFTkSuQmCC"
              alt="WEG"
            />
            <div>
              <strong>WEG S.A</strong><br/>
              <strong>weg@net.com</strong><br/>
              <strong>Jaraguá do Sul</strong>
              <strong> - SC</strong><br/>
              <strong>11.451.292/0001-03</strong><br/>
              <p>Sistema de cadastro, edição, exclusão e listagem de produtos. Desenvolvido em Java</p>
            </div>
            <FiChevronRight size={20}/>
        </a>

        <a href="teste">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAAY1BMVEUAXaT///8AXKQmaaoAWaI7cK1ghbj7/f4AUp+wv9gAV6EAR5uEn8UAVKCds9GZsM9mjLzt8fceYKZGc64ATZ0ASpz09/rY4u3V3Onk6fHF0+SSpsl/msN5lsHAzeGludQAQJjhcMDrAAABbklEQVRoge3Y7W6CMBSAYahDSwEZrnzIFL3/q9xcD12ltREcZ5Cc92c94SEmlIYgoCiKmt4bYgYrtogZblKFeJluQS6587mVbofpFvrZ5incyDmFTp1a6U6pp5MauviGXC6DMnCPVwHJXK3kUnjiauide2YcLmP9Bta7ST/C9+Bmrn0WYgJc4Rkil1xyF+DKUiV9rr1ZvOpmDezljYZt95B+3krd/9Ikl9chDJUeV52gKn0dLBeuTC65C3dF3KpijuoGXKo0i+TakUsuuStx2eZgh+DyemeH4oaPInclbjGvK9vmVhto91z/rHT6SO5wj8+43vNzAG9wphfE8JXueH6jj2HRZegG8IP5FXZUjv2KWZ94eW65aoi5LjnVtcts99XIJXfhLh9T0n8XTTxDJQxt5eCHu5uNR9WoSzbPDHXD9T033Ifb6993914gl9w5XMfxd65+P4F8FyFmnjcYYr59k6LWHOZzZD5Sm//pCxH1WZCU+n4JAAAAAElFTkSuQmCC"
              alt="WEG"
            />
            <div>
              <strong>WEG S.A</strong><br/>
              <strong>weg@net.com</strong><br/>
              <strong>Jaraguá do Sul</strong>
              <strong> - SC</strong><br/>
              <strong>11.451.292/0001-03</strong><br/>
              <p>Sistema de cadastro, edição, exclusão e listagem de produtos. Desenvolvido em Java</p>
            </div>
            <FiChevronRight size={20}/>
        </a>

        <a href="teste">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABTCAMAAACS2miYAAAAY1BMVEUAXaT///8AXKQmaaoAWaI7cK1ghbj7/f4AUp+wv9gAV6EAR5uEn8UAVKCds9GZsM9mjLzt8fceYKZGc64ATZ0ASpz09/rY4u3V3Onk6fHF0+SSpsl/msN5lsHAzeGludQAQJjhcMDrAAABbklEQVRoge3Y7W6CMBSAYahDSwEZrnzIFL3/q9xcD12ltREcZ5Cc92c94SEmlIYgoCiKmt4bYgYrtogZblKFeJluQS6587mVbofpFvrZ5incyDmFTp1a6U6pp5MauviGXC6DMnCPVwHJXK3kUnjiauide2YcLmP9Bta7ST/C9+Bmrn0WYgJc4Rkil1xyF+DKUiV9rr1ZvOpmDezljYZt95B+3krd/9Ikl9chDJUeV52gKn0dLBeuTC65C3dF3KpijuoGXKo0i+TakUsuuStx2eZgh+DyemeH4oaPInclbjGvK9vmVhto91z/rHT6SO5wj8+43vNzAG9wphfE8JXueH6jj2HRZegG8IP5FXZUjv2KWZ94eW65aoi5LjnVtcts99XIJXfhLh9T0n8XTTxDJQxt5eCHu5uNR9WoSzbPDHXD9T033Ifb6993914gl9w5XMfxd65+P4F8FyFmnjcYYr59k6LWHOZzZD5Sm//pCxH1WZCU+n4JAAAAAElFTkSuQmCC"
              alt="WEG"
            />
            <div>
              <strong>WEG S.A</strong><br/>
              <strong>weg@net.com</strong><br/>
              <strong>Jaraguá do Sul</strong>
              <strong> - SC</strong><br/>
              <strong>11.451.292/0001-03</strong><br/>
              <p>Sistema de cadastro, edição, exclusão e listagem de produtos. Desenvolvido em Java</p>
            </div>
            <FiChevronRight size={20}/>
        </a>

      </Repositories>
    </>
  );
};

export default Dashboard;