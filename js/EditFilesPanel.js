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
    var page = location.protocol + '//' + location.host + '/formbuilder/edit/' + pid + '/colorado';
    window.location = page;
}

EditFilesPanel = Ext.extend(EditFilesPanelUi, {
    initComponent: function() {
        EditFilesPanel.superclass.initComponent.call(this);
        var store = Ext.StoreMgr.lookup('Datastreams');
        store.reload(store.lastOptions);
        var toolbar = this.getTopToolbar();
        var add = toolbar.get('adr-edit-file-add');
        var edit = toolbar.get('adr-edit-file-edit');
        var view = toolbar.get('adr-edit-file-view');
        var download = toolbar.get('adr-edit-file-download');
        var remove = toolbar.get('adr-edit-file-delete');
        var viewer = this.get('adr-edit-file-list');
        var details = Ext.getCmp('adr-edit-file-details');

        // Add hidden download form.
        Ext.DomHelper.append('adr-basic-viewer', {
            tag: 'form',
            id: 'adr-edit-file-download-form',
            method: 'GET',
            action: '',
            style: 'display:none',
            children: [{
              tag: 'input',
              type: 'submit',
              value: 'Download',
              style: 'display:none'
            }]
        });
        
        details.updateDetails = function(record) {
            this.tpl.overwrite(this.body, record.data);
        }

        add.addListener('click', function(button, event) {
            var window = new AddFileWindow();
            window.show(this);
        });
        download.addListener('click', function(button, event) {
            var records = viewer.getSelectedRecords();
            var record = records[0];
            if(record) {
                var url = record.get('download_url');
                var form = Ext.get('adr-edit-file-download-form');
                form.set({action: url});
                form.child('input').dom.click();
            }
        });
        remove.addListener('click', function(button, event) {
            var records = viewer.getSelectedRecords();
            var record = records[0];
            if(record) {
                var store = viewer.getStore();
                var pid = store.baseParams.pid;
                var dsid = record.get('dsid');
                Ext.Msg.confirm('Delete', 'Are you sure you want to delete this file?', function(btn, text){
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: '/adrbasic/ajax/removeDatastream',
                            success: function() {
                                var store = Ext.StoreMgr.lookup('Datastreams');
                                store.reload(store.lastOptions);
                                store = Ext.StoreMgr.lookup('OverviewDatastreams');
                                store.reload(store.lastOptions);
                            },
                            failure: function() {
                                Ext.Msg.alert('Failure', 'Could not delete file.');
                            },
                            params: {
                                pid: pid,
                                dsid: dsid
                            }
                        });

                    }
                });
            }

        });
        view.addListener('click', function(button, event) {
            var records = viewer.getSelectedRecords();
            var record = records[0];
            if(record) {
                var store = viewer.getStore();
                var label = record.get('label');
                var dsid = record.get('dsid');
                var viewable_dsid = record.get('viewable_dsid');
                ADRBasic.viewer.show(label, viewable_dsid);
            }
        });
        viewer.addListener('click', function(dataviewer, index, node, event) {
            var record = dataviewer.getStore().getAt(index);
            if(record) {
                var dsid = record.get('dsid');
                details.updateDetails(record);
                if(dsid == 'MODS') {
                    edit.enable();
                    edit.addListener('click', gotoEditModsPage);
                }
                else {
                    edit.disable();
                    edit.removeListener('click', gotoEditModsPage);
                }
                remove.enable();
                view.enable();
                download.enable();
            }
            else {
                edit.disable();
                remove.disable();
                download.disable();
                view.disable();
            }
        });
    }
});
Ext.reg('editfilespanel', EditFilesPanel);