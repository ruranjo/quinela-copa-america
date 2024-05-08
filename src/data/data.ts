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
                local: 'AR',
                visitor: 'CA'
            },
            {
                local: 'PE',
                visitor: 'CH'
            },
            {
                local: 'PE',
                visitor: 'CA'
            },
            {
                local: 'CH',
                visitor: 'AR'
            },
            {
                local: 'AR',
                visitor: 'PE'
            },
            {
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
                local: 'EC',
                visitor: 'VE'
            },
            {
                local: 'ME',
                visitor: 'JA'
            },
            {
                local: 'EC',
                visitor: 'JA'
            },
            {
                local: 'VE',
                visitor: 'ME'
            },
            {
                local: 'ME',
                visitor: 'EC'
            },
            {
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
                local: 'US',
                visitor: 'BL'
            },
            {
                local: 'UY',
                visitor: 'PM'
            },
            {
                local: 'PM',
                visitor: 'US'
            },
            {
                local: 'UY',
                visitor: 'BL'
            },
            {
                local: 'US',
                visitor: 'UY'
            },
            {
                local: 'BL',
                visitor: 'PM'
            },
        ]
    },{
        id: 4,
        group: 'D',
        dates: [
            {
                local: 'CO',
                visitor: 'PA'
            },
            {
                local: 'BR',
                visitor: 'CS'
            },
            {
                local: 'CO',
                visitor: 'CS'
            },
            {
                local: 'PA',
                visitor: 'BR'
            },
            {
                local: 'BR',
                visitor: 'CO'
            },
            {
                local: 'CS',
                visitor: 'PA'
            },
        ]
    }
];



			
			
