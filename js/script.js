 /*-----------------------------------------------------------------------SEMI - PRONTO-----------------------------------------------------------------------*/
  var resultado = 0;
  var valor1 = "";
  var valor2 = "";
  var filtroEletro = false;
  var filtroCelulares = false;
  var filtroTv = false;
  var filtroPerfumes = false;
  var filtroGratis = false;
  var filtroPago = false;
  var filtroBuscar = "";
  
  var produtos = 
 [
	{ descricao: 'Celular Samsung Galaxy J5 Duos J500m Dourado 16gb Sem Juros', preco: 710, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Samsung Galaxy J7 Prime 5.5 32gb + Chip Tim Grátis', preco: 999, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Moto G5 Android 7.0 Tela 5 32gb Ouro + Chip Tim', preco: 789, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Apple Iphone 7 Plus 128gb Special Edition Red', preco: 4129, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Samsung Galaxy J1 Mini Prime Dual Chip 8gb (dourado)', preco: 354, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Asus Zenfone 3 Max Cinza Dual Chip Tela 5.2 16gb 4g', preco: 780, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Samsung Galaxy C5 32gb 4g 100% Original Novo 4gb Ram', preco: 1199, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Motorola Moto G4 Play 16gb Dual 4g 5 Xt1602 Branco', preco: 588, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Blu Advance L2 Smartphone 4.0 Android 6.0 Orginal 3g', preco: 217, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Tv Samsung 32 Tela Trincada Nod: Un32gh4003gxzd', preco: 150, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Caneta Retoque Pinta Risco - Móveis Eletrodomésticos Branca', preco: 37, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Smart Tv Led 40 Semp Toshiba Full Hd Wi-fi Tcl 40s4700s', preco: 1599, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Tv Led 32 Lg Hd 1 Hdmi 1 Usb Conversor Digital 32lw300c', preco: 999, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Máq. Cortar Cabelo Prof. Gama Italy 110 Ou 220 Frete Grátis', preco: 80, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Modelador Cachos Nano Titanium Cacheador Preto Azul Vermelho', preco: 84, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Celular Samsung Galaxy J1 Mini Dual Chip 8gb Wi-fi 2 Câmeras', preco: 338, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Celular Lg K8 4g 8gb Quad Core Dualchip Android 6.0 Original', preco: 465, categoria: 'celulares', frete: 'pago' }, 
	{ descricao: 'Celular Lenovo Vibe K6 5.0pol 16gb 2 Chips + Brinde', preco: 640, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Tv Led 32 Mtek Mk32cn9 Com Conversor Digital Usb Hdmi', preco: 900, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Celular Smartphone Lg K10 5.3 Dual Sim 16gb', preco: 570, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Tv Led 32 Lg Hd 1 Hdmi 1 Usb Conversor Digital 32lw300c', preco: 99, categoria: 'celulares', frete: 'gratis' }, 
	{ descricao: 'Tv Led 32 Polegadas Semp Toshiba Hd Usb Hdmi Dl325', preco: 980, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Tv Led 43 Polegadas Lg Full Hd Usb Hdmi - 43lw300c', preco: 1700, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Smart Tv Led 40 Polegadas Semp Toshiba Full Hd Wif', preco: 1592, categoria: 'tv', frete: 'pago' }, 
	{ descricao: 'Máquina De Acabamento Andis Gtx - 110v', preco: 345, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Smart Tv Led 32 Polegadas Samsung Hd Usb Hdmi - Un', preco: 1194, categoria: 'tv', frete: 'pago' }, 
	{ descricao: 'Caixa De Som Bluetooth Logitech X100 Portátil Wireless Orig', preco: 125, categoria: 'tv', frete: 'pago' }, 
	{ descricao: 'Tv 40 Polegadas Semp Toshiba Hd Usb Hdmi Dl4053f', preco: 1529, categoria: 'tv', frete: 'pago' }, 
	{ descricao: 'Smart Tv Monitor Lg 24 Polegadas Wifi Led Hd Hdmi Usb', preco: 818, categoria: 'tv', frete: 'pago' }, 
	{ descricao: 'Tv Monitor Led Panasonic 19 Tc-19d300b', preco: 510, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Chapinha Prancha Profissional Nano Titanium 1 1/4 Até 450ºf', preco: 40, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Smart Tv Led 32 Samsung Hd Wi-fi Integrado Un32j4300agxzd', preco: 1160, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Tv Led 32 Samsung Hd 2 Hdmi 1 Usb Com 32nd450', preco: 999, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Tv Led 16 Philco Hd Com Conversor Digital - Ph16d10d', preco: 528, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Tv Philco 32 Ph32m3 * Com Defeito Tela', preco: 270, categoria: 'tv', frete: 'gratis' }, 
	{ descricao: 'Kit Wahl Máquina De Cortar Cabelo E Barba Deluxe Groom Pro', preco: 249, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Magic Leverag Cachos Curl Formes Modelador 16 Rolinhos !', preco: 9, categoria: 'eletro', frete: 'gratis' }, 
	{ descricao: 'Celular Motorola Xt1672 Moto G5 Ouro 32gb + Chip Tim', preco: 849, categoria: 'celulares', frete: 'pago' }, 
	{ descricao: 'Celular Smartphone Lg K10 Dual-sim Tela 5.3 16gb Android', preco: 565, categoria: 'celulares', frete: 'pago' }, 
	{ descricao: 'Good Girl Eau De Parfum Carolina Herrera 80 Ml / Original', preco: 381, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume La Vie Est Belle Edp 75 Ml Original + 2 Amostras', preco: 286, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume Importado Ferrari Black 125ml Original + Brinde', preco: 80, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume La Vie Est Belle Edp 75ml | Lacrado 100% Original', preco: 292, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Celular Smartphone Lg K5 8gb 5.0 Mp 3g Android 5.1 Original', preco: 339, categoria: 'celulares', frete: 'pago' }, 
	{ descricao: 'Chapinha Nano Titanium Babyliss Pro 1 1/4 Até 450ºf', preco: 130, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Chapa Profissional 200ºc / 230ºc Íons - Titanium 450 - Taiff', preco: 381, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Capa De Renda Branca Universal P/ Eletrodoméstico Batedeira', preco: 12, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Suporte Para Eletrodomésticos Até 250kg Ajustável Polipropil', preco: 137, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Gira Facil Cromado - Suporte Para Eletrodoméstico', preco: 160, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Pés Para Eletrodomésticos - Gira Facil Cromado', preco: 250, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Suporte Para Eletrodomésticos Gira Fácil Branco', preco: 135, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Perfume Jean Paul Gaultier Classic 100ml Original E Lacrado', preco: 266, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Moveis Planejados Casa Completa', preco: 15000, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Pés Para Eletrodomésticos - Gira Facil Cromado', preco: 210, categoria: 'eletro', frete: 'pago' }, 
	{ descricao: 'Perfume Silver Scent 100ml Jacques Bogart 100% Original', preco: 99, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume Arsenal Gold Masculino Edp 100ml - 100% Original.', preco: 122, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: '3 Perfume Up Essência Fragrâncias 22, 27, 30, 32, 36, 44', preco: 50, categoria: 'perfumes', frete: 'gratis' }, 
	{ descricao: 'Perfume Traduções Gold 19 Masculino One Million Hinode', preco: 120, categoria: 'perfumes', frete: 'gratis' }, 
	{ descricao: 'Perfume Dolce &amp; Gabbana 100ml Feminino Original E Lacrado', preco: 246, categoria: 'perfumes', frete: 'gratis' }, 
	{ descricao: 'Perfume One Million 100ml Usa 100% Original- Selo Original', preco: 265, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume Ferrari Black 125ml 100% Original Masculino', preco: 76, categoria: 'perfumes', frete: 'pago' }, 
	{ descricao: 'Perfume Silver Scent 100ml Jacques Bogart 100% Original', preco: 70, categoria: 'perfumes', frete: 'pago' }
 ]
 
/*-----------------------------------------------------------------------Função Lista de Produtos Sem Filtro-----------------------------------------------------------------------*/  
	var tamanhoArray = produtos.length;
	for (i = 0; i < tamanhoArray; i++) {
		if(i==(tamanhoArray-1)){
			var template = document.querySelector("#templateListaProdutos2");
		}
		else{
			var template = document.querySelector("#templateListaProdutos");
		}
		lista_h2 = template.content.querySelectorAll("h2");
		
		var descricao = produtos[i]["descricao"];
		var preco = produtos[i]["preco"];
		var categoria = produtos[i]["categoria"];
		var frete = produtos[i]["frete"];
		
		preco = "R$ " + preco + ",00";
		
		if(categoria.localeCompare("celulares")==0){
			categoria = "Celulares";
		}
		if(categoria.localeCompare("tv")==0){
			categoria = "Televisores";
		}
		if(categoria.localeCompare("eletro")==0){
			categoria = "Eletrodomésticos";
		}
		if(categoria.localeCompare("perfumes")==0){
			categoria = "Perfumes";
		}
		if(frete.localeCompare("pago")==0){
			frete = "Frete Pago";
		}
		if(frete.localeCompare("gratis")==0){
			frete = "Frete Grátis";
		}
		
		lista_h2[0].textContent = descricao;
		lista_h2[1].textContent = preco;
		lista_h2[2].textContent = categoria;
		lista_h2[3].textContent = frete;
		
		var linha = document.importNode(template.content, true);
		document.querySelector("#listaDivProdutos").appendChild(linha);
	}
/*-----------------------------------------------------------------------Função Número Total de Produtos Gerais-----------------------------------------------------------------------*/  
	document.getElementById("NumeroTotalProdutos").innerHTML = produtos.length;
/*-----------------------------------------------------------------------Função Número Endontrados Sem Filtro-----------------------------------------------------------------------*/
	document.getElementById("NumeroTotalProdutosEncontrados").innerHTML = produtos.length;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Grátis"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "gratis";
		valor2 = produtos[i]["frete"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Grátis (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosGratis").innerHTML = resultado;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Pagos"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "pago";
		valor2 = produtos[i]["frete"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Pago (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosPago").innerHTML = resultado;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Celulares"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "celulares";
		valor2 = produtos[i]["categoria"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Celulares (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosCelulares").innerHTML = resultado;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Televisores"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "tv";
		valor2 = produtos[i]["categoria"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Tv (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosTv").innerHTML = resultado;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Eletrodomésticos"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "eletro";
		valor2 = produtos[i]["categoria"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Eletrodomésticos (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosEletro").innerHTML = resultado;
/*-----------------------------------------------------------------------Função Número Total de Produtos "Perfumes"-----------------------------------------------------------------------*/ 
	resultado = 0;
	for(var i=0; i<produtos.length; i++){
		valor1 = "perfumes";
		valor2 = produtos[i]["categoria"];
		if(valor1.localeCompare(valor2)==0){
			resultado += 1; 
		}
	}
	resultado = "Perfumes (" + resultado + ")";
	document.getElementById("NumeroTotalProdutosPerfumes").innerHTML = resultado;
/*-----------------------------------------------------------------------Funções Mudança de Estado e Classe do Filtro-----------------------------------------------------------------------*/ 
	function mudarFiltro(estado){
		if(estado == false){
			estado = true;
		}
		else{
			estado = false;
		}
		return estado;
	}
	function mudarClasse(classe){
		classeNome = document.getElementById(classe).className; 
		if(classeNome == 'FiltroDesativo'){
			document.getElementById(classe).className = 'FiltroAtivo';
		}
		else{
			document.getElementById(classe).className = 'FiltroDesativo';
		}
	}
/*-----------------------------------------------------------------------Funções do Botão Buscar-----------------------------------------------------------------------*/ 
	function buscarFocus(){
		document.getElementById('Buscar').className = 'BuscarFocus';
		document.getElementById('Buscar').value = '';
	}
	function buscarBlur(){
		document.getElementById('Buscar').className = 'BuscarBlur';
		valor1 = "";
		valor2 = document.getElementById("Buscar").value;
		if(valor1.localeCompare(valor2)==0){
			document.getElementById('Buscar').value = 'Buscar por...';
		}
	}
/*-----------------------------------------------------------------------Funções de Execução do Filtro-----------------------------------------------------------------------*/ 

	function filtroDeBusca() {
		if(event.keyCode == 13) {
			verificarFiltrosAtivos();
			verificarListaProdutos();
		}
	}
	function filtroEletroF() {
		filtroEletro = mudarFiltro(filtroEletro);
		mudarClasse('NumeroTotalProdutosEletro');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
	function filtroCelularesF() {
		filtroCelulares = mudarFiltro(filtroCelulares);
		mudarClasse('NumeroTotalProdutosCelulares');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
	function filtroTvF() {
		filtroTv = mudarFiltro(filtroTv);
		mudarClasse('NumeroTotalProdutosTv');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
	function filtroPerfumesF() {
		filtroPerfumes = mudarFiltro(filtroPerfumes);
		mudarClasse('NumeroTotalProdutosPerfumes');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
	function filtroPagoF() {
		filtroPago = mudarFiltro(filtroPago);
		mudarClasse('NumeroTotalProdutosPago');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
	function filtroGratisF() {
		filtroGratis = mudarFiltro(filtroGratis);
		mudarClasse('NumeroTotalProdutosGratis');
		verificarFiltrosAtivos();
		verificarListaProdutos();
	}
/*-----------------------------------------------------------------------Função Lista de Filtros Ativos-----------------------------------------------------------------------*/  
	function verificarFiltrosAtivos() {
		var node = document.getElementById("listaFiltrosAtivos");
		if (node.parentNode) {
		  node.parentNode.removeChild(node);
		}
		var templateFiltros = document.querySelector("#templateDivListaFlitrosAtivos");
		var linha = document.importNode(templateFiltros.content, true);
		document.querySelector("#campoFiltrosAtivos").appendChild(linha);
		
		if(filtroEletro==true){
			criarFiltroAtivo("Eletro","filtroEletroF()");
		}
		if(filtroCelulares==true){
			criarFiltroAtivo("Celulares","filtroCelularesF()");
		}
		if(filtroTv==true){
			criarFiltroAtivo("TV","filtroTvF()");
		}
		if(filtroPerfumes==true){
			criarFiltroAtivo("Perfumes","filtroPerfumesF()");
		}
		if(filtroGratis==true){
			criarFiltroAtivo("Frete Grátis","filtroGratisF()");
		}
		if(filtroPago==true){
			criarFiltroAtivo("Frete Pago","filtroPagoF()");
		}
	}
	function criarFiltroAtivo(texto,funcao) {
		var templateFiltros = document.querySelector("#templateListaFlitrosAtivos");
		aFiltro = templateFiltros.content.querySelector("a");
		aFiltro.textContent = texto + " x";
		aFiltro.setAttribute('onclick', funcao);
		var linha = document.importNode(templateFiltros.content, true);
		document.querySelector("#listaFiltrosAtivos").appendChild(linha);
	}
/*-------------------------------------------------------------Função de Verificações de Filtros Ativos para a Lista de Produtos-------------------------------------------------------------*/ 
	var arrayAuxiliar = produtos.slice(0);
	var arrayEletro = [];
	var arrayCelulares = [];
	var arrayTv = [];
	var arrayPerfumes = [];
	var arrayPago = [];
	var arrayGratis = [];
	var arrayBuscar = [];
	var arrayFinalCategoria = [];
	var arrayFinalFrete = [];
	var arrayFinal = [];
	
	function verificarListaProdutos() {
		var node = document.getElementById("listaDivProdutos");
		if (node.parentNode) {
		  node.parentNode.removeChild(node);
		}
		var templateProdutos = document.querySelector("#templateDivListaProdutos");
		var linha = document.importNode(templateProdutos.content, true);
		document.querySelector("#listaProdutos").appendChild(linha);
		

		/*-Cria um array a partir do filtro "Categoria" que estiver ativo-*/
		if(filtroEletro==false && filtroCelulares==false && filtroTv==false && filtroPerfumes==false){
			arrayFinalCategoria = [];
			arrayFinalCategoria = arrayFinalCategoria.concat(arrayAuxiliar);
		}
		else{	
			arrayEletro = [];
			if(filtroEletro==true){
				for(var i=0; i<arrayAuxiliar.length; i++){
					valor1 = "eletro";
					valor2 = arrayAuxiliar[i]["categoria"];
					if(valor1.localeCompare(valor2)==0){
						arrayEletro = arrayEletro.concat(arrayAuxiliar[i]);
					}
				}
			}
			arrayCelulares = [];
			if(filtroCelulares==true){
				for(var i=0; i<arrayAuxiliar.length; i++){
					valor1 = "celulares";
					valor2 = arrayAuxiliar[i]["categoria"];
					if(valor1.localeCompare(valor2)==0){
						arrayCelulares = arrayCelulares.concat(arrayAuxiliar[i]);
					}
				}
			}
			arrayTv = [];
			if(filtroTv==true){
				for(var i=0; i<arrayAuxiliar.length; i++){
					valor1 = "tv";
					valor2 = arrayAuxiliar[i]["categoria"];
					if(valor1.localeCompare(valor2)==0){
						arrayTv = arrayTv.concat(arrayAuxiliar[i]);
					}
				}
			}
			arrayPerfumes = [];
			if(filtroPerfumes==true){
				for(var i=0; i<arrayAuxiliar.length; i++){
					valor1 = "perfumes";
					valor2 = arrayAuxiliar[i]["categoria"];
					if(valor1.localeCompare(valor2)==0){
						arrayPerfumes = arrayPerfumes.concat(arrayAuxiliar[i]);
					}
				}
			}
			
			arrayFinalCategoria = [];
			arrayFinalCategoria = arrayFinalCategoria.concat(arrayEletro, arrayCelulares, arrayTv, arrayPerfumes);
		}
		/*-Cria um array a partir do filtro "Frete" que estiver ativo-*/
		if(filtroPago==false && filtroGratis==false){
			arrayFinalFrete = [];
			arrayFinalFrete = arrayFinalFrete.concat(arrayFinalCategoria);
		}
		else{
			arrayPago = [];
			if(filtroPago==true){
				for(var i=0; i<arrayFinalCategoria.length; i++){
					valor1 = "pago";
					valor2 = arrayFinalCategoria[i]["frete"];
					if(valor1.localeCompare(valor2)==0){
						arrayPago = arrayPago.concat(arrayFinalCategoria[i]);
					}
				}
			}
			arrayGratis = [];
			if(filtroGratis==true){
				for(var i=0; i<arrayFinalCategoria.length; i++){
					valor1 = "gratis";
					valor2 = arrayFinalCategoria[i]["frete"];
					if(valor1.localeCompare(valor2)==0){
						arrayGratis = arrayGratis.concat(arrayFinalCategoria[i]);
					}
				}
			}
			
			arrayFinalFrete = [];
			arrayFinalFrete = arrayFinalFrete.concat(arrayPago, arrayGratis);
		}
		/*-Cria um array a partir do que estiver digitado no filtro "Buscar"-*/
		filtroBuscar = document.getElementById('Buscar').value;
		if(filtroBuscar.localeCompare("")==0 || filtroBuscar.localeCompare(" ")==0 || filtroBuscar.localeCompare("Buscar por...")==0){
			arrayFinal = [];
			arrayFinal = arrayFinal.concat(arrayFinalFrete);
		}
		else{
			arrayBuscar = [];
			
			for(var i=0; i<arrayFinalFrete.length; i++){
				valor1 = arrayFinalFrete[i]["descricao"].toLowerCase();
				
				valor2 = filtroBuscar.toLowerCase();
				
				if(valor1.indexOf(valor2)!=-1){
					arrayBuscar = arrayBuscar.concat(arrayFinalFrete[i]);
				}
			}

			arrayFinal = [];
			arrayFinal = arrayFinal.concat(arrayBuscar);
		}
		
		criarListaProdutos();
	}
	/*-----------------------------------------------------------------------Função de Criação de Lista de Produtos Com Filtro(s)-----------------------------------------------------------------------*/  
	function criarListaProdutos() {
		var tamanhoArray = arrayFinal.length;
		for (i = 0; i < tamanhoArray; i++) {
			if(i==(tamanhoArray-1)){
				var template = document.querySelector("#templateListaProdutos2");
			}
			else{
				var template = document.querySelector("#templateListaProdutos");
			}
			lista_h2 = template.content.querySelectorAll("h2");
			
			var descricao = arrayFinal[i]["descricao"];
			var preco = arrayFinal[i]["preco"];
			var categoria = arrayFinal[i]["categoria"];
			var frete = arrayFinal[i]["frete"];
			
			preco = "R$ " + preco + ",00";
			
			if(categoria.localeCompare("celulares")==0){
				categoria = "Celulares";
			}
			if(categoria.localeCompare("tv")==0){
				categoria = "Televisores";
			}
			if(categoria.localeCompare("eletro")==0){
				categoria = "Eletrodomésticos";
			}
			if(categoria.localeCompare("perfumes")==0){
				categoria = "Perfumes";
			}
			if(frete.localeCompare("pago")==0){
				frete = "Frete Pago";
			}
			if(frete.localeCompare("gratis")==0){
				frete = "Frete Grátis";
			}
			
			lista_h2[0].textContent = descricao;
			lista_h2[1].textContent = preco;
			lista_h2[2].textContent = categoria;
			lista_h2[3].textContent = frete;
			
			var linha = document.importNode(template.content, true);
			document.querySelector("#listaDivProdutos").appendChild(linha);
		}
		document.getElementById("NumeroTotalProdutosEncontrados").innerHTML = arrayFinal.length;
	}
