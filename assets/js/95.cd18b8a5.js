(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{490:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"domain-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-file"}},[t._v("#")]),t._v(" Domain file")]),t._v(" "),a("h2",{attrs:{id:"built-in-domain-list-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-domain-list-file"}},[t._v("#")]),t._v(" Built-in domain list file")]),t._v(" "),a("p",[t._v("When downloading V2Ray, the downloaded compressed package has a geosite.dat. This file is used in the routing function. There are many "),a("a",{attrs:{href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"}},[t._v("common website domain names"),a("OutboundLink")],1),t._v(" built into the file. The configuration method is as follows, geosite refers to the geosite.dat file, and the following cn is a label, which means to use the cn rule in the geosite.dat file.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Through this file of the list, you can set these traffic of Chinese domains will not bypass the proxy, and simply setting these domains in one line in the configuration file. One of the advantages is that the configuration is relatively simple and clear.")]),t._v(" "),a("h2",{attrs:{id:"external-domains-list-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-domains-list-file"}},[t._v("#")]),t._v(" External domains list file")]),t._v(" "),a("p",[t._v("Many times, V2Ray's built-in Chinese domain name does not cover all necessary websites. However, V2Ray can load an externally customized domains file like geosite.dat. Here we provide one, you can simply download it.")]),t._v(" "),a("ol",[a("li",[t._v("Go to the below link:\n(https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles)[https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles]\nYou can download h2y.dat, and put it in the same directory of V2Ray configuration file")]),t._v(" "),a("li",[t._v('For external domian list, the format is "ext:h2y.dat:tag". ext means to use an external file; h2y.dat is a specific file name; tag refers to a tag, and which tags are provided by the file. The h2y.dat file downloaded in the previous step currently has only two tags, '),a("code",[t._v("ad")]),t._v(" and "),a("code",[t._v("gfw")]),t._v(", ad contains the common ad domain name, and gfw contains the common gfw-shielded domain name. The domain names they contain are visible in "),a("a",{attrs:{href:"https://github.com/ToutyRater/v2ray-SiteDAT/tree/master/h2y",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". This domain list file is automatically updated every week. If you use the domain list file here provided, please update it regularly (open https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles) and see the latest updates at the time. An example of routing configuration is as below:")]),t._v(" "),a("li",[t._v("Run V2Ray")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拦截广告相关域名")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:h2y.dat:ad"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//被 gfw 屏蔽的域名走代理")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:h2y.dat:gfw"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认直连")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Because users who use the gfw list usually want to connect directly by default, but sometimes the first one in the outbounds is the outbound of the proxy, so in the above configuration, a direct rule is added. That "),a("code",[t._v('network:"tcp,udp"')]),t._v(" is to make all traffic match.")]),t._v(" "),a("p",[t._v("It should be noted that all third-party V2Ray GUI clients do not support loading external domain name files.")]),t._v(" "),a("h4",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),a("ul",[a("li",[t._v("2018-06-07 Initial release")]),t._v(" "),a("li",[t._v("2018-11-06 Delete unnecessary tags")]),t._v(" "),a("li",[t._v("2019-10-31 Add default direct connection rule")])])])}),[],!1,null,null,null);e.default=n.exports}}]);