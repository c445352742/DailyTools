# Linux(default:centos)

## 网络设置
防火墙状态

    systemctl status firewalld
关闭防火墙

    systemctl stop firewalld.service 
    systemctl disable firewalld.service 
    systemctl stop firewalld.service basic.target


## 网fjsdjjjjjjJJ设置

    vi /etc/sysconfig/network-scripts/ifcfg-ens33

系统功能

    systemctl restart sshd.service
    systemctl restart docker
    systemctl restart network

## 释放缓存 3级别最高，普通写1

    sync  #先同步文件系统
    echo 3 > /proc/sys/vm/drop_caches

## 内存处理器占用

    top -c

## 当前目录和文件大小

    du -h --max-depth=1

## 硬盘占用查看

    df -h 

## 添加yum源

清空旧源的相关记录，设置一个空白的目录

    mkdir /etc/yum.repos.d
下载阿里源信息

    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
重建缓存

    yum clean all
    yum makecache
## 压缩和解压

    tar -zcvf [目标gz文件] [源目录或文件]
    tar -zcvf name.tar.gz dir/files  
    tar -zcvf [源gz文件] [解压目录]
    tar -zxvf name.tar.gz -C 解压后地址

## ssh配置

hostkey： ssh协议进行双向密钥对验证，hostkey为服务器密钥对。所以客户端或服务器修改key时，须两端同时修改。

---

ssh 服务配置

    /etc/ssh/sshd_config

---

生成key

    ssh-keygen -t rsa -C "flhw"

---

设置SSH开机自启动

    systemctl enable sshd

---

ssh启动错误,错误记录 Failed to start OpenSSH Server daemon

    /usr/bin/sshd -t

---

接受其他主机登录验证

    RSAAuthentication yes   #rsa验证
    PubkeyAuthentication yes    #key登录
    PasswordAuthentication yes  #密码登录

---

验证公钥的文件位置，内容包含登录密钥对中的 `.pub` 相应的文件夹在 `/root/.ssh`，多密钥须写入文件的内容

    AuthorizedKeysFile .ssh/authorized_keys

---

密钥文件及authorized_keys位置

    cd /root/.ssh

---

权限错误  `chmod 700 id_rsa`

---

vscode key登录。key文件地址正反斜杠均可，地址包含空格时必须加双引号

    Host centos
        HostName 192.168.78.128
        User root
        Port 22
        IdentityFile C:/Users/Think/.ssh/id_rsa

---

无 vi 写文件

    echo "content" > 文件名 #覆盖
    echo "content" >> 文件名 #追加

## rsync工具

指定目标同步到指定路径下，即 `/root/cast/docker -> /root/cast` 完成docker文件夹的同步

---

从远程同步文件到本地 可添加 --exclude="node_modules"

    rsync -av -e "ssh -p2222" root@10.0.112.10:/root/cast/docker  /root/cast
    rsync -av -e "ssh -i (key position) -p2222" root@10.0.112.10:/root/cast/docker  /root/cast

---

从本地同步文件到远程

    rsync -e "ssh -p2222" -r /root/cast/docker root@10.0.112.10:/root/cast

## scp工具

发送文件到远程地址（参数互换为下载远程文件到本地）

    scp -P2222 /root/from.sql root@10.0.112.10:22/root/to.sql 
    scp -P2222 /root/from.sql root@10.0.112.10:22/root 指定目标文件名或只指定文件夹，只需要目标端口 

## npm
### nrm显示BUG

cli.js 211行

    if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry #原代码
    if (hasOwnProperty(customRegistries, name) || (name in registries || customRegistries[name].registry #更正后
### npm包
列出全局包

    npm install -g npm@9.6.0
查看安装包 packageName 最新发布的版本信息

    npm view packageName version
更新大版本下，最新包

    npm update packageName (-D | -S)
更新最新包

    npm install --save vue@latest

# 项目
  scp E:\vm\share_s\Linux及环境手册.md "chai@192.168.116.130:22/gold/DailyTools/Linux及环境手册.md"

## ionic
酌情修改id：capacitor.config

    ionic capacitor add android 安装ionic安卓项目
    ionic capacitor copy android 修改源码后同步到安卓项目
    ionic capacitor sync android 修改源码后连同原生插件同步到安卓项目
    npx cap sync android / ionic cap sync
    ionic capacitor run android -l --external 热更新

安卓报错：***Could not find method compile() for arguments [{name=barcodescanner-release-2.1.5, ext=aar}]。***
将node_modules\phonegap-plugin-barcodescanner\src\android\barcodescanner.gradle
文件内容dependencies内，修改为：

    dependencies {
        implementation(name:'barcodescanner-release-2.1.5', ext:'aar')
    }
vue导入插件时，使用angula6末尾加上/ngx

    import { BarcodeScanner } from "@awesome-cordova-plugins/barcode-scanner";
    
安卓默认屏蔽http，需要glory_wms_app\android\app\src\main\AndroidManifest.xml 下application 标签添加

    android:usesCleartextTraffic="true"
## 日志

    tail -f /root/cast/log/glory_macs_aip_log/glory_macs_aip.log

## 导入mysql

下载数据库 glory_macs-3320  glory_macs_aip-3321 user_micro_service-3322 ldq-moc-3324 ldq-aip-3325
额外参数 --max_allowed_packet

    mysqldump -uroot -pcastztb2018@ -h127.0.0.1 -P3320 --databases glory_macs > /root/cast/src/glory_macs/sql/dump.sql

---

加载

    sh tool/alter_db.sh glory_macs sql/dump.sql

# Docker

## 镜像

查看镜像

    docker images
删除镜像

    docker rmi [ID]
提交修改镜像**后缀：`镜像名：tag`**

    docker commit [ID] cast:v2.0.0
加载 camunda

    docker load -i camunda-20220517.tar
进入docker虚拟机的控制台

    docker exec -it glory_macs_aip_web_1  /bin/bash

# Git
ls-remote -h -t ssh://git@github.com/sohee-lee7/Squire.git

## 克隆仓库

自动使用ssh密钥克隆。 或者指定密钥文件

    密钥命令格式
	git clone ssh://git@provider.com:userName/projectName.git --config core.sshCommand="ssh -i ~/location/to/private_ssh_key"。 对于需要固定key的仓库可以直接写入.git/config 一劳永逸
	克隆命令
    git clone  ssh://git@49.233.182.33:9922/cast/ldq_scada.git /home/user //克隆到指定位置
查看远程地址

    git remote -v
删除缓存信息

    git fetch --prune origin
更新远程分支

    git remote update origin -p
查看远程分支

    git branch -a
拉取全部分支更新

    git fetch
git参数config文件[push]

    simple 在中央仓库工作流程模式下，拒绝推送到上游与本地分支名字不同的分支。
    nothing - do not push anything.
    matching - push all matching branches. All branches having the same name in both ends are considered to be matching. This is the default.
    upstream - push the current branch to its upstream branch.
    tracking - deprecated synonym for upstream.
    current - push the current branch to a branch of the same name
git mr命令内容

    mr = push -o merge_request.create -o merge_request.target=master
    stash = stash --include-untracked#
修改代码源地址

    git remote set-url origin ssh://git@49.233.182.33:9922/cast/glory_macs_aip.git
~/.gitconfig 用户级git配置文件。/etc/gitconfig 系统级git配置文件。仓库内.git下config，项目级git配置文件。insteadof会替换协议名。

    所有的仓库访问都通过密钥
    git config --global url."ssh://".insteadOf https://     #将git协议替换为https协议，
    设置后显示
    [url "ssh://"]
        insteadOf = https://

# win tcp代理
可以将代理视为转发服务器。listenaddress 服务器（本地）ip地址，listenport 服务器端口。connectaddress目标远程主机的ip地址(支持域名)
connectport目标端口 

    netsh interface portproxy add v4tov4 listenaddress=localaddress listenport=localport connectaddress=destaddress  connectport=destport


deb文件安装 sudo dpkg -i mypackage.deb或sudo apt install ./pack.deb

sudo apt install fcitx5 fcitx5-chinese-addons #重启后，打开该软件的图标

sudo apt-get install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
安装zsh及oh my zsh配置
chsh -s /bin/zsh #将zsh替换为你的默认shell

修改权限
chmod 777 a.md 权限顺序为所有者，用户组，其他人

用户添加sudo 
apt install sudo
先cd到/etc/sudoers下，修改权限。找到root ALL = (ALL) ALL这一行，在下一行加入username ALL = (ALL) ALL，再复原权限

sudo systemctl set-default multi-user.target //开机进命令行

sudo systemctl set-default graphical.target //开机进gui

sudo apt -y install task-gnome-desktop //安装gui
export PATH=$PATH:/sbin/  //新机未连接环境变量，reboot等不可用

换源 /etc/apt/sources.list 添加
deb https://mirrors.huaweicloud.com/debian     xxxx xxxx xxx
deb https://mirrors.huaweicloud.com/debian-security  xxxx xxxx xxx
deb-src https://mirrors.huaweicloud.com/debian-security    xxxx xxxx xxx
apt update  #更新


 docker-slim 对镜像进行瘦身 https://zhuanlan.zhihu.com/p/608032293

 sudo cat /proc/version

 ssh name@192.168.116.130

 scp  E:\2023\Server\Linux及环境手册.md "chai@192.168.116.130:/gold/Linux及环境手册.md"  


 git config --global user.name "username"