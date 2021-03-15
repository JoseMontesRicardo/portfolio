export interface Stack {
    code: string | 'back-end' | 'front-end' | 'DB' | 'cloud',
    dysplayName: string | 'back-end' | 'front-end' | 'bases de datos' | 'cloud'
}

export interface Technology {
    id: string,
    name: string,
    logo: string,
    stack: Stack,
    experience?: string,
    product?: string[],
    // usingSince: Date,
    skillLevel: number,
    description: string,
}

export interface Product {
    id: string,
    name: string,
    company: {
        displayName: string,
        url: string
    },
    url: string,
    logo: string,
    position: string,
    stack?: Technology[],
    initDate?: string,
    lastDate?: string,
    description: string,
}