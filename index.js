/*globals module, console */

module.exports = function () {
    'use strict';

    const
        errorPrefix = '[sqlSelect] Error : ',
        errorBadArguments = errorPrefix + 'Bad arguments.',
        description = {};

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

    function joinToString() {
        const
            from = description.from;
        // let resultString = '';
        //
        // return resultString;
        return '';
    }

    function orderToString() {
        const
            columns = description.order;
        let resultString = '';

        if (undefined !== columns && 0 < columns.length) {
            resultString += ' ORDER ';
            columns.forEach(function (column, index) {
                if (0 !== index) {
                    resultString += ', ';
                }
                resultString += column.label;
                if (undefined !== column.order) {
                    resultString += ' AS ' + column.order;
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

            if ('string' === typeof origin && '' !== origin.trim()) {
                result.label = origin.trim();
            } else if ('object' === typeof origin) {
                if ('string' === typeof origin.label && '' !== origin.label.trim()) {
                    result.label = origin.label.trim();
                    if (undefined !== origin.alias) {
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
        join: function () {

        },
        columns: function (columns) {
            const
                localErrorBadArguments = errorBadArguments + ' #columns() need a non-empty string argument or object, with label property, at least.',
                result = [];
            let columnsTmp = columns;

            if (!Array.isArray(columns)) {
                columnsTmp = [columns];
            }

            columnsTmp.forEach(function (column) {
                if ('string' === typeof column && '' !== column.trim()) {
                    result.push({
                        label: column
                    });
                } else if ('object' === typeof column) {
                    if ('string' === typeof column.label && '' !== column.label.trim()) {
                        const
                            resultTmp = {};

                        resultTmp.label = column.label.trim();
                        if (undefined !== column.alias) {
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
                result = [];
            let columnsTmp = columns;

            if (!Array.isArray(columns)) {
                columnsTmp = [columns];
            }

            columnsTmp.forEach(function (column) {
                if ('string' === typeof column && '' !== column.trim()) {
                    result.push({
                        label: column
                    });
                } else if ('object' === typeof column) {
                    if ('string' === typeof column.label && '' !== column.label.trim()) {
                        const
                            resultTmp = {};

                        resultTmp.label = column.label.trim();
                        if (undefined !== column.order) {
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
            result += orderToString();
            result += ';';

            return result;
        }
    };
};
