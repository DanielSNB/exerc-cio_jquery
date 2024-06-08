$(document).ready(function() {
    // Mostrar o formulário de nova tarefa quando o botão for clicado
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Esconder o formulário de nova tarefa quando o botão cancelar for clicado
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    // Adicionar nova tarefa à lista quando o formulário for submetido
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Capturar o valor do campo de texto
        const novaTarefa = $('#nova-Tarefa').val().trim();
        
        // Verificar se o campo não está vazio
        if (novaTarefa) {
            // Criar um novo item de lista com a tarefa
            const novaTarefaItem = $('<li>').text(novaTarefa);
            
            // Adicionar a nova tarefa à lista
            $('#lista-tarefas').append(novaTarefaItem);
            
            // Limpar o campo de texto
            $('#nova-Tarefa').val('');
            
            // Esconder o formulário
            $('form').slideUp();
        }
    });

    // Aplicar ou remover a linha em cima do texto ao clicar no item da lista
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completa');
    });
});

