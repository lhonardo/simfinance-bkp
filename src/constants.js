import account from "./assets/img/account.png";
import stockMarket from "./assets/img/stockMarket.png";
import publicTreasure from "./assets/img/publicTreasure.png";
import rareMaterial from "./assets/img/rareMaterial.png";

import stockMarketPoints from "./assets/img/stockMarketPoints.png";
import inflation from "./assets/img/inflation.png";
import interestRate from "./assets/img/interestRate.png";
import good from "./assets/img/good.png";
import bad from "./assets/img/bad.png";
import regular from "./assets/img/regular.png";
import info from "./assets/img/info.png";

export const DEFINITIONS = {
    wallet: {
        account: {
            name: 'Conta corrente',
            description: '',
            icon: account 
        },
        stockMarket: {
            name: 'Bolsa de valores',
            description: '',
            icon: stockMarket,
            affectedBy: 'stockMarketPoints',
        },
        publicTreasure: {
            name: 'Tesouro público',
            description: '',
            icon: publicTreasure,
            affectedBy: 'interestRate',
        },
        rareMaterial: {
            name: 'Metal precioso',
            description: '',
            icon: rareMaterial,
            affectedBy: 'rareMaterial',
        },
    },
    world: {
        inflation: {
            name: 'Inflação mensal',
            description: '',
            icon: inflation,
        },
        interestRate: {
            name: 'Taxa de Juros mensal',
            description: '',
            icon: interestRate,
        },
        stockMarketPoints: {
            name: 'Bolsa de valores',
            description: '',
            icon: stockMarketPoints,
        },
        rareMaterial: {
            name: 'Metal precioso',
            description: '',
            icon: rareMaterial
        },
    },
    endMonthInfo: {
        regular: {
            title: 'Mês normal',
            description: 'Este foi um mês sem grande acontecimentos e o mercado se comportou como era esperado',
            icon: regular,
        },
        bad: {
            title: 'Atenção: algo está preocupando o mercado!',
            description: 'Fique atento ao mercado, algo ruim para o mercado financeiro parece estar acontecendo',
            icon: bad,
        },
        good: {
            title: 'Atenção: algo está animando o mercado!',
            description: 'Fique atento ao mercado, algo parece estar animando os investidores',
            icon: good,
        },
    }
}

export const infoIcon = info;