export type TSignupForm = {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export type TSigninForm = {
    email: string;
    password: string;
};

export type TUpdateFrom = {
    name?: string;
    email?: string;
    password?: string;
};

export type TUser = {
    id: string;
    name: string;
    email: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
};
