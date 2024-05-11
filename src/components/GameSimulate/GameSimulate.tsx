import React,{ useState } from 'react'
import {  Team } from '../../interfaces/data.interface';
import { useStore } from '../../context/store';

interface ScoreAdjusterProps {
  initialScore?: number;
  action: (score:number) => void;
  reverse: boolean; 
}



const ScoreAdjuster: React.FC<ScoreAdjusterProps> = ({ initialScore = 0, action, reverse }) => {
  
  const incrementScore = () => action(initialScore < 12 ? initialScore + 1 : initialScore);
  const decrementScore = () => action(initialScore > 0 ? initialScore - 1 : 0);

  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse' : ''}`} >
      <button onClick={decrementScore} className="bg-red-500 text-white p-2 rounded-md">
        {reverse ? '>' : '<'}
      </button>
      <div className="px-4 py-2">{initialScore}</div>
      <button onClick={incrementScore} className="bg-green-500 text-white p-2 rounded-md">
        {reverse ? '<' : '>'}
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
    
    

    return (
        <div className="w-[400px] bg-primary border-[2px] border-white text-white p-4 rounded-lg flex justify-around items-center">
          <div className="flex flex-col items-center gap-6">
            <img src={team1.flagImg.md} alt={team1.name} className="w-[100px] h-[60px] mr-2" />
            <span className="mr-2">{team1.name}</span>
            <ScoreAdjuster initialScore={scoreLocal} action={actionLocal} reverse={false} />
          </div>
          <div className="mx-4">vs</div>
          <div className="flex flex-col items-center gap-6">
            <img src={team2.flagImg.md} alt={team2.name} className="w-[100px] h-[60px] ml-2" />
            <span className="ml-2">{team2.name}</span>
            <ScoreAdjuster initialScore={scoreVisite} action={actionVisite} reverse={true}/>
          </div>
        </div>
      );
}

export default GameSimulate

