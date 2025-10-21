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
php artisan db:seeder

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

