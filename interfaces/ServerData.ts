import ServerStatusPlayersData from "./ServerDataPlayersData"

export interface ServerStatusData {
    online: boolean,
    ip: string;
    port?: number;
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