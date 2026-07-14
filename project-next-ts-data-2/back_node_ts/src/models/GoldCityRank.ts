import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "gold_city_rank",
  timestamps: false,
})
class GoldCityRank extends Model {
  @PrimaryKey
  @Column({
    type: DataType.TEXT,
  })
  declare city: string;

  @Column({
    type: DataType.FLOAT,
  })
  declare total_amount: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare city_rank: number;
}
export default GoldCityRank;
