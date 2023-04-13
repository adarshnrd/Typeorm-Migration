import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public category: string;

    @OneToOne(() => User, user => user.cards)
    @JoinColumn()
    user: User;

    @Column()
    userId: number;
}
