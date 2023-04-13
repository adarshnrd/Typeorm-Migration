import {
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

export abstract class ModelTemplate {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}

export interface ModelTemplateClass<ModelTemplate> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new(...args: any[]): ModelTemplate;
}