/*
 * File: Datastreams.js
 * Date: Wed Mar 16 2011 02:05:28 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Datastreams = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        Datastreams.superclass.constructor.call(this, Ext.apply({
            storeId: 'Datastreams',
            autoLoad: true,
            url: '/adrbasic/ajax/getDatastreams',
            baseParams: {
                pid: (window.location.pathname.split('/')[
                    3
                ])
            },
            fields: [
                {
                    name: 'dsid'
                },
                {
                    name: 'label'
                },
                {
                    name: 'img_url'
                },
                {
                    name: 'mime'
                },
                {
                    name: 'download_url'
                }
            ]
        }, cfg));
    }
});
new Datastreams();