import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
    constructor() {
        super();
        this.signs = ["rock", "paper", "scissors"];
        this.state = {
            playerOne: "rock",
            playerTwo: "scissors",
        };
    };
    
    // this is where my methods will go.
    compPlayComp = () => {
        this.setState({
            playerOne: this.signs[Math.floor(Math.random() * 3)],
            playerTwo: this.signs[Math.floor(Math.random() * 3)],
        })
    }

    /* decideWinner = () => {
        const playerOne = this.state.playerOne;
        const playerTwo = this.state.playerTwo;

        if(playerOne === playerTwo) {
            return "It's a tie!" 

        } else if {
            ((playerOne === 'rock' && playerTwo === 'scissors') ||(playerTwo ===))
        }
        )
    }*/
    
    // Decide the winner and display the message where 'Place the winner here' is currently display on top of the button.

    decideWinner = () => {
        if (this.state.playerOne === this.state.playerTwo) {
            return "It's a tie!";
        } else if (this.state.playerOne === 'rock' && this.state.playerTwo === 'scissors') {
            return "Player One wins!";
        } else if (this.state.playerOne === 'scissors' && this.state.playerTwo === 'rock') {
            return "Player Two wins!";
        } else if (this.state.playerOne === 'paper' && this.state.playerTwo === 'rock') {
            return "Player One wins!";
        } else if (this.state.playerOne === 'rock' && this.state.playerTwo === 'paper') {
            return "Player Two wins!";
        } else if (this.state.playerOne === 'scissors' && this.state.playerTwo === 'paper') {
            return "Player One wins!";
        } else {
            return "Player Two wins!";
        }
    }
    
    render() {
        return(
            <div className="style">
                <div className="playerCard">
                    <PlayerCard sign={this.state.playerOne}/>
                    <PlayerCard sign={this.state.playerTwo}/>
                </div>
        <div className="winner">{this.decideWinner()}</div>
                <button type="button" onClick={this.compPlayComp}>Comp vs Comp :)</button>
            </div>
        )
    }
};

export default Game;