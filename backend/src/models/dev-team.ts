import { AllowNull, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Meetings from "./meeting";


@Table({
    underscored: true
})
export default class DevTeam extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column(DataType.STRING)
    teamName: string

    @HasMany(() => Meetings, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    meetings: Meetings[]
}