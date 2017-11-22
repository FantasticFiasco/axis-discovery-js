import * as expect from '@fantasticfiasco/expect';

import { log } from '../logging/Log';
import { Device } from './..';

export class DeviceCache {

    private readonly devices: { [macAddress: string]: Device } = {};

    constructor(...devices: Device[]) {
        for (const device of devices) {
            this.devices[device.macAddress] = device;
        }
    }

    public update(device: Device): Device {
        expect.toExist(device.macAddress, `MAC address of device with address ${device.address} is expected`);

        let hit = this.devices[device.macAddress];

        if (hit) {
            log('DeviceCache#update - hit for %s [%s]', device.address, device.macAddress);
            this.merge(device, hit);
        } else {
            log('DeviceCache#update - miss for %s [%s]', device.address, device.macAddress);
            hit = device;
        }

        this.devices[device.macAddress] = hit;
        return hit;
    }

    private merge(source: Device, target: Device) {
        Object.keys(source).forEach((key: string) => {
            if (source[key] !== undefined) {
                target[key] = source[key];
            }
        });
    }
}
