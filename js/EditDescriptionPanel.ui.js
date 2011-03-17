/*
 * File: EditDescriptionPanel.ui.js
 * Date: Thu Mar 17 2011 14:35:02 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

EditDescriptionPanelUi = Ext.extend(Ext.form.FormPanel, {
    title: 'Edit Description',
    hideBorders: true,
    frame: true,
    method: 'POST',
    id: 'edit-description-form',
    initComponent: function() {
        this.initialConfig = Ext.apply({
            method: 'POST'
        }, this.initialConfig);
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Title',
                anchor: '100%',
                name: 'title',
                emptyText: 'Title'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Author',
                anchor: '100%',
                name: 'author',
                emptyText: 'Author'
            },
            {
                xtype: 'textarea',
                anchor: '100%',
                fieldLabel: 'Description',
                height: 109,
                name: 'description',
                emptyText: 'Description'
            }
        ];
        this.fbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    text: 'Reset'
                }
            ]
        };
        EditDescriptionPanelUi.superclass.initComponent.call(this);
    }
});
