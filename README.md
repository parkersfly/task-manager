# 📋 Task Manager

**Task Manager** é uma aplicação de gerenciamento de tarefas. A aplicação permite que usuários criem, organizem e acompanhem tarefas de forma visual e produtiva.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Backend (`/server`)
- PHP 8.1+
- Laravel 10+
- Composer
- SQlite

### 🌐 Frontend (`/web`)
- Vue.js
- JavaScript
- Node.js / npm

---

## ✅ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- PHP 8.1 ou superior
- Composer 2.x
- Node.js 14.x ou superior
- npm ou yarn

---

## ⚙️ Instalação e Execução

### 1. Clone o projeto

```bash
git clone https://github.com/parkersfly/task-manager.git
cd task-manager
```

### 2. Configure o back-end

```bash
cd server

# Instale as dependências
composer install

# Rode as migrations
php artisan migrate

# Rode o seeder
php artisan db:seed

# Rode o servidor local
php artisan serve
```

### 3. Configure o front-end

```bash
cd ../web

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

```

### Feedback

Pergunta 1: Qual foi a maior dificuldade que você encontrou neste desafio e como você a resolveu?
- o projeto foi desafiador, devido a ser meu primeiro contato com o vuejs e laravel. A maior dificuldade foi entender a estrutura, as diretivas e como funciona cada stack. Para entender mais sobre tive que recorrer ao auxílio da IA e estudar a documentação delas.

Pergunta 2: Se você tivesse mais 4 horas para trabalhar neste projeto, o que você melhoraria ou adicionaria?
- A funcinalidade para poder criar os projetos.

Pergunta 3: Qual abordagem você usou para gerenciar o estado no Vue (ex: qual projeto está selecionado no momento) e por que você escolheu essa abordagem?
- Pínia. Para centralizar os dados em que muitos componentes precisariam de acesso.

