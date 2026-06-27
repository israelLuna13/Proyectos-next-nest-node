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
  tableName: "location",
  timestamps: false,
})
class Location extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare location_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare city: string;
  @Column({
    type: DataType.STRING,
  })
  declare state: string;
  @HasMany(() => FactJobs)
  declare jobs: FactJobs[];
}

export default Location;
