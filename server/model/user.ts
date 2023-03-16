import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Users extends Model {
  
  @Column
  name: string

  @Column
  description: string

  @Column
  createdate: string;

  @Column
  updateddate: string

  @Column
  createdBy: string;

  @Column
  updatedBy: string;
  
}
