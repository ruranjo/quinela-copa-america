export interface FlagImg {
    sm: string;
    md: string;
} 

export interface Team {
    id: string;
    name: string;
    flagImg: FlagImg;
    points: number;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalFor: number;
    goalAgainst: number;
    randomPoints:number;
}

export interface Qualified {
    first: string;
    secondary: string;
}

export interface Group {
    id: number;
    group: string;
    qualified:{
        first: string,
        secondary: string
    },
    teams: Team[];
}


export interface Game {
    id: string;
    local: string;
    visitor: string;
}

export interface GameCalendar {
    id: number;
    group: string;
    dates: Game[];
}