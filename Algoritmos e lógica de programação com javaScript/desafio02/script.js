/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let student = [
    {
        name: 'Thiago Oliveira',
        firstTestScore: 7,
        secondTestScore: 4,
    },
    {
        name: 'Joana Thais',
        firstTestScore: 9,
        secondTestScore: 8,

    },
    {
        name: 'Eliana Freire',
        firstTestScore: 5,
        secondTestScore: 5,
    }
]

function med (firstTestScore, secondTestScore) {
return ((firstTestScore + secondTestScore) /2)

}

let note = []
    
for (let index = 0; index < student.length; index++) {
    note[index] = student[index]

    const media = med (note[index].firstTestScore, note[index].secondTestScore);

    if (media >= 7.0) {
        alert(`${student[index].name} foi aprovado(a) com média ${media.toFixed(1)}`);
      } else {
        alert(`${student[index].name} foi reprovado(a) com média ${media.toFixed(1)}`);
      }
    }

