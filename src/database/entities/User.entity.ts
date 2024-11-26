import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"

@Entity("user")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    userName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column( { nullable: true } )
    cpf: string

    @Column( { nullable: true } )
    phone: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
