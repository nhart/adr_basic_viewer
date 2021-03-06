/*
 * File: Files.js
 * Date: Mon Apr 04 2011 18:10:59 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Files = Ext.extend(FilesUi, {
    initComponent: function() {
        Files.superclass.initComponent.call(this);
        var dataview = this.get(0);
        dataview.tpl = filesXTemplate;
        dataview.addListener('click', function(dataview, index, node, event) {
            var record = dataview.getRecord(node);
            var pid = dataview.store.baseParams.pid;
            var dsid = dataview.store.getAt(index).get('dsid');
            var viewable_dsid = dataview.store.getAt(index).get('viewable_dsid');
            var label = dataview.store.getAt(index).get('label');
            ADRBasic.viewer.show(label, viewable_dsid);
        });
    }
});
Ext.reg('filePanel', Files);