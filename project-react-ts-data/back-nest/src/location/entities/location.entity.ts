import { FactJobs } from 'src/fact/entities/fact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  location_id: number;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'varchar' })
  state: string;

  @OneToMany(() => FactJobs, (factJob) => factJob.location)
  factJobs: FactJobs[];
}
