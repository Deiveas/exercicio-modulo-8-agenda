const form = document.getElementById('form-agenda');
let linhas = '';
let nomeAgendaArray = [];

function validaNomeAgenda(nomeCompleto) {
    const nomeAgendaArray = nomeCompleto.trim().split(' ');
    return nomeAgendaArray.length >= 2;

}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const mensagemError = `"Digite um nome completo por favor"`;
    const mensagemValid = ` `;



    if (!validaNomeAgenda(inputNomeAgenda.value)) {
        const spanMensagemError = document.getElementById('mensagem-error');
        spanMensagemError.innerHTML = mensagemError;
        spanMensagemError.style.display = 'block';
        return;

    } else {
        const spanMensagemValid = document.getElementById('mensagem-valid');
        spanMensagemValid.innerHTML = mensagemValid;
        spanMensagemValid.style.display = 'none';
        const spanMensagemError = document.getElementById('mensagem-error');
        spanMensagemError.innerHTML = mensagemError;
        spanMensagemError.style.display = 'none';

    }

    const inputTelAgenda = document.getElementById('tel-agenda');
    const statusAgenda = document.getElementById('status-agenda');

    if (nomeAgendaArray.includes(inputNomeAgenda.value)) {
        alert(`NOME JÁ EXISTENTE !! "${inputNomeAgenda.value}" DIGITE UM NOVO NOME!!`);
    } else {
        let linha = '<tr>';

        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelAgenda.value}</td>`;
        linha += `<td style="background-color: #64FE2E; display: inline-block;">${statusAgenda.value = "CADASTRADO COM SUCESSO"}</td>`;
        linha += `</tr>`;

        linhas += linha;

        nomeAgendaArray.push(inputNomeAgenda.value);
    }

    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;

    inputNomeAgenda.value = '';
    inputTelAgenda.value = '';

});
