# 🐾 Petshop Melhor Amigo

Hotsite para o Petshop "Melhor Amigo" com páginas de produtos, galeria de fotos e contato.

## 🛠️ Tecnologias

- **Backend**: Python (Flask)
- **Frontend**: React
- **Banco de Dados**: MySQL

## 📋 Pré-requisitos

- Python 3.8+
- Node.js 14+
- MySQL 8.0+
- npm ou yarn

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/petshop-melhor-amigo.git
cd petshop-melhor-amigo
```

### 2. Configure o Banco de Dados
```bash
# Acesse o MySQL
mysql -u root -p

# Execute o script de criação
source database/schema.sql
```

### 3. Configure o Backend
```bash
cd backend

# Crie um ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais do MySQL

# Execute o servidor
python app.py
```

O backend estará rodando em `http://localhost:5000`

### 4. Configure o Frontend
```bash
cd frontend

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm start
```

O frontend estará rodando em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
petshop-melhor-amigo/
├── backend/
│   ├── app.py              # Aplicação Flask principal
│   ├── models.py           # Modelos do banco de dados
│   ├── routes.py           # Rotas da API
│   ├── requirements.txt    # Dependências Python
│   └── .env.example        # Exemplo de variáveis de ambiente
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas do site
│   │   ├── App.js          # Componente principal
│   │   └── index.js        # Ponto de entrada
│   └── package.json
└── database/
    ├── schema.sql          # Estrutura do banco
    └── dados_exemplo.sql   # Dados de exemplo
```

## 🌐 Páginas

- **Home**: Apresentação do petshop e serviços
- **Produtos**: Ração, tosa, banho, brinquedos e higiene
- **Galeria**: Fotos dos animais atendidos
- **Contato**: Formulário de contato e newsletter

## 🔌 API Endpoints

```
GET    /api/produtos              # Lista todos os produtos
GET    /api/produtos/:categoria   # Produtos por categoria
GET    /api/galeria               # Lista fotos da galeria
POST   /api/contato               # Envia formulário de contato
POST   /api/newsletter            # Cadastra email na newsletter
```

## 🎨 Design

- **Cores principais**: Branco e Verde
- **Responsivo**: Mobile, tablet e desktop
- **Fonte**: Sans-serif moderna

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` no diretório `backend/`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=petshop_melhor_amigo
SECRET_KEY=sua_chave_secreta
```

## 🧪 Testes

```bash
# Backend
cd backend
pytest

# Frontend
cd frontend
npm test
```

## 📦 Build para Produção

```bash
cd frontend
npm run build
```

Os arquivos otimizados estarão em `frontend/build/`

## 👥 Equipe

**Contratante**: Marcia Oliveira Santos  
**Empresa**: Melhor Amigo Petshop  
**Funcionários**: 13

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 📞 Contato

Para dúvidas sobre o projeto, entre em contato através do formulário no site.
