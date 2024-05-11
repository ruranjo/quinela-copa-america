
import { useStore } from '../../context/store';
import { useState } from 'react';
import { FlagImg, Group } from '../../interfaces/data.interface';
import { qflag } from '../../assets/assets';
import { GameSimulate } from '../GameSimulate';

interface Game {
  id: number,
  won: string;
  local: string;
  visite: string;
}

interface Match {
  id: number;
  games: Game[];
}

const PlatOffs = () => {
  const groups = useStore((state) => state.groups);
  const initialState = {
    id:1,
    games:[
      {
        id:1,
        won: 'QF',
        local: groups[0].qualified.first,
        visite:groups[1].qualified.secondary
      },
      {
        id:2,
        won: 'QF',
        local: groups[1].qualified.first,
        visite:groups[0].qualified.secondary
      },
      {
        id:3,
        won: 'QF',
        local: groups[2].qualified.first,
        visite:groups[3].qualified.secondary
      },
      {
        id:4,
        won: 'QF',
        local: groups[3].qualified.first,
        visite:groups[2].qualified.secondary
      }
    ]
  }

  const [listPlayOff, setListPlayOff] = useState<Match>(initialState);
  const [gameSelection, setGameSelection] = useState(1);
  const [scoreLocal, setScoreLocal] = useState(0);
  const [scoreVisite, setScoreVisite] = useState(0);
  const [stage, setStage] = useState(1);
  const actionLocal = (score:number) => setScoreLocal(score);
  const actionVisite = (score:number) => setScoreVisite(score);
  
  const getFlagImageById = (groups: Group[], teamId: string): FlagImg => {
    for (const group of groups) {
        const team = group.teams.find(team => team.id === teamId);
        if (team) {
            return team.flagImg;
        }
    }

    // Devolver el objeto de imagen predeterminado si no se encuentra el equipo
    return {
        sm: 'default_sm_flag_image_url',
        md: 'default_md_flag_image_url',
      };
  };

 const handleE2 = (won1: string,won2: string,won3: string,won4: string)=> {
  console.log(won1,won2,won3,won4)
  console.log()
  const aux =  {
    id:2,
    games:[
      {
        id:1,
        won: 'QF',
        local: won1,
        visite: won2
      },
      {
        id:2,
        won: 'QF',
        local: won3,
        visite: won4
      },
    ]
    }
    console.log(aux)
    setListPlayOff(aux)

  }

  

  const handleFinal = (won1: string,won2: string)=> {
  
    const aux =  {
      id:3,
      games:[
        {
          id:1,
          won: 'QF',
          local: won1,
          visite: won2
        }
      ]
    }
  
  setListPlayOff(aux)
 }

 const getGameById = ( gameId: number): Game  => {
  console.log(gameId);
   const aux = listPlayOff.games.find(game => game.id === gameId);
   if(!aux){
    return {} as Game
   }
   return aux
};

const areAllGamesNotQF = (): boolean => {
  return listPlayOff.games.every(game => game.won !== 'QF');
};

const updateGameWonById = (id: number, payload: string): void => {
  setListPlayOff(prevState => ({
      ...prevState,
      games: prevState.games.map(game =>
          game.id === id ? { ...game, won: payload } : game
      ),
  }));



};

const controlstage = (stage:number, won1 = '',won2 = '', won3 = '',won4 = ''):void => {
  switch (stage) {
    case 1:
        handleE2(won1,won2,won3,won4)
      break;
      case 2:
        handleFinal(won1,won2)
      break;
    default:
      break;
  }
}

 return (
    <div className='flex w-[900px] my-8 rounded-2xl gap-6 items-center p-6 bg-primaryblue  flex-col'>
        <div className='h-[10px] w-full  '>
          <h1 className='text-center text-white font-semibold text-xl'>FASE FINALES</h1>
        </div>
          {
            !areAllGamesNotQF() ? 
            <div>
            <GameSimulate
              key={gameSelection}
              teamLocal={getGameById(gameSelection).local}
              teamVisite={getGameById(gameSelection).visite}
              scoreLocal={scoreLocal}
              scoreVisite={scoreVisite}
              actionLocal={actionLocal}
              actionVisite={actionVisite}
            />
          </div> 
          :
           <div className='flex border-[2px] w-[300px] h-[100px] justify-around flex-wrap gap-4  rounded-lg bg-primary '>
           {
             listPlayOff.games.map((game)=>{
                 
                 return (
          
                  <div className='flex  items-center relative   rounded-full ' key={game.id}>
                      {game.won != 'QF' ? <img className='w-[50px] h-[50px]  rounded-full' src={getFlagImageById(groups, game.won).md} alt="" />: <img className=' ' src={qflag} alt="" />} 
                  </div>
                    
                 )
             })
           }
           </div>
          }
          
          {
            !areAllGamesNotQF() && <div className='flex gap-4 px-4  items-center '>
            <button 
            onClick={() => {
                if(gameSelection < 4 ){
                  if(scoreLocal != scoreVisite){
                    actionLocal(0)
                    actionVisite(0)
                    if(scoreLocal > scoreVisite){
                      updateGameWonById(gameSelection, getGameById(gameSelection).local)

                    }else{
                      updateGameWonById(gameSelection, getGameById(gameSelection).visite)
                    }
                    setGameSelection(gameSelection + 1)
                  }
                }else{
                  if(scoreLocal > scoreVisite){
                    updateGameWonById(gameSelection, getGameById(gameSelection).local)

                  }else{
                    updateGameWonById(gameSelection, getGameById(gameSelection).visite)
                  }
                  
                }
            }}
            className={`px-4 py-1  text-white font-semibold rounded  transition duration-200 ${scoreLocal != scoreVisite ? " bg-blue-400  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" : "bg-gray-500 cursor-not-allowed"}`} 
            >
              siguiente partido
            </button>
        </div>
          }
          

          <div className='border-[2px] rounded-lg bg-primary '>
      {
        listPlayOff.games.map((game, index)=>{
            
            return (
              
                <div className='flex gap-1 py-2 items-center  bg-primary text-white rounded-md' key={index} >
                    
                    <div className=' px-4 text-center '>
                        <h6 className={`transition-colors duration-500 ease-in-out rounded-xl p-2 text-center font-semibold`}  >PARTIDO</h6>
                    </div>
                    <div className='flex gap-4 px-4  items-center '>
                   
                      <img className={`w-[30px] h-[30px] border-[2px] rounded-full ${ (game.won != game.local ) ? 'grayscale': '' }`} src={getFlagImageById(groups,game.local).md} alt={game.local} key={index}/>
                      <img className={`w-[30px] h-[30px] border-[2px] rounded-full ${ (game.won != game.visite ) ? 'grayscale': '' }`} src={getFlagImageById(groups,game.visite).md} alt={game.visite} key={index}/>
                      
                    </div>
                    
                    <div className='flex gap-4 px-4  items-center'>
                        <div className='flex  items-center relative '>
                            { game.won != 'QF' ? <div className="absolute -top-2 -right-2 w-3 h-3 flex items-center text-xs justify-center bg-green-500 rounded-full text-white">1</div>: <></>}    
                            {game.won != 'QF' ? <img className='w-[20px] h-[13px]' src={getFlagImageById(groups, game.won).sm} alt="" />: <img className='w-[20px] h-[13px]' src={qflag} alt="" />} 
                        </div>
                    </div>
                    
                </div>
            )
        })
      }
      </div>
          

          <div className='flex gap-4 px-4  items-center '>
          <button 
            onClick={() =>{
                    if(areAllGamesNotQF()){
                      setGameSelection(1)
                      if(stage == 1){
                        console.log(listPlayOff)
                        controlstage(stage, listPlayOff.games[0].won,listPlayOff.games[1].won, listPlayOff.games[2].won,listPlayOff.games[3].won)
                        setStage(stage + 1)
                      }

                      if(stage == 2){
                      console.log(listPlayOff)
                        
                        controlstage(stage, listPlayOff.games[0].won,listPlayOff.games[1].won)
                        setStage(stage + 1)
                      }
                    }
                    
                    
                }
            }
            className={`px-4 py-1  text-white font-semibold rounded  transition duration-200 ${areAllGamesNotQF() ? "bg-red-500 hover:bg-red-600 cursor-pointer" : "bg-gray-500 cursor-not-allowed"}`} 
          >
            siguiente fase
          </button>
          </div>
          
      </div>
  )

}
  
 

export default PlatOffs
