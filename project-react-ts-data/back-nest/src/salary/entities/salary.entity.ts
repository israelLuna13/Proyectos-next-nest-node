import { FactJobs } from 'src/fact/entities/fact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  salary_id: number;

  @Column({ type: 'numeric' })
  salary_min: number;

  @Column({ type: 'numeric' })
  salary_max: number;

  @OneToMany(() => FactJobs, (factJob) => factJob.salary)
  factJobs: FactJobs[];
}
