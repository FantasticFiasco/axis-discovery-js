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
        this.discovery.onHello((bonjourDevice: bonjour.Device) => callback(this.mapToDevice(bonjourDevice)));
    }

    public onGoodbye(callback: (device: Device) => void) {
        this.discovery.onGoodbye((bonjourDevice: bonjour.Device) => callback(this.mapToDevice(bonjourDevice)));
    }

    private mapToDevice(bonjourDevice: bonjour.Device): Device {
        return new Device(
            bonjourDevice.address,
            bonjourDevice.linkLocalAddress,
            bonjourDevice.port,
            bonjourDevice.macAddress,
            bonjourDevice.friendlyName,
            undefined,
            undefined,
            undefined,
            undefined);
    }
}
