import { create } from 'zustand';
import { GameCalendar, Group } from '../interfaces/data.interface';
import { gamesCalendar, groups as groupdata } from '../data/data';

interface StoreState {
    groupSelected: string; // ID del grupo seleccionado
    isSimulate: boolean; // ID del grupo seleccionado
    groups: Group[];
    gamesCalendar: GameCalendar[];
    setGroupSelected: (id: string) => void; // Método para establecer el grupo seleccionado
    setIsSimulate: ()=> void;
    addGroup: (group: Group) => void;
    updateGroup: (id: number, update: Partial<Group>) => void;
    deleteGroup: (id: number) => void;
    addGameCalendar: (gameCalendar: GameCalendar) => void;
    updateGameCalendar: (id: number, update: Partial<GameCalendar>) => void;
    deleteGameCalendar: (id: number) => void;
    sortTeamsAndUpdateGroup: (groupId: string) => void;
    updateQualifiedTeams: (groupId:string) => void;
    resetGroupToDefault: (groupId: string) => void;
}

export const useStore = create<StoreState>((set,get) => ({
    groupSelected: '0', // Valor inicial
    isSimulate: false, // ID del grupo seleccionado
    groups: groupdata,
    gamesCalendar: gamesCalendar,
    setGroupSelected: (id) => set({ groupSelected: id }),
    setIsSimulate: () => set((state) =>( { isSimulate: !state.isSimulate })),
    addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
    updateGroup: (id, update) =>
        set((state) => ({
            groups: state.groups.map((group) =>
                group.id === id ? { ...group, ...update } : group
            ),
        })),
    deleteGroup: (id) =>
        set((state) => ({
            groups: state.groups.filter((group) => group.id !== id),
        })),
    addGameCalendar: (gameCalendar) =>
        set((state) => ({
            gamesCalendar: [...state.gamesCalendar, gameCalendar],
        })),
    updateGameCalendar: (id, update) =>
        set((state) => ({
            gamesCalendar: state.gamesCalendar.map((calendar) =>
                calendar.id === id ? { ...calendar, ...update } : calendar
            ),
        })),
    deleteGameCalendar: (id) =>
        set((state) => ({
            gamesCalendar: state.gamesCalendar.filter((calendar) => calendar.id !== id),
        })),
        sortTeamsAndUpdateGroup: (groupId) => {
            const groups = get().groups;
            const group = groups.find(g => g.group === groupId);
            if (!group) {
              console.error('Group not found');
              return; // Exit if no group found
            }
        
            const sortedTeams = [...group.teams].sort((a, b) => {
                if (b.points !== a.points) {
                  return b.points - a.points;
                } else if ((b.goalFor - b.goalAgainst) !== (a.goalFor - a.goalAgainst)) {
                  return (b.goalFor - b.goalAgainst) - (a.goalFor - a.goalAgainst);
                } else {
                  return b.randomPoints - a.randomPoints;
                }
              });
            
            set(state => ({
              groups: state.groups.map(g => g.group === groupId ? { ...g, teams: sortedTeams } : g)
            }));
          },
          updateQualifiedTeams: (groupId) => {
            const groups = get().groups;
            const group = groups.find(g => g.group === groupId);
            if (!group) {
              console.error('Group not found');
              return; // Exit if no group found
            }

            set(state => ({
                groups: state.groups.map(group => {
                    if (group.group === groupId) {
                        return {
                            ...group,
                            qualified: {
                                first: group.teams[0].id,
                                secondary: group.teams[1].id
                            }
                        };
                    } else {
                        console.warn('Not enough teams in group:', group.group);
                        return group; // Return group unchanged if not enough teams
                    }
                })
            }));
        },
        resetGroupToDefault: (groupId) => {
            const defaultGroup = groupdata.find(group => group.group === groupId);
            if (!defaultGroup) {
                console.error('Default group data not found for ID:', groupId);
                return;
            }
        
            set(state => ({
                groups: state.groups.map(group => {
                    if (group.group === groupId) {
                        // Reset the group to its default state
                        return { ...defaultGroup };
                    } else {
                        return group;
                    }
                })
            }));
        }
}));

