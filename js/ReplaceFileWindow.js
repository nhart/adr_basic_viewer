/*
 * File: ReplaceFileWindow.js
 * Date: Thu Mar 17 2011 22:04:24 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

ReplaceFileWindow = Ext.extend(ReplaceFileWindowUi, {
    initComponent: function() {
        ReplaceFileWindow.superclass.initComponent.call(this);
        var viewer = this.get('edit-files-panel-data-viewer');
        var records = viewer.getSelectedRecords();
        var record = records[0];
    }
});
