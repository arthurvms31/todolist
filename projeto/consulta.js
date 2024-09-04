// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-consulta');
    const listaConsultas = document.getElementById('lista-consultas');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = document.getElementById('data').value;
        const descricao = document.getElementById('descricao').value;

        if (data && descricao) {
            adicionarConsulta(data, descricao);
            form.reset(); // Limpa o formulário após a submissão
        }
    });

    function adicionarConsulta(data, descricao) {
        const item = document.createElement('li');
        item.innerHTML = `
            ${data} - ${descricao}
            <button onclick="removerConsulta(this)">Excluir</button>
        `;
        listaConsultas.appendChild(item);
    }

    window.removerConsulta = function(button) {
        button.parentElement.remove();
    }
});
