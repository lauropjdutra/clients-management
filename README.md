# Gerenciamento de Clientes

<hr>

## Descrição

Este projeto consiste em uma aplicação completa de gerenciamento de clientes, incluindo um servidor Node.js (back-end) e uma interface React (front-end).

### API Endpoints

- GET /clients: Obter a lista de todos os clientes.
- POST /clients: Criar um novo cliente.
- PATCH /clients/:id: Atualizar um cliente existente.
- DELETE /clients/:id: Excluir um cliente.
- POST /route: Calcular rota otimizada para visitação.

<hr>

## Ferramentas Utilizadas

### Backend (Node.js + Express + PostgreSQL)

- Node.js v20.11.0
- Express v4.18.3
- Nodemon v.3.1.0
- Yarn v1.22.21
- pg v8.11.3
- PostgreSQL 16

### Frontend (React.js + Vite)

- React v18.2.0
- Vite v5.1.4
- Axios v1.6.7
- Yarm v1.22.21
- Styled Components v6.1.8

<hr>

## Como Rodar Localmente

### Backend

1. Clone este repositório.

    ```bash
    git clone https://github.com/lauropjdutra/clients-management.git
    ```

2. Navegue até o diretório do backend.

    ```bash
    cd backend
    ```
    
#### Instruções para Configuração do Ambiente

3. Abra o arquivo `.env` e substitua as informações:

    ```bash
    PORT=3000
    # Substitua os seguintes valores pelos correspondentes ao seu ambiente PostgreSQL
    CONNECTION_STRING=postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco-de-dados
    ```

4. **Instruções Específicas:**

    - Substitua `seu-usuario` pelo seu nome de usuário do PostgreSQL.
    - Substitua `sua-senha` pela senha do seu usuário do PostgreSQL.
    - Substitua `localhost` pelo endereço do seu servidor PostgreSQL.
    - Substitua `5432` pela porta do seu servidor PostgreSQL.
    - Substitua `seu-banco-de-dados` pelo nome do banco de dados que você deseja conectar.

5. Instale as dependências usando o Yarn.

    ```bash
    yarn install
    ```

6. Execute o servidor.

    ```bash
    yarn dev
    ```

O servidor estará rodando em http://localhost:3000

### Frontend

1. Navegue até o diretório do frontend.

    ```bash
    cd frontend
    ```

2. Instale as dependências usando o Yarn.

    ```bash
    yarn install
    ```

3. Inicie a aplicação React.

    ```bash
    yarn dev
    ```

O servidor estará rodando em http://localhost:5173

<hr>
    
## Configuração do Banco de Dados

Certifique-se de ter o PostgreSQL instalado em sua máquina.

### DDL da Tabela do Banco de Dados

A tabela do banco de dados foi criada usando o seguinte DDL:

```sql
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    x_coordinate INTEGER NOT NULL,
    y_coordinate INTEGER NOT NULL
);
