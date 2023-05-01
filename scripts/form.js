$("#cpf").mask("000.000.000-00"); // mascara do campo cpf usando jquery plugin.
$("#num_tel").mask("(00) 00000-0000"); // mascara do campo num_tel usando jquery plugin.

function validCPF(cpf) {
    var campo_cpf = document.getElementById("cpf").value;
    var cpf = campo_cpf.replace(/\.|-/g, "");

    var soma;
    var resto;
    soma = 0;

    if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" ||
        cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" ||
        cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" ||
        cpf == "99999999999") {
        document.getElementById("cpf").value = "";
        return alert("CPF inválido!");
    }

    for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) {
        document.getElementById("cpf").value = "";
        return alert("CPF inválido!");
    }

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) {
        document.getElementById("cpf").value = "";
        return alert("CPF inválido!");
    }

    // return alert("CPF válido!"); desnecessario do ponto de vista do usuario.
}