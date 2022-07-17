const fetch = require("node-fetch")
import ServerStatusData from "../interfaces/ServerData"
import ServerStatusOptions from "../interfaces/ServerDataOptions"

/**
 * 
 * @param { ServerStatusOptions } options
 * @returns ServerStatusData
 */
export async function getServerData(options: ServerStatusOptions) {
    const response = await fetch(`https://mcapi.us/server/status?ip=${options.ip}&port=${options.port || 25565}`)
    const json = await response.json()
    if(json.error) throw new Error(`[MC-STATUS]: ${json.error}`)
    const icon = json.favicon ? Buffer.from(json.favicon.replace("data:image/png;base64,", ""), "base64") : null
    const data = {
        online: json.online,
        ip: options.ip,
        port: options.port,
        motd: json.motd,
        icon,
        players: {
            max: json.players.max,
            online: json.players.smaple.filter(player => player.id !== "00000000-0000-0000-0000-000000000000").length,
            list: json.players.sample.filter(player => player.id !== "00000000-0000-0000-0000-000000000000").map(player => {
                return { playerName: player.name, playerUUID: player.id }
            })
        },
        software: json.server,
        lastOnline: json.last_online,
        lastUpdated: json.last_updated
    }
    return data as ServerStatusData
}

export default getServerData