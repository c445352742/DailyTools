# Linux(命令默认平台:centos)

## 广播
wall命令

    wall "ff" #广播信息 ff

## 无 vi 写文件
echo

    echo "content" > 文件名  #覆盖 
    echo "content" >> 文件名 #追加

---

nano：根据提示，ctrl+x退出，退出过程会提示保存

## 关机

    shutdown -h now

## vim
|操作|方法|
| :---: | :---: |
| 搜索 | 直接输入 /xxx 就是搜索xxx。<br/> *n*,下一个。*N*,上一个。向上搜索,*？xxx* |
| 撤销 | u |
| 反撤销 | ctrl + r |
| 复制行 | yy |
| 粘贴 | p |
| 剪切行 | dd |
### 显示行号

    :set number

## 监控文件刷新，日志

    tail -f /root/cast/log/glory_macs_aip_log/glory_macs_aip.log

## 网络设置
防火墙状态

    systemctl status firewalld
关闭防火墙

    systemctl stop firewalld.service 
    systemctl disable firewalld.service 
    systemctl stop firewalld.service basic.target


## 网络设置（centos）

    vi /etc/sysconfig/network-scripts/ifcfg-ens33

系统功能

    systemctl restart sshd.service
    systemctl restart docker
    systemctl restart network

## 网络设置（debian）

查看网卡

    ip link
打开配置文件/etc/network/interfaces，设置内容<br/>
dhcp

    allow-hotplug ens33
    iface ens33 inet dhcp
静态

    auto ens33
    iface ens33 inet static
    address 192.168.2.2
    netmask 255.255.255.0
    gateway 192.168.2.2
    dns-nameservers 8.8.4.4 8.8.8.8
重启网卡

    sudo systemctl restart NetworkManager.service

## 操作系统信息

    cat /proc/version

## deb安装（debian）
deb文件安装，两种
    
    sudo dpkg -i mypackage.deb
    sudo apt install ./pack.deb
## apt删除包

    apt remove --purge
## 输入法

    字体：sudo apt install fonts-wqy-zenhei
    位置：sudo apt install locales
    设置字符集：nano /etc/locale.gen 将zh_CN.UTF-8 UTF-8前面的注释去掉，或者将其填入。
    lang:nano /etc/locale.conf #在这里创建或修改写入 LANG=zh_CN.UTF-8
    载入locales：sudo dpkg-reconfigure locales 

    fcitx输入法：sudo apt install fcitx5 fcitx5-chinese-addons #重启后，打开该软件的图标

## 释放缓存 3级别最高，普通写1

    sync  #先同步文件系统
    echo 3 > /proc/sys/vm/drop_caches

## 端口占用
查看端口1000的占用

    netstat -ntlp # tcp
    netstat -tunlp # tcp/udp

## sudo安全路径

    sudo -l
## 网速查看
安装nload后查看网速

    sudo apt install nload
    sudo nload -m
## 内存处理器占用

    top -c # shift+m 按内存占用排序。shift+p 按cpu排序
    shift + < # 前后翻页
---
## 修改电脑名称

    sudo hostnamectl set-hostname sjz

信息解释

    连续按m
    内存占用显示切换
    %cpu
    0.3% us — 用户空间占用CPU的百分比。
    66.7% sy — 内核空间占用CPU的百分比。
    0.0% ni — 改变过优先级的进程占用CPU的百分比
    33.3% id — 空闲CPU百分比
    0.0% wa — IO等待占用CPU的百分比
    0.0% hi — 硬中断（Hardware IRQ）占用CPU的百分比
    0.0% si — 软中断（Software Interrupts）占用CPU的百分比

按1,显示多核的使用。按b或x,加亮排序列。

显示僵尸进程
    ps -A|grep defunct
    ps -ef|grep defunct |more #显示父进程

## 环境变量地址

    /etc/profile
    /etc/environment
    ~/.zshrc
    ~/.bashrc

## 当前目录和文件大小

    du -h --max-depth=1

## 硬盘占用查看

    df -h 

## 查看pid

    ps -A
## 实时网速
安装nload后：

    nload ens33

## 环境变量（debian）
常用命令

    export PATH=$PATH:/sbin/  #新机未连接，reboot等不可用

自定义全局，在 /etc/environment 或profile中，修改权限后添加

    export PROJ=/sbin
然后运行

    source /etc/environment
用户变量在 ~/.bashrc ,操作过程一样

## 自定义命令
～/.bashrc添加 

    alias wh="cd /gold"
zsh需要在.zshrc里添加

全局 /etc/bash.bashrc
## 文件权限

    chmod 777 -R a.md 权限顺序为所有者，用户组，其他人
    ls -l 显示所有文件和目录的权限，可添加名字显示指定文件的权限
    ls -ld xxx 显示指定目录的权限

## 安装gui    
修改时区

    sudo timedatectl set-timezone Asia/Shanghai
## 安装gui    
    
    sudo apt -y install task-gnome-desktop

## 开机模式设置
开机进命令行

    sudo systemctl set-default multi-user.target
开机进gui

    sudo systemctl set-default graphical.target 

禁止休眠
    sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target

休眠状态
    systemctl status sleep.target
    
todesk启动等功能
    systemctl status todeskd
## zsh
安装zsh及oh my zsh配置

    sudo apt-get install zsh
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    chsh -s /bin/zsh  #将zsh替换为你的默认shell

国内安装

    sudo sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"

查看是否在使用

    echo $0
ohmyzsh配置文件

    cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

## 用户 Dt66506180.
创建

    sudo adduser test

添加sudo 

    sudo usermod -aG sudo test
切换用户 
    login test
验证

    sudo -l -U test
删除用户

    userdel -r chai
退出其他终端

    who am i
    who -up #获得pid
    kill [pid]
安装软件

    apt install sudo
先cd到/etc/sudoers下，修改权限。找到root ALL = (ALL) ALL这一行，在下一行加入username ALL = (ALL) ALL，再复原权限

## 添加yum源（centos）

清空旧源的相关记录，设置一个空白的目录

    mkdir /etc/yum.repos.d
下载阿里源信息

    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
重建缓存

    yum clean all
    yum makecache

## 换源（debian）
向 /etc/apt/sources.list 文件添加
华为源

    deb http://mirrors.huaweicloud.com/debian/ bookworm main non-free-firmware
    deb http://mirrors.huaweicloud.com/debian-security bookworm-security main non-free-firmware
    deb-src http://mirrors.huaweicloud.com/debian-security bookworm-security main non-free-firmware

    sudo echo "deb http://mirrors.huaweicloud.com/debian/ bookworm main non-free-firmware" >> sources.list
    sudo echo "deb http://mirrors.huaweicloud.com/debian-security bookworm-security main non-free-firmware">> sources.list
    sudo echo "deb-src http://mirrors.huaweicloud.com/debian-security bookworm-security main non-free-firmware">> sources.list

中科大源
    deb https://mirrors.ustc.edu.cn/debian/ bookworm main non-free non-free-firmware contrib
    deb-src https://mirrors.ustc.edu.cn/debian/ bookworm main non-free non-free-firmware contrib
    deb https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main
    deb-src https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main
    deb https://mirrors.ustc.edu.cn/debian/ bookworm-updates main non-free non-free-firmware contrib
    deb-src https://mirrors.ustc.edu.cn/debian/ bookwomain non-free non-free-firmware contrib
    deb https://mirrors.ustc.edu.cn/debian/ bookworm-backports main non-free non-free-firmware contrib
    deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-backports main non-free non-free-firmware contrib
网易源

    echo "deb https://mirrors.163.com/debian/ bookworm main non-free non-free-firmware contrib" >> sources.list
    echo "deb-src https://mirrors.163.com/debian/ bookworm main non-free non-free-firmware contrib" >> sources.list
    echo "deb https://mirrors.163.com/debian-security/ bookworm-security main" >> sources.list
    echo "deb-src https://mirrors.163.com/debian-security/ bookworm-security main" >> sources.list
    echo "deb https://mirrors.163.com/debian/ bookworm-updates main non-free non-free-firmware contrib" >> sources.list
    echo "deb-src https://mirrors.163.com/debian/ bookworm-updates main non-free non-free-firmware contrib" >> sources.list
    echo "deb https://mirrors.163.com/debian/ bookworm-backports main non-free non-free-firmware contrib" >> sources.list
    echo "deb-src https://mirrors.163.com/debian/ bookworm-backports main non-free non-free-firmware contrib" >> sources.list
    

    deb https://mirrors.163.com/debian/ bookworm main non-free non-free-firmware contrib  
    deb-src https://mirrors.163.com/debian/ bookworm main non-free non-free-firmware contrib  
    deb https://mirrors.163.com/debian-security/ bookworm-security main  
    deb-src https://mirrors.163.com/debian-security/ bookworm-security main  
    deb https://mirrors.163.com/debian/ bookworm-updates main non-free non-free-firmware contrib  
    deb-src https://mirrors.163.com/debian/ bookworm-updates main non-free non-free-firmware contrib  
    deb https://mirrors.163.com/debian/ bookworm-backports main non-free non-free-firmware contrib  
    deb-src https://mirrors.163.com/debian/ bookworm-backports main non-free non-free-firmware contrib  



更新包信息
    
    apt update 

## 压缩和解压

压缩：tar -zcvf [目标gz文件] [源目录或文件]

    eg:tar -zcvf name.tar.gz dir/files  
解压：tar -zxvf [源gz文件] -C [解压目录]

    eg:tar -zxvf name.tar.gz -C 解压地址

## ssh
连接命令

    ssh -p22 name@192.168.116.130

## ssh配置

hostkey： ssh协议进行双向密钥对验证，hostkey为服务器密钥对。所以客户端或服务器修改key时，须两端同时修改。

---

ssh 服务配置，修改端口号等

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

    AuthorizedKeysFile ~/.ssh/authorized_keys  # ~/.ssh/authorized_keys

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


## rsync工具

指定目标同步到指定路径下，即 `/root/cast/docker -> /root/cast` 完成docker文件夹的同步

---

从远程同步文件到本地 可添加 --exclude="node_modules"  39.101.197.185

                                            [from]                  [to]
    rsync -av -e "ssh -p2222" root@10.0.112.10:/root/cast/docker  /root/cast
    rsync -av -e "ssh -i (key position) -p2222" root@10.0.112.10:/root/cast/docker  /root/cast

    rsync -av -e "ssh -p22222" /gold/erp/frontend/dist chai@39.101.197.185:/gold/erp/
    rsync -av -e "ssh -p22222" docker chai@39.101.197.185:/usr/local/bin
    指令参数
    rsync -rlDvz -e "ssh -p22222" docker chai@39.101.197.185:/usr/local/bin

---

从本地同步文件到远程

    rsync -e "ssh -p2222" -r /root/cast/docker root@10.0.112.10:/root/cast

## scp工具

发送文件到远程地址（参数互换为下载远程文件到本地）39.101.197.185

    scp -P2222 /root/from.sql root@10.0.112.10:/root/to.sql -l 8192 # 限速8192k
    scp -P2222 /root/from.sql root@10.0.112.10:/root #指定目标文件名或只指定文件夹，只需要目标端口 

## nvm
安装

    curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
环境变量生效

    source ~/.bashrc
查看所有版本
    
    nvm ls-remote
安装一个版本

    nvm install 12.18.1
已安装的版本切换
临时
    nvm use 12.22.0
永久
    nvm use 12.22.0
    nvm alias default 12.22.0


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

# FRP
## 下载

    wget https://github.com/fatedier/frp/releases/download/v0.48.0/frp_0.48.0_linux_amd64.tar.gz
## 安装
/usr/frp内，复制对应的frpc和frps，出现command not found修改权限，客户端对照使用
配置文件
服务端

    [common]
    bind_addr = 0.0.0.0
    bind_port = 8090 #frp服务对接端口
客户端

    [common]
    server_addr = 39.101.197.185
    server_port = 8090 #frp服务对接端口

    #[ssh] # 名字自己定义
    #type = tcp
    #local_ip = 127.0.0.1 #本机ip
    #local_port = 22 # 本机提供服务入口
    #remote_port = 6000  # 向公网机提交请求入口
按配置文件启动

    sudo ./frps -c ./frps.ini
配置成系统服务

创建服务配置文件

    sudo vi /lib/systemd/system/frps.service
内容

    [Unit]
    Description=Frp Server Service
    After=network.target

    [Service]
    Type=simple
    User=nobody
    Restart=on-failure
    RestartSec=5s
    ExecStart=/usr/frp/frps -c /usr/frp/frps.ini

    [Install]
    WantedBy=multi-user.target
    WantedBy=graphical.target 
开机启动
    sudo systemctl enable frps

修改配置文件后同步
    sudo systemctl daemon-reload


# 项目

## nodejs
命令行运行时可以输出堆栈

    node --trace-warnings app.js
## ionic
酌情修改id：capacitor.config

    ionic capacitor add android 安装ionic安卓项目
    ionic capacitor copy android 修改源码后同步到安卓项目
    ionic capacitor sync android 修改源码后连同原生插件同步到安卓项目
    npx cap sync android / ionic cap sync
    ionic capacitor run android -l --external 热更新

生成apk 
测试版

    亖 -> build -> build bundle/apk -> build apks
发布版
    亖 -> build -> generate signed bundle/apk -> 一路next

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

# Docker

## 自动安装

    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
## 权限
添加docker用户组

    sudo groupadd docker
添加chai进docker组

    sudo gpasswd -a chai docker
重启

    systemctl restart docker

## docker镜像
搜索

    docker search nginx
下载

    docker pull nginx
换源 新建或修改/etc/docker/daemon.json

    {"registry-mirrors": ["https://registry.cn-hangzhou.aliyuncs.com"]}
查看镜像

    docker images
删除镜像

    docker rmi [ID]
镜像历史
    docker image history 34d4bf4486

镜像命令行启动
    docker run -it --init  base:v3

提交修改镜像**后缀：`镜像名：tag`**

    docker commit [ID] cast:v2.0.0
导入 camunda

    docker load -i camunda-20220517.tar
导出 camunda

    docker save -o camuda.tar camuda:v1.0
进入docker容器的控制台

    docker exec -it glory_macs_aip_web_1  /bin/bash
    docker exec -it glory_macs_aip_web_1  sh # mqtt没有bash
镜像改名

    docker tag erp_web:v1.14 erp_web:v1.14origin
docker参数

    -p 端口映射，主机：容器
    -P 随机端口映射
    -a 标准输入输出
    -i 交互式运行
    -t 重新分配终端，搭配-i使用
    -d 后台运行
    -h 指定host
    -e 指定环境变量
    -name 指定名字 
docker-compose参数

    -f 指定文件
    -p 指定项目名
    -d 后台运行

docker-compose创建并启动容器

    docker-compose up
docker-compose停止并删除容器

    docker-compose down
安装网络工具,并查看端口

    apt install iproute2
    apt install net-tools # ifconfig 工具包
    ss -ntlp #查看端口 -r,进程解释为协议，ip解释为域名
创建并启动容器 

    docker run -itd [name] /bin/bash # -d 后台启动 -it 启动容器终端
仅启动/停止/重启容器

    docker start [id]
    docker stop [id]
    docker restart [id]
查看容器

    docker ps -a
删除容器

    docker rm -f [id]
非root运行

    newgrp docker
容器互相传文件

    docker cp [container_name]:[path] [main_path] # from to
    docker cp [main_path] [container_name]:[path]
docker-compose安装

    sudo curl -L https://get.daocloud.io/docker/compose/releases/download/v2.23.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

    sudo chmod +x /usr/local/bin/docker-compose #赋予权限
    docker-compose --version #测试

# iptables

# iot
安装mysql及mqtt客户端

    pip install pymysql
    pip install paho-mqtt
查看软件及协议版本
    mosquitto -h

# Crontab
脚本例子，全部使用绝对路径

    #!/usr/bin/env bash
    #
    source /app/bin/activate && /app/bin/python /app/backend/debian.py
# Git

## 设置用户

    git config --global user.name "username"
    git config --global user.email "email" 

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
删除远程分支

    git push origin --delete dev
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


# Nginx
配置位置

    /etc/nginx/conf.d/**
    /etc/nginx/nginx.conf
检查配置文件

    nginx -t
重启

    systemctl restart nginx
    nginx -s reload
开机启动

    systemctl enable nginx
关闭开机启动

    systemctl disable nginx


# mysql
常用目录

    /usr/bin/mysqld_safe
    /etc/mysql/mysql.conf.d
显示全部用户

    use mysql;
    select user from user;
创建用户

    create user 'li'@'%' identified by 'newerp2023';
指定日志

    log_error = /var/log/mysql/error.log  #并创建目录，配置文件在/etc/mysql/my.cnf
下载地址，并安装

    wget https://dev.mysql.com/get/mysql-apt-config_0.8.29-1_all.deb
    dpkg -i mysql-apt-config_0.8.29-1_all.deb # 并安装依赖
    apt install lsb-release
    apt update
    apt install mysql-server
root建好库后，向其他用户授权

    grant all privileges on [库名].* to [用户名]@'%' identified by 'mima'; #旧版
    grant all privileges on ERP.* to 'li'@'%'; #新版，授权
    revoke all privileges on ERP.* from 'li'@'%'; # 回收授权

    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456'; #修改对应用户的密码加密模式

显示root权限

    show grants for 'root'@'localhost';
修改root密码.先在mysqlworkbench中，edit->preferences->sql editor最下 safe updates 关掉，然后重连

    use mysql;
    update user set authentication_string='' where user = 'root';
    alter user 'root'@'localhost' identified by '1324';
新建空库，首先设置user表，复制自已有库，然后django自动创建auth相关表

    python manage.py migrate # 创建表
    python manage.py makemigrations # make命令为创建django中auth相关文件
常规操作

    mysql -h39.101.197.185 -uroot -pnewerp2023 连接到远程数据库
    show databases; #显示所有数据库
    flush privileges; #刷新权限
    select user(); #当前用户
    select version(); #当前版本
    show variables like 'character%'; #查看字符集
## sql语句

    show databases;
    information_schema
    select user();
    select version();

    show variables like '%character%';
    show variables like 'collation%';

    --- 

    use ERP;
    alter table user modify id varchar(24) primary key;
    alter table user add column name varchar(20);
    select * from user  order by id desc;
    insert into user (id ,name) values('u111','kapcom');
    update user set name='honkai' where id='u111';
    delete from user where id=1;
    show create table user;
## 导入mysql

下载数据库 glory_macs-3320  glory_macs_aip-3321 user_micro_service-3322 ldq-moc-3324 ldq-aip-3325
额外参数 --max_allowed_packet  39.101.197.185

    mysqldump -uroot -pcastztb2018@ -h127.0.0.1 -P3320 --databases glory_macs > /root/cast/src/glory_macs/sql/dump.sql
备份

    mysqldump -uroot -pnewerp2023 -h39.101.197.185 -P8082 --databases ERP > /gold/erp/sql/dump.sql 
导入，覆盖时不要带databases参数

    mysqldump -uroot -pnewerp2023 -h127.0.0.1 -P8082 < /gold/erp/sql/dump.sql
    mysql -uroot -pnewerp2023 -h127.0.0.1 -P8082 < /gold/erp/sql/dump.sql #8.0

---

加载

    sh tool/alter_db.sh glory_macs sql/dump.sql

# Django
安装venv
    
    apt install python3.11-venv
指定venv环境

    python3 -m venv /app
关闭gunicorn服务

    kill -HUP 10
激活venv

    source /app/bin/activate
退出venv

    deactivate
安装uwsgi

    python3 -m pip install uwsgi  #需要安装 gcc 和 apt install python3-dev
指定源安装包

    pip3 install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple



# 端口使用 

| 端口号      | 占用 |使用设备
| ----------- | ----------- | ----------- |

| 8000/12000      | 阿里云配置       | 阿里云开发端口|
|  | erp |  |
| 80      | 报备系统       | 阿里云|
| 8081   |  django服务 |阿里云 本地 工厂|
| 8082   |  mysql服务 |阿里云 本地 工厂|
|  |  |  |
|  | iot |  |
| 8084   | mqtt breaker  | 阿里云 本地 工厂|
| 8085   | monitor  | 阿里云 本地 工厂|
| 8086   | django  | 阿里云 本地 工厂|
| 8087   | mysql  | 阿里云 本地 工厂|
| 内网8000   | mqtt 客户端  | 阿里云 本地 工厂|
|  | 工具 |  |
| 8000   | 开发vite服务 erp| 本地 |
| 8001   | 开发vite服务 iot| 本地 |
| 8022   |ssh |  阿里云 -> 工厂 |
| 8080  | debug模式启动网页docker测试服务 |阿里云 本地 工厂|
| 8089   | frp代理 | 阿里云 本地|
| 8090   | frp服务 | 阿里云 本地 工厂|
| 8091   | frp主页 | 阿里云 账号chai 密码 4453|
| 22222   |ssh | 阿里云 |

# 交付mqtt
dtu 左侧菜单，设备管理->设备列表->编辑->联网设置 不能绑定网关  dm->网关详情->更多->编辑->有人云透传 关闭

设备端 点击dtu->参数配置
1 工作模式 选 mqtt 不带阿里云的选项
2 地址 39.101.197.185
3 端口号8084
4 mqtt用户名 dt 密码 dt123456
5 提交话题1 /update/taiyuan，qos选2 订阅话题1 /exe/taiyuan，qos选2 /exe/和/update/是不可以改的，只有taiyuan可以自定义
6 串口，根据触摸屏端口设置