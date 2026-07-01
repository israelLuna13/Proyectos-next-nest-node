import { Company } from 'src/company/entities/company.entity';
import { Location } from 'src/location/entities/location.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FactJobs {
  @PrimaryGeneratedColumn()
  fact_id: number;

  @Column({ type: 'varchar' })
  job_title: string;

  @Column({ type: 'float' })
  rating: number;

  @Column({ type: 'numeric' })
  founded: number;

  @Column({ type: 'varchar' })
  revenue: string;

  @Column({ type: 'numeric' })
  location_id: number;

  @Column({ type: 'numeric' })
  company_id: number;

  @Column({ type: 'numeric' })
  salary_id: number;

  @ManyToOne(() => Location)
  @JoinColumn({ name: 'location_id' })
  location: Location;

  @ManyToOne(() => Salary)
  @JoinColumn({ name: 'salary_id' })
  salary: Salary;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
