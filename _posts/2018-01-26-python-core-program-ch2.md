--- 
layout: post
title: python核心编程-快速入门
tags: 
- python
status: publish
type: post
published: true
---
《Python核心编程第二版》第二章笔记

- 程序输出，print语句及hello world

```
>>> print "%s is number %d" % ("python",1)
python is number 1
```
 %s表示由一个字符串来替换，%d表示由一个整型来替换。
&nbsp; 
```
logfile = open('./log.txt','a')
print >> logfile, 'fatal error: invalid input!'
logfile.close()
```

">>"用来重定向输出

- 程序输入和raw_input()内建函数

```
>>> user = raw_input('enter your name')
enter your namebrieftime
>>> print user
brieftime
```

- 注释

```
>>> # this is a comment
... print "hi"  # this is another comment
hi
```

有一种叫做文档字符串的特别注释。你可以在模块、类或者函数的起始添加一个字符串，起到在线文档的功能。
这个说明可以使用.__doc__（注意前后都是双_）属性，将DocString特性print打印出来。DocSting的典型用法就是help（）调用，它抓取DocString属
性，清晰的给你展示出来。

````
def sayhello():
    "this function sayhello is to print hello world to user"
    print "hello world"
print sayhello.__doc__
print "-------------------------"
help(sayhello)

the output is:
this function sayhello is to print hello world to user
-------------------------
Help on function sayhello in module __main__:

sayhello()
    this function sayhello is to print hello world to user
````

- 操作符

标准算数操作符：+ - * / // % **

标准比较操作符：< <= > >= == !=

标准逻辑操作符：and or not

- 变量和赋值

python是动态类型语言，也就是说不需要预先声明变量的类型。变量的类型和值在赋值的那一刻被初始化

- 字符串

操作符：索引操作符[],切片操作符[:],连接操作符+,重复操作符*
```
pystr = 'python'
iscool = 'is cool!'

print pystr[0]
print pystr[2:5]
print iscool[:2]
print iscool[3:]
print iscool[-1]
print iscool * 2
print pystr + ' ' + iscool

The output is:
p
tho
is
cool!
!
is cool!is cool!
python is cool!
```

- 列表和元组

1）元组是不可变的， 而列表是可变的
2）元组通常由不同的数据，而列表是相同类型的数据队列。元组表示的是结构，而列表表示的是顺序。举个例子来讲，当你想记录棋盘上一个子的坐标时，应该使用
元组，当你想记录棋盘上所有子的坐标时，应该使用列表。
把这种“文化差异”放到 C 语言来讲，列表像是数组，元组则像是 structs 结构体。
Python 采用了命名元组的方法来使含义更加明确：

```
from collections import namedtuple
Station = namedtuple("Station", "id, city, state, lat, long")
denver = Station(44, "Denver", "CO", 40, 105)

print denver.city
print denver[1]

the output is:
Denver
Denver
```

- 字典

字典是另一种可变容器模型，且可存储任意类型对象。

字典的每个键值(key=>value)对用冒号(:)分割，每个对之间用逗号(,)分割，整个字典包括在花括号({})中。

键必须是唯一的，但值则不必。

值可以取任何数据类型，但键必须是不可变的，如字符串，数字或元组。

字典的增删改查：

```
#coding:utf-8

dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

print "dict['Name']: ", dict['Name']
print "dict['Age']: ", dict['Age']

dict['Age'] = 8 # update existing entry
dict['School'] = "DPS School" # Add new entry

print "dict['Age']: ", dict['Age']
print "dict['School']: ", dict['School']

for key in dict:
    print key, dict[key]

del dict['Name'] # 删除键是'Name'的条目
print "After del name:", dict
dict.clear()     # 清空词典所有条目
print "After del all k-v:", dict
del dict        # 删除词典
print "After del dict:", dict

the output is:
dict['Name']:  Zara
dict['Age']:  7
dict['Age']:  8
dict['School']:  DPS School
School DPS School
Age 8
Name Zara
Class First
After del name: {'School': 'DPS School', 'Age': 8, 'Class': 'First'}
After del all k-v: {}
After del dict: <type 'dict'>
```

- If语句

```
if expression1:
    if_suite
elif expression2:
    elif_suite
else:
    else_suite
```

- While语句

```
while expression:
    while_suite
```

- for循环

Python中的for循环接受`可迭代对象`（例如序列或迭代器）作为其参数，每次迭代其中一个元素。

- 列表解析

这是一个让人欣喜的术语，表示你可以在一行中使用一个for循环将所有值放到一个列表当中：

```
num = [x ** 2 for x in range(8) if x % 2]
print num

the output is:
[1, 9, 25, 49]
```

- 文件

```
try:
    filename = raw_input('please input file name:')
    fobj = open(filename, 'r')
    for eachline in fobj:
        print eachline,
    fobj.close()
except IOError, e:
    print 'file open error:', e
```

- 函数

```
def function_name(arguments):
    "optional document string"
    function_suite
```    

- 类

```
class ClassName(base_class):
    "option document string"
    static_member_declarations
    method_declarations
    
# -*- coding: UTF-8 -*-

class Employee:
    '所有员工的基类'
    empCount = 0

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
        Employee.empCount += 1

    def displayCount(self):
        print "Total Employee %d" % Employee.empCount

    def displayEmployee(self):
        print "Name : ", self.name, ", Salary: ", self.salary


"创建 Employee 类的第一个对象"
emp1 = Employee("Zara", 2000)
"创建 Employee 类的第二个对象"
emp2 = Employee("Manni", 5000)
emp1.displayEmployee()
emp2.displayEmployee()
print "Total Employee %d" % Employee.empCount

# 内置类属性
print "Employee.__doc__:", Employee.__doc__
print "Employee.__name__:", Employee.__name__
print "Employee.__module__:", Employee.__module__
print "Employee.__bases__:", Employee.__bases__
print "Employee.__dict__:", Employee.__dict__    
```

单下划线、双下划线、头尾双下划线说明：

__foo__: 定义的是特殊方法，一般是系统定义名字 ，类似 __init__() 之类的。

_foo: 以单下划线开头的表示的是 protected 类型的变量，即保护类型只能允许其本身与子类进行访问，不能用于 from module import *

__foo: 双下划线的表示的是私有类型(private)的变量, 只能是允许这个类本身进行访问了。

