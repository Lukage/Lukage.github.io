/*-----------------------------------------------------------------------Lista de Sabores-----------------------------------------------------------------------*/
var sabores = [
	{sabor:'Alho e Oleo', ingredientes:'Alho e azeite de oliva'},
	{sabor:'Americana', ingredientes:'Presunto e queijo cheddar'},
	{sabor:'Ao Pesto', ingredientes:'Manjericâo, alho e azeite de oliva'},
	{sabor:'Atum', ingredientes:'Atum, cebola e catupiry'},
	{sabor:'Azeitonas', ingredientes:'Mussarela e azeitonas'},
	{sabor:'Bacon', ingredientes:'Bacom e Mussarela'},
	{sabor:'Basca', ingredientes:'Bacon, rodelas de tomate e catupiry'},
	{sabor:'Brocolis', ingredientes:'Brocolis e catupiry'},
	{sabor:'Calabresa', ingredientes:'Calabresa e quejo'},
	{sabor:'Calabresa picante', ingredientes:'Calabresa picante, cebola e azeitonas.'},
	{sabor:'Chester', ingredientes:'Chester, rodelas de tomate e catupiry'},
	{sabor:'Cinco Queijos', ingredientes:'Gorgonzola, provolone, catupiri, cheddar e mussarela'},
	{sabor:'coraçõa', ingredientes:'mussarela, catupiry e coração'},
	{sabor:'Du Chef', ingredientes:'Palmito, champignon e bacon'},
	{sabor:'Entreverinho', ingredientes:'Iscas de carne, coracao, tomate, cebola, alho, frango e bacon'},
	{sabor:'Filé', ingredientes:'File com catupiry'},
	{sabor:'Filé a portuguesa', ingredientes:'File, cebola e pimentao'},
	{sabor:'Frango com Catupiry', ingredientes:'Frango e Catupiry'},
	{sabor:'Jardineira', ingredientes:'Palmito, milho verde e azeitonas verdes fatiadas'},
	{sabor:'Lombinho', ingredientes:'Lombo canadense, azeitonas e provolone'},
	{sabor:'Lombinho com catupiry', ingredientes:'Lombo canadense, azeitonas e catupiry'},
	{sabor:'Mafiosa', ingredientes:'Beringela, calabresa picante e parmesão'},
	{sabor:'Marguerita', ingredientes:'Manjericao, rodelas de tomate'},
	{sabor:'Mexicana', ingredientes:'Mussarela, calabresa picante, parmesao e cebola'},
	{sabor:'Napolitana', ingredientes:'Parmesao, rodelas de tomate e azeitonas'},
	{sabor:'Palmito', ingredientes:'Palmito, rodelas de tome e catupiry'},
	{sabor:'Portuguesa', ingredientes:'Calabresa, cebola, ovos e azeitonas'},
	{sabor:'Suprema', ingredientes:'Calabresa picante, champignon, azeitonas e cebola'},
	{sabor:'Toscana', ingredientes:'Presunto, catupiry e bacon'},
	{sabor:'Tropical', ingredientes:'Lombo canadense, abacaxi e catupiry'},
	{sabor:'Vegetariana', ingredientes:'Brocolis, rodelas de tomate, palmito e azeitonas'},
	{sabor:'Prestigio', ingredientes:'Mussarela, coco ralado e chocolate preto'},
	{sabor:'Prestigio branco', ingredientes:'Mussarela, coco ralado e chocolate branco'},
	{sabor:'Mms', ingredientes:'Mussarela, chocolate preto, chocolate branco e confeitos coloridos de chocolate Mms'},
	{sabor:'Suprema Chocolate com Morangos', ingredientes:'Mussarela, chocolate preto, chocolate branco e morangos'},
	{sabor:'Chocolate preto com morango', ingredientes:'Mussarela, chocolate preto e morangos'},
	{sabor:'Chocolate branco com morango', ingredientes:'Mussarela, chocolate branco e morangos'}
]

var listaSabores = "";
for (i=0; i<sabores.length; i++){
	listaSabores += "<div class='Sabor'>"+sabores[i]["sabor"]+"</div>";
	listaSabores += "<div class='Ingredientes'>"+sabores[i]["ingredientes"]+"</div>";
	if(i<(sabores.length-1)){
		listaSabores += "<hr class='Separacao' />";
	}
}
document.getElementById("CaixaLista").innerHTML = listaSabores;

/*-----------------------------------------------------------------------Faça um Pedido-----------------------------------------------------------------------*/

var listaSaboresForm = "";
for (i=0; i<sabores.length; i++){
	listaSaboresForm += "<option>"+sabores[i]["sabor"]+"</option>";
}
document.getElementById("p4").innerHTML = listaSaboresForm;

function inserindoResposta(i){
	var id = "p"+i;
	document.getElementById(id).className = 'campoTexto';
}

function validarResposta(i){
	var id = "p"+i;
	var formVazio = "";
	var formUsuario = document.getElementById(id).value;
	
	if(formVazio.localeCompare(formUsuario)==0){
		document.getElementById(id).className = 'errado';
	}
	else{
		document.getElementById(id).className = 'certo';
	}
}

function fazerPedido(i){
	var formVazio = "";
	var formUsuario1 = document.getElementById("p1").value;
	var formUsuario2 = document.getElementById("p2").value;
	var formUsuario3 = document.getElementById("p3").value;
	
	if((formVazio.localeCompare(formUsuario1)==0)||(formVazio.localeCompare(formUsuario2)==0)||(formVazio.localeCompare(formUsuario3)==0)){
		window.alert("Preencha todos os campos para finalizar o pedido!");
	}
	else{
		window.alert("O pedido for realizado com sucesso!");
		window.location.reload()
	}
}

/*-----------------------------------------------------------------------Mudança de Página-----------------------------------------------------------------------*/

function mostrarHome() {
	document.getElementById('Home').className = 'Aparecer';
	document.getElementById('Sabores').className = 'Desaparecer';
	document.getElementById('Pedidos').className = 'Desaparecer';
	document.getElementById('Pizzas').className = 'Desaparecer';
}
function mostrarSabores() {
	document.getElementById('Home').className = 'Desaparecer';
	document.getElementById('Sabores').className = 'Aparecer';
	document.getElementById('Pedidos').className = 'Desaparecer';
	document.getElementById('Pizzas').className = 'Desaparecer';
}
function mostrarPedidos() {
	document.getElementById('Home').className = 'Desaparecer';
	document.getElementById('Sabores').className = 'Desaparecer';
	document.getElementById('Pedidos').className = 'Aparecer';
	document.getElementById('Pizzas').className = 'Desaparecer';
}
function mostrarPizzas() {
	document.getElementById('Home').className = 'Desaparecer';
	document.getElementById('Sabores').className = 'Desaparecer';
	document.getElementById('Pedidos').className = 'Desaparecer';
	document.getElementById('Pizzas').className = 'Aparecer';
}

