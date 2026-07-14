import { Table, Column, Model, DataType, PrimaryKey } from "sequelize-typescript";

@Table({
  tableName: "gold_category",
  timestamps: false,

})
class GoldCategory extends Model {
  @PrimaryKey
  @Column({
    type: DataType.TEXT,
  })
  declare product_category: string;
  @Column({
    type: DataType.FLOAT,
  })
  declare average_sales: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare total_sales: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare discount_percentage: number;
}

export default GoldCategory;
