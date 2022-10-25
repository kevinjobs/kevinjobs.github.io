# Mintin

mintin 是一个为 hexo 所做的主题。

更新日期: 2021-09-13

## [Demo](https://blog.kevinjobs.com/mintin)

![mintin](mintin-preview.png)

## 安装

### 主题

#### 最新 release 版

进入你的项目文件夹

```bash
$ git clone -b master https://github.com/kevinjobs/hexo-theme-mintin.git themes/mintin
```

### 依赖

```bash
$ npm install --save hexo-auto-category
$ npm install --save hexo-excerpt
$ npm install --save hexo-tag-cloud
```

## 配置

hexo 有两个配置文件，一个在 hexo 项目的根目录，另一个在主题文件夹的根目录，文件名都是均为 `_config.yml` 。

### 项目配置(位于项目根目录)

```yaml
theme: mintin
# 指定语言项可以选择特定语言
# zh-CN,zh-TW,en,fr
# 中文简体，中文繁体，英文，法语
language: en

# hexo-excerpt
# 自动生成摘要的插件
# 项请见 https://github.com/chekun/hexo-excerpt
excerpt:
  depth: 4
  excerpt_excludes: ['h1','h2','h3','h4','img','hr','blockquote']
  more_excludes: []
  hideWholePostExcerpts: true
 
# 根据目录生成分类的插件 
# Generate categories from directory-tree
# 项请见 https://github.com/xu-song/hexo-auto-category
# depth: the depth of directory-tree you want to generate, should > 0
auto_category:
  enable: true
  depth: 5
  
# 标签云插件
# tags cloud
# https://github.com/MikeCoder/hexo-tag-cloud/blob/master/README.ZH.md
tag_cloud:
  textFont: ''
  textColour: \#333
  textHeight: 25
  outlineColour: \#e2e1d1
```

### 主题配置（位于主题根目录）

```yaml
# 自定导航栏 logo
# Custom nav
title: "Mint Forge"

# 社交网络帐号
# Social media
social:
  GitHub: ""
  Weibo: ""
  Facebook: ""
  Flickr: ""
  Tumblr: ""

# 版权信息
# Custom Copyright
mail: kevinjobs@qq.com
copyright: All rights reserved @Kevin JOBS

```

### About 页面（关于页面）

如果需要生成 about 页面，需要在项目根目录的 source 目录下创建一个 about 目录，并在 about 目录下创建一个 index.md 文件，为该文件添加 `layout: page` 属性。此时就可在 `<your_url>/about` 路径访问到 about 页面了。

### Tags 页面（标签页面）

如果需要生成 tags 页面，需要在项目根目录的 source 目录下创建一个 tags 目录，并在 tags 目录下创建一个 index.md 文件，为该文件添加 `layout: tags` 属性。此时就可在 `<your_url>/tags` 路径访问到 tags 页面了。

### Categories 页面（分类页面）

如果需要生成 Categories 页面，需要在项目根目录的 source 目录下创建一个 categories 目录，并在该目录下创建一个 index.md 文件，为该文件添加 `layout: categories` 属性。此时就可在 `<your_url>/categories` 路径访问到 categories 页面了。

## 特性

### 文章目录

自动为文章生成多级目录。

### markdown

使用 GitHub 的 markdown 样式。
