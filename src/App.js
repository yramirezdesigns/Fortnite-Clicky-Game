import React, { Component } from "react";
import FortniteCard from "./components/FortniteCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import fortnitefriends from "./Fortnite.json";
import "./App.css";

// Random shuffle
function randomFortnite(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    fortnitefriends,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!" 
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 3) {
      this.setState({ correctIncorrect: "You win the game!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFortnite = randomFortnite(fortnitefriends);
    this.setState({ fortnitefriends: shuffledFortnite });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Fortnite Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        <Title>
          Click on an image to earn points, but don't click on any more than once!
        </Title>

        <Container>
          <Row>
            {this.state.fortnitefriends.map(Fortnite => (
              <Column size="md-3 sm-6">
                <FortniteCard
                  key={Fortnite.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={Fortnite.id}
                  image={Fortnite.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
       
        <Footer 
        
      />
      </Wrapper>
      
     
 

    );
  }
}

export default App;