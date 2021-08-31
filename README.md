# AdmFinTpFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Criando um novo componente

- Criar o componente com o Angular CLI: `$ ng generate component meu-componente`

- Criar uma nova tab para o seu componente
  - Abrir arquivo `src/app/app.component.html`
    - Altere o menu com tabs para adicionar uma tab para o seu componente:
      ```html
        <!-- Menu com tabs -->
        ...
        <li class="nav-item" [ngClass]="tab == 'app-meu-componente' ? 'active' : ''">
          <a class="nav-link" href="#" (click)="selecionaTab('app-meu-componente')">
            app-meu-componente
          </a>
        </li>
      ```
    - Adicione o codigo para tab do seu componente
      ```html
        ...
        <!-- Tab para o componente "app-meu-componente" -->
        <div class="tab" *ngIf="tab == 'app-meu-componente'">
          <app-meu-componente></app-meu-componente>
        </div>
      ```
  
- Implemente seu componente nos arquivos gerados pelo Angular CLI `src/app/meu-componente/...`)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
