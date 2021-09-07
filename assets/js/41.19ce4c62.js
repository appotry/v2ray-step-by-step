(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{427:function(a,r,e){"use strict";e.r(r);var t=e(46),s=Object(t.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-部署-v2ray"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署-v2ray"}},[a._v("#")]),a._v(" Docker 部署 V2Ray")]),a._v(" "),e("p",[a._v("Docker 技术是一种新的虚拟化技术，和传统的虚拟化技术不同。V2Ray 同样提供 Docker 部署方式，并且通过 Docker 来部署 V2Ray 会非常轻松高效。")]),a._v(" "),e("p",[e("strong",[a._v("Docker 只能部署在 KVM 或者 XEN 架构的 VPS 中")])]),a._v(" "),e("p",[a._v("首先安装 Docker：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo apt-get install -y docker\n")])])]),e("p",[a._v("安装完 Docker 后我们从 "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("DockerHub"),e("OutboundLink")],1),a._v(" 通过搜索找到 V2Ray 官方提供的镜像， 链接"),e("a",{attrs:{href:"https://hub.docker.com/r/v2fly/v2fly-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("在此"),e("OutboundLink")],1),a._v(". 找到拉取镜像的的命令并复制下来，在网页右侧我们可以看到命令为 "),e("code",[a._v("docker pull v2fly/v2fly-core")]),a._v(" ，我们将其复制下来回到命令行中粘贴并执行：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker pull v2fly/v2fly-core\n")])])]),e("p",[a._v("待 V2Ray 的 Docker 镜像拉取完成后就可以进入下一个部署阶段. 在此之前，你需要在 /etc 目录下新建一个文件夹 v2ray， 并把你的配置写好后命名为 config.json 放入 v2ray 文件夹内. 待配置文件准备就绪后键入以下命令进行部署，部署前请记下配置文件中你所设置的端口号，在部署时需要将其映射到宿主机上. 否则将无法访问. 此处假设设定的端口号为 8888，需要映射到宿主机的 8888 端口上. 则命令为：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2fly/v2fly-core  v2ray -config=/etc/v2ray/config.json\n")])])]),e("p",[a._v("键入以上命令后，命令行会出现一串字符，代表容器部署成功，可以立即通过客户端连接并开始使用了. 如果还不放心，键入以下命令来查看容器的运行状态：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container ls\n")])])]),e("p",[a._v("如果看到输出的结果中有以下字段代表容器成功运行：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v('$ docker container ls\nCONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                     NAMES\n2a7sdo87kdf3        v2fly/v2fly-core        "v2ray -config=/et..."   3 minutes ago       Up 3 minutes        0.0.0.0:8888->8888/tcp    v2ray\n')])])]),e("p",[a._v("通过以下命令来启动 V2Ray：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container start v2ray\n")])])]),e("p",[a._v("停止 V2Ray：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container stop v2ray\n")])])]),e("p",[a._v("重启 V2Ray：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container restart v2ray\n")])])]),e("p",[a._v("查看日志：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container logs v2ray\n")])])]),e("p",[a._v("更新配置后，需要重新部署容器，命令如下：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("$ sudo docker container stop v2ray\n$ sudo docker container rm v2ray\n$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2fly/v2fly-core  v2ray -config=/etc/v2ray/config.json\n")])])]),e("p",[a._v("假如你的配置换了端口号，那么相应的端口映射也要更改，假如你在配置文件中把监听端口改为了 9999，则'-p'参数应该这样写：")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("-p  9999:9999\n")])])]),e("p",[a._v("假如你想将容器中的端口映射到本机的端口，则命令应该这样写")]),a._v(" "),e("div",{staticClass:"language-plain extra-class"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v("-p 127.0.0.1:端口号:端口号\n")])])]),e("p",[a._v("如果 V2Ray 用的传输层协议是 mKCP，由于 mKCP 基于 UDP，那么需要指定映射的端口是 UDP：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-p  9999:9999/udp\n")])])]),e("p",[e("strong",[a._v("除非你打算使用 Nginx 来转发 Websocket 否则不需要映射到本地，直接填写"),e("code",[a._v("端口号:端口号")]),a._v("的形式即可")])]),a._v(" "),e("p",[a._v("另外，如果开启了动态端口，-p 标记可以多次使用来绑定多个端口. 具体用法是在指令中再加上多个 -p 标记即可。")]),a._v(" "),e("h2",{attrs:{id:"更新策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新策略"}},[a._v("#")]),a._v(" 更新策略")]),a._v(" "),e("h3",{attrs:{id:"手动更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动更新"}},[a._v("#")]),a._v(" 手动更新")]),a._v(" "),e("p",[a._v("更新 V2Ray 的 Docker 镜像：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ docker pull v2fly/v2fly-core\n")])])]),e("p",[a._v("更新完之后，你需要重新部署容器，方法见上。")]),a._v(" "),e("h3",{attrs:{id:"自动更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动更新"}},[a._v("#")]),a._v(" 自动更新")]),a._v(" "),e("p",[a._v("如果你想让自己的 V2Ray contianer 自动更新，无需手动部署。 可以尝试 "),e("a",{attrs:{href:"https://github.com/containrrr/watchtower",target:"_blank",rel:"noopener noreferrer"}},[a._v("watchtower"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[e("strong",[a._v("注意")]),a._v(": 以命令会让你的所有 contianer 自动更新。 如果想只更新 V2Ray， 请参考 "),e("a",{attrs:{href:"https://containrrr.dev/watchtower/arguments/",target:"_blank",rel:"noopener noreferrer"}},[a._v("containrrr.dev"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -d \\\n    --name watchtower \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    containrrr/watchtower\n")])])]),e("hr"),a._v(" "),e("h4",{attrs:{id:"更新历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新历史"}},[a._v("#")]),a._v(" 更新历史")]),a._v(" "),e("ul",[e("li",[a._v("2018-04-05 Update")]),a._v(" "),e("li",[a._v("2018-09-06 UDP 说明")])])])}),[],!1,null,null,null);r.default=s.exports}}]);