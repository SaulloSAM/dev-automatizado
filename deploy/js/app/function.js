/**
 * Valida o valor de input se é ou não um e-mail.
 * @param {*} email 
 * @returns true | false
 */
// function validadeEmail (email) {
//     var validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return validate.test( email );
// }

/**
 * Efetua uma chamada ajax para cadastrar informações no banco via php
 * @param {*} id_form
 */
// function cadastrar (id_form) {
//     var result = 0;

//     $.ajax({       
//         type: 'POST',
//         url: $(id_form).attr('action'),
//         data: $(id_form).serialize(),
//         async: false,
//         success: function (data) {

//             if ($.trim(data) != 0) {
//                 result = data ;

//             } else {
//                 result = data ;
//             }

//         }
//     });

//     return result;
// }

/**
 * Ao clicar em botões com o id 'sair'
 * o sistems irá deslogar o usuário e redirecionar para a página de Login
 */
// $("#sair").click (function() {
//     window.sessionStorage.setItem('logado', 0);
//     window.location = '../login/';
// })

/**
 * Ao clicar no botão com o id 'logar'.
 * O sistems irá efetuar uma chamada ajax para validar os dados de acesso.
 */
// $("#logar").click (function() {
//     efetuarLogin();
// });

/**
 * Valida se o usuário tem ou não permissão de acesso no sistema.
 * Se tiver, adicionamos no [Session Storage] uam chave para validação de usuário.
 */
// function efetuarLogin() {

//     $.ajax({
//         type: 'POST',
//         url: $('#form_login').attr('action'),
//         data: $('#form_login').serialize(),
//         async: false,
//         success: function (data) {
//             if ($.trim(data) != 0) {
//                 // window.sessionStorage.setItem('logado', 1);
//                 window.location = '../clientes/';
//             } else {
//                 $("#erro-login").removeClass("d-none");
//             }
//         }
//     }); 

// }

/**
 * Verifica se o usuário tem permissão de acesso pela [Session Storage].
 * É apenas mais uma forma de validação.
 * Deve-se validar via php se o login do usuário bate com as permissões de acordo com o banco.
 */
// function verificarSessao () {

//     let url  = window.location.href; 
//     let pg_login = url.split("/")[url.split("/").length -1];

//     let session = window.sessionStorage.getItem('logado');

//     let equals = pg_login.localeCompare('index.php');
    
//     if ( 1 == equals || -1 == equals ) {
//         if (session === '1'){
//             $('body').removeClass("d-none");
//         } else {
//             window.sessionStorage.setItem('logado', 0);
//             window.location = 'index.php';
//         }
//     }
// }
/* Fazendo uma chamada para verificar ao carregar a página */
// verificarSessao();

$('input[data-upper=first]').keyup (function () {
    let first = $(this);
    let val = first.val();
    if (val.length == 1) { first.val(val.toUpperCase()); }
});