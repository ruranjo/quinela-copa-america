import React from 'react'

import { FlagImg,  Team } from '../../interfaces/data.interface';
import { qflag } from '../../assets/assets';
import { useStore } from '../../context/store';
import { GroupTable } from '../GroupTable';


const MenuGroups:React.FC<unknown> = () => {
    const groups = useStore((state) => state.groups);
    const setGroupSelected = useStore((state) => state.setGroupSelected);
    const groupSelected = useStore((state) => state.groupSelected);
    const setIsSimulate = useStore((state) => state.setIsSimulate);
    const resetGroupToDefault = useStore((state) => state.resetGroupToDefault);
  
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

    const allTeamsPlayedThreeMatches = (): boolean => {
        for (const group of groups) {
            for (const team of group.teams) {
                if (team.played !== 3) {
                    return false;
                }
            }
        }
        return true;
    };

    
  return (
    <div className='flex w-[900px] my-7 rounded-2xl gap-6 items-center p-6 bg-primaryblue  flex-col'>
        <div className='h-[10px] w-full  '>
        <h1 className='text-center text-white font-semibold text-xl'>FASE DE GRUPOS</h1>
        </div>
      <div className='border-[2px] rounded-lg bg-primary '>
      {
        groups.map((group, index)=>{
            return (
                <div className='flex gap-1 py-2 items-center  bg-primary text-white rounded-md' key={index} >
                    <div className=' px-4 text-center '>
                        <h6 className={`transition-colors duration-500 ease-in-out ${groupSelected === group.group ? 'bg-blue-500  ' : ''} rounded-xl p-2 text-center font-semibold`}  >GRUPO: {group.group}</h6>
                    </div>
                    <div className='flex gap-4 px-4  items-center '>
                    {
                        group.teams.map((team,index)=>{
                            return (
                                <img className={`w-[30px] h-[30px] border-[2px] rounded-full ${ (group.qualified.first != team.id && group.qualified.secondary != team.id) && team.played != 0 ? 'grayscale': '' }`} src={team.flagImg.md} alt={team.name} key={index}/>
                            )
                        })
                    }  
                    </div>
                    <div className='flex gap-4 px-4  items-center'>
                        <div className='flex  items-center relative '>
                            { group.qualified.first != 'QF' ? <div className="absolute -top-2 -right-2 w-3 h-3 flex items-center text-xs justify-center bg-green-500 rounded-full text-white">1</div>: <></>}    
                            <img className='w-[20px] h-[13px]' src={getFlagImageById(group.teams, group.qualified.first).sm} alt="" />
                        </div>
                        <div className='flex  items-center relative'>
                            { group.qualified.secondary != 'QF' ? <div className="absolute -top-2 -right-2 w-3 h-3 flex items-center text-xs justify-center bg-orange-500 rounded-full text-white">2</div>: <></>}
                            <img className='w-[20px] h-[13px]' src={getFlagImageById(group.teams, group.qualified.secondary).sm} alt="" />
                        </div>
                    </div>
                    <div className='flex gap-4 px-4  items-center '>
                        <button 
                        onClick={() => handleSelectGroup(group.group)}
                        className="px-4 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Ver
                        </button>
                        {
                            group.teams[0].played > 0 ? 
                            <button 
                            onClick={() =>{
                                    if(group.group == groupSelected){
                                        resetGroupToDefault(groupSelected);
                                    }
                                }
                            }
                            className={`px-4 py-1  text-white font-semibold rounded  transition duration-200 ${group.group == groupSelected ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 cursor-not-allowed"}`} 
                            >
                                Reiniciar
                            </button>
                            :
                            <button 
                                onClick={() => {
                                    
                                    setIsSimulate();
                                    handleSelectGroup(group.group);
                                }}
                                className="px-6 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                                Iniciar
                            </button>
                        }
                        
                        
                        
                    </div>
                </div>
            )
        })
      }
      </div>
    { groupSelected !== '0' ?
        
       <GroupTable /> 
       
       : 
       <div className='flex items-center justify-center w-[600px] h-[300px] bg-primary rounded-lg border text-white font-medium'>
            <h2>SELECIONE UN EQUIPO: 'VER'</h2>
       </div>
    } 
    <button 
    onClick={() =>{
            if(allTeamsPlayedThreeMatches()){
                handleSelectGroup('PLAYOFF');
            }
        }
    }
    className={`px-4 py-1  text-white font-semibold rounded  transition duration-200 ${allTeamsPlayedThreeMatches() ? "bg-red-500 hover:bg-red-600 cursor-pointer" : "bg-gray-500 cursor-not-allowed"}`} 
    >
        Play Offs
    </button>

    </div>
  )
}

export default MenuGroups
