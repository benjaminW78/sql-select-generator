/*globals require, jest, describe, it, expect, __app, process, beforeEach, afterEach */

'use strict';

jest.autoMockOff();

/**
 let sqlString = sqlSelect()
 .from('example')
 .join({label: 'linked', on: '(example.id = linked.e_id)'})
 .join({label: 'otherLinked', as: 'ol', using: 'e_id', type: 'right'})
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

    describe('#where', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.where).toBe('function');
        });

        it('must return an object', function () {
            expect(typeof sqlString.where('id = 2')).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.where();
            }).toThrow();
            expect(function () {
                sqlString.where('');
            }).toThrow();
            expect(function () {
                sqlString.where({});
            }).toThrow();
            expect(function () {
                sqlString.where({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.where(null);
            }).toThrow();
            expect(function () {
                sqlString.where(NaN);
            }).toThrow();
            expect(function () {
                sqlString.where(true);
            }).toThrow();
            expect(function () {
                sqlString.where(false);
            }).toThrow();
            expect(function () {
                sqlString.where(0);
            }).toThrow();
            expect(function () {
                sqlString.where(1);
            }).toThrow();
            expect(function () {
                sqlString.where(-1);
            }).toThrow();
            expect(function () {
                sqlString.where(42);
            }).toThrow();
            expect(function () {
                sqlString.where(-18);
            }).toThrow();
            expect(function () {
                sqlString.where(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.where(-Infinity);
            }).toThrow();
        });
    });

    describe('#useLowercase', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.useLowercase).toBe('function');
        });

        it('must return an object', function () {
            expect(typeof sqlString.useLowercase(true)).toBe('object');
            expect(typeof sqlString.useLowercase(false)).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.useLowercase();
            }).toThrow();
            expect(function () {
                sqlString.useLowercase('');
            }).toThrow();
            expect(function () {
                sqlString.useLowercase('id');
            }).toThrow();
            expect(function () {
                sqlString.useLowercase({});
            }).toThrow();
            expect(function () {
                sqlString.useLowercase({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(null);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(NaN);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(0);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(1);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(-1);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(42);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(-18);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.useLowercase(-Infinity);
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

        it('must return an object', function () {
            expect(typeof sqlString.join({
                label: 'linked',
                'on': 'example.id = linked.e_id'
            })).toBe('object');
            expect(typeof sqlString.join({
                label: 'linkedBis',
                alias: 'lB',
                'on': 'example.id = lB.e_id'
            })).toBe('object');
            expect(typeof sqlString.join({
                label: 'otherLinked',
                'using': 'id'
            })).toBe('object');
            expect(typeof sqlString.join({
                label: 'otherLinkedBis',
                alias: 'oLBis',
                'using': 'id'
            })).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.join();
            }).toThrow();
            expect(function () {
                sqlString.join('');
            }).toThrow();
            expect(function () {
                sqlString.join({});
            }).toThrow();
            expect(function () {
                sqlString.join({label: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.join({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.join({
                    label: 'bar',
                    alias: 'bar'
                });
            }).toThrow();
            expect(function () {
                sqlString.join({
                    alias: 'bar',
                    using: 'id'
                });
            }).toThrow();
            expect(function () {
                sqlString.join({
                    alias: 'bar',
                    'on': 'id'
                });
            }).toThrow();
            expect(function () {
                sqlString.join({
                    alias: 'bar',
                    'on': 'bar.id = t.id',
                    using: 'id'
                });
            }).toThrow();
            expect(function () {
                sqlString.join({
                    alias: 'label',
                    'on': 'bar.id = t.id',
                    using: 'id'
                });
            }).toThrow();
            expect(function () {
                sqlString.join(null);
            }).toThrow();
            expect(function () {
                sqlString.join(NaN);
            }).toThrow();
            expect(function () {
                sqlString.join(true);
            }).toThrow();
            expect(function () {
                sqlString.join(false);
            }).toThrow();
            expect(function () {
                sqlString.join(0);
            }).toThrow();
            expect(function () {
                sqlString.join(1);
            }).toThrow();
            expect(function () {
                sqlString.join(-1);
            }).toThrow();
            expect(function () {
                sqlString.join(42);
            }).toThrow();
            expect(function () {
                sqlString.join(-18);
            }).toThrow();
            expect(function () {
                sqlString.join(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.join(-Infinity);
            }).toThrow();
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

        it('must return an object', function () {
            expect(typeof sqlString.order('id')).toBe('object');
            expect(typeof sqlString.order(['id'])).toBe('object');
            expect(typeof sqlString.order(['name', 'age'])).toBe('object');
            expect(typeof sqlString.order({label: 'id'})).toBe('object');
            expect(typeof sqlString.order({
                label: 'id',
                order: 'DESC'
            })).toBe('object');
            expect(typeof sqlString.order([{
                label: 'id',
                order: 'DESC'
            }, {
                label: 'name'
            }])).toBe('object');
            expect(typeof sqlString.order(['id', {
                label: 'name',
                order: 'DESC'
            }])).toBe('object');
            expect(typeof sqlString.order([{
                label: 'id'
            }, 'name'])).toBe('object');
            expect(typeof sqlString.order([{
                label: 'id',
                order: 'DESC'
            }, 'name', {
                label: 'age',
                order: 'ASC'
            }])).toBe('object');
            expect(typeof sqlString.order(['id', {
                label: 'name'
            }, 'age'])).toBe('object');
        });

        it('must throw an exception', function () {
            expect(function () {
                sqlString.order();
            }).toThrow();
            expect(function () {
                sqlString.order('');
            }).toThrow();
            expect(function () {
                sqlString.order({});
            }).toThrow();
            expect(function () {
                sqlString.order({alias: 'bar'});
            }).toThrow();
            expect(function () {
                sqlString.order(null);
            }).toThrow();
            expect(function () {
                sqlString.order(NaN);
            }).toThrow();
            expect(function () {
                sqlString.order(true);
            }).toThrow();
            expect(function () {
                sqlString.order(false);
            }).toThrow();
            expect(function () {
                sqlString.order(0);
            }).toThrow();
            expect(function () {
                sqlString.order(1);
            }).toThrow();
            expect(function () {
                sqlString.order(-1);
            }).toThrow();
            expect(function () {
                sqlString.order(42);
            }).toThrow();
            expect(function () {
                sqlString.order(-18);
            }).toThrow();
            expect(function () {
                sqlString.order(Infinity);
            }).toThrow();
            expect(function () {
                sqlString.order(-Infinity);
            }).toThrow();
        });
    });

    describe('#toString', function () {
        beforeEach(function () {
            sqlString = sqlSelect();
        });

        it('must be a function', function () {
            expect(typeof sqlString.toString).toBe('function');
        });

        describe('-uppercase by default', function () {
            it('must return a string for columns and from parts', function () {
                sqlString
                    .columns('id');
                expect(sqlString.toString()).toBe('SELECT id;');
                sqlString
                    .columns('address')
                    .from('test');
                expect(sqlString.toString()).toBe('SELECT id, address FROM test;');
                sqlString
                    .columns(['name', {
                        label: 'age',
                        alias: 'a'
                    }])
                    .from({
                        label: 'test',
                        alias: 't'
                    });
                expect(sqlString.toString()).toBe('SELECT id, address, name, age AS a FROM test AS t;');
            });

            it('must return a string for where parts', function () {
                sqlString
                    .columns('id')
                    .from('test')
                    .where('id = 3');
                expect(sqlString.toString()).toBe('SELECT id FROM test WHERE id = 3;');
            });

            it('must return a string for order part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .order('name');
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name;');
                sqlString
                    .order({
                        label: 'id',
                        order: 'DESC'
                    });
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC;');
                sqlString
                    .order([{
                        label: 'address',
                        order: 'ASC'
                    }, 'phone']);
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC, address ASC, phone;');
                sqlString
                    .order([{
                        label: 'city',
                        order: 'DESC'
                    }, {
                        label: 'country',
                        order: 'ASC'
                    }]);
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC, address ASC, phone, city DESC, country ASC;');
            });

            it('must return a string for join part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .join({
                        label: 'linked',
                        'on': 'example.id = linked.e_id'
                    })
                    .join([{
                        label: 'linkedBis',
                        alias: 'lB',
                        'on': 'example.id = lB.e_id'
                    }, {
                        label: 'otherLinked',
                        'using': 'id'
                    }, {
                        label: 'otherLinkedBis',
                        alias: 'oLBis',
                        'using': 'id'
                    }]);
                expect(sqlString.toString()).toBe('SELECT name FROM test JOIN linked ON (example.id = linked.e_id) JOIN linkedBis AS lB ON (example.id = lB.e_id) JOIN otherLinked USING (id) JOIN otherLinkedBis AS oLBis USING (id);');
            });

            it('(STUPIDITY) must return a string for non valid usage', function () {
                sqlString
                    .from('test');
                expect(sqlString.toString()).toBe('SELECT  FROM test;');
            });
        });

        describe('-uppercase forced', function () {
            beforeEach(function () {
                sqlString = sqlSelect();
                sqlString.useLowercase(false);
            });

            it('must return a string for columns and from parts', function () {
                sqlString
                    .columns('id');
                expect(sqlString.toString()).toBe('SELECT id;');
                sqlString
                    .columns('address')
                    .from('test');
                expect(sqlString.toString()).toBe('SELECT id, address FROM test;');
                sqlString
                    .columns(['name', {
                        label: 'age',
                        alias: 'a'
                    }])
                    .from({
                        label: 'test',
                        alias: 't'
                    });
                expect(sqlString.toString()).toBe('SELECT id, address, name, age AS a FROM test AS t;');
            });

            it('must return a string for where parts', function () {
                sqlString
                    .columns('id')
                    .from('test')
                    .where('id = 3');
                expect(sqlString.toString()).toBe('SELECT id FROM test WHERE id = 3;');
            });

            it('must return a string for order part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .order('name');
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name;');
                sqlString
                    .order({
                        label: 'id',
                        order: 'DESC'
                    });
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC;');
                sqlString
                    .order([{
                        label: 'address',
                        order: 'ASC'
                    }, 'phone']);
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC, address ASC, phone;');
                sqlString
                    .order([{
                        label: 'city',
                        order: 'DESC'
                    }, {
                        label: 'country',
                        order: 'ASC'
                    }]);
                expect(sqlString.toString()).toBe('SELECT name FROM test ORDER BY name, id DESC, address ASC, phone, city DESC, country ASC;');
            });

            it('must return a string for join part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .join({
                        label: 'linked',
                        'on': 'example.id = linked.e_id'
                    })
                    .join([{
                        label: 'linkedBis',
                        alias: 'lB',
                        'on': 'example.id = lB.e_id'
                    }, {
                        label: 'otherLinked',
                        'using': 'id'
                    }, {
                        label: 'otherLinkedBis',
                        alias: 'oLBis',
                        'using': 'id'
                    }]);
                expect(sqlString.toString()).toBe('SELECT name FROM test JOIN linked ON (example.id = linked.e_id) JOIN linkedBis AS lB ON (example.id = lB.e_id) JOIN otherLinked USING (id) JOIN otherLinkedBis AS oLBis USING (id);');
            });

            it('(STUPIDITY) must return a string for non valid usage', function () {
                sqlString
                    .from('test');
                expect(sqlString.toString()).toBe('SELECT  FROM test;');
            });
        });

        describe('-lowercase', function () {
            beforeEach(function () {
                sqlString = sqlSelect();
                sqlString.useLowercase(true);
            });

            it('must return a string for columns and from parts', function () {
                sqlString
                    .columns('id');
                expect(sqlString.toString()).toBe('select id;');
                sqlString
                    .columns('address')
                    .from('test');
                expect(sqlString.toString()).toBe('select id, address from test;');
                sqlString
                    .columns(['name', {
                        label: 'age',
                        alias: 'a'
                    }])
                    .from({
                        label: 'test',
                        alias: 't'
                    });
                expect(sqlString.toString()).toBe('select id, address, name, age as a from test as t;');
            });

            it('must return a string for where parts', function () {
                sqlString
                    .columns('id')
                    .from('test')
                    .where('id = 3');
                expect(sqlString.toString()).toBe('select id from test where id = 3;');
            });

            it('must return a string for order part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .order('name');
                expect(sqlString.toString()).toBe('select name from test order by name;');
                sqlString
                    .order({
                        label: 'id',
                        order: 'desc'
                    });
                expect(sqlString.toString()).toBe('select name from test order by name, id desc;');
                sqlString
                    .order([{
                        label: 'address',
                        order: 'asc'
                    }, 'phone']);
                expect(sqlString.toString()).toBe('select name from test order by name, id desc, address asc, phone;');
                sqlString
                    .order([{
                        label: 'city',
                        order: 'desc'
                    }, {
                        label: 'country',
                        order: 'asc'
                    }]);
                expect(sqlString.toString()).toBe('select name from test order by name, id desc, address asc, phone, city desc, country asc;');
            });

            it('must return a string for join part', function () {
                sqlString
                    .columns(['name'])
                    .from('test')
                    .join({
                        label: 'linked',
                        'on': 'example.id = linked.e_id'
                    })
                    .join([{
                        label: 'linkedBis',
                        alias: 'lB',
                        'on': 'example.id = lB.e_id'
                    }, {
                        label: 'otherLinked',
                        'using': 'id'
                    }, {
                        label: 'otherLinkedBis',
                        alias: 'oLBis',
                        'using': 'id'
                    }]);
                expect(sqlString.toString()).toBe('select name from test join linked on (example.id = linked.e_id) join linkedBis as lB on (example.id = lB.e_id) join otherLinked using (id) join otherLinkedBis as oLBis using (id);');
            });

            it('(STUPIDITY) must return a string for non valid usage', function () {
                sqlString
                    .from('test');
                expect(sqlString.toString()).toBe('select  from test;');
            });
        });
    });
});
