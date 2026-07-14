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
    tableName:'dim_category',
    timestamps:false
})
class DimCategory extends Model{
    @PrimaryKey
    @Column({
        type:DataType.INTEGER
    })
    declare id_category:number

    @Column({
        type:DataType.TEXT
    })
    declare product_category:string

    @HasMany(() => DimFact)
    declare fact: DimFact[]
    
}

export default DimCategory