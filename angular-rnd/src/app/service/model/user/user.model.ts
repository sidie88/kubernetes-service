export class User{
    ID: Number;
    CreatedAt: string;
    UpdateAt: string;
    DeletedAt: string;
    email: string;
    username: string;
    password: string;
    token?: string;
    roleName: string;
    createBy: string;
    modifiedBy: string;
}