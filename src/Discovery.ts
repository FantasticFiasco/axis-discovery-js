import { Device } from './';

/**
 * Class responsible for discovering Axis cameras on the network.
 */
export class Discovery {

    /**
     * Start listen for device advertisements on all network interface addresses.
     */
    public start(): Promise<void> {
        throw new Error('Not implemented');
    }

    /**
     * Stop listening for device advertisements.
     */
    public stop() {
        throw new Error('Not implemented');
    }

    /**
     * Triggers a new search for devices on the network.
     */
    public search() {
        throw new Error('Not implemented');
    }

    /**
     * Register a callback that is invoked when a device is found on the network.
     */
    public onHello(callback: (device: Device) => void) {
        throw new Error('Not implemented' + callback);
    }

    /**
     * Register a callback that is invoked when a device intentionally is disconnecting from the
     * network.
     */
    public onGoodbye(callback: (device: Device) => void) {
        throw new Error('Not implemented' + callback);
    }
}
