/*
 * File: ViewerPanel.ui.js
 * Date: Wed Mar 16 2011 17:12:35 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ViewerPanelUi = Ext.extend(Ext.Panel, {
    title: 'Viewer',
    width: 400,
    height: 250,
    id: 'adr-viewer',
    initComponent: function() {
        this.autoLoad = {
            url: "/adrbasic/ajax/getViewer",
            params: {
                pid: (window.location.pathname.split('/')[
                    3
                ])
            }
        };
        ViewerPanelUi.superclass.initComponent.call(this);
    }
});
