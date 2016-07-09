/*globals require, jest, describe, it, expect, __app, process, beforeEach, afterEach */

'use strict';

jest.autoMockOff();

/**
 let sqlString = sqlSelect()
 .from('example')
 .join({label: 'linked', as: 'l', on: '(example.id = l.e_id)'})
 .join({label: 'otherLinked', as: 'l', using: 'e_id', type: 'right'})
 .columns('id')
 .columns(['name', 'age'])
 .columns({label: 'address', alias: 'addr' })
 .order('name')
 .order(['id', 'age'])
 .order({label: 'address', order: 'DESC'})
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

        it('must return an object', function () {
            expect(typeof sqlString.from('test')).toBe('object');
            expect(typeof sqlString.from({label: 'test'})).toBe('object');
            expect(typeof sqlString.from({
                label: 'test',
                alias: 't'
            })).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.from();
            }).toThrow();
            expect(function () {
                sqlString.from('');
            }).toThrow();
            expect(function () {
                sqlString.from({});
            }).toThrow();
            expect(function () {
                sqlString.from({});
            }).toThrow();
            expect(function () {
                sqlString.from({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.from(null);
            }).toThrow();
            expect(function () {
                sqlString.from(NaN);
            }).toThrow();
            expect(function () {
                sqlString.from(true);
            }).toThrow();
            expect(function () {
                sqlString.from(false);
            }).toThrow();
            expect(function () {
                sqlString.from(0);
            }).toThrow();
            expect(function () {
                sqlString.from(1);
            }).toThrow();
            expect(function () {
                sqlString.from(-1);
            }).toThrow();
            expect(function () {
                sqlString.from(42);
            }).toThrow();
            expect(function () {
                sqlString.from(-18);
            }).toThrow();
            expect(function () {
                sqlString.from(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.from(-Infinity);
            }).toThrow();
        });
    });

    describe('#join', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.join).toBe('function');
        });
    });

    describe('#columns', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.columns).toBe('function');
        });
    });

    describe('#order', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.order).toBe('function');
        });
    });

    describe('#getString', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.getString).toBe('function');
        });
    });
});
