/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var A=Object.create;var d=Object.defineProperty,D=Object.defineProperties,R=Object.getOwnPropertyDescriptor,q=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,L=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var S=(l,e,t)=>e in l?d(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,u=(l,e)=>{for(var t in e||(e={}))C.call(e,t)&&S(l,t,e[t]);if(f)for(var t of f(e))V.call(e,t)&&S(l,t,e[t]);return l},x=(l,e)=>D(l,q(e)),k=l=>d(l,"__esModule",{value:!0});var N=(l,e)=>{k(l);for(var t in e)d(l,t,{get:e[t],enumerable:!0})},_=(l,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of F(e))!C.call(l,a)&&a!=="default"&&d(l,a,{get:()=>e[a],enumerable:!(t=R(e,a))||t.enumerable});return l},b=l=>_(k(d(l!=null?A(L(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);var o=(l,e,t)=>new Promise((a,i)=>{var r=n=>{try{h(t.next(n))}catch(p){i(p)}},P=n=>{try{h(t.throw(n))}catch(p){i(p)}},h=n=>n.done?a(n.value):Promise.resolve(n.value).then(r,P);h((t=t.apply(l,e)).next())});N(exports,{default:()=>v});var I=b(require("obsidian"));var g=b(require("obsidian"));var w=class{constructor(){this.all={en:{settings:{title:"Markdown commands settings",description:"To quickly enable or disable the plugin, you can use the command palette.",toggle:{title:"Activated",description:"Wether or not the suggest will be triggered."},character:{title:"Trigger character",description:"Which character should show the suggestions. (press a key to replace the current char)"},examplelessCommands:{title:"Exampleless commands",description:"Insert commands without examples: [ ]( ) instead of [link text](https://my.link)",tooltip:"Exampleless commands"}},commandsSuggest:{noResult:"No result"},commandPalette:{enable:"Enable",disabled:"Disable"}},fr:{settings:{title:"R\xE9glages Commandes Markdown",description:"Pour rapidement activer ou d\xE9sactiver le plugin, vous pouvez utiliser la palette de commande.",toggle:{title:"Activ\xE9",description:"Si la suggestion sera d\xE9clench\xE9e ou non."},character:{title:"Caract\xE8re de d\xE9clenchement",description:"Quel caract\xE8re doit d\xE9clencher l'affichage des suggestions. (appuyez sur une touche pour remplacer le caract\xE8re actuel)"},examplelessCommands:{title:"Commandes sans exemple",description:"Ins\xE8re des commandes sans exemple: [ ]( ) au lieu de [link text](https://my.link)",tooltip:"Commandes sans exemple"}},commandsSuggest:{noResult:"Pas de r\xE9sultat"},commandPalette:{enable:"Activer",disabled:"D\xE9sactiver"}}};this.lang=localStorage.getItem("language")}get texts(){return this.all[this.lang==="fr"?"fr":"en"]}},s=new w().texts;var m=class extends g.PluginSettingTab{constructor(e,t){super(e,t);this.plugin=t}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:s.settings.title}),e.createEl("p",{text:s.settings.description}),new g.Setting(e).setName(s.settings.character.title).setDesc(s.settings.character.description).addText(t=>{t.setValue(this.plugin.settings.triggerChar).onChange(a=>o(this,null,function*(){if(a.trim().length<1){t.setValue(this.plugin.settings.triggerChar);return}let i=a[0];a.trim().length===2&&(i=a.replace(this.plugin.settings.triggerChar,"")),t.setValue(i),this.plugin.settings.triggerChar=i,yield this.plugin.saveSettings()}))}),new g.Setting(e).setName(s.settings.examplelessCommands.title).setDesc(s.settings.examplelessCommands.description).addToggle(t=>{t.setTooltip(s.settings.examplelessCommands.tooltip).setValue(this.plugin.settings.examplelessCommands).onChange(a=>o(this,null,function*(){this.plugin.settings.examplelessCommands=a,yield this.plugin.saveSettings()}))})}};var M=b(require("obsidian"));var E=[{label:"h1",value:"# "},{label:"h2",value:"## "},{label:"h3",value:"### "},{label:"h4",value:"#### "},{label:"h5",value:"##### "},{label:"h6",value:"###### "},{label:"bold",value:"**bold**"},{label:"italic",value:"*italic*"},{label:"strike",value:"~~strike~~"},{label:"highlight",value:"==highlight=="},{label:"quote",value:"> "},{label:"ordered-list",value:`
1. First item
2. Second item
3. Third item`},{label:"unordered-list",value:`
- First item
- Second item
- Third item`},{label:"external-link",value:"[link text](https://my.link)"},{label:"image",value:"![alt text](https://via.placeholder.com/150)"},{label:"table",value:`
|Left aligned text|Centered text| Right aligned text|
|---|:---:|---:|
|Cell|Cell|Cell|`},{label:"inline-code",value:'`let hello = "world"`'},{label:"codeblock",value:"\n```rust\nlet hello = 'world' \n```"},{label:"todo",value:"- [ ] To do"},{label:"line-break",value:"<br/>"},{label:"divider",value:`
Optional
---`},{label:"footnote",value:"[^id]: value"},{label:"link",value:"[[note|alias]]"},{label:"embed",value:"![[page]]"},{label:"tag",value:"#tag"}];var y=[{label:"h1",value:"# "},{label:"h2",value:"## "},{label:"h3",value:"### "},{label:"h4",value:"#### "},{label:"h5",value:"##### "},{label:"h6",value:"###### "},{label:"bold",value:"****"},{label:"italic",value:"**"},{label:"strike",value:"~~~~"},{label:"highlight",value:"===="},{label:"quote",value:"> "},{label:"ordered-list",value:"1. "},{label:"unordered-list",value:"- "},{label:"external-link",value:"[]()"},{label:"image",value:"![]()"},{label:"table",value:`
| | | |
|---|:---:|---:|
| | | |`},{label:"inline-code",value:"``"},{label:"codeblock",value:"\n```\n\n```"},{label:"todo",value:"- [ ] "},{label:"line-break",value:"<br/>"},{label:"divider",value:`
---
`},{label:"footnote",value:"[^]: "},{label:"link",value:"[[|]]"},{label:"embed",value:"![[]]"},{label:"tag",value:"#"}];function T(l){return l.settings.examplelessCommands?y:E}var c=class extends M.EditorSuggest{constructor(e,t){super(e);this.inCmd=!1;this.cmdStartCh=0;this.plugin=t}resetInfos(){this.cmdStartCh=0,this.inCmd=!1}onTrigger(e,t,a){let i=t.getLine(e.line).slice(0,e.ch);if(!this.inCmd&&i[i.length-1]!==this.plugin.settings.triggerChar)return this.resetInfos(),null;this.inCmd||(this.cmdStartCh=i.length-1,this.inCmd=!0);let r=i.slice(this.cmdStartCh,e.ch);return r.includes(" ")||!r.includes(this.plugin.settings.triggerChar)?(this.resetInfos(),null):{start:e,end:e,query:r.slice(1)}}getSuggestions(e){let t=T(this.plugin).filter(({label:a})=>a.includes(e.query));return t.length>0?t:[{label:s.commandsSuggest.noResult,value:""}]}renderSuggestion(e,t){let a=document.createElement("div");a.textContent=e.label,t.appendChild(a)}selectSuggestion(e,t){e.label!==s.commandsSuggest.noResult&&(this.context.editor.replaceRange(e.value,x(u({},this.context.start),{ch:this.cmdStartCh}),this.context.end),this.resetInfos(),this.close())}};var z={triggerChar:">",examplelessCommands:!1},v=class extends I.Plugin{onload(){return o(this,null,function*(){yield this.loadSettings(),this.addSettingTab(new m(this.app,this)),this.registerEditorSuggest(new c(this.app,this))})}onunload(){}loadSettings(){return o(this,null,function*(){this.settings=u(u({},z),yield this.loadData())})}saveSettings(){return o(this,null,function*(){yield this.saveData(this.settings)})}};