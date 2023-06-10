"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1219],{1219:(U,d,r)=>{r.r(d),r.d(d,{Tab1PageModule:()=>v});var l=r(712),h=r(4755),p=r(5030),T=r(581),f=r(8834),m=r(5861),e=r(3020);const Z=(0,r(7423).fo)("Geolocation",{web:()=>r.e(4561).then(r.bind(r,4561)).then(a=>new a.GeolocationWeb)});let M=(()=>{class a{constructor(){}getLocation(){return Z.getCurrentPosition()}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var b=r(368);const A=[{path:"",component:(()=>{class a{constructor(n,o,i){this.geoLocationService=n,this.toastController=o,this.storageManagementService=i,this.form={}}inputCheck(){return!!(this.form.nik&&this.form.nama&&this.form.tempat_lahir&&this.form.tanggal_lahir&&this.form.jenis_kelamin&&this.form.alamat&&this.form.agama&&this.form.status_perkawinan&&this.form.pekerjaan&&this.form.kewarganegaraan&&this.form.berlaku_hingga)||(this.toastController.create({message:"Mohon lengkapi data",duration:2e3,color:"danger"}).then(n=>n.present()),!1)}sendToWhatsapp(){var n=this;return(0,m.Z)(function*(){if(!n.inputCheck())return;const i=yield n.getLocation();n.form.lokasi=i.display_name,n.form.location=i,n.form.type="whatsapp";const u=Object.keys(n.form).map(s=>{if("location"!==s)return`*${s.toUpperCase()}*: ${n.form[s]}`}).join("%0A");window.open(`https://api.whatsapp.com/send?phone=6282127207662&text=${u}`,"_blank"),n.storageManagementService.addData(n.form)})()}sendToTelegram(){var n=this;return(0,m.Z)(function*(){if(!n.inputCheck())return;const i=yield n.getLocation();n.form.lokasi=i.display_name,n.form.type="telegram";const u=Object.keys(n.form).map(s=>`*${s.toUpperCase()}*: ${n.form[s]}`).join("%0A");window.open(`https://t.me/arsaa12e?start=${u}`,"_blank")})()}sendToEmail(){var n=this;return(0,m.Z)(function*(){if(!n.inputCheck())return;const i=yield n.getLocation();n.form.lokasi=i.display_name,n.form.location=i,n.form.type="email";const s=`mailto:vitojk5112@gmail.com?subject=Data&20Informasi&body=${Object.keys(n.form).map(c=>{if("location"!==c)return`${c.toUpperCase()}: ${n.form[c]}`}).join("%0A")}`;window.open(s,"_blank"),n.storageManagementService.addData(n.form)})()}getLocation(){var n=this;return(0,m.Z)(function*(){const o=yield n.geoLocationService.getLocation(),{latitude:i,longitude:t}=o.coords;return yield(yield fetch(`https://nominatim.openstreetmap.org/reverse?lat=${i}&lon=${t}&format=json`)).json()})()}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(M),e.Y36(l.yF),e.Y36(b.p))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-tab1"]],decls:94,vars:13,consts:[[3,"translucent"],[1,"ion-text-center"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"ion-padding"],["position","floating"],["type","number","placeholder","Input Data",3,"ngModel","ngModelChange"],["type","text","placeholder","Input Data",3,"ngModel","ngModelChange"],["type","date","placeholder","Input Data",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","L"],["value","P"],["value","Islam"],["value","Kristen"],["value","Katolik"],["value","Hindu"],["value","Budha"],["value","Konghucu"],["value","Belum Kawin"],["value","Kawin"],["value","Cerai Hidup"],["value","Cerai Mati"],["value","WNI"],["value","WNA"],["color","success","shape","round",3,"click"],["name","logo-whatsapp"],["shape","round",3,"click"],["name","call-outline"],["color","warning","shape","round",3,"click"],["name","mail-outline"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e._uU(3," Input Data "),e.qZA()()(),e.TgZ(4,"ion-content",2)(5,"ion-header",3)(6,"ion-toolbar")(7,"ion-title",4),e._uU(8,"Input Data"),e.qZA()()(),e.TgZ(9,"div",5)(10,"ion-item")(11,"ion-label",6),e._uU(12,"NIK"),e.qZA(),e.TgZ(13,"ion-input",7),e.NdJ("ngModelChange",function(t){return o.form.nik=t}),e.qZA()(),e.TgZ(14,"ion-item")(15,"ion-label",6),e._uU(16,"Nama Lengkap"),e.qZA(),e.TgZ(17,"ion-input",8),e.NdJ("ngModelChange",function(t){return o.form.nama=t}),e.qZA()(),e.TgZ(18,"ion-item")(19,"ion-label",6),e._uU(20,"Tempat Lahir"),e.qZA(),e.TgZ(21,"ion-input",8),e.NdJ("ngModelChange",function(t){return o.form.tempat_lahir=t}),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-label",6),e._uU(24,"Tanggal Lahir"),e.qZA(),e.TgZ(25,"ion-input",9),e.NdJ("ngModelChange",function(t){return o.form.tanggal_lahir=t}),e.qZA()(),e.TgZ(26,"ion-item")(27,"ion-label",6),e._uU(28,"Jenis Kelamin"),e.qZA(),e.TgZ(29,"ion-select",10),e.NdJ("ngModelChange",function(t){return o.form.jenis_kelamin=t}),e.TgZ(30,"ion-select-option",11),e._uU(31,"Laki-laki"),e.qZA(),e.TgZ(32,"ion-select-option",12),e._uU(33,"Perempuan"),e.qZA()()(),e.TgZ(34,"ion-item")(35,"ion-label",6),e._uU(36,"Alamat"),e.qZA(),e.TgZ(37,"ion-input",8),e.NdJ("ngModelChange",function(t){return o.form.alamat=t}),e.qZA()(),e.TgZ(38,"ion-item")(39,"ion-label",6),e._uU(40,"Agama"),e.qZA(),e.TgZ(41,"ion-select",10),e.NdJ("ngModelChange",function(t){return o.form.agama=t}),e.TgZ(42,"ion-select-option",13),e._uU(43,"Islam"),e.qZA(),e.TgZ(44,"ion-select-option",14),e._uU(45,"Kristen"),e.qZA(),e.TgZ(46,"ion-select-option",15),e._uU(47,"Katolik"),e.qZA(),e.TgZ(48,"ion-select-option",16),e._uU(49,"Hindu"),e.qZA(),e.TgZ(50,"ion-select-option",17),e._uU(51,"Budha"),e.qZA(),e.TgZ(52,"ion-select-option",18),e._uU(53,"Konghucu"),e.qZA()()(),e.TgZ(54,"ion-item")(55,"ion-label",6),e._uU(56,"Status Perkawinan"),e.qZA(),e.TgZ(57,"ion-select",10),e.NdJ("ngModelChange",function(t){return o.form.status_perkawinan=t}),e.TgZ(58,"ion-select-option",19),e._uU(59,"Belum Kawin"),e.qZA(),e.TgZ(60,"ion-select-option",20),e._uU(61,"Kawin"),e.qZA(),e.TgZ(62,"ion-select-option",21),e._uU(63,"Cerai Hidup"),e.qZA(),e.TgZ(64,"ion-select-option",22),e._uU(65,"Cerai Mati"),e.qZA()()(),e.TgZ(66,"ion-item")(67,"ion-label",6),e._uU(68,"Pekerjaan"),e.qZA(),e.TgZ(69,"ion-input",8),e.NdJ("ngModelChange",function(t){return o.form.pekerjaan=t}),e.qZA()(),e.TgZ(70,"ion-item")(71,"ion-label",6),e._uU(72,"Kewarganegaraan"),e.qZA(),e.TgZ(73,"ion-select",10),e.NdJ("ngModelChange",function(t){return o.form.kewarganegaraan=t}),e.TgZ(74,"ion-select-option",23),e._uU(75,"WNI"),e.qZA(),e.TgZ(76,"ion-select-option",24),e._uU(77,"WNA"),e.qZA()()(),e.TgZ(78,"ion-item")(79,"ion-label",6),e._uU(80,"Berlaku Hingga"),e.qZA(),e.TgZ(81,"ion-input",9),e.NdJ("ngModelChange",function(t){return o.form.berlaku_hingga=t}),e.qZA()(),e._UZ(82,"br"),e.TgZ(83,"ion-button",25),e.NdJ("click",function(){return o.sendToWhatsapp()}),e._UZ(84,"ion-icon",26),e._uU(85,"\xa0 Send To WhatsApp "),e.qZA(),e._UZ(86,"br"),e.TgZ(87,"ion-button",27),e.NdJ("click",function(){return o.sendToTelegram()}),e._UZ(88,"ion-icon",28),e._uU(89,"\xa0 Send To Telegram "),e.qZA(),e._UZ(90,"br"),e.TgZ(91,"ion-button",29),e.NdJ("click",function(){return o.sendToEmail()}),e._UZ(92,"ion-icon",30),e._uU(93,"\xa0 Send To Email "),e.qZA()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("ngModel",o.form.nik),e.xp6(4),e.Q6J("ngModel",o.form.nama),e.xp6(4),e.Q6J("ngModel",o.form.tempat_lahir),e.xp6(4),e.Q6J("ngModel",o.form.tanggal_lahir),e.xp6(4),e.Q6J("ngModel",o.form.jenis_kelamin),e.xp6(8),e.Q6J("ngModel",o.form.alamat),e.xp6(4),e.Q6J("ngModel",o.form.agama),e.xp6(16),e.Q6J("ngModel",o.form.status_perkawinan),e.xp6(12),e.Q6J("ngModel",o.form.pekerjaan),e.xp6(4),e.Q6J("ngModel",o.form.kewarganegaraan),e.xp6(8),e.Q6J("ngModel",o.form.berlaku_hingga))},dependencies:[l.YG,l.W2,l.Gu,l.gu,l.pK,l.Ie,l.Q$,l.t9,l.n0,l.wd,l.sr,l.as,l.QI,l.j9,p.JJ,p.On],styles:["ion-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),a})()}];let C=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[f.Bz.forChild(A),f.Bz]}),a})(),v=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[l.Pc,h.ez,p.u5,T.e,C]}),a})()}}]);