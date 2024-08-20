import app from 'flarum/admin/app';

app.initializers.add('littlecxm-fof-passport', function () {
  app.extensionData
    .for('littlecxm-fof-passport')
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-auth-url'),
      setting: 'littlecxm-fof-passport.app_auth_url',
      type: 'text',
      placeholder: 'https://example.com/oauth/authorize',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-token-url'),
      setting: 'littlecxm-fof-passport.app_token_url',
      type: 'text',
      placeholder: 'https://example.com/oauth/token',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-user-url'),
      setting: 'littlecxm-fof-passport.app_user_url',
      type: 'text',
      placeholder: 'https://example.com/api/user',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-id'),
      setting: 'littlecxm-fof-passport.app_id',
      type: 'text',
      placeholder: '123',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-secret'),
      setting: 'littlecxm-fof-passport.app_secret',
      type: 'text',
      placeholder: 'abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.app-scopes'),
      setting: 'littlecxm-fof-passport.app_oauth_scopes',
      type: 'text',
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.button-title'),
      setting: 'littlecxm-fof-passport.button_title',
      type: 'text',
      placeholder: app.translator.trans('fof-passport.admin.popup.field.button-title-placeholder'),
    })
    .registerSetting({
      label: app.translator.trans('fof-passport.admin.popup.field.button-icon'),
      setting: 'littlecxm-fof-passport.button_icon',
      type: 'text',
      placeholder: 'far fa-id-card',
    })
    .registerSetting({
      setting: 'littlecxm-fof-passport.auto_reg',
      type: 'boolean',
      label: app.translator.trans('fof-passport.admin.popup.field.auto-reg'),
    });
});
