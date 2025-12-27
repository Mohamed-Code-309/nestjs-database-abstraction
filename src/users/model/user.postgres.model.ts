import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserPostgres {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ type: 'numeric' })
  salary: number;

  @Column({ type: 'boolean', default: false })
  isMarried: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
