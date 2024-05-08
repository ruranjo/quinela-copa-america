import React from 'react'

import { FlagImg, Team } from '../../interfaces/data.interface';
import { qflag } from '../../assets/assets';
import { useStore } from '../../context/store';
import { GroupTable } from '../GroupTable';

const MenuGroups:React.FC<unknown> = () => {
    const groups = useStore((state) => state.groups);
    const setGroupSelected = useStore((state) => state.setGroupSelected);
    const groupSelected = useStore((state) => state.groupSelected);
    const setIsSimulate = useStore((state) => state.setIsSimulate);
  

    const handleSelectGroup = (id:string) => {
        setGroupSelected(id);
    };

    
    const getFlagImageById = (teams: Team[],teamId: string): FlagImg => {
        const team = teams.find(team => team.id === teamId);
        if (team) {
            return team.flagImg;
        } else {
            // Devolver el objeto de imagen predeterminado si no se encuentra el equipo
            return {
                sm: qflag,
                md: qflag,
            };
        }
    };

  return (
    <div className=''>
      {
        groups.map((group, index)=>{
            return (
                <div className='flex items-center border border-red-600' key={index} >
                    <div className=' px-4 text-center border border-blue-600'>
                        <h6 className='text-center' >GRUPO: {group.group}</h6>
                    </div>
                    <div className='flex gap-4 px-4  items-center border border-red-600'>
                    {
                        group.teams.map((team,index)=>{
                            return (
                                <img className='w-[20px] h-[13px] grayscale' src={team.flagImg.sm} alt={team.name} key={index}/>
                            )
                        })
                    }  
                    </div>
                    <div className='flex gap-4 px-4  items-center border border-red-600'>
                        <img className='w-[20px] h-[13px] grayscale' src={getFlagImageById(group.teams,group.qualified.first).sm} alt="" />
                        <img className='w-[20px] h-[13px] grayscale' src={getFlagImageById(group.teams,group.qualified.secondary).sm} alt="" />
                    </div>
                    <div className='flex gap-4 px-4  items-center border border-red-600'>
                        <button 
                        onClick={() => handleSelectGroup(group.group)}
                        className="px-4 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Ver
                        </button>
                        
                        <button 
                            className="px-4 py-1 bg-gray-400 text-white font-semibold rounded hover:bg-gray-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                            Reiniciar
                        </button>
                        
                        <button 
                            onClick={() => {
                                handleSelectGroup(group.group);
                                setIsSimulate();
                            }}
                            className="px-4 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                            Iniciar
                        </button>
                    </div>
                </div>
            )
        })
      }
      { groupSelected !== '0' ? <GroupTable /> : <></>} 
    </div>
  )
}

export default MenuGroups
