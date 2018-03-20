export interface TrainingOrganisation {
  id: number,
  name: string,
  typeId: string,
  addressFirstLine: string,
  addressSecondLine?: string,
  addresSuburb: string,
  addressStateId: string,
  addressPostCode: number, 
}