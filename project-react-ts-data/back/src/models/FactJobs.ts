import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Salary from "./Salary";
import Location from "./Location";
import Company from "./Company";

@Table({
  tableName: "fact_jobs",
  timestamps: false,
})
class FactJobs extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare fact_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare job_title: string;

  @Column({
    type: DataType.FLOAT,
  })
  declare rating: number;
 @Column({
    type: DataType.INTEGER,
  })
  declare founded: number;

  @Column({
    type: DataType.STRING,
  })
  declare revenue: string;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
  })
  declare location_id: number;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  declare company_id: number;

  @ForeignKey(() => Salary)
  @Column({
    type: DataType.INTEGER,
  })
  declare salary_id: number;

  @BelongsTo(() => Location)
  declare location: Location;

  @BelongsTo(() => Company)
  declare company: Company;

  @BelongsTo(() => Salary)
  declare salary: Salary;
}

export default FactJobs;
