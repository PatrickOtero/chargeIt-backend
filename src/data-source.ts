import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
import { User } from "./database/entities/User.entity";
import { Customer } from "./database/entities/Customer.entity";
import { Charge } from "./database/entities/Charge.entity";
dotenv.config();

const { DATABASE_HOST, DATABASE_USER, DATABASE_PASS, DATABASE_NAME} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST,
    port: 5432,
    username: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME,
    migrations: ['src/database/migrations/*{.ts,.js}'],
    entities: [User, Customer, Charge]
})
