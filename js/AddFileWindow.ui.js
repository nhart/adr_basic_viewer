/*
 * File: AddFileWindow.ui.js
 * Date: Thu Mar 17 2011 13:39:14 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

AddFileWindowUi = Ext.extend(Ext.Window, {
    title: 'Add File',
    width: 586,
    height: 209,
    layout: 'anchor',
    defaultType: 'form',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                frame: true,
                headerAsText: false,
                hideBorders: true,
                animCollapse: false,
                height: 180,
                method: 'POST',
                anchor: '100% 100%',
                autoHeight: true,
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'DSID',
                        anchor: '100%',
                        name: 'dsid'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Label',
                        anchor: '100%',
                        name: 'label'
                    },
                    {
                        xtype: 'combo',
                        fieldLabel: 'Control Group',
                        anchor: '100%',
                        name: 'control_group',
                        store: 'ControlGroups',
                        displayField: 'type',
                        typeAhead: true,
                        mode: 'local',
                        forceSelection: true
                    },
                    {
                        xtype: 'combo',
                        name: 'mime_type',
                        store: 'MIMETypes',
                        title: 'Mime Type',
                        fieldLabel: 'MIME Type',
                        forceSelection: true,
                        triggerAction: 'all',
                        displayField: 'mime',
                        typeAhead: true
                    },
                    {
                        xtype: 'checkbox',
                        fieldLabel: 'State',
                        boxLabel: 'Active',
                        anchor: '100%',
                        name: 'state'
                    }
                ],
                fbar: {
                    xtype: 'toolbar',
                    autoHeight: true,
                    forceLayout: true,
                    id: 'add-file-form-toolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add'
                        }
                    ]
                }
            }
        ];
        AddFileWindowUi.superclass.initComponent.call(this);
    }
});
