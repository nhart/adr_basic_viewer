/*
 * File: ADRBasicViewer.ui.js
 * Date: Wed Mar 16 2011 17:12:35 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ADRBasicViewerUi = Ext.extend(Ext.TabPanel, {
    activeTab: 2,
    width: 960,
    height: 1000,
    initComponent: function() {
        this.items = [
            {
                xtype: 'overviewpanel'
            },
            {
                xtype: 'viewerpanel'
            },
            {
                xtype: 'managepanel'
            }
        ];
        ADRBasicViewerUi.superclass.initComponent.call(this);
    }
});
