(this["webpackJsonpmy-epic"]=this["webpackJsonpmy-epic"]||[]).push([[11],{434:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),u=n(60),c=n(55),l=n(427),o=n(430),d=n(421),f=n(422),s=n(261),m=n(426),b=n(13),E=n(268),p=n.n(E);function g(){var e=Object(i.a)(["\n        margin: 10px 0;\n    "]);return g=function(){return e},e}function h(){var e=Object(i.a)(["\n        margin: 30px 0;\n    "]);return h=function(){return e},e}function v(){var e=Object(i.a)(["\n        height:200px;\n        max-width: 200px;\n        object-fit: contain;\n        margin-right: 30px;\n    "]);return v=function(){return e},e}var y=Object(u.a)((function(){var e=Object(c.a)().HistoryStore,t=l.a.RangePicker,n=o.a.Search;Object(r.useEffect)((function(){return e.findAll(),function(){e.reset()}}),[]);var i=e.filteredList;window.data=i;var u=[{title:"\u56fe\u7247",key:"image",dataIndex:"attributes",render:function(e){var t=e.url.attributes.url;return a.a.createElement(y,{src:t})}},{title:"\u540d\u5b57",key:"name",dataIndex:"attributes",render:function(e){return e.filename},sorter:function(e,t){return e.attributes.filename<t.attributes.filename}},{title:"Url",key:"url",dataIndex:"attributes",render:function(e){var t=e.url.attributes.url;return a.a.createElement("a",{href:t},t)}},{title:"\u4e0a\u4f20\u65f6\u95f4",key:"createdAt",dataIndex:"createdAt",render:function(e){return p()(e).format("YYYY\u5e74MM\u6708DD\u65e5 HH:mm:ss")},sorter:function(e,t){return p()(e.createdAt).isBefore(t.createdAt)},sortDirections:["ascend","descend"]},{title:"",key:"delete",render:function(t){return a.a.createElement("a",{onClick:function(){return n=t,window.avObject=n,void e.delete(n).then((function(e){}),(function(e){}));var n}},"\u5220\u9664")}}],E=function(){return!0};var y=b.a.img(v()),x=b.a.div(h()),O=Object(b.a)(d.a)(g());return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement(f.a,{span:3},"\u8d77\u59cb\u65f6\u95f4\uff1a"),a.a.createElement(f.a,null,a.a.createElement(t,{onOK:function(e){},onChange:function(t,n){E=""===n[0]||""===n[1]?function(){return!0}:n[0]===n[1]?function(e){return p()(e.createdAt).isSame(n[0],"day")}:function(e){return p()(e.createdAt).isBefore(p()(n[1]).add(1,"day"))&&p()(e.createdAt).isAfter(p()(n[0]).subtract(1,"day"))},e.setFilter((function(e){return E(e)&&!0}))},disabled:e.isLoading}))),a.a.createElement(O,null,a.a.createElement(f.a,{span:3},"\u540d\u5b57\uff1a"),a.a.createElement(f.a,null,a.a.createElement(n,{placeholder:"\u540d\u5b57",style:{width:200},onSearch:function(t){E=""===t?function(){return!0}:function(e){return e.attributes.filename.indexOf(t)>=0},e.setFilter((function(e){return E(e)&&!0}))}}))),a.a.createElement(x,null,a.a.createElement(s.a,{spinning:e.isLoading,tip:"\u6b63\u5728\u52a0\u8f7d\u4e2d..."})),!e.isLoading&&a.a.createElement(m.a,{columns:u,dataSource:i}))}));t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"\u4e0a\u4f20\u5386\u53f2"),a.a.createElement(y,null))}}}]);
//# sourceMappingURL=11.9e62c32e.chunk.js.map