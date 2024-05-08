import { create } from 'zustand';
import { GameCalendar, Group } from '../interfaces/data.interface';
import { gamesCalendar, groups } from '../data/data';

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
}

export const useStore = create<StoreState>((set) => ({
    groupSelected: '0', // Valor inicial
    isSimulate: false, // ID del grupo seleccionado
    groups: groups,
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
}));
