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
    tableName:'dim_device',
    timestamps:false
})
class DimDevice extends Model{
    @PrimaryKey
    @Column({
        type:DataType.INTEGER
    })
    declare id_device:number

    @Column({
        type:DataType.TEXT
    })
    declare device_type:string

    @HasMany(() => DimFact)
    declare fact: DimFact[]
    
}

export default DimDevice