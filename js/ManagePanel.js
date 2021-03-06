/*
 * File: ManagePanel.js
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


function modify_label(viewer, label, pid, ds) {
  var win = new Ext.Window({
    width:500,
    height:100,
    plain: true,   
    layout:'form',
    title: 'Edit Datastream',
    closeAction: 'destroy',
      buttons: [{
        text:'Save',
        handler: function() {
          Ext.Ajax.request({
            url: '/adrbasic/ajax/setDatastreamLabel',
            params: {
            pid: pid,
            label: Ext.getCmp('labelid').getValue(),
            ds: ds
            },
            success: function(response, opts) {
              var obj = Ext.decode(response.responseText);
              if(obj.success) {
                if (obj.msg != 'Not updated') {
                Ext.Msg.alert('Sucesss', 'The label for the ' + ds + ' datastream has been updated!');
                viewer.getStore().load();
                }
                else {
                  Ext.Msg.alert('Sucesss', 'The label for the ' + ds + ' datastream did not change!');
                }
                win.close();
              }
              else {
                Ext.Msg.alert('Failure', obj.msg);
              }

            },
            failure: function(response, opts) {
              Ext.Msg.alert('Failure', 'Failed to Modify Label.');
            }                        
          });

        }
    }],
      items: [{
      xtype: 'textfield',
      value: label,
      name: 'dslabel',
      fieldLabel: 'Label',
      id: 'labelid',
      width: 375
    }]
  });
  win.show();
    
}

// Need to use jQuery here to make a Sychronous AJAX call as we are returning
// a value determined from the Drupal DB.
function checkFormAssociation(dsid) {
  var ret;
  $.ajax({      
    async: false,
    type: 'POST',
    dataType: 'json',
    url: '/adrbasic/ajax/checkFormAssociation',
    data: {
      ds: dsid
    },
    success: function(response, opts) {
      if(response.msg == 'Found association') {
        ret = true;
      }  
      else {
        ret = false;
      }
    },
    failure: function(response, opts) {
      Ext.Msg.alert('Failure', 'Failed to Get Association.');
      ret = false;
    },
    error: function(response, opts) {
      Ext.Msg.alert('Failure', 'Failed to Get Association.');
      ret = 'failed';
    }
  })
  return ret;
}

function gotoEditModsPage() {
  var pid = window.location.pathname.split('/')[3];
  var location = window.location;
  var page = location.protocol + '//' + location.host + '/formbuilder/edit/' + pid;
  window.location = page;
}

function gotoXACMLPage(pid) {
  pid = (pid) ? pid : window.location.pathname.split('/')[3];
  var location = window.location;
  var page = location.protocol + '//' + location.host + '/xacml/' + pid + '/POLICY';
  window.location = page;
}

function gotoFilesIngestPage(pid) {
  // test the pid to see if it is uninitialized or an empty string.  If this the case then
  // attempt to use the path name in the address bar.
  pid = (!!pid) ? pid : window.location.pathname.split('/')[3];

  var location = window.location;
  var page = location.protocol + '//' + location.host + '/islandora_co_manager/ingest_files/' + pid;
  window.location = page;
}

ManagePanel = Ext.extend(ManagePanelUi, {
  initComponent: function() {
    ManagePanel.superclass.initComponent.call(this);
    var manageFiles = this.get('adr-manage-files');
    var toolbar = manageFiles.getTopToolbar();
    var add = toolbar.get('adr-edit-file-add');
    var edit = toolbar.get('adr-edit-file-edit');
    var view = toolbar.get('adr-edit-file-view');
    var download = toolbar.get('adr-edit-file-download');
    var remove = toolbar.get('adr-edit-file-delete');
    var viewer = manageFiles.get('adr-manage-file-list');
    var details = this.get('adr-manage-detailed-info');
    manageFiles.addListener('afterrender', function() {
      this.getFooterToolbar().doRefresh();
    }); // Load information on view.
        
    add.disable();
    edit.disable();
    remove.disable();
    
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
    };

    if (UserObjectPermissions.datastream_canAddStream) {
      add.enable();
      add.addListener('click', function(button, event) {
        gotoFilesIngestPage(ADRBasic.pid);
      });
    }
        
    download.addListener('click', function(button, event) {
      var records = viewer.getSelectedRecords();
      var record = records[0];
      if(record) {
        var url = record.get('download_url');
        var form = Ext.get('adr-edit-file-download-form');
        form.set({
          action: url
        });
        form.child('input').dom.click();
      }
    });
    
    if (UserObjectPermissions.datastream_canDeleteStream) {
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
    }

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
      var store = viewer.getStore();
      
      if(record) {
        var dsid = record.get('dsid');
        var pid = store.baseParams.pid;
        
        details.updateDetails(record);
        edit.purgeListeners();
        
        if (UserObjectPermissions.datastream_canDeleteStream) {
          remove.enable();
        }
        view.enable();
        download.enable();
        
        var association = checkFormAssociation(dsid);
        if (association == true && UserObjectPermissions.datastream_canEditStream) {
          edit.enable();
          edit.addListener('click', gotoEditModsPage);
        }
        else if (association != 'failed' && UserObjectPermissions.datastream_canEditStream) {
          if (dsid == 'POLICY' || dsid == 'COLLECTION POLICY') {
            edit.enable();
            edit.addListener('click', function(button, event) {
              gotoXACMLPage(ADRBasic.pid);
            });
          }
          else {
            edit.enable();
            edit.addListener('click', function(button, event) {
              modify_label(viewer, record.get('label'), pid, dsid);
            });
          }
        } 
        else {
          edit.disable();
          view.disable();
          remove.disable();
          download.disable();
          add.disable();
        }
      }
      else {
        edit.disable();
        view.disable();
        remove.disable();
        download.disable();
      }
    });
    // Object Properties Panel
    var editObjectToolbar = this.get('adr-manage-object-properties').getFooterToolbar();
    var editObject = editObjectToolbar.get('adr-manage-edit-object');
    var editObjectPermissions = editObjectToolbar.get('adr-manage-edit-object-permissions');
    var deleteObject = editObjectToolbar.get('adr-manage-delete-object');
    
    // Permission to edit objects are assumed to be negative unless explicitly true.
    editObject.disable();
    if (UserObjectPermissions.manage_canEditObjects) {
      editObject.enable();
    
      editObject.addListener('click', function(button, event) {
        var window = new EditObjectWindow();
        window.show(this);
      });
    }
    
    // Permission to edit permissions are assumed to be negative unless explicitly true.
    editObjectPermissions.disable();
    if (UserObjectPermissions.manage_canEditPermissions) {
      editObjectPermissions.enable();
    
      editObjectPermissions.addListener('click', function(button, event) {
        gotoXACMLPage(ADRBasic.pid);
        //Ext.Msg.alert('Failure', 'This will redirect to the XCAML form, once its available.');
      });
    }
    
    // Permission to delete objects are assumed to be negative unless explicitly true.
    deleteObject.disable();
    if (UserObjectPermissions.manage_canDeleteObject) {
      deleteObject.enable();
      
      deleteObject.addListener('click', function(button, event) {
        Ext.Msg.confirm('Delete', 'Are you sure you want to delete this Object?', function(btn, text){
          if (btn == 'yes') {
            var pid = ADRBasic.pid;
            Ext.Ajax.request({
              url: '/adrbasic/ajax/deleteObject',
              success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                if(obj.success) {
                  // Redirect to top collection for now.
                  var location = window.location;
                  var page = location.protocol + '//' + location.host + '/fedora/repository/';
                  window.location = page;
                }
                else {
                  Ext.Msg.alert('Failure', obj.msg);
                }

              },
              failure: function(response, opts) {
                Ext.Msg.alert('Failure', 'Failed to Delete Object.');
              },
              params: {
                pid: pid
              }
            });

          }
        });
      });
    }
  }
});
Ext.reg('managepanel', ManagePanel);