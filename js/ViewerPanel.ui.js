/*
 * File: ViewerPanel.ui.js
 * Date: Thu Mar 17 2011 14:48:57 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ViewerPanelUi = Ext.extend(Ext.Panel, {
    title: 'Viewer',
    height: 250,
    autoHeight: true,
    forceLayout: true,
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
