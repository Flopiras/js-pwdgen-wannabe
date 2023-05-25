console.log('JS OK');

//elemento DOM collegato
const userPassword = document.getElementById('password')

//nome utente
const userName = prompt('Come ti chiami?' , 'Floriana')
console.log(userName)

//cognome utente
const userSurname = prompt('Qual è il tuo cognome?' , 'Piras')
console.log(userSurname)

//colore preferito utente
const userColor = prompt('Qual è il tuo colore preferito?' , 'Nero')
console.log(userColor)

//variabile saluto
userPassword.innerText = userName + userSurname + userColor + 21