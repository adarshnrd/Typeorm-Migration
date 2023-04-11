import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

}