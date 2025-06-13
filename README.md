# 🌐 Sprint Hospital Sabará

 O projeto tem o objetivo de otimizar a comunicação dos setores do hospital para evitar falhas e retrabalho.

---

## 📦 Dependências do Front-End

- React Icons
- React Router Dom
- Sonner
- Swiper

### 🧰 Requisitos do Projeto

O Front-End foi desenvolvido utilizando o **React** com **Vite**, garantindo maior performance e uma experiência de desenvolvimento mais fluida do site.
O Back-End foi desenvolvido utilizando **Python** como linguagem de programação e **Postgree** como banco de dados.

### ✅ Pré-requisitos do Sistema

- **Node.js** (versão 16 ou superior)
- **npm**, **yarn** ou **pnpm** (gerenciador de pacotes)
- **Python** (liguagem de programação para rodar o backend)
- **Postgree** (sistema de banco de dados relacional)

## 📈 Como Iniciar o Projeto Localmente

### 💻 Api

Para rodar o projeto, primeiramente você deve rodar a API que se encontra neste repositório:

- 🔍 [Sabara-API](https://github.com/phbrg/sabaraAPI)

#### Agora, precisa seguir alguns passos!
1. Instalar o [Python](https://www.python.org/downloads/).
2. Instalar o [PostgreSQL](https://www.postgresql.org/download/).
>Desativado nesta primeira versão
3. Clonar o projeto com:
```
https://github.com/phbrg/sabaraAPI.git
```
4. Criar um arquivo `.env` com a seguinte variavel:
```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/DB
SECRET_KEY = "SUASECRETKEY"
ALGORITHM = "HS256"
```
>Substitua as variaveis USER, PASSWORD, DB e SUASECRETKEY pelas suas variaveis
5. Instalar o venv em sua maquina com:
```
pip install venv
```
6. Rodar o venv com:
```
python -m venv venv
```
7. Iniciar o ambiente venv com:
```
venv\Scripts\activate
```
8. Instalar os requirementes no ambiente venv com:
```
pip install -r requirements.txt
```
9. Rodar o projeto com:
```
uvicorn app.main:app --reload
```
10. Iniciar outro terminal.

11. Iniciar o ambiente venv novamente com:
```
venv\Scripts\activate
```
12. Entrar no diretório /arduino/ com:
```
cd arduino
```
13. Iniciar o arquivo mqtt_listener com:
```
python mqtt_listeners.py
```
14. Abrir o link do projeto do [Wokwi](https://wokwi.com/projects/433609174072571905).

15. Rodar o projeto no Wokwi clicando no botão Verde "Start the simulation".

### 💻 Front-End

#### Tendo iniciado a API, agora rode o front-end do projeto seguindo estes passos:

1. Clone o repositório:
```
git clone https://github.com/EvandroKaibara/Sabara.git
```

2. Apos isso abra o console:

```
cd Sabara
```

3. Instale as dependências:

```
npm install
```

4. Rode o projeto:

```
npm run dev
```

## 🤝 Equipe

- Front End
    - Evandro Yuji Kaibara de Oliveira RM:559274
- Back End
    - Pedro Henrique Batista Bergamin RM:559443
- Ideias do projeto
    - Ícaro de Oliveira Santos RM:559950
    - Mateus Mallet da Rocha Mallet RM:560491

---

## 🏁 Conclusão

Este projeto proporcionou à equipe:

- Um aprendizado prático e técnico.
- O enfrentamento e superação de desafios.
- A valorização da organização, pesquisa e motivação.

Foi uma oportunidade valiosa para o crescimento e a evolução profissional de todos os envolvidos.

---

## 🔗 Acesso ao Projeto

- 🔍 [Site Hospedado na Vercel](https://sabara.vercel.app/)
