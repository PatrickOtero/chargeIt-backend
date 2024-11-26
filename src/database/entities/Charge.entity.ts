import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ChargeStatus } from "../../modules/charges/enum/chargeStatus.enum";
import { Customer } from "./Customer.entity";

@Entity("charge")
export class Charge {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Customer, (customer) => customer.charges, { onDelete: "CASCADE" })
    @JoinColumn({ name: "customer_id" })
    customer: Customer;

    @Column( { nullable: true } )
    customer_id: string

    @Column()
    customerCpf: string

    @Column()
    description: string

    @Column({ enum: ChargeStatus})
    chargeStatus: string

    @Column()
    chargeValue: number

    @Column()
    chargeDueDate: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}