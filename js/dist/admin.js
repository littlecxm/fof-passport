(()=>{var t={n:e=>{var p=e&&e.__esModule?()=>e.default:()=>e;return t.d(p,{a:p}),p},d:(e,p)=>{for(var a in p)t.o(p,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:p[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const p=flarum.core.compat["admin/app"];var a=t.n(p);a().initializers.add("fof-passport",(function(){a().extensionData.for("fof-passport").registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-auth-url"),setting:"fof-passport.app_auth_url",type:"text",placeholder:"https://example.com/oauth/authorize"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-token-url"),setting:"fof-passport.app_token_url",type:"text",placeholder:"https://example.com/oauth/token"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-user-url"),setting:"fof-passport.app_user_url",type:"text",placeholder:"https://example.com/api/user"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-id"),setting:"fof-passport.app_id",type:"text",placeholder:"123"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-secret"),setting:"fof-passport.app_secret",type:"text",placeholder:"abcdefghijABCDEFGHIJabcdefghijABCDEFGHIJ"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.app-scopes"),setting:"fof-passport.app_oauth_scopes",type:"text"}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.button-title"),setting:"fof-passport.button_title",type:"text",placeholder:a().translator.trans("fof-passport.admin.popup.field.button-title-placeholder")}).registerSetting({label:a().translator.trans("fof-passport.admin.popup.field.button-icon"),setting:"fof-passport.button_icon",type:"text",placeholder:"far fa-id-card"})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map