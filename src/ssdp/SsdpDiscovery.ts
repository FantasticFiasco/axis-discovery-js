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
        throw new Error('Method not implemented.' + callback);
    }

    public onGoodbye(callback: (device: Device) => void) {
        throw new Error('Method not implemented.' + callback);
    }
}
