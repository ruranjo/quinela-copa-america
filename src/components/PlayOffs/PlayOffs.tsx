
import { useStore } from '../../context/store';
import { useState } from 'react';

interface Game {
  won: string;
  local: string;
  visite: string;
}

interface Match {
  id: string;
  games: Game[];
}

const PlatOffs = () => {
  const groups = useStore((state) => state.groups);
  const initialState = {
    id:'E4',
    games:[
      {
        won: 'QF',
        local: groups[0].qualified.first,
        visite:groups[1].qualified.secondary
      },
      {
        won: 'QF',
        local: groups[0].qualified.first,
        visite:groups[1].qualified.secondary
      },
      {
        won: 'QF',
        local: groups[2].qualified.first,
        visite:groups[3].qualified.secondary
      },
      {
        won: 'QF',
        local: groups[3].qualified.first,
        visite:groups[2].qualified.secondary
      }
    ]
  }

  const [listPlayOff, setListPlayOff] = useState<Match>(initialState);

  
 const handleE2 = (won1: string,won2: string,won3: string,won4: string)=> {
  
  const aux =  {
    id:'E2',
    games:[
      {
        won: 'QF',
        local: won1,
        visite: won2
      },
      {
        won: 'QF',
        local: won3,
        visite: won4
      },
    ]
    }
    setListPlayOff(aux)

  }

  const handleFinal = (won1: string,won2: string)=> {
  
    const aux =  {
      id:'E2',
      games:[
        {
          won: 'QF',
          local: won1,
          visite: won2
        }
      ]
    }
  
  setListPlayOff(aux)
 }

 return (
    <div>
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
                        onClick={() => {}}
                        className="px-4 py-1 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Ver
                        </button>
                        {
                            group.teams[0].played > 0 ? 
                            <button 
                            onClick={() =>{}
                            }
                            className={`px-4 py-1  text-white font-semibold rounded  transition duration-200 ${group.group == groupSelected ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 cursor-not-allowed"}`} 
                            >
                                Reiniciar
                            </button>
                            :
                            <button 
                                onClick={() => {}}
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
    </div>
  )

}
  
 

export default PlatOffs
