export type Status = "Done" | "Requires action" | "Processing"

export interface Album {
  id: number
  title: string
  artist: string
  year: number
  cover: string
  status: Status
}
