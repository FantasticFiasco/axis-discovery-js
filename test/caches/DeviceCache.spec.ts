import * as chai from 'chai';

import { DeviceCache } from './../../src/caches/DeviceCache';
import {
    DEVICE_WITH_INFORMATION,
    DEVICE_WITHOUT_INFORMATION,
    DEVICE_WITHOUT_MAC_ADDRESS
} from './DeviceMocks';

chai.should();

describe('DeviceCache', () => {

    describe('#update', () => {

        it('should return device when cache holds more information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITH_INFORMATION);

            // Acr
            const actual = subject.update(DEVICE_WITHOUT_INFORMATION);

            // Assert
            actual.should.be.be.deep.equal(DEVICE_WITH_INFORMATION);
        });

        it('should return device when cache holds less information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITHOUT_INFORMATION);

            // Acr
            const actual = subject.update(DEVICE_WITH_INFORMATION);

            // Assert
            actual.should.be.be.deep.equal(DEVICE_WITH_INFORMATION);
        });

        it('should return device when cache holds identical information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITHOUT_INFORMATION);

            // Acr
            const actual = subject.update(DEVICE_WITHOUT_INFORMATION);

            // Assert
            actual.should.be.be.deep.equal(DEVICE_WITHOUT_INFORMATION);
        });

        it('should fail when device has no MAC address', function() {
            // Arrange
            const subject = new DeviceCache();

            // Act
            const fn = () => subject.update(DEVICE_WITHOUT_MAC_ADDRESS);

            // Assert
            fn.should.throw();
        });
    });
});
