/*globals require, jest, describe, it, expect, __app, process, beforeEach, afterEach */

'use strict';

jest.autoMockOff();

/**
 * var sqlString = sqlSelect()
 .from('example')
 .columns('id')
 .columns(['name', 'age'])
 .columns({label:'address', alias: 'addr'})
 .getString(); // SELECT id, name FROM example;
 */

describe('sqlSelect', function () {
    let sqlSelect,
        sqlString;

    beforeEach(function () {
        sqlSelect = require('../../index');
    });

    it('must be a function', function () {
        expect(typeof sqlSelect).toBe('function');
    });

    it('must return an object', function () {
        expect(typeof sqlSelect()).toBe('object');
    });

    describe('#from', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.from).toBe('function');
        });
    });
});
