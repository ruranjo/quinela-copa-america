import  { useEffect } from 'react';
import { useStore } from '../../context/store';
import { Team } from '../../interfaces/data.interface';

const GroupTable = () => {
    const groups = useStore(state => state.groups);
    const groupSelected = useStore(state => state.groupSelected);
    const sortTeamsAndUpdateGroup = useStore(state => state.sortTeamsAndUpdateGroup);

    const getTeamById = (): Team[] => {
        const group = groups.find(group => group.group === groupSelected);
        return group ? group.teams : [];
    };

    useEffect(() => {
        sortTeamsAndUpdateGroup(groupSelected);
    }, [groupSelected, sortTeamsAndUpdateGroup]);

    return (
        <div className="overflow-x-auto  shadow-lg sm:rounded-lg ">
            <table className="w-full text-sm text-left text-black  dark:text-gray-200 transition-colors duration-500 ease-in-out">
                <thead className="text-xs text-white uppercase bg-secondary">
                    <tr>							
                        <th scope="col" className="py-2 px-4 hidden lg:table-cell">Flag</th>
                        <th scope="col" className="py-2 px-4">Team Name</th>
                        <th scope="col" className="py-2 px-4">Pld</th>
                        <th scope="col" className="py-2 px-4">W</th>
                        <th scope="col" className="py-2 px-4">D</th>
                        <th scope="col" className="py-2 px-4">L</th>
                        <th scope="col" className="py-2 px-4">GF</th>
                        <th scope="col" className="py-2 px-4">GA</th>
                        <th scope="col" className="py-2 px-4">GD</th>
                        <th scope="col" className="py-2 px-4">Pts</th>
                        {/*<th scope="col" className="py-3 px-4 hidden sm:table-cell">R</th>*/} 
                    </tr>
                </thead>
                <tbody>
                    {getTeamById().map(team => (
                        <tr key={team.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 ease-in-out">
                            <td className="py-4 px-4 hidden bg-primary/90 lg:table-cell">
                                <img src={team.flagImg.md} alt={`${team.name} flag `} className="w-[30px] h-[30px]  rounded-full "/>
                            </td>
                            <td className="py-2 px-4 font-bold text-sm ">{team.name.toUpperCase()}</td>
                            <td className="py-2 px-4 text-center bg-primaryblue/50">{team.played}</td>
                            <td className="py-2 px-4 text-center ">{team.won}</td>
                            <td className="py-2 px-4 text-center ">{team.drawn}</td>
                            <td className="py-2 px-4 text-center ">{team.lost}</td>
                            <td className="py-2 px-4 text-center ">{team.goalFor}</td>
                            <td className="py-2 px-4 text-center ">{team.goalAgainst}</td>
                            <td className="py-2 px-4 text-center ">{team.goalFor - team.goalAgainst}</td>
                            <td className="py-2 px-4 text-center bg-green-600/50">{team.points}</td>
                           {/*<td className="py-4 px-4 hidden sm:table-cell">{team.randomPoints}</td>*/} 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GroupTable;