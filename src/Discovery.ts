import { Device } from './';
import { IDiscovery } from './shared/IDiscovery';
import { SsdpDiscovery } from './ssdp/SsdpDiscovery';

/**
 * Class responsible for discovering Axis cameras on the network.
 */
export class Discovery {

    private readonly discoveries = new Array<IDiscovery>();

    /**
     * Initializes a new instance of the class.
     */
    constructor() {
        this.discoveries.push(new SsdpDiscovery());
    }

    /**
     * Start listen for device advertisements on all network interface addresses.
     */
    public async start(): Promise<void> {
        for (const discovery of this.discoveries) {
            await discovery.start();
        }
    }

    /**
     * Stop listening for device advertisements.
     */
    public async stop(): Promise<void> {
        for (const discovery of this.discoveries) {
            await discovery.stop();
        }
    }

    /**
     * Triggers a new search for devices on the network.
     */
    public async search(): Promise<void> {
        for (const discovery of this.discoveries) {
            await discovery.search();
        }
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
