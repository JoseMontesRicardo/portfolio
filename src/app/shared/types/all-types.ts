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
    // usingSince: Date,
    skillLevel: number,
    description: string,
}