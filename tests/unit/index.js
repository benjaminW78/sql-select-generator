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
 .toString(); // SELECT id, name FROM example;
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

        it('must return an object', function () {
            expect(typeof sqlString.columns('id')).toBe('object');
            expect(typeof sqlString.columns(['id'])).toBe('object');
            expect(typeof sqlString.columns(['name', 'age'])).toBe('object');
            expect(typeof sqlString.columns({label: 'id'})).toBe('object');
            expect(typeof sqlString.columns({
                label: 'id',
                alias: 'i'
            })).toBe('object');
            expect(typeof sqlString.columns([{
                label: 'id',
                alias: 'i'
            }, {
                label: 'name',
                alias: 'n'
            }])).toBe('object');
            expect(typeof sqlString.columns(['id', {
                label: 'name',
                alias: 'n'
            }])).toBe('object');
            expect(typeof sqlString.columns([{
                label: 'id',
                alias: 'i'
            }, 'name'])).toBe('object');
            expect(typeof sqlString.columns([{
                label: 'id',
                alias: 'i'
            }, 'name', {
                label: 'age',
                alias: 'a'
            }])).toBe('object');
            expect(typeof sqlString.columns(['id', {
                label: 'name',
                alias: 'n'
            }, 'age'])).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.columns();
            }).toThrow();
            expect(function () {
                sqlString.columns('');
            }).toThrow();
            expect(function () {
                sqlString.columns({});
            }).toThrow();
            expect(function () {
                sqlString.columns({});
            }).toThrow();
            expect(function () {
                sqlString.columns({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.columns(null);
            }).toThrow();
            expect(function () {
                sqlString.columns(NaN);
            }).toThrow();
            expect(function () {
                sqlString.columns(true);
            }).toThrow();
            expect(function () {
                sqlString.columns(false);
            }).toThrow();
            expect(function () {
                sqlString.columns(0);
            }).toThrow();
            expect(function () {
                sqlString.columns(1);
            }).toThrow();
            expect(function () {
                sqlString.columns(-1);
            }).toThrow();
            expect(function () {
                sqlString.columns(42);
            }).toThrow();
            expect(function () {
                sqlString.columns(-18);
            }).toThrow();
            expect(function () {
                sqlString.columns(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.columns(-Infinity);
            }).toThrow();
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

    describe('#toString', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.toString).toBe('function');
        });

        it('must return a string', function () {
            expect(sqlString.columns('id').toString()).toBe('SELECT id;');
            expect(sqlString.from('test').toString()).toBe('SELECT id FROM test;');
            expect(sqlString.from({label: 'test'}).toString()).toBe('SELECT id FROM test;');
            expect(sqlString.from({
                label: 'test',
                alias: 't'
            }).toString()).toBe('SELECT id FROM test AS t;');
        });
    });
});
