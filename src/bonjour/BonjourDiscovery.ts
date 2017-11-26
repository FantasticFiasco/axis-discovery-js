import * as bonjour from 'axis-discovery-bonjour';

import { IDiscovery } from '../shared/IDiscovery';
import { Device } from './..';
import { log } from './../logging/Log';

export class BonjourDiscovery implements IDiscovery {

    private readonly discovery: bonjour.Discovery;

    constructor(discovery?: bonjour.Discovery) {
        this.discovery = discovery || new bonjour.Discovery();
    }

    public start(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.discovery.start();
                resolve();
            } catch (error) {
                log('BonjourDiscovery#start - unable to start discovery %o', error);
                reject(error);
            }
        });
    }

    public stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.discovery.stop();
                resolve();
            } catch (error) {
                log('BonjourDiscovery#stop - unable to stop discovery %o', error);
                reject(error);
            }
        });
    }

    public search(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.discovery.search();
                resolve();
            } catch (error) {
                log('BonjourDiscovery#search - unable to search %o', error);
                reject(error);
            }
        });
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
