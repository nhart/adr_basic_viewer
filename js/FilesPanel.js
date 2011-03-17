/*
 * File: FilesPanel.js
 * Date: Mon Mar 07 2011 02:10:59 GMT-0600 (CST)
 * 
 * This file was generated by Ext Designer version xds-1.0.3.2.
 * http://www.extjs.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

FilesPanel = Ext.extend(FilesPanelUi, {
    initComponent: function() {
        FilesPanel.superclass.initComponent.call(this);
        this.get(0).addListener('click', function(dataview, index, node, event) {
            var record = dataview.getRecord(node);
            var pid = dataview.store.baseParams.pid;
            var dsid = dataview.store.getAt(index).get('dsid');
            var viewer = Ext.getCmp('adr-viewer');
            viewer.show();
            viewer.load({
                url: "/adrbasic/ajax/getViewer",
                params: {
                    pid: pid,
                    dsid: dsid
                }
            });
        });
    }
});
Ext.reg('filespanel', FilesPanel);