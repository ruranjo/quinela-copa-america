import React from 'react';
import { useStore } from '../../context/store';
import { Team } from '../../interfaces/data.interface';


export interface Props {
   
}

const GroupTable: React.FC<Props> = () => {
    const groups = useStore((state) => state.groups);
    const groupSelected = useStore((state) => state.groupSelected);

    const getTeamById = (): Team[] => {
        const group = groups.find(group => group.group === groupSelected);
        if (group) {
            return group.teams
        } else {
            // Devolver el objeto de imagen predeterminado si no se encuentra el equipo
            return [] as Team[]
        }
    };

    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6"></th>
                        <th scope="col" className="py-3 px-6">Team Name</th>
                        <th scope="col" className="py-3 px-6">Played</th>
                        <th scope="col" className="py-3 px-6">Won</th>
                        <th scope="col" className="py-3 px-6">Drawn</th>
                        <th scope="col" className="py-3 px-6">Lost</th>
                        <th scope="col" className="py-3 px-6">Goals For</th>
                        <th scope="col" className="py-3 px-6">Goals Against</th>
                        <th scope="col" className="py-3 px-6">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {getTeamById().map((team) => (
                        <tr key={team.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6"><img src={team.flagImg.sm} alt="" /></td>
                            <td className="py-4 px-6">{team.name}</td>
                            <td className="py-4 px-6">{team.played}</td>
                            <td className="py-4 px-6">{team.won}</td>
                            <td className="py-4 px-6">{team.drawn}</td>
                            <td className="py-4 px-6">{team.lost}</td>
                            <td className="py-4 px-6">{team.goalFor}</td>
                            <td className="py-4 px-6">{team.goalAgainst}</td>
                            <td className="py-4 px-6">{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GroupTable;