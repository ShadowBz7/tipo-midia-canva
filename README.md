# Sistema de Tipo de Mídia – Laboratório de Programação Web III

Este é o projeto final da disciplina **Laboratório de Programação Web III** do IF Baiano. O objetivo foi criar um módulo completo de gestão de mídia, inspirado no site canva, usando **Angular**, **Node.js** e **Bootstrap**, explorando os principais recursos de cada framework.

---

## Funcionalidades

- **CRUD de Mídias**

  **Create:** formulário para cadastrar nova mídia (nome, tipo, extensão, autor e descrição)

  **Read:** listagem de mídias em dashboard e página de projetos

  **Update:** edição inline de cada mídia em tela dedicada

  **Delete:** remoção de registros pela interface

**Pesquisa e ordenação**

  Busca por nome no dashboard

  Filtro e ordenação (por nome / data de criação / última modificação)

**Interface inspirada no Canva**

  - Sidebar lateral fixa com navegação

  - Topbar escura com campo de pesquisa e botões de ação

  - Grid responsivo de cards para exibição de mídias

**Rotas Angular**

  - **/** → Dashboard

  - **/projects** → Lista de mídias

  - **/create** → Formulário de criação

  - **/projects/:id** → View/Edit de mídia

  ---

## Tecnologias

- **Front‑end**  
  - **Angular**  
     - Componentes standalone (ex.: **DashboardComponent, ProjectsComponent, CreateProjectComponent, ViewProjectComponent**)

     - RouterModule para navegação declarativa (**app.routes.ts**)

     - FormsModule + **ngModel** para binding em formulários

     - HttpClientModule para chamadas REST em **ProjectsService**

  - **Bootstrap**  
    - Grid System **(container, row, col-*)** para layout

    - Componentes: cards, dropdowns, botões, form-controls

    - Utilitários: **p-***, **m-***, **rounded**, **shadow-sm**

    - Bootstrap Icons para representar visualmente cada tipo de mídia (ícones mapeados no **ProjectsComponent**)

- **Back‑end**  
  - **Node.js** + **Express**  
    - Servidor em **server/index.js**

    - Middleware **cors()** e **express.json()**

    - Rotas REST em **server/routes/projects.js**

- **Banco de dados**  
  - **MySQL**  

- **Outros**  
  - Git & GitHub
