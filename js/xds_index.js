/*
 * File: xds_index.js
 * Date: Thu Mar 17 2011 14:35:02 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.onReady(function() {
    Ext.QuickTips.init();
    var cmp1 = new ADRBasicViewer({
        renderTo: Ext.getBody()
    });
    cmp1.show();
    var cmp2 = new EditObjectWindow({
        renderTo: Ext.getBody()
    });
    cmp2.show();
    var cmp3 = new DeleteObjectWindow({
        renderTo: Ext.getBody()
    });
    cmp3.show();
    var cmp4 = new AddFileWindow({
        renderTo: Ext.getBody()
    });
    cmp4.show();
    var cmp5 = new EditFileWindow({
        renderTo: Ext.getBody()
    });
    cmp5.show();
    var cmp6 = new FileUploadField({
        renderTo: Ext.getBody()
    });
    cmp6.show();
});
