import * as ssdp from 'axis-discovery-ssdp';

import { IDiscovery } from '../shared/IDiscovery';
import { Device } from './..';

export class SsdpDiscovery implements IDiscovery {

    private readonly discovery = new ssdp.Discovery();

    public start(): Promise<void> {
        return this.discovery.start();
    }

    public stop(): Promise<void> {
        return this.discovery.stop();
    }

    public search(): Promise<void> {
        return this.discovery.search();
    }

    public onHello(callback: (device: Device) => void) {
        this.discovery.onHello((device: ssdp.Device) => callback(this.mapToDevice(device)));
    }

    public onGoodbye(callback: (device: Device) => void) {
        this.discovery.onGoodbye((device: ssdp.Device) => callback(this.mapToDevice(device)));
    }

    private mapToDevice(device: ssdp.Device): Device {
        return new Device(
            device.address,
            undefined,
            device.port,
            device.macAddress,
            device.friendlyName,
            device.modelName,
            device.modelDescription,
            device.modelNumber,
            device.presentationURL);
    }
}
