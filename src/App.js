import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import teams from "./teams.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    teams,
    clickedTeam: [],
    score: 0
  };

  imageClick = event => {
    const currentTeam = event.target.alt;
    const teamClickedOn =
      this.state.clickedTeam.indexOf(currentTeam) > -1;

    if (teamClickedOn) {
      this.setState({
        teams: this.state.teams.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedTeam: [],
        score: 0
      });
        alert("Get A Better Memory Loser. Play again?");

    } else {
      this.setState(
        {
          teams: this.state.teams.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedTeam: this.state.clickedTeam.concat(
            currentTeam
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Way To Go Champ, You Win!");
            this.setState({
              teams: this.state.teams.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedTeam: [],
              score: 0
            });
          }
        }
      );
    }
  };


  removeTeam = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const teams = this.state.teams.filter(team => team.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ teams });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Title></Title>
        <Wrapper>
          {this.state.teams.map(team => (
            <TeamCard
              imageClick={this.imageClick}
              id={team.id}
              key={team.id}
              image={team.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default App;
