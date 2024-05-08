import React, { useState, useEffect } from 'react';
import { useStore } from '../../context/store';
import { GroupTable } from '../GroupTable';
import { GameSimulate } from '../GameSimulate';
import { Game } from '../../interfaces/data.interface';

const GroupsSection: React.FC = () => {
  const setIsSimulate = useStore((state) => state.setIsSimulate);
  const gamesCalendar = useStore((state) => state.gamesCalendar);
  const groupSelected = useStore((state) => state.groupSelected);
  const { groups, updateGroup } = useStore(state => ({
    groups: state.groups,
    updateGroup: state.updateGroup
  }));
  

  const [games, setGames] = useState<Game[]>([]);
  const [countGame, setCountGame] = useState(0);
  const [scoreLocal, setScoreLocal] = useState(0);
    const [scoreVisite, setScoreVisite] = useState(0);
    const [teamsUpdated, setTeamsUpdated] = useState(false); // State to track updates
    const actionLocal = (score:number) => setScoreLocal(score);
    const actionVisite = (score:number) => setScoreVisite(score);

  useEffect(() => {
    const getDatesByGroup = (group: string): Game[] => {
      const calendar = gamesCalendar.find(gc => gc.group === group);
      return calendar ? calendar.dates : [];
    };
  
    setGames(getDatesByGroup(groupSelected));
    
      // Reset the game counter whenever the selected group changes
  }, [groupSelected, gamesCalendar]); 

  const nextGame = () => {
    if (countGame < games.length - 1) {
      setCountGame(prevCount => prevCount + 1);
    }
  };

  
  const currentGame = games[countGame];

 
  const playSystem = (team1Id: string, team2Id: string, scoreLocal: number, scoreVisite : number) => {
    const groupToUpdate = groups.find(group => 
        group.teams.some(team => team.id === team1Id || team.id === team2Id));
    if (!groupToUpdate) return;

    const updatedTeams = groupToUpdate.teams.map(team => {
        if (team.id === team1Id) {
            return { ...team,
                played: team.played + 1,
                won: scoreLocal > scoreVisite ? team.won + 1 : team.won,
                drawn: scoreLocal === scoreVisite ? team.drawn + 1 : team.drawn,
                lost: scoreLocal < scoreVisite ? team.lost + 1 : team.lost,
                goalFor: team.goalFor + scoreLocal,
                goalAgainst: team.goalAgainst + scoreVisite,
                points: scoreLocal > scoreVisite ? team.points + 3 : (scoreLocal === scoreVisite ? team.points + 1 : team.points),
            };
        } else if (team.id === team2Id) {
            return { ...team,
                played: team.played + 1,
                won: scoreVisite > scoreLocal ? team.won + 1 : team.won,
                drawn: scoreVisite === scoreLocal ? team.drawn + 1 : team.drawn,
                lost: scoreVisite < scoreLocal ? team.lost + 1 : team.lost,
                goalFor: team.goalFor + scoreVisite,
                goalAgainst: team.goalAgainst + scoreLocal,
                points: scoreVisite > scoreLocal ? team.points + 3 : (scoreVisite === scoreLocal ? team.points + 1 : team.points),
            };
        }
        return team;
    });

    updateGroup(groupToUpdate.id, { teams: updatedTeams });
    setTeamsUpdated(true);
};



useEffect(() => {

  const sortTeamsAndUpdateGroup = (groupId: string) => {
    // Assuming useStore is your global state management hook
    // Find the group that needs updating
    const group = groups.find(g => g.group === groupId);
    console.log(group);
    if (!group) {
      console.error('Group not found');
      return; // Exit if no group found
    }
  
    // Sort teams by points in descending order
    const sortedTeams = [...group.teams].sort((a, b) => b.points - a.points);
  
    // Update the group with the sorted teams
    updateGroup(group.id, { ...group, teams: sortedTeams });
  
    // Optional: Log the new team order
    console.log('Updated group with sorted teams:', sortedTeams);
  };


  // This assumes there is a state or a way to determine if teams need sorting
  if (teamsUpdated) { // You need a way to set teamsUpdated after playSystem updates teams
      sortTeamsAndUpdateGroup(groupSelected);
      setTeamsUpdated(false);
  }
}, [teamsUpdated]); 

const handleGameProgress = () => {
  nextGame();
  playSystem(currentGame.local, currentGame.visitor, scoreLocal, scoreVisite);
  // Assuming playSystem will eventually lead to `teamsUpdated` being set to true
  setScoreLocal(0);
  setScoreVisite(0);
  // Don't call sortTeamsAndUpdateGroup directly here
};

const handleFinishClick = () => {
  setIsSimulate(); // Presumably toggles a simulation state
  setCountGame(countGame + 1); // Increment the count
  playSystem(currentGame.local, currentGame.visitor, scoreLocal, scoreVisite); // Execute game system logic
  setScoreLocal(0); // Reset local score
  setScoreVisite(0); // Reset visitor score
};

  return (
    <>
      <GroupTable />
      {currentGame && (
        <GameSimulate
          key={countGame} // Force remount of GameSimulate on countGame change
          teamLocal={currentGame.local}
          teamVisite={currentGame.visitor}
          scoreLocal={scoreLocal}
          scoreVisite={scoreVisite}
          actionLocal={actionLocal}
          actionVisite={actionVisite}

        />
      )}
      <div className="flex space-x-2">
        <button 
          onClick={() => setIsSimulate()}
          className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400 transition duration-200">
          Volver
        </button>
        <button 
          onClick={() => setIsSimulate()}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          Comenzar
        </button>
        {countGame < games.length - 1 ? (
          <button 
            onClick={() =>  handleGameProgress()  }
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200">
            Siguiente
          </button>
        ) : (
          <button 
            onClick={() =>  handleFinishClick() }
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-200">
            Finalizar
          </button>
        )}
      </div>

    </>
  );
};

export default GroupsSection;