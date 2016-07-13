/*globals module, console */

module.exports = function () {
    'use strict';

    const
        errorPrefix = '[sqlSelect] Error : ',
        errorBadArguments = errorPrefix + 'Bad arguments.',
        description = {};

    return {
        from: function (origin) {
            const
                localErrorBadArguments = errorBadArguments + ' #from() need a non-empty string argument or object with label property at least.',
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
        columns: function () {

        },
        order: function () {

        },
        toString: function () {

        }
    };
};
