# Manual de Javascript: 

## Introdução:
### O que é javascript?
Javascript é uma linguagem interpretada, usada para criar animações, desenvolvimento web e comportamentos dinâmicos.

### Para que ele serve?
Para tornar páginas estáticas em experiencias e dinâmicas.

### Como ele complementa HTML e CSS?
Ele transfroma páginas estáticas em interativas e dinâmicas. os dois trabalhando juntos, HTML responsável em estruturar e o CSS da a estética.

## Formas de uso no HTML:
### JavaScript escrito dentro da própria página HTML.
Para incluir o javascript no HTML coloca-se a tag <script> dentro do <head>.

### JavaScript em arquivo separado (script.js).
É a melhor forma de organizar o código, é quando usa-se o <script> e dentro tem o src="o nome com .js" o js no final vai dar organização, melhor manutenção e permite o cache do navegador.

### Exemplo prático das duas formas.

## Variáveis, tipos e escopo:
### o que é uma variável?
Ele é um espaço nomeado na memória do computador usado para armazenar, recuperar e modificar dados durante a execução de um programa.

### Como declarar variável em JavaScript:
Podemos usar o const para valores que não mudaram.
O left para valores que podem  ser reatribuídos futuramente.
Var é usado, mas pode ser evitado por ter escopo de função e não de bloco, causando bugs.

### Diferença entre var, let e const:
var pode causar confusão por vaza de bloco
let não pode ser redeclarado no mesmo bloco e é usado quando o valor muda
const não pode ser redeclarado, reatribuído e usa quando o valor não muda

### O que é escopo global:
É  uma área do código onde fica fora do bloco e acessível para todo o programa
o que é escopo de função:
Define que variáveis, constantes ou funções declaradas dentro de uma função específica só podem ser acessadas, modificadas e visíveis dentro do corpo dessa função.

### O que é escopo de bloco:
visibilidade de variáveis declaradas dentro de pares de chaves {} como usados em if e else.

## Operadores, comparações e lógica

### Operadores aritméticos principais:
+ → soma (ou junta textos)
- → subtração
* → multiplicação
/ → divisão
% → resto da divisão
** → potência (elevar número)
++ → aumenta 1
-- → diminui 1

### Operadores relacionais principais:
== → igual 
=== → igual mesmo tipo e valor 
!= → diferente
!== → diferente (valor ou tipo)
> → maior que
< → menor que
>= → maior ou igual
<= → menor ou igual

### Operadores lógicos principais:
&& → E (AND) 
|| → OU (OR)
! → NÃO (NOT)

### Diferença entre == e ===:
== → compara valor (pode dar erro/confusão)
=== → compara valor + tipo (mais seguro).

### Diferença entre != e !==:
!= → compara valor
!== → compara valor + tipo.

## Estrutura condicionais:
if:
Usado para executar algo se a condição for verdadeira.
if...else:
Usado quando você tem duas opções.
switch:
Usado quando há várias opções fixas.

## Estruturas de repetição
for:
Usado quando você sabe quantas vezes vai repetir.
while:
Usado quando você não sabe quantas vezes vai repetir, depende de uma condição.


## Funções
### O que é uma função:
É um bloco de código que executa uma tarefa.

### Como declarar uma função:
function saudacao() {
  console.log("Olá!");
}

### Como chamar uma função:
saudacao();

### Função com parâmetro:
Recebe valores para usar dentro dela.

### Função com retorno:
Devolve um valor usando return.


## Manipulação de página com JavaScript


document;
É a página toda do documento
getElementById();

Pega um elemento pelo id.
querySelector();

Pega o primeiro elemento
.value;

Pega o valor de inputs.
.checked;

Verifica se está marcado
.textContent;

Muda ou pega o texto.
.style;

Muda diretamente o estilo
classList;

Manipula classes.
addEventListener().
Adiciona evento

querySelectorAll();
Pega vários elementos.
checkValidity();
Verifica se o formulário é válido.
DOMContentLoaded.
Executa quando o HTML carrega.

createElement();
Cria elemento.
appendChild();
adiciona elemento
remove().
remove elemento
