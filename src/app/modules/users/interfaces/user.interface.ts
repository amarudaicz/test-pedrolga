export interface User {
    readonly id:number,
    name:string,
    lastName:string,
    email:string,
    role:RoleUser
}

export type RoleUser = 'client' | 'admin';