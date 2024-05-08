import React,{ useState } from 'react'

import {  Team } from '../../interfaces/data.interface';
import { useStore } from '../../context/store';

interface ScoreAdjusterProps {
  initialScore?: number;
  action: (score:number) => void
}

const ScoreAdjuster: React.FC<ScoreAdjusterProps> = ({ initialScore = 0, action }) => {
  
  const incrementScore = () => action(initialScore < 12 ? initialScore + 1 : initialScore);
  const decrementScore = () => action(initialScore > 0 ? initialScore - 1 : 0);

  return (
    <div className="flex items-center">
      <button onClick={decrementScore} className="bg-red-500 text-white p-2 rounded-l">
        &lt;
      </button>
      <div className="px-4 py-2">{initialScore}</div>
      <button onClick={incrementScore} className="bg-green-500 text-white p-2 rounded-r">
        &gt;
      </button>
    </div>
  );
};



interface Props {
    teamLocal: string,
    teamVisite: string,
    scoreLocal:number,
    scoreVisite:number,
    actionLocal: (score:number) => void,
    actionVisite: (score:number) => void,
    action?: (winner:string)=>void
}



const GameSimulate:React.FC<Props> = ({teamLocal, teamVisite, actionLocal, actionVisite ,scoreLocal, scoreVisite}) => {
    const { groups } = useStore(state => ({
        groups: state.groups
    }));

    const getTeamById = (teamId: string): Team  => {
        for (const group of groups) {
            const team = group.teams.find(team => team.id === teamId);
            if (team) {
                return team;
            }
        }
        return {} as Team; // Retorna undefined si no se encuentra el equipo
    };

    const [team1] = useState(getTeamById(teamLocal))
    const [team2] = useState(getTeamById(teamVisite))
    
    
    /*const playSystem = () => {
        
        if (scoreLocal === scoreVisite) {
            team1.drawn = 1 + team1.drawn; 
            team1.goalFor = scoreLocal + team1.goalFor;
            team1.goalAgainst =  team1.goalAgainst + scoreVisite;
            team1.played =  team1.played + 1;
            team1.points =  team1.points + 1;

            team2.drawn = 1 + team2.drawn;
            team2.goalFor = scoreVisite + team2.goalFor;
            team2.goalAgainst =  team2.goalAgainst + scoreLocal;
            team2.played =  team2.played + 1;
            team2.points =  team2.points + 1;
        }

        if (scoreLocal > scoreVisite) { //local won
            team1.won = 1 + team1.won; 
            team1.goalFor = scoreLocal + team1.goalFor;
            team1.goalAgainst =  team1.goalAgainst + scoreVisite;
            team1.played =  team1.played + 1;
            team1.points =  team1.points + 3;

            team2.drawn = 1 + team2.drawn;
            team2.goalFor = scoreVisite + team2.goalFor;
            team2.goalAgainst =  team2.goalAgainst + scoreLocal;
            team2.played =  team2.played + 1;
        }

        if (scoreVisite > scoreLocal) { //local won
            team2.won = 1 + team2.won; 
            team2.goalFor = scoreVisite + team2.goalFor;
            team2.goalAgainst =  team2.goalAgainst + scoreLocal;
            team2.played =  team2.played + 1;
            team2.points =  team2.points + 3;

            team1.drawn = 1 + team1.drawn;
            team1.goalFor = scoreLocal + team1.goalFor;
            team1.goalAgainst =  team1.goalAgainst + scoreVisite;
            team1.played =  team1.played + 1;
        }
    }*/

  

    

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-center items-center">
          <div className="flex items-center">
            <img src={team1.flagImg.md} alt={team1.name} className="w-10 h-6 mr-2" />
            <span className="mr-2">{team1.name}</span>
            <ScoreAdjuster initialScore={scoreLocal} action={actionLocal} />
          </div>
          <div className="mx-4">vs</div>
          <div className="flex items-center">
            <ScoreAdjuster initialScore={scoreVisite} action={actionVisite}/>
            <span className="ml-2">{team2.name}</span>
            <img src={team2.flagImg.md} alt={team2.name} className="w-10 h-6 ml-2" />
          </div>
        </div>
      );
}

export default GameSimulate


/*

// Scoreboard.tsx
import React from 'react';
import ScoreAdjuster from './ScoreAdjuster';

interface TeamInfo {
  name: string;
  flagUrl: string;
}

interface ScoreboardProps {
  team1: TeamInfo;
  team2: TeamInfo;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ team1, team2 }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex justify-center items-center">
      <div className="flex items-center">
        <img src={team1.flagUrl} alt={team1.name} className="w-10 h-6 mr-2" />
        <span className="mr-2">{team1.name}</span>
        <ScoreAdjuster />
      </div>
      <div className="mx-4">vs</div>
      <div className="flex items-center">
        <ScoreAdjuster />
        <span className="ml-2">{team2.name}</span>
        <img src={team2.flagUrl} alt={team2.name} className="w-10 h-6 ml-2" />
      </div>
    </div>
  );
};

export default Scoreboard;
*/