export interface DeckModel {
    id: number,
    name: string,
    details: {due: number, new: number, total: number},
    cards: []
}