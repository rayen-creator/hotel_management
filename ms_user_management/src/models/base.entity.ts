// base.entity.ts
import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'date'})
    createdAt: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @CreateDateColumn({ type: 'date'})
    lastChangedAt: Date;

    @Column({ type: 'varchar', length: 300 })
    lastChangedBy: string;
}