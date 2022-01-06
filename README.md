<h1>Prática métodos de string</h1>

<p>
Em várias situações é necessário tratar algumas string utilizando, e como é algo muito recorrente,
já existem alguns métodos nativos do JS que nos ajudam a resolver vários problemas de forma mais rápida.
</p>

<p>
Para trabalhar alguns desses métodos, vamos fazer algumas atividades. 
</p>

<h2>Métodos para praticar:</h2>

<h3>toUpperCase()</h3>
<p>O primeiro método que você vai usar, é o toUpperCase(), ele serve para deixar todas as letras da sua string como maiúsculas.</p>

```javascript
// Exemplo de código ->
const str = "Kenzie Academy";
console.log(str.toUpperCase()) // "KENZIE ACADEMY"
```

<h3>toLowerCase()</h3>
<p>O segundo método que você vai usar, é o toLowerCase(), ele serve para deixar todas as letras da sua string como minúsculas.</p>

```javascript
// Exemplo de código ->
const str = "Kenzie Academy";
console.log(str.toLowerCase()) // "kenzie academy"
```

<h3>replace()</h3>
<p>O terceiro método que você vai usar, é o replace(), ele serve para trocar um ou mais caracteres da sua string por outra.</p>

```javascript
// Exemplo de código ->
const str = "Kenzie Academy";
console.log(str.replace(" ", "-")) // "Kenzie-Academy"
```

<h3>concat()</h3>
<p>O quarto método que você vai usar, é o concat(), ele serve para concatenar uma outra string junto com a que já existe.</p>

```javascript
// Exemplo de código ->
const str = "Kenzie ";
console.log(str.concat("Academy")) // "Kenzie Academy"
```

<h3>split()</h3>
<p>O quinto método que você vai usar, é o split(), ele serve para dividir uma string por algum caractere específico, ou a cada caractere e armazenar em um array.</p>

```javascript
// Exemplo de código ->
const str = "Kenzie Academy";
console.log(str.split(" ")) // ["Kenzie", "Academy"]
console.log(str.split()) //['K', 'e', 'n', 'z', 'i', 'e', ' ', 'A', 'c', 'a', 'd', 'e', 'm', 'y']
```

<h2> Prática! </h2>

<p>Agora é hora de você praticar, já temos o HTML e o CSS prontos, mas você precisa alterar o script.js para que os botões executem as funções conforme solicitado. A Entrega no final deve ser assim:</p>

<img src='./assets/img/Metodo de String.gif' alt='Gif resultado da atividade'>

<p>Note que o CPF deve ser tratado utilizando o replace para retirar os pontos e o traço.</p>
