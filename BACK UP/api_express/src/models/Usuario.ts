import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({ tableName: 'usuarios' })
class Usuario extends Model {
  
  
  @Column({ type: DataType.STRING(50), primaryKey:true, field: 'email', allowNull:false })
  declare email: string;


  @Column({ type: DataType.STRING(60), field: 'password' })
  declare password: string;

}

export default Usuario;