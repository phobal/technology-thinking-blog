---
date: "2016-06-11"
title: "mongodb常用命令"
category: "Tech"
tags: ['mongodb', 'database']
banner: ''
---

## mongodb常用命令

#### 1、创建数据库

``` bash

$ mongodb --dbpath your-dbpath --port your-port   
--logpath your-logpath
egg:
$ mongodb --dbpath d:\db\data --port 27017   
--logpath d:\db\log

```

简便方法：写配置文件，例如在d盘下面的db文件件下建立三个文件夹
data、log、conf,然后在conf文件夹中建立一个mongod.conf的配置
配置文件，

``` bash

dbpath = d:\\db\\data
logpath = d:\\db\\log\\mongod.log
port = 27017

```
然后在d盘根目录下运行

``` bash

$ mongod --port 27017 -f db/conf/mongod.conf

```


#### 2、连接mongodb

``` bash

$ mongo --port your-port
egg:
$ mongo --port 27017

```

#### 3、显示数据库中所有的数据库列表

``` bash

$ show dbs

```

#### 4、使用某个数据库

``` bash

$ use db_name
egg:
$ use test

```

#### 5、插入数据

``` bash

$ db.test.insert({key1:value1,key2:value2,...})
egg:
$ db.test.insert({"name":"zhangsan","age":"14"})

```

#### 6、删除数据

``` bash

$ db.test.remove({key:value})
egg:
$ db.test.remove({"name":"zhangsan"})

```

#### 7、更新数据

``` bash

$ db.test.update(
  <query>,
  <update>
  {
    upsert: <boolean>,
    multi: <boolean>,
    writeConcern: <document>
  })
egg:
$ db.test.update({
  "name":"zhangsan"
},{
  $set{
    "name":"lisi"
  }
})

```

#### 8、查询

``` bash

$ db.test.find(<query>)
egg:
$ db.test.find({}) //查询所有数据
$ db.test.find({"name":"lisi"})

```

更多参考：http://www.runoob.com/mongodb/mongodb-tutorial.html