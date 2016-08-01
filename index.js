/*globals module, console */

module.exports = function () {
    'use strict';

    const
        errorPrefix = '[sqlSelect] Error : ',
        errorBadArguments = errorPrefix + 'Bad arguments.',
        description = {};

    function isStringCool(str) {
        return ('string' === typeof str && '' !== str.trim());
    }

    /**
     * Simple implementation of XOR logical operator
     *
     * Here are test cases :
     *  a = true, b = true
     *  // !a != !b is false
     *  a = false, b = false
     *  // !a != !b is false
     *  a = true, b = false
     *  // !a != !b is true
     *  a = false, b = true
     *  // !a != !b is true
     *
     *  Not the simpliest to read but best to code and for performances
     *
     * @param firstCondition
     * @param secondCondition
     * @returns {boolean}
     * @constructor
     */
    function xorOperator(firstCondition, secondCondition) {
        return (!firstCondition !== !secondCondition);
    }

    function columnsToString() {
        const
            columns = description.columns;
        let resultString = 'SELECT ';

        if (undefined !== columns && 0 < columns.length) {
            columns.forEach(function (column, index) {
                if (0 !== index) {
                    resultString += ', ';
                }
                resultString += column.label;
                if (undefined !== column.alias) {
                    resultString += ' AS ' + column.alias;
                }
            });
        }

        return resultString;
    }

    function fromToString() {
        const
            from = description.from;
        let resultString = '';

        if (undefined !== from) {
            resultString += ' FROM ' + from.label;
            if (undefined !== from.alias) {
                resultString += ' AS ' + from.alias;
            }
        }

        return resultString;
    }
    
    function whereToString() {
        const
            condition = description.where;
        let resultString = '';

        if (undefined !== condition) {
            resultString += ' WHERE ' + condition;
        }

        return resultString;
    }

    function joinToString() {
        const
            tables = description.tables;
        let resultString = '';

        if (undefined !== tables && 0 < tables.length) {
            tables.forEach(function (table) {
                resultString += ' JOIN ' + table.label;
                if (undefined !== table.alias) {
                    resultString += ' AS ' + table.alias;
                }
                if (undefined !== table.using) {
                    resultString += ' USING (' + table.using + ')';
                }
                if (undefined !== table.on) {
                    resultString += ' ON (' + table.on + ')';
                }
            });
        }

        return resultString;
    }

    function orderToString() {
        const
            columns = description.order;
        let resultString = '';

        if (undefined !== columns && 0 < columns.length) {
            resultString += ' ORDER BY ';
            columns.forEach(function (column, index) {
                if (0 !== index) {
                    resultString += ', ';
                }
                resultString += column.label;
                if (undefined !== column.order) {
                    resultString += ' ' + column.order;
                }
            });
        }

        return resultString;
    }

    return {
        from: function (origin) {
            const
                localErrorBadArguments = errorBadArguments + ' #from() need a non-empty string argument or object, with label, property at least.',
                result = {};

            if (isStringCool(origin)) {
                result.label = origin.trim();
            } else if ('object' === typeof origin) {
                if (isStringCool(origin.label)) {
                    result.label = origin.label.trim();
                    if (isStringCool(origin.alias)) {
                        result.alias = origin.alias;
                    }
                } else {
                    throw localErrorBadArguments;
                }
            } else {
                throw localErrorBadArguments;
            }

            description.from = result;

            return this;
        },
        where: function (condition) {
            const
                localErrorBadArguments = errorBadArguments + ' #where() need a non-empty string argument property.';
            let result = '';

            if (isStringCool(condition)) {
                result = condition.trim();
            } else {
                throw localErrorBadArguments;
            }

            description.where = result;

            return this;
        },
        join: function (tables) {
            const
                localErrorBadArguments = errorBadArguments + ' #join() need a non-empty string argument or object, with label and on/using properties, at least.',
                result = description.tables || [];
            let tablesTmp = tables;

            if (!Array.isArray(tables)) {
                tablesTmp = [tables];
            }

            tablesTmp.forEach(function (table) {
                if (isStringCool(table)) {
                    result.push({
                        label: table
                    });
                } else if ('object' === typeof table) {
                    const
                        testUsingOn = xorOperator(isStringCool(table.using), isStringCool(table.on));

                    if (isStringCool(table.label) && testUsingOn) {
                        const
                            resultTmp = {};

                        resultTmp.label = table.label.trim();
                        if (isStringCool(table.alias)) {
                            resultTmp.alias = table.alias;
                        }
                        if (isStringCool(table['on'])) {
                            resultTmp['on'] = table['on'];
                        } else {
                            resultTmp.using = table.using;
                        }
                        result.push(resultTmp);
                    } else {
                        throw localErrorBadArguments;
                    }
                } else {
                    throw localErrorBadArguments;
                }
            });

            description.tables = result;

            return this;
        },
        columns: function (columns) {
            const
                localErrorBadArguments = errorBadArguments + ' #columns() need a non-empty string argument or object, with label property, at least.',
                result = description.columns || [];
            let columnsTmp = columns;

            if (!Array.isArray(columns)) {
                columnsTmp = [columns];
            }

            columnsTmp.forEach(function (column) {
                if (isStringCool(column)) {
                    result.push({
                        label: column
                    });
                } else if ('object' === typeof column) {
                    if (isStringCool(column.label)) {
                        const
                            resultTmp = {};

                        resultTmp.label = column.label.trim();
                        if (isStringCool(column.alias)) {
                            resultTmp.alias = column.alias;
                        }
                        result.push(resultTmp);
                    } else {
                        throw localErrorBadArguments;
                    }
                } else {
                    throw localErrorBadArguments;
                }
            });

            description.columns = result;

            return this;
        },
        order: function (columns) {
            const
                localErrorBadArguments = errorBadArguments + ' #order() need a non-empty string argument or object, with label property, at least.',
                result = description.order || [];
            let columnsTmp = columns;

            if (!Array.isArray(columns)) {
                columnsTmp = [columns];
            }

            columnsTmp.forEach(function (column) {
                if (isStringCool(column)) {
                    result.push({
                        label: column
                    });
                } else if ('object' === typeof column) {
                    if (isStringCool(column.label)) {
                        const
                            resultTmp = {};

                        resultTmp.label = column.label.trim();
                        if (isStringCool(column.order)) {
                            resultTmp.order = column.order;
                        }
                        result.push(resultTmp);
                    } else {
                        throw localErrorBadArguments;
                    }
                } else {
                    throw localErrorBadArguments;
                }
            });

            description.order = result;

            return this;
        },
        toString: function () {
            let result = '';

            result += columnsToString();
            result += fromToString();
            result += joinToString();
            result += whereToString();
            result += orderToString();
            result += ';';

            return result;
        }
    };
};
