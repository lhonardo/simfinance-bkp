export const BAD_EVENTS = {
    coronaVirus: {
        name: 'Corona vírus',
        description: 'Descrição do corona',
        year: 2020,
        type: 'bad',
        months: [
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.15,
                description: '',
            },
            {
                inflation: 0,
                interestRate: -0.10,
                stockMarketPoints: -0.10,
                rareMaterial: 0.1,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.05,
                description: '',
            },
        ],
    },
    globalFinancialCrisis: {
        name: 'Crise imobiliária',
        description: 'Descrição da crise',
        year: 2008,
        type: 'bad',
        months: [
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0.10,
                interestRate: -0.10,
                stockMarketPoints: -0.10,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: -0.10,
                stockMarketPoints: -0.10,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
        ],
    },
    greatDepression: {
        name: 'Grande depressão',
        description: 'Descrição da crise',
        year: 1930,
        type: 'bad',
        months: [
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: -0.10,
                stockMarketPoints: -0.10,
                rareMaterial: 0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: -0.15,
                rareMaterial: 0.10,
                description: '',
            },
        ],
    },
}

export const GOOD_EVENTS = {
    techRunning: {
        name: 'Corrida pela tecnologia',
        description: 'Descrição do evento',
        year: 1999,
        type: 'good',
        months: [
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: 0.20,
                rareMaterial: -0.10,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0.10,
                stockMarketPoints: 0.10,
                rareMaterial: -0.08,
                description: '',
            },
            {
                inflation: 0,
                interestRate: 0,
                stockMarketPoints: 0.15,
                rareMaterial: -0.05,
                description: '',
            },
        ],
    },
}

export const ALL_EVENTS = {
    ...BAD_EVENTS,
    ...GOOD_EVENTS,
}