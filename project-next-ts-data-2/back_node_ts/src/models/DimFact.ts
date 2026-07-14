import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import DimCustomer from "./DimCustomer";
import DimCategory from "./DimCategory";
import DimDevice from "./DimDevice";
import DimPayment from "./DimPayment";

@Table({
  tableName: "dim_fact",
  timestamps: false,
})
class DimFact extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare id_fact: number;

  @Column({
    type: DataType.TEXT,
  })
  declare order_id: string;

  @Column({
    type: DataType.DATE,
  })
  declare date: string;

  @ForeignKey(()=>DimCustomer)
  @Column({
    type: DataType.INTEGER,
  })
  declare id_cust: number;

  @ForeignKey(()=>DimCategory)
  @Column({
    type: DataType.INTEGER,
  })
  declare id_category: number;

  @ForeignKey(()=>DimDevice)
  @Column({
    type: DataType.INTEGER,
  })
  declare id_device: number;

  @ForeignKey(()=>DimPayment)
  @Column({
    type: DataType.INTEGER,
  })
  declare id_payment: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare unit_price: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare quantity: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare discount_amount: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare total_amount: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare delivery_time_days: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare customer_rating: number;

  @BelongsTo(()=> DimCustomer)
  declare dim_customer: DimCustomer

  @BelongsTo(()=> DimCategory)
  declare dim_category: DimCategory

  @BelongsTo(()=> DimDevice)
  declare dim_device: DimDevice

  @BelongsTo(()=> DimPayment)
  declare dim_payment: DimPayment

}

export default DimFact;
