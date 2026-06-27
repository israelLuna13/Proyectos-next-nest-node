import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import FactJobs from "./FactJobs";

@Table({
  tableName: "salary",
  timestamps: false,
})
class Salary extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare salary_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare salary_min: number;
  @Column({
    type: DataType.INTEGER,
  })
  declare salary_max: number;
  @HasMany(() => FactJobs)
  declare jobs: FactJobs[];
}
export default Salary;
