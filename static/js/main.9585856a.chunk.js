(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),r=c(4),i=c(1);c(10);var s=c(2),l=c.n(s),o=c(0),j=function(e){var t=e.items,c=e.startItem,a=e.endItem,n=e.total,r=e.perPage,i=e.currentPage,s=e.onPageChange,j=t.slice(c-1,a),u=function(){var e=n/+r;return e%1?Math.trunc(e)+1:e}(),d=new Array(+u).fill(1).map((function(e,t){return e+t})),m=1===+i,b=+i===u;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:l()("page-item",{disabled:m}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":m,onClick:function(){m||s((function(e){return"".concat(+e-1)}))},children:"\xab"})}),d.map((function(e){return Object(o.jsx)("li",{className:l()("page-item",{active:+i===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return s("".concat(e))},children:e})})})),Object(o.jsx)("li",{className:l()("page-item",{disabled:b}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":b,onClick:function(){b||s((function(e){return"".concat(+e+1)}))},children:"\xbb"})})]}),Object(o.jsx)("ul",{children:j.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e})}))})]})},u=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=Object(i.useState)("5"),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)("1"),s=Object(r.a)(n,2),l=s[0],d=s[1];Object(i.useEffect)((function(){d("1")}),[c]);var m=function(){var e=+c*+l;return e>42&&(e=42),{startItem:+c*(+l-1)+1,endItem:e}}(),b=m.startItem,h=m.endItem;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsxs)("p",{className:"lead","data-cy":"info",children:["Page"," ".concat(l," (items ").concat(b," - ").concat(h," of 42)")]}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){return a(e.currentTarget.value)},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{items:u,startItem:b,endItem:h,total:42,perPage:c,onPageChange:d,currentPage:l})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9585856a.chunk.js.map