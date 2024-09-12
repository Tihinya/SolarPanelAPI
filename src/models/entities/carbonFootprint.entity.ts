import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("carbon_footprint")
export class CarbonFootprint {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    carbonReduction!: number;

    @Column({ type: "date" })
    date!: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, (user) => user.carbonFootprints)
    user!: User;
}
