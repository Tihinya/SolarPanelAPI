import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    ManyToOne,
} from "typeorm";
import { SolarPanel } from "./solarPanel.entity";
import { v4 as uuidv4 } from "uuid";

@Entity("performance")
export class Performance {
    @PrimaryColumn("uuid")
    id!: string;

    @Column({ type: "date" })
    date!: Date;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    energyGenerated!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    estimatedPerformance!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @ManyToOne(() => SolarPanel, (solarPanel) => solarPanel.performances)
    solarPanel!: SolarPanel;

    @BeforeInsert()
    generateId() {
        this.id = uuidv4();
    }
}
