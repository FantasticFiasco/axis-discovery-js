import * as expect from '@fantasticfiasco/expect';

import { Device } from './..';

export class DeviceCache {

    private readonly devices: { [macAddres: string]: Device } = {};

    constructor(...devices: Device[]) {
        for (const device of devices) {
            this.devices[device.macAddress] = device;
        }
    }

    public update(device: Device): Device {
        expect.toExist(device.macAddress,  `MAC address of device with address ${device.address} is not specified`);

        let cachedDevice = this.devices[device.macAddress];
        if (!cachedDevice) {
            this.devices[device.macAddress] = device;
            return device;
        }

        cachedDevice = Object.assign(cachedDevice, device);
        this.devices[device.macAddress] = cachedDevice;
        return cachedDevice;
    }
}
