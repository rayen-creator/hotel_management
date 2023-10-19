// base.entity.ts
import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: Date;

    @CreateDateColumn({ type: 'date' })
    lastChangedAt: Date;

}
