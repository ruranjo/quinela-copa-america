import React from 'react'
import { GroupsSection, MenuGroups } from './components'
import { useStore } from './context/store';


const App:React.FC<unknown> = () => {

  const groupSelected = useStore((state) => state.groupSelected);
  const isSimulate = useStore((state) => state.isSimulate);
  

  return (
    <div>
      {isSimulate && 
      <GroupsSection />
      }
      
      {
        !isSimulate && <MenuGroups />
      }
      
      
      
      
      
      <h1>{groupSelected}</h1>
      
      
      
    </div>
  )
}

export default App