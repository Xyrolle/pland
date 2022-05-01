
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateProjectInput {
    exampleField?: Nullable<number>;
}

export class UpdateProjectInput {
    id: number;
}

export class CreateTaskInput {
    title: string;
    description?: Nullable<string>;
    createdById: number;
}

export class UpdateTaskInput {
    id: number;
    title?: Nullable<string>;
    description?: Nullable<string>;
    createdById?: Nullable<number>;
}

export class CreateUserInput {
    name: string;
    surname: string;
    username: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class UpdateUserInput {
    id: number;
    name: string;
    surname: string;
    username: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
}

export class Project {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract projects(): Nullable<Project>[] | Promise<Nullable<Project>[]>;

    abstract project(id: number): Nullable<Project> | Promise<Nullable<Project>>;

    abstract tasks(userId?: Nullable<number>): Nullable<Task>[] | Promise<Nullable<Task>[]>;

    abstract task(id: number): Nullable<Task> | Promise<Nullable<Task>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProject(createProjectInput: CreateProjectInput): Project | Promise<Project>;

    abstract updateProject(updateProjectInput: UpdateProjectInput): Project | Promise<Project>;

    abstract removeProject(id: number): Nullable<Project> | Promise<Nullable<Project>>;

    abstract createTask(createTaskInput: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(updateTaskInput: UpdateTaskInput): Task | Promise<Task>;

    abstract removeTask(id: number): Nullable<Task> | Promise<Nullable<Task>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Task {
    id: number;
    title: string;
    description?: Nullable<string>;
    createdBy?: Nullable<User>;
    createdById: number;
}

export class User {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    createdAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
