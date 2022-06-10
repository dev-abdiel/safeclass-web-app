
export interface AuthData {
    user: User;
    token: string;
}

export interface Users {
    users: User[];
}

export interface User {
    id: string;
    type: string;
    email: string;
    name: string;
    career: string;
    semester?: number;
    profilePicture?: string;
}