export interface ICycle {
  menstruationStartDate: string
  menstruationEndDate: string
  ovulationDate: string
  fertile: {
    fertileStart: string
    fertileEnd: string
    ovulationDate: string
  } | null
}
