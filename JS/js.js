/**
 * Created by andre.ssilva on 19/10/2016.
 */
/*---Function para aparecer páginas que estão em Hide---*/
$(document).ready(function () {
  $('body').on('click', '.btnAvancarPizza', function (e) {
    e.preventDefault();
    validarCarrinho();

  });
  $('body').on('click', '.btnAvancarCadastro', function (e) {
    e.preventDefault();
    validarCadastro();

  });
  $('body').on('click', '.btnVoltarPizza', function (e) {
    e.preventDefault();
    $('.classPagamento').addClass('hide');
    $('.classCadastro').addClass('hide');
    $('.classFinalizacao').addClass('hide');
    $('.classCardapio').removeClass('hide');
    $('.cclassCardapio').show();
  });
  $('body').on('click', '.btnConfirmarPagamento', function (e) {
    e.preventDefault();
    ValidarPagamento();
  });
  $('body').on('click', '.btnVoltarCadastro', function (e) {
    e.preventDefault();
    $('.classPagamento').addClass('hide');
    $('.classCardapio').addClass('hide');
    $('.classFinalizacao').addClass('hide');
    $('.classCadastro').removeClass('hide');
    $('.classCadastro').show();
  });
  /*---Function Calcular Valor de compra e inserir Feedback na última página---*/
  function calculaValor() {
    var total = 0;
    var arrClasses = Array();
    $('.quantidade').each(function () {
      var cada = $(this);
      var valor = cada.next('.valor').val();
      var quantidade = cada.val();
      parseInt(quantidade);
      total += valor * quantidade;

      if (quantidade > 0) {
        arrClasses.push(quantidade + 'x ' + cada.next('.valor').attr("name"));
      }
    });

    pizzas = arrClasses.join(",");
    $('.pedido').html(pizzas);

    total = total.toFixed(2);
    total2 = total.toString().replace('.', ',');
    $('.total').html(total2);
  }
  /*---Function validar sómente quando possui algum item no carrinho---*/
  function validarCarrinho() {
    var quantidadePizzas = 0;
    $('.quantidade').each(function () {
      var quantidade = $(this).val();
      parseInt(quantidade);
      quantidadePizzas += quantidade;
    });

    if (quantidadePizzas == 0) {
      alert('Voce não escolheu seu pedido!');
      return false;
    }
    else {
      $('.classCardapio').addClass('hide');
      $('.classPagamento').addClass('hide');
      $('.classFinalizacao').addClass('hide');
      $('.classCadastro').removeClass('hide');
      $('.classCadastro').show();
    }

  }

  $('.quantidade').change(function () {
    calculaValor();
  });

  calculaValor();
});

/*---Função cadastro---*/
function validarCadastro() {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var endereco = document.getElementById('endereco').value;
  var numero = document.getElementById('numero').value;
  var complemento = document.getElementById('complemento').value;

  if (nome == "") {
    document.getElementById('errorNome').innerHTML = "Campo Obrigatório";
    document.getElementById('nome').style.borderColor = "red";

    return false;
  }

  if (nome.length < 3) {
    document.getElementById('errorNome').innerHTML = "Campo Insuficiente";
    document.getElementById('nome').style.borderColor = "red";

    return false;
  }

  if (telefone == "") {
    document.getElementById('errorTelefone').innerHTML = "Campo Obrigatório";
    document.getElementById('telefone').style.borderColor = "red";

    return false;
  }

  if (telefone.length < 9) {
    document.getElementById('errorTelefone').innerHTML = "Campo Insuficiente";
    document.getElementById('telefone').style.borderColor = "red";

    return false;
  }

  if (endereco == "") {
    document.getElementById('errorEndereco').innerHTML = "Campo Obrigatório";
    document.getElementById('endereco').style.borderColor = "red";

    return false;
  }

  if (numero == "") {
    document.getElementById('errorNumero').innerHTML = "Campo Obrigatório";
    document.getElementById('numero').style.borderColor = "red";

    return false;
  }
  $('.classCadastro').addClass('hide');
  $('.classCardapio').addClass('hide');
  $('.classFinalizacao').addClass('hide');
  $('.classPagamento').removeClass('hide');
  $('.classPagamento').show();
}

function removeeffectnome() {
  document.getElementById('errorNome').innerHTML = "";
  document.getElementById('nome').style.borderColor = "gray";
}

/*--- Function Telefone ---*/
function removeeffecttelefone() {
  document.getElementById('errorTelefone').innerHTML = "";
  document.getElementById('telefone').style.borderColor = "gray";
}

/*--- Function Confirma Endereço ---*/
function removeeffectendereco() {
  document.getElementById('errorEndereco').innerHTML = "";
  document.getElementById('endereco').style.borderColor = "gray";
}

/*---Function Confirma Numero---*/
function removeeffectnumero() {
  document.getElementById('errorNumero').innerHTML = "";
  document.getElementById('numero').style.borderColor = "gray";
}

/*---Function Validar pagamento---*/
function ValidarPagamento() {
  var numerocartao = document.getElementById('numerocartao').value;
  var validade = document.getElementById('validade').value;
  var cvc = document.getElementById('cvc').value;
  var nomecartao = document.getElementById('nomecartao').value;

  if (numerocartao == "") {
    document.getElementById('errorNumerocartao').innerHTML = "Campo Obrigatório";
    document.getElementById('numerocartao').style.borderColor = "red";

    return false;
  }

  if (numerocartao.length < 16) {
    document.getElementById('errorNumerocartao').innerHTML = "Campo Insuficiente";
    document.getElementById('numerocartao').style.borderColor = "red";

    return false;
  }

  if (validade == "") {
    document.getElementById('errorValidade').innerHTML = "Campo Obrigatório";
    document.getElementById('validade').style.borderColor = "red";

    return false;
  }

  else if (
    validade.indexOf('/') == -1
  ) {
    document.getElementById('errorValidade').innerHTML = "Formato Incorreto";
    document.getElementById('validade').style.borderColor = "red";

    return false;
  }
  if (cvc == "") {
    document.getElementById('errorCVC').innerHTML = "Campo Obrigatório";
    document.getElementById('cvc').style.borderColor = "red";

    return false;
  }

  if (cvc.length < 3) {
    document.getElementById('errorCVC').innerHTML = "Campo Insuficiente";
    document.getElementById('cvc').style.borderColor = "red";

    return false;
  }

  if (nomecartao == "") {
    document.getElementById('errorNomecartao').innerHTML = "Campo Obrigatório";
    document.getElementById('nomecartao').style.borderColor = "red";

    return false;
  }

  $('.classCardapio').addClass('hide');
  $('.classCadastro').addClass('hide');
  $('.classPagamento').addClass('hide');
  $('.classFinalizacao').removeClass('hide');
  $('.classFinalizacao').show();

  alert('Pagamento concluido com sucesso!')
}

/*---Function Confirma Numero---*/
function removeeffectnumerocartao() {
  document.getElementById('errorNumerocartao').innerHTML = "";
  document.getElementById('numerocartao').style.borderColor = "gray";
}

/*---Function Confirma Numero---*/
function removeeffectvalidade() {
  document.getElementById('errorValidade').innerHTML = "";
  document.getElementById('validade').style.borderColor = "gray";
}

/*---Function Confirma Numero---*/
function removeeffectcvc() {
  document.getElementById('errorCVC').innerHTML = "";
  document.getElementById('cvc').style.borderColor = "gray";
}

/*---Function Confirma Numero---*/
function removeeffectnomecartao() {
  document.getElementById('errorNomecartao').innerHTML = "";
  document.getElementById('nomecartao').style.borderColor = "gray";
}

