import React from 'react';
import { GroupsSection, MenuGroups, PlayOffs } from './components';
import { useStore } from './context/store';

const App: React.FC = () => {
  
  const isSimulate = useStore(state => state.isSimulate);
  const groupSelected = useStore((state) => state.groupSelected);

  return (
    <div className='flex flex-col h-screen items-center '>
      <div className='h-[50px] w-full bg-red-700 '>
        <h1 className='text-center text-white font-semibold text-5xl'>COPA AMERICA</h1>
      </div>
      {groupSelected === 'PLAYOFF'  ? 
        <PlayOffs /> 
      : 
        <>{isSimulate ? <GroupsSection /> : <MenuGroups />}</>
      }
      
    </div>
  );
};

export default App;