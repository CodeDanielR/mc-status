export interface ServerStatusPlayersData {
    max: number,
    online: number,
    list: {
        playerName: string,
        playerUUID: string
    }[]
}

export default ServerStatusPlayersData