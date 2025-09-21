# 🌦️ WeatherAPI

Aplicação web para **consultar a previsão do tempo** em cidades brasileiras, com **autocomplete** de cidades usando a API do IBGE e previsão do tempo consumida via **[HG Brasil Weather API](https://hgbrasil.com/status/weather)**.

O projeto foi desenvolvido com uma arquitetura **frontend + backend** para **proteger a chave da API**, evitando que ela fique exposta no navegador.

---

## 📂 Estrutura do Projeto

WeatherAPI/  
│  
├── backend/ # Serviço Node.js que consome a API do HG Weather </br>
│ ├── query-hgweather.js # Código principal do backend  
│ ├── Dockerfile  
│ ├── package.json  
│ └── package-lock.json  
│  
├── frontend/ # Aplicação web (HTML, CSS e JS)  
│ ├── index.html  
│ ├── style.css  
│ ├── app.js  
│ ├── Dockerfile  
│ └── img/ # Ícones de condições climáticas  
│  
├── docker-compose.yml # Subir frontend + backend com Docker  
└── README.md  


---

## 🚀 Como funciona

1. **Frontend (porta 8080):**
   - Interface onde o usuário pesquisa a cidade.
   - Autocomplete com os nomes das cidades obtidas da **API do IBGE**.
   - Faz requisições para o backend (`http://localhost:3000/weather`).

2. **Backend (porta 3000):**
   - Serviço Node.js que recebe a cidade pesquisada e chama a **HG Brasil Weather API** usando a chave que está **armazenada como variável de ambiente**.
   - Retorna os dados já tratados para o frontend.

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker](https://www.docker.com/) (opcional, caso queira rodar em containers)
- Chave válida da [HG Brasil Weather API](https://hgbrasil.com/status/weather)

---

## 🛠️ Configuração e execução

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/fkrf/WeatherAPI.git
cd WeatherAPI
```

---

## 📌 Funcionalidades

Pesquisa com *autocomplete* usando a API do IBGE.

Exibe:

- Temperatura atual.
- Temperaturas máxima e mínima.
- Velocidade do vento.
- Umidade do ar.
- Ícones dinâmicos baseados na condição climática.
- Arquitetura segura, com a chave da API protegida no backend.

---
## 🚧 Melhorias futuras

- Implementar cache no backend para evitar chamadas excessivas à API.
- Internacionalização (suporte a inglês e espanhol).
- Versão mobile responsiva.
- Deploy automático com GitHub Actions.

---

## 📝 Licença

Este projeto é distribuído sob a licença MIT.
Sinta-se livre para usar, modificar e contribuir.

## 👨‍💻 Autor

Projeto desenvolvido por Felipe.
