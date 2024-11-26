import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Charge } from "./Charge.entity"

@Entity("customer")
export class Customer {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    customerName: string

    @Column()
    customerEmail: string

    @Column()
    customerCpf: string

    @Column()
    customerPhone: string

    @Column({ nullable: true })
    customerCep: string

    @Column({ nullable: true })
    location: string

    @Column({ nullable: true })
    complement: string

    @Column({ nullable: true })
    district: string

    @Column({ nullable: true })
    city: string

    @Column({ nullable: true })
    estate: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Charge, (charge) => charge.customer)
    charges: Charge[];
}
