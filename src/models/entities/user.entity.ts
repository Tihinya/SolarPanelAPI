import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    BeforeInsert,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { SolarPanel } from "./solarPanel.entity";
import { CarbonFootprint } from "./carbonFootprint.entity";

@Entity("users")
export class User {
    @PrimaryColumn("uuid")
    id!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    name!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @OneToMany(() => SolarPanel, (solarPanel) => solarPanel.user)
    solarPanels!: SolarPanel[];

    @OneToMany(() => CarbonFootprint, (carbonFootprint) => carbonFootprint.user)
    carbonFootprints!: CarbonFootprint[];

    @BeforeInsert()
    generateId() {
        this.id = uuidv4();
    }
}
