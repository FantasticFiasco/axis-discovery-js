import * as expect from '@fantasticfiasco/expect';

import { Device } from './..';

export class DeviceCache {

    private readonly devices: { [macAddress: string]: Device } = {};

    constructor(...devices: Device[]) {
        for (const device of devices) {
            this.devices[device.macAddress] = device;
        }
    }

    public update(device: Device): Device {
        expect.toExist(device.macAddress,  `MAC address of device with address ${device.address} is expected`);

        let hit = this.devices[device.macAddress];

        if (hit) {
            hit = Object.assign(hit, device);
        } else {
            hit = device;
        }

        this.devices[device.macAddress] = hit;
        return hit;
    }
}
