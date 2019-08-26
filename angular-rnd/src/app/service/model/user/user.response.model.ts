import { User } from './user.model';

export class UserResponse{
    message: string;
    status: boolean;
    user: User;
}