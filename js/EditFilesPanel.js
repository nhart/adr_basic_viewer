/*
 * File: EditFilesPanel.js
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

function gotoEditModsPage() {
    var pid = window.location.pathname.split('/')[3];
    var location = window.location;
    var page = location.protocol + '//' + location.host + '/formbuilder/edit/' + pid + '/MODS/colorado';
    window.location = page;
}

EditFilesPanel = Ext.extend(EditFilesPanelUi, {
    initComponent: function() {
        EditFilesPanel.superclass.initComponent.call(this);
        var viewer = this.get('edit-files-panel-data-viewer');
        var add = this.buttons[0];
        var edit = this.buttons[1];
        var replace = this.buttons[2];
        var remove = this.buttons[3];
        var view = this.buttons[4];
        add.addListener('click', function(button, event) {
            var window = new AddFileWindow();
            window.show(this);
        });
        view.addListener('click', function(button, event) {
            var records = viewer.getSelectedRecords();
            var record = records[0];
            if(record) {
                var store = viewer.getStore();
                var pid = store.baseParams.pid;
                Ext.getCmp('adr-viewer').show();
                Ext.getCmp('adr-viewer').load({
                    url: "/adrbasic/ajax/getViewer",
                    params: {
                        pid: pid,
                        dsid: record.get('dsid')
                    }
                });
            }
        });
        viewer.addListener('click', function(dataviewer, index, node, event) {
            var record = dataviewer.getStore().getAt(index);
            if(record) {
                var dsid = record.get('dsid');
                if(dsid == 'MODS') {
                    edit.enable();
                    edit.addListener('click', gotoEditModsPage);
                }
                else {
                    edit.disable();
                    edit.removeListener('click', gotoEditModsPage);
                }
                replace.enable();
                remove.enable();
                view.enable();
            }
            else {
                edit.disable();
                replace.disable();
                remove.disable();
                view.disable();
            }
        });
    }
});
Ext.reg('editfilespanel', EditFilesPanel);