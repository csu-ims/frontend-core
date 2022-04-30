import { phonenumber, uuid } from "../../base"

export type LeaveApplication = {
    id: uuid
    phonenumber: phonenumber
    emergencyPerson: string
    emergencyContact: phonenumber
    place: string // 外出地点
    startTime: Date
    endTime: Date
    reasion: string
}