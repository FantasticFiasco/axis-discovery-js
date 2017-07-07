import * as bonjour from 'axis-discovery-bonjour';

import { IDiscovery } from '../shared/IDiscovery';
import { Device } from './..';

export class BonjourDiscovery implements IDiscovery {

    private readonly discovery = new bonjour.Discovery();

    public start(): Promise<void> {
        this.discovery.start();
        return Promise.resolve();
    }

    public stop(): Promise<void> {
        this.discovery.stop();
        return Promise.resolve();
    }

    public search(): Promise<void> {
        this.discovery.search();
        return Promise.resolve();
    }

    public onHello(callback: (device: Device) => void) {
        this.discovery.onHello((device: bonjour.Device) => callback(this.mapToDevice(device)));
    }

    public onGoodbye(callback: (device: Device) => void) {
        this.discovery.onGoodbye((device: bonjour.Device) => callback(this.mapToDevice(device)));
    }

    private mapToDevice(device: bonjour.Device): Device {
        return new Device(
            device.address,
            device.linkLocalAddress,
            device.port,
            device.macAddress,
            device.friendlyName,
            undefined,
            undefined,
            undefined,
            undefined);
    }
}
