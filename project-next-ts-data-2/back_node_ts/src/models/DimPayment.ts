import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import DimFact from "./DimFact";

@Table({
    tableName:'dim_payment',
    timestamps:false
})
class DimPayment extends Model{
    @PrimaryKey
    @Column({
        type:DataType.INTEGER
    })
    declare id_payment:number

    @Column({
        type:DataType.TEXT
    })
    declare payment_method:string


    @HasMany(() => DimFact)
    declare fact: DimFact[]
    
}

export default DimPayment