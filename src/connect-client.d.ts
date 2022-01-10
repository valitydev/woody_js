import {ConnectOptions} from "./connect-options";

declare module '@vality/woody' {
    export default function connectClient(host: string, port: string, path: string, genClient: object, connectOptions: ConnectOptions, errorCb: Function): object;
}
