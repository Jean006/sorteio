function verificarAcesso() {

    const numerocartao = parseInt(document.getElementById('cardNumber').value);
    let mensagemAcesso = ''; if (numerocartao >= 1000 && numerocartao <= 1999) { mensagemAcesso = 'Acesso total a todas as áreas restritas permitido.'; }
    else if (numerocartao >= 2000 && numerocartao <= 2999) { mensagemAcesso = 'Acesso limitado a algumas áreas restritas permitido.'; }
    else if (numerocartao > 3000) { mensagemAcesso = 'Acesso negado. Não é permitido acessar as áreas restritas.'; }
    else { mensagemAcesso = 'Número de cartão inválido. Verifique o número digitado.'; }
    document.getElementById('resultadoAcesso').innerText = mensagemAcesso;
} 