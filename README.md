# dev-automatizado
Uma base para iniciar um projeto [Front-End e Back-End] automatizado.
------

O facilitador é responsável por melhorar e agilizar o trabalho do desenvolvedor.

Para utilizar o facilitador será necessário ter o node.js e o npm instalado em sua máquina.
Também recomento o uso da IDE VSCode.
------

###### Estrutura

| Raiz          | N2            | N3         |
| ------------- |:-------------:| ----------:|
| Deploy/       | .html         |            |
| Deploy/       | .php          |            |
| Deploy/       | css/          | .css       |
| Deploy/       | js/           | app/       |
| Deploy/       | js/           | plugins/   |
| Deploy/       | scss/         | bootstrap/ |
| Deploy/       | scss/         | style/     |
| Deploy/       | ***           |            |
| .gitignore    |               |            |
| gulpfile.js   |               |            |
| package.json  |               |            |


------
###### Como Usar

Após ter acesso a estrutura do projeto, deve-se em primeiro passo instalar as dependências [packge.json].

EX [Terminal VSCode - Pasta Raiz]:
```javascript
npm i
```

Após a instalação já pode iniciar o seu projeto.
Deve-se em primeiro passo iniciar o facilitador. 
EX [Terminal VSCode - Pasta Raiz]:
```javascript
gulp
```