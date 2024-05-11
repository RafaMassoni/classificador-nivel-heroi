# Classificador de nível de herói


## Entradas

- nome do herói
- quantidade de experiência (XP)

Exemplo de entrada: MyHero 2000


## Regras de classificação

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante


## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

 

 ## Exemplo de uso

 ```shell
 node main.js MyHero 2500

 "O Herói de nome **MyHero** está no nível de **Prata**"
 ```

