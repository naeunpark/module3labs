/*
7. The following object represents a basketball game and keeps track of the score as the game progresses.
a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
b) Add a new method to print the full time final score
c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
d) Test your object by chaining all the method calls together in different combinations.
*/

const basketballGame = {
        score: 0,
        numOfFoul: 0,
        freeThrow() {
            this.score++;
            return this;
        },
        basket() {
            this.score += 2;
            return this;
        },
        threePointer() {
            this.score += 3;
            return this;
        },
        countFoul() {
            this.numOfFoul++;
            return this;
        },
        halfTime() {
            console.log(`Halftime's Number of foul is ` + this.numOfFoul);
            console.log('Halftime score is ' + this.score);
            return this;
        },
        fullTime() {
            console.log(`Fulltime's Number of foul is ` + this.numOfFoul);
            console.log('Fulltime score is ' + this.score);
            return this;
        }
    }
    //modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().countFoul().threePointer().halfTime().countFoul().freeThrow().freeThrow().fullTime();