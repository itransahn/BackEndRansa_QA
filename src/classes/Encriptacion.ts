import bycript from 'bcrypt';


export function encriptar ( password : string ){
    let saltRounds = 10;

    const salt = bycript.genSaltSync( saltRounds );
    return bycript.hashSync(password , salt)
} 


export function desencriptar(password: string, passwordDB : string){
    return bycript.compareSync(password, passwordDB)
}