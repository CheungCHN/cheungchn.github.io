(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},102:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},111:function(e,t,a){"use strict";var n=a(0),r=a(112);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(111),o=a(102),l=a(57),i=a.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:a,children:l,defaultValue:d,values:p,groupId:b,className:m}=e,{tabGroupChoices:O,setTabGroupChoices:j}=Object(c.a)(),[h,f]=Object(n.useState)(d);if(null!=b){const e=O[b];null!=e&&e!==h&&p.some((t=>t.value===e))&&f(e)}const y=e=>{f(e),null!=b&&j(b,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(n.cloneElement)(l.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},131:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function({children:e,hidden:t,className:a}){return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(101)),o=a(130),l=a(131),i={title:"Docker\u5b89\u88c5"},s={unversionedId:"linux/dockerInstall",id:"linux/dockerInstall",isDocsHomePage:!1,title:"Docker\u5b89\u88c5",description:"Ubuntu\u5b89\u88c5",source:"@site/docs/linux/dockerInstall.md",slug:"/linux/dockerInstall",permalink:"/docs/linux/dockerInstall",version:"current",sidebar:"linux",previous:{title:"Ubuntu\u4f7f\u7528\u521d\u59cb\u5316",permalink:"/docs/linux/ubuntuInit"},next:{title:"GitLab\u5b89\u88c5",permalink:"/docs/linux/gitLabInstall"}},u=[{value:"Ubuntu\u5b89\u88c5",id:"ubuntu\u5b89\u88c5",children:[{value:"\u5378\u8f7d\u65e7\u7248\u672c",id:"\u5378\u8f7d\u65e7\u7248\u672c",children:[]},{value:"\u8bbe\u7f6e\u5b58\u50a8\u5e93",id:"\u8bbe\u7f6e\u5b58\u50a8\u5e93",children:[]},{value:"\u5b89\u88c5Docker",id:"\u5b89\u88c5docker",children:[]},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",children:[]},{value:"\u914d\u7f6eHub\u955c\u50cf\u52a0\u901f",id:"\u914d\u7f6ehub\u955c\u50cf\u52a0\u901f",children:[]},{value:"\u91cd\u542fDocker",id:"\u91cd\u542fdocker",children:[]}]},{value:"Centos\u5b89\u88c5",id:"centos\u5b89\u88c5",children:[{value:"\u5378\u8f7d\u65e7\u7248\u672c",id:"\u5378\u8f7d\u65e7\u7248\u672c-1",children:[]},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"\u4e0b\u8f7dRepo\u6587\u4ef6",id:"\u4e0b\u8f7drepo\u6587\u4ef6",children:[]},{value:"\u5b89\u88c5Docker",id:"\u5b89\u88c5docker-1",children:[]},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5-1",children:[]},{value:"\u914d\u7f6eHub\u955c\u50cf\u52a0\u901f",id:"\u914d\u7f6ehub\u955c\u50cf\u52a0\u901f-1",children:[]},{value:"\u91cd\u542fDocker",id:"\u91cd\u542fdocker-1",children:[]}]}],d={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"ubuntu\u5b89\u88c5"},"Ubuntu\u5b89\u88c5"),Object(c.a)("h3",{id:"\u5378\u8f7d\u65e7\u7248\u672c"},"\u5378\u8f7d\u65e7\u7248\u672c"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\n",Object(c.a)("inlineCode",{parentName:"p"},"apt remove docker docker-engine docker.io containerd runc")),Object(c.a)("h3",{id:"\u8bbe\u7f6e\u5b58\u50a8\u5e93"},"\u8bbe\u7f6e\u5b58\u50a8\u5e93"),Object(c.a)("p",null,"1\u3001\u66f4\u65b0\u5305\u7d22\u5f15\u548c\u5b89\u88c5\u5305\u4ee5\u5141\u8bb8\u901a\u8fc7 HTTPS \u4f7f\u7528\u5b58\u50a8\u5e93"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"apt update\n\napt install -y \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n")),Object(c.a)("p",null,"2\u3001\u6dfb\u52a0 Docker \u7684\u5b98\u65b9 GPG \u5bc6\u94a5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -\n")),Object(c.a)("p",null,"3\u3001\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8bbe\u7f6e\u7a33\u5b9a\u5b58\u50a8\u5e93\u3002\u82e5\u8981\u6dfb\u52a0\u591c\u95f4\u6216\u6d4b\u8bd5\u5b58\u50a8\u5e93\uff0c\u8bf7\u5c06\u5355\u8bcd\u6216\uff08\u6216\u4e24\u8005\uff09\u6dfb\u52a0\u5230\u4e0b\u9762\u7684\u547d\u4ee4\u4e2d\u7684\u5355\u8bcd\u4e4b\u540e\u3002",Object(c.a)("inlineCode",{parentName:"p"},"nightly\u3001test\u3001stable")),Object(c.a)(o.a,{defaultValue:"amd64",values:[{label:"x86_64/amd64",value:"amd64"},{label:"armhf",value:"armhf"},{label:"arm64",value:"arm64"}],mdxType:"Tabs"},Object(c.a)(l.a,{value:"amd64",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'add-apt-repository \\\n   "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n'))),Object(c.a)(l.a,{value:"armhf",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'add-apt-repository \\\n   "deb [arch=armhf] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n'))),Object(c.a)(l.a,{value:"arm64",mdxType:"TabItem"},Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'add-apt-repository \\\n   "deb [arch=arm64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \\\n   $(lsb_release -cs) \\\n   stable"\n')))),Object(c.a)("h3",{id:"\u5b89\u88c5docker"},"\u5b89\u88c5Docker"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"apt update\n\napt install -y docker-ce docker-ce-cli containerd.io\n")),Object(c.a)("h3",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(c.a)("inlineCode",{parentName:"p"},"docker version")),Object(c.a)("h3",{id:"\u914d\u7f6ehub\u955c\u50cf\u52a0\u901f"},"\u914d\u7f6eHub\u955c\u50cf\u52a0\u901f"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(c.a)("inlineCode",{parentName:"p"},"vim /etc/docker/daemon.json")),Object(c.a)("p",null,"\u7f16\u8f91\u6216\u6dfb\u52a0\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="/etc/docker/daemon.json"',title:'"/etc/docker/daemon.json"'}),'/*\n\u6ce8\u91ca\uff1a\u53ef\u6839\u636e\u81ea\u5df1\u7684\u4f4d\u7f6e\u9009\u62e9\u4ee5\u4e0b\u94fe\u63a5\uff1a\nhttps://registry.cn-shanghai.aliyuncs.com\nhttps://registry.cn-hangzhou.aliyuncs.com\n*/\n{\n  "registry-mirrors": ["https://registry.cn-shanghai.aliyuncs.com"]\n}\n')),Object(c.a)("h3",{id:"\u91cd\u542fdocker"},"\u91cd\u542fDocker"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(c.a)("inlineCode",{parentName:"p"},"systemctl restart docker")),Object(c.a)("h2",{id:"centos\u5b89\u88c5"},"Centos\u5b89\u88c5"),Object(c.a)("h3",{id:"\u5378\u8f7d\u65e7\u7248\u672c-1"},"\u5378\u8f7d\u65e7\u7248\u672c"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(c.a)("inlineCode",{parentName:"p"},"yum remove docker docker-common docker-selinux docker-engine")," "),Object(c.a)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(c.a)("inlineCode",{parentName:"p"},"yum install -y yum-utils device-mapper-persistent-data lvm2")),Object(c.a)("h3",{id:"\u4e0b\u8f7drepo\u6587\u4ef6"},"\u4e0b\u8f7dRepo\u6587\u4ef6"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(c.a)("inlineCode",{parentName:"p"},"wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")),Object(c.a)("h3",{id:"\u5b89\u88c5docker-1"},"\u5b89\u88c5Docker"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yum makecache fast\nyum install -y docker-ce docker-ce-cli containerd.io\n")),Object(c.a)("h3",{id:"\u9a8c\u8bc1\u5b89\u88c5-1"},"\u9a8c\u8bc1\u5b89\u88c5"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(c.a)("inlineCode",{parentName:"p"},"docker version")),Object(c.a)("h3",{id:"\u914d\u7f6ehub\u955c\u50cf\u52a0\u901f-1"},"\u914d\u7f6eHub\u955c\u50cf\u52a0\u901f"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a\n",Object(c.a)("inlineCode",{parentName:"p"},"vim /etc/docker/daemon.json")),Object(c.a)("p",null,"\u7f16\u8f91\u6216\u6dfb\u52a0\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="/etc/docker/daemon.json"',title:'"/etc/docker/daemon.json"'}),'/*\n\u6ce8\u91ca\uff1a\u53ef\u6839\u636e\u81ea\u5df1\u7684\u4f4d\u7f6e\u9009\u62e9\u4ee5\u4e0b\u94fe\u63a5\uff1a\nhttps://registry.cn-shanghai.aliyuncs.com\nhttps://registry.cn-hangzhou.aliyuncs.com\n*/\n{\n  "registry-mirrors": ["https://registry.cn-shanghai.aliyuncs.com"]\n}\n')),Object(c.a)("h3",{id:"\u91cd\u542fdocker-1"},"\u91cd\u542fDocker"),Object(c.a)("p",null,"\u7ec8\u7aef\u8f93\u5165\u547d\u4ee4\uff1a",Object(c.a)("inlineCode",{parentName:"p"},"systemctl restart docker")),Object(c.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.a)("h5",{parentName:"div"},Object(c.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.a)("p",{parentName:"div"},"\u672c\u6b21\u5b89\u88c5\u4f7f\u7528\u7686\u5728 ",Object(c.a)("strong",{parentName:"p"},"root")," \u4e0b\u6267\u884c"))))}p.isMDXComponent=!0}}]);