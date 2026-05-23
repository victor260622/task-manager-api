import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // ─── Auth ─────────────────────────────────────────
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  refreshToken!: string;

  // ─── Perfil ───────────────────────────────────────
  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: true })
  avatarUrl!: string;

  // ─── Control de acceso ────────────────────────────
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role!: UserRole;

  @Column({ default: true })
  isActive!: boolean;

  // ─── Timestamps ───────────────────────────────────
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}