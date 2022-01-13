### 目录说明

* assets : 媒体文件

* contracts : 合约文件

* migrations : 部署脚本文件

* scripts : 脚本执行文件

* source : MyCollectible合约源码



### 编译环境

操作系统：Windows10

npm: 7.18.1

truffle: v5.4.28

solc: 0.6.2

node: v16.4.0

web3: 1.5.3



### 搭建并运行可升级智能合约框架

1. 在ERC1155-0.8.4根目录下

设置cmd代理

> npm install : 安装依赖包



2. 部署合约

重新部署新项目：删除build文件夹

> npx truffle migrate --network rinkeby : 编译并部署到rinkeby网络



3. 验证合约

> npx truffle run verify Migrations MyGallery --network rinkeby



4. 铸造、转移NFT

分别运行scripts目录下的mint.js文件、transfer.js文件

> npx truffle exec scripts/mint.js --network rinkeby

> npx truffle exec scripts/transfer.js --network rinkeby



5. 在OpenSea中查看NFT

rinkeby测试网址：https://testnets.opensea.io/get-listed/step-two

将合约地址在上述网址验证通过，持有此合约地址NFT的账户即可在OpenSea上看到此合约地址的NFT
