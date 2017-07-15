import * as ssdp from 'axis-discovery-ssdp';

import { IDiscovery } from '../shared/IDiscovery';
import { Device } from './..';
import { log } from './../logging/Log';

export class SsdpDiscovery implements IDiscovery {

    private readonly discovery = new ssdp.Discovery();

    public async start(): Promise<void> {
        try {
            await this.discovery.start();
        } catch (error) {
            log('SsdpDiscovery#start - unable to start discovery %o', error);
            throw error;
        }
    }

    public async stop(): Promise<void> {
        try {
            await this.discovery.stop();
        } catch (error) {
            log('SsdpDiscovery#stop - unable to stop discovery %o', error);
            throw error;
        }
    }

    public async search(): Promise<void> {
        try {
            await this.discovery.search();
        } catch (error) {
            log('SsdpDiscovery#search - unable to search %o', error);
            throw error;
        }
    }

    public onHello(callback: (device: Device) => void) {
        this.discovery.onHello((ssdpDevice: ssdp.Device) => {
            const device = this.mapToDevice(ssdpDevice);
            if (device) {
                callback(device);
            } else {
                log('SsdpDiscovery#onHello - unable to map %o', ssdpDevice);
            }
        });
    }

    public onGoodbye(callback: (device: Device) => void) {
        this.discovery.onGoodbye((ssdpDevice: ssdp.Device) => {
            const device = this.mapToDevice(ssdpDevice);
            if (device) {
                callback(device);
            } else {
                log('SsdpDiscovery#onGoodbye - unable to map %o', ssdpDevice);
            }
        });
    }

    private mapToDevice(ssdpDevice: ssdp.Device): Device | undefined {
        if (!ssdpDevice.macAddress) {
            return undefined;
        }

        return new Device(
            ssdpDevice.address,
            undefined,
            ssdpDevice.port,
            ssdpDevice.macAddress,
            ssdpDevice.friendlyName,
            ssdpDevice.modelName,
            ssdpDevice.modelDescription,
            ssdpDevice.modelNumber,
            ssdpDevice.presentationURL);
    }
}
