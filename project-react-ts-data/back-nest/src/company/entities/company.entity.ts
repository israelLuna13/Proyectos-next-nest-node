import { FactJobs } from 'src/fact/entities/fact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column({ type: 'varchar' })
  headquarters: string;

  @Column({ type: 'varchar' })
  type_of_ownership: string;
  @Column({ type: 'varchar' })
  industry: string;
  @Column({ type: 'varchar' })
  sector: string;

  @OneToMany(() => FactJobs, (factJob) => factJob.company)
  factJobs: FactJobs[];
}
