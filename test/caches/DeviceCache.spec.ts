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

        it('should return device when cache miss', function() {
            // Arrange
            const subject = new DeviceCache();

            // Act
            const actual = subject.update(DEVICE_WITHOUT_INFORMATION);

            // Assert
            actual.should.be.deep.equal(DEVICE_WITHOUT_INFORMATION);
        });

        it('should return device when cache hit holds more information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITH_INFORMATION);

            // Act
            const actual = subject.update(DEVICE_WITHOUT_INFORMATION);

            // Assert
            actual.should.be.deep.equal(DEVICE_WITH_INFORMATION);
        });

        it('should return device when cache hit holds less information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITHOUT_INFORMATION);

            // Act
            const actual = subject.update(DEVICE_WITH_INFORMATION);

            // Assert
            actual.should.be.deep.equal(DEVICE_WITH_INFORMATION);
        });

        it('should return device when cache hit holds identical information', function() {
            // Arrange
            const subject = new DeviceCache(DEVICE_WITHOUT_INFORMATION);

            // Act
            const actual = subject.update(DEVICE_WITHOUT_INFORMATION);

            // Assert
            actual.should.be.deep.equal(DEVICE_WITHOUT_INFORMATION);
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
