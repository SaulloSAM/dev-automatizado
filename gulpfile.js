/* ========================================================================= */
/* Adiciona os módulos instalados                                            */
/* ========================================================================= */
const gulp = require('gulp');                           /* Gerencia um Servidor para teste em Desenvolvimento   */
const sass = require('gulp-sass');                      /* Compilar e criar arquivos mini de css                */
const concat = require('gulp-concat');                  /* Junta n arquivos .js em um único arquivo .js         */
const uglify = require('gulp-uglify-es').default;       /* Compila .js                                          */
const autoprefixer = require('gulp-autoprefixer');      /* Cria os prefixos do css automaticamente              */
const browserSync = require('browser-sync').create();   /* Gerencia o browser [atualização, inicialização]      */

/* Variáveis */
const proxyXampp = "http://localhost/site/mpsystems-app-adm/deploy/";
const portXampp = 8080;

const path = "deploy/";

/* ========================================================================= */
/* Estrutura de arquivos                                                     */
/* [Qual quer alteração na estrutura, deve-se alterar as funções abaixo]     */
/* ========================================================================= */
/*   
    ../
        deploy/
            -- Arquivos em HTML e/ou PHP
            css/
                -- Arquivos compilado pelo Gulp
            js/
                -- Arquivos compilado pelo Gulp
                plugiuns/
                apps/
            scss/
                -- Seus arquivos .scss
                bootstrap/
        .gitignore
        gulpfile.js
        package.json
*/

/* ========================================================================= */
/* Funções                                                                   */
/* ========================================================================= */

/**
 * [Estilo Próprio do Site]
 * Compilar SCSS e Adicionar automaticamente os prefixos dos browser.
 */
function compilaSass () {
    return gulp.src('deploy/scss/style/*.scss')
               .pipe(sass({ outputStyle: 'compressed' }))
               .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
               .pipe(gulp.dest('deploy/css/'))
               .pipe(browserSync.stream())
}

/** 
 * [Bootstrap]
 * Compilar SCSS e Adicionar automaticamente os prefixos dos browser.
 */
function compilaBootstrap () {
    return gulp.src('deploy/scss/bootstrap/**/*.scss')
               .pipe(sass({ outputStyle: 'compressed' }))
               .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
               .pipe(gulp.dest('deploy/css/'))
               .pipe(browserSync.stream())
}

/**
 * [App do Usuário]
 * Minimiza os arquivos js e junta todos em um novo arquivo app.js
 */
function gulpJS () {
    return gulp.src('deploy/js/app/*.js')
               .pipe(concat('app.js'))
               .pipe(uglify())
               .pipe(gulp.dest('deploy/js'))
               .pipe(browserSync.stream())
}

/**
 * [Plugins - Obrigatório para rodar o bootstrap]
 * Minimiza os arquivos js automaticamente de acordo com a ordem definida.
 */
function addPlugins () {
    return gulp.src([
        'deploy/js/plugins/jquery.js',
        'deploy/js/plugins/popper.js',
        'deploy/js/plugins/bootstrap.js'
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('deploy/js/'))
    .pipe(browserSync.stream())
}

/**
 * Concexão com o XAMPP.
 */
function browser () {
    browserSync.init({
        proxy: proxyXampp,
        port: portXampp
    });
}

/**
 * Essa função fica verificando se houve alguma alteração em qualquer arquivo [Indicado]
 * foi alterado e executa uma determinada função para tal arquivo.
 * ex: ao modificar um js/app, o sistema automaticamente compila esse novo arquivo e substitui pelo anterior.
 */
function watch () {
    gulp.watch('deploy/scss/*.scss', compilaSass)
    gulp.watch('deploy/scss/bootstrap/**/*.scss', compilaBootstrap)
    gulp.watch('deploy/js/app/*.js', gulpJS)
    gulp.watch('deploy/js/plugins/*.js', addPlugins)
    gulp.watch('deploy/**/*.php').on('change', browserSync.reload)
}

/* ========================================================================= */
/* Tarefas                                                                   */
/* ========================================================================= */
gulp.task('sass', compilaSass);
gulp.task('bootstrap', compilaBootstrap);
gulp.task('gulpJS', gulpJS);
gulp.task('browser-sync', browser);
gulp.task('watch', watch);
gulp.task('addPlugins', addPlugins);

/* Defualt */
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'bootstrap', 'gulpJS', 'addPlugins'));