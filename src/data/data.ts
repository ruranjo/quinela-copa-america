import { flagAr, flagArMd, flagBl, flagBlMd, flagCa, flagCaMd, flagCh, flagChMd, flagCs, flagCsMd, flagEc, flagEcMd, flagJa, flagJaMd, flagMe, flagMeMd, flagPa, flagPaMd, flagPe, flagPeMd, flagPm, flagPmMd, flagUs, flagUsMd, flagUy, flagUyMd, flagVe, flagVeMd } from "../assets/assets";
import { GameCalendar, Group } from "../interfaces/data.interface";

export const groups: Group[] = [
    {
        id: 1,
        group: 'A',
        qualified:{
            first: 'QF',
            secondary: 'QF'
        },
        teams: [
            {
                id: 'AR',
                name: 'Argentina',
                flagImg: {
                    sm: flagAr ,
                    md: flagArMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
                
            },
            {
                id: 'PE',
                name: 'Peru',
                flagImg: {
                    sm: flagPe ,
                    md: flagPeMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'CH',
                name: 'Chile',
                flagImg: {
                    sm: flagCh,
                    md: flagChMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
                
            },
            {
                id: 'CA',
                name: 'Canada',
                flagImg: {
                    sm: flagCa,
                    md: flagCaMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
        ]
    },
    {
        id: 2,
        group: 'B',
        qualified:{
            first: 'QF',
            secondary: 'QF'
        },
        teams: [
            {
                id: 'ME',
                name: 'Mexico',
                flagImg: {
                    sm: flagMe ,
                    md: flagMeMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'EC',
                name: 'Ecuador',
                flagImg: {
                    sm: flagEc ,
                    md: flagEcMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'VE',
                name: 'Venezuela',
                flagImg: {
                    sm: flagVe,
                    md: flagVeMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'JA',
                name: 'Jamaica',
                flagImg: {
                    sm: flagJa,
                    md: flagJaMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
        ]
    },{
        id: 3,
        group: 'C',
        qualified:{
            first: 'QF',
            secondary: 'QF'
        },
        teams: [
            {
                id: 'US',
                name: 'Estados Unidos',
                flagImg: {
                    sm: flagUs,
                    md: flagUsMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'UY',
                name: 'Uruguay',
                flagImg: {
                    sm: flagUy ,
                    md: flagUyMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'PM',
                name: 'Panama',
                flagImg: {
                    sm: flagPm,
                    md: flagPmMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'BL',
                name: 'Bolivia',
                flagImg: {
                    sm: flagBl,
                    md: flagBlMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
        ]
    },
    {
        id: 4,
        group: 'D',
        qualified:{
            first: 'QF',
            secondary: 'QF'
        },
        teams: [
            {
                id: 'BR',
                name: 'Brasil',
                flagImg: {
                    sm: flagMe ,
                    md: flagMeMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'CO',
                name: 'Colombia',
                flagImg: {
                    sm: flagEc ,
                    md: flagEcMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'PA',
                name: 'Paraguay',
                flagImg: {
                    sm: flagPa,
                    md: flagPaMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
            {
                id: 'CS',
                name: 'Costa Rica',
                flagImg: {
                    sm: flagCs,
                    md: flagCsMd,
                },
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalFor: 0,
                goalAgainst: 0,
                randomPoints:0
            },
        ]
    }
];

export const gamesCalendar: GameCalendar[] = [
    {
        id: 1,
        group: 'A',
        dates: [
            {
                id:"A1",
                local: 'AR',
                visitor: 'CA'
            },
            {
                id:"A2",
                local: 'PE',
                visitor: 'CH'
            },
            {
                id:"A3",
                local: 'PE',
                visitor: 'CA'
            },
            {
                id:"A4",
                local: 'CH',
                visitor: 'AR'
            },
            {
                id:"A5",
                local: 'AR',
                visitor: 'PE'
            },
            {
                id:"A6",
                local: 'CA',
                visitor: 'CH'
            },
        ]
    },
    {
        id: 2,
        group: 'B',
        dates: [
            {
                id:"B1",
                local: 'EC',
                visitor: 'VE'
            },
            {
                id:"B2",
                local: 'ME',
                visitor: 'JA'
            },
            {
                id:"B3",
                local: 'EC',
                visitor: 'JA'
            },
            {
                id:"B4",
                local: 'VE',
                visitor: 'ME'
            },
            {
                id:"B5",
                local: 'ME',
                visitor: 'EC'
            },
            {
                id:"B6",
                local: 'JA',
                visitor: 'VE'
            },
        ]
    },
    {
        id: 3,
        group: 'C',
        dates: [
            {
                id:"C1",
                local: 'US',
                visitor: 'BL'
            },
            {
                id:"C2",
                local: 'UY',
                visitor: 'PM'
            },
            {
                id:"C3",
                local: 'PM',
                visitor: 'US'
            },
            {
                id:"C4",
                local: 'UY',
                visitor: 'BL'
            },
            {
                id:"C5",
                local: 'US',
                visitor: 'UY'
            },
            {
                id:"C6",
                local: 'BL',
                visitor: 'PM'
            },
        ]
    },
    {
        id: 4,
        group: 'D',
        dates: [
            {
                id:"D1",
                local: 'CO',
                visitor: 'PA'
            },
            {
                id:"D2",
                local: 'BR',
                visitor: 'CS'
            },
            {
                id:"D3",
                local: 'CO',
                visitor: 'CS'
            },
            {
                id:"D4",
                local: 'PA',
                visitor: 'BR'
            },
            {
                id:"D5",
                local: 'BR',
                visitor: 'CO'
            },
            {
                id:"D6",
                local: 'CS',
                visitor: 'PA'
            },
        ]
    },
    {
        id: 5,
        group: 'E4',
        dates: [
            {
                id:"E41",
                local: 'A1',
                visitor: 'B2'
            },
            {
                id:"E42",
                local: 'B1',
                visitor: 'A2'
            },
            {
                id:"E43",
                local: 'C1',
                visitor: 'D2'
            },
            {
                id:"E44",
                local: 'D1',
                visitor: 'C2'
            }
        ]
    },
    {
        id: 6,
        group: 'E2',
        dates: [
            {
                id:"E21",
                local: 'E41',
                visitor: 'E42'
            },
            {
                id:"E22",
                local: 'E43',
                visitor: 'E44'
            } 
        ]
    },
    {
        id: 7,
        group: 'E1',
        dates: [
            {
                id:"E11",
                local: 'E21',
                visitor: 'E22'
            },
        ]
    }
];



			
			
