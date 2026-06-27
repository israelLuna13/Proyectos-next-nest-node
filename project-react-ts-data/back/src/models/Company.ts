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
  tableName: "company",
  timestamps: false,
})
class Company extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare company_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare headquarters: string;

  @Column({
    type: DataType.STRING,
  })
  declare type_of_ownership: string;

  @Column({
    type: DataType.STRING,
  })
  declare industry: string;

  @Column({
    type: DataType.STRING,
  })
  declare sector: string;
  
  @HasMany(()=> FactJobs)
  declare jobs: FactJobs[]
}

export default Company;
