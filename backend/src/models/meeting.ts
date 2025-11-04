import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import DevTeam from "./dev-team";


@Table({
    underscored: true
})
export default class Meeting extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => DevTeam)
    @AllowNull(false)
    @Column(DataType.UUID)
    teamId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startTime: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    endTime: Date

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @BelongsTo(() => DevTeam)
    devTeam: DevTeam
}