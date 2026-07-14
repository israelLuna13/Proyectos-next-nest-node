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
    tableName:'dim_customer',
    timestamps:false
})
class DimCustomer extends Model{
    @PrimaryKey
    @Column({
        type:DataType.INTEGER
    })
    declare id_cust:number

    @Column({
        type:DataType.TEXT
    })
    declare customer_id:string

     @Column({
        type:DataType.INTEGER
    })
    declare age:number

       @Column({
        type:DataType.TEXT
    })
    declare gender:string
       @Column({
        type:DataType.TEXT
    })
    declare city:string

       @Column({
        type:DataType.BOOLEAN
    })
    declare is_returning_customer:boolean

    @HasMany(() => DimFact)
    declare fact: DimFact[]
    
}

export default DimCustomer