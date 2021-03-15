import { Product } from "@shared/types/all-types"

let products: Product[] = [
    {
        id: '1',
        name: 'Seguro todo riesgo',
        company: {
            displayName: 'Seguros Falabella',
            url: 'https://web.segurosfalabella.com/'
        },
        url: 'https://auto.segurosfalabella.com.co/',
        logo: 'assets/imgs/asf.svg',
        position: 'Desarrollador Full-stack',
        stack: [],
        initDate: 'Noviembre/2018',
        lastDate: 'Actualidad',
        description: 'Flujo online que te permite cotizar o compra tu seguro todo riesgo en Colombia 100% online.',
    },
    {
        id: '2',
        name: 'SOAT',
        company: {
            displayName: 'Seguros Falabella',
            url: 'https://web.segurosfalabella.com/'
        },
        url: 'https://soat.segurosfalabella.com.co/',
        logo: 'assets/imgs/asf.svg',
        position: 'Desarrollador Full-stack',
        stack: [],
        initDate: 'Noviembre/2018',
        lastDate: 'Actualidad',
        description: 'Flujo online que te permite cotizar o compra el SOAT en Colombia 100% online.',
    },
    {
        id: '3',
        name: 'Seguros generales',
        company: {
            displayName: 'Seguros Falabella',
            url: 'https://web.segurosfalabella.com/'
        },
        url: 'https://web.segurosfalabella.com/',
        logo: 'assets/imgs/asf.svg',
        position: 'Desarrollador Full-stack',
        stack: [],
        initDate: 'Noviembre/2018',
        lastDate: 'Actualidad',
        description: 'Flujo online que te permite cotizar o compra toda la gama de seguros ofrecidos por ASF 100% online.',
    },
    {
        id: '4',
        name: 'Intellgence',
        company: {
            displayName: 'Resolve Studio',
            url: 'https://www.linkedin.com/company/resolve-studio/?originalSubdomain=co'
        }
        ,
        url: 'https://www.intelligencetv.co/',
        logo: 'assets/imgs/intelligence.png',
        position: 'Desarrollador Backend',
        stack: [],
        initDate: 'Noviembre/2018',
        lastDate: 'Actualidad',
        description: 'Intelligence es una herramienta de atribución multi canal, Intelligence optimiza las campañas de medios haciendo uso de inteligencia artificial y big data.',
    },
    {
        id: '5',
        name: 'Vigía',
        company: {
            displayName: 'Metro sinú',
            url: 'https://metrosinu.co/'
        }
        ,
        url: 'App interna',
        logo: 'assets/imgs/metrosinu.png',
        position: 'Desarrollador Backend',
        stack: [],
        initDate: 'Nov/2015',
        lastDate: 'Oct/2016',
        description: 'Vigía es una aplicación web encargada de gestionar el soporte y mantenimiento de los buses de la empresa Metro sinú',
    },
]

export { products }