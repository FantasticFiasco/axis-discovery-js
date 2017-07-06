import { Device } from './../';

export interface IDiscovery {
    start(): Promise<void>;
    stop(): Promise<void>;
    search(): Promise<void>;
    onHello(callback: (device: Device) => void);
    onGoodbye(callback: (device: Device) => void);
}
