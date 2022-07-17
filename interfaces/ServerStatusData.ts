import ServerStatusPlayersData from "./ServerStatusPlayersData"

export interface ServerStatusData {
    online: boolean,
    motd: string,
    icon: Buffer | null,
    players: ServerStatusPlayersData,
    software: {
        name: string,
        protocol: number
    },
    lastOnline?: number | null,
    lastUpdated: number
}

export default ServerStatusData