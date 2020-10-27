import { ValueControls } from './ValueControls'
export class Control {
    Name: string
    Id: number
    OrderIndex: number
    DisplayName: string
    ValueControls: ValueControls[]
    OptionControls: any[]
    IsVisible: boolean
    IsResult: boolean
}