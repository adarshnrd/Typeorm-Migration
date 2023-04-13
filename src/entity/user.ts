import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne } from "typeorm";
import { Card } from "./card";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToOne(() => Card, cards => cards.user)
    cards: Card;

}