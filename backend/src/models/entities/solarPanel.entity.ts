import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    OneToMany,
    BeforeInsert,
    CreateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Performance } from "./performance.entity";
import { v4 as uuidv4 } from "uuid";

@Entity("solar_panels")
export class SolarPanel {
    @PrimaryColumn("uuid")
    id!: string;

    @Column()
    model!: string;

    @Column()
    location!: string;

    @Column({ type: "date" })
    installationDate!: Date;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    capacity!: number;

    @Column()
    status!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => User, (user) => user.solarPanels)
    user!: User;

    @OneToMany(() => Performance, (performance) => performance.solarPanel)
    performances!: Performance[];

    @BeforeInsert()
    generateId() {
        this.id = uuidv4();
    }
}
