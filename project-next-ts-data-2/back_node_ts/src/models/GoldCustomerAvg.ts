import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "gold_customers_avg",
  timestamps: false,
})
class GoldCustomerAvg extends Model {
    @PrimaryKey
  @Column({
    type: DataType.TEXT,
  })
  declare customer_id: string;
  @Column({
    type: DataType.TEXT,
  })
  declare city: string;
  @Column({
    type: DataType.INTEGER,
  })
  declare age: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare total_spent: number;
}
export default GoldCustomerAvg;
