/*
 * File: State.js
 * Date: Thu Nov 17 2011 10:58:12 GMT-0400 (AST)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

State = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        State.superclass.constructor.call(this, Ext.apply({
            storeId: 'State',
            data: [
                [
                    "Active",
                    "A"
                ],
                [
                    "Inactive",
                    "I"
                ],
                [
                    "Deleted",
                    "D"
                ]
            ],
            fields: [
                {
                    name: 'type',
                    type: 'string'
                },
                {
                    name: 'value'
                }
            ]
        }, cfg));
    }
});
new State();