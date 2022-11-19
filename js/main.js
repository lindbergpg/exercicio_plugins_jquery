$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            telefone: 'Por favor, insira o seu número de telefone.',
            cpf: 'Por favor, insira o seu número de CPF.',
            endereco: 'Por favor, insira o seu endereço.',
            cep: 'Por favor, insira o seu número de CEP.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Exitem ${camposIncorretos} campos incorretos.`)
            } 
        }

    })
})