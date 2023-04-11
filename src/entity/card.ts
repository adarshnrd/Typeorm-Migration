import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Card{

@PrimaryGeneratedColumn()
public id:number;

@Column()
public name:string;

@Column()
public category: string;

}