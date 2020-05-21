import bcrypt, { hash } from 'bcrypt';

interface IPassword{
    password: string,
    hash: string
}

interface ICodifyPassword{
    hashPassword(password:IPassword): Promise<string>;
    verifyPassword({password, hash}:IPassword): Promise<boolean>;
}

class PasswordValid implements ICodifyPassword {
    hashPassword(password: IPassword): Promise<string> {

        const hash = bcrypt.hash(password, 10);

        return hash;
    }
    
    verifyPassword({password, hash}:IPassword): Promise<boolean>{
        const response = bcrypt.compare(password, hash);

        return response;
    }
}

export default PasswordValid;