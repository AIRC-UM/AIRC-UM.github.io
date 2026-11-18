# AIRC Lab website

简约的实验室主页，包含 Home、Research、Publications、Team 四个页面。纯 HTML / CSS / JavaScript，无需构建、无需安装依赖，也不依赖外部字体、CDN 或图片服务。

## 文件结构

```text
lab-website/
├── index.html                 # Home
├── research.html              # Research
├── publications.html          # Publications
├── team.html                  # Team
├── assets/
│   ├── css/
│   │   └── styles.css         # 全站样式与响应式布局
│   ├── js/
│   │   ├── content.js         # 新闻、论文、成员等可编辑内容
│   │   └── app.js             # 公共布局、页面渲染与筛选交互
│   └── images/
│       ├── branding/         # 全站共用的 Logo 和浏览器标签图标
│       ├── home/             # 首页封面和子方向小图
│       ├── research/         # Research 页详情配图
│       └── team/             # 成员照片（添加照片时一并纳入仓库）
├── .gitignore                 # 忽略本地工具配置与临时文件
├── .nojekyll                  # GitHub Pages 直接提供静态文件
└── README.md
```

四个 HTML 页面保留在仓库根目录，方便 GitHub Pages 直接发布。图片按页面放入 `assets/images/` 下的对应目录。Publication 页有配图时可创建 `assets/images/publication/`，论文 PDF 可放入 `assets/papers/`。`content.js` 中填写相对于根目录 HTML 页面的资源路径，例如 `assets/images/team/member.jpg`。

`.agents/`、`.codex/`、`.aws/` 等是本地运行环境目录，不属于网站文件，已加入忽略规则。使用 Git 提交时会自动忽略；如果手动上传文件，请只上传上面列出的网站文件，并包含 `.nojekyll`。

## 本地预览

在本目录运行：

```bash
python3 -m http.server 8000
```

浏览器打开 http://localhost:8000 。也可以直接打开 `index.html`。

## 修改内容

统一编辑 `assets/js/content.js`：

- `description`：实验室简介。
- `research`：每个大方向的 `title`、`abstract`、`homeImage` 和 `imageAlt` 用于首页图文卡片，`topics` 列出该组的子方向。新增子方向时，在对应的 `topics` 中添加一项，并给它一个全站唯一的 `id` 作为跳转锚点。
  - 首页 `abstract` 和 Research 页的 `description` 都可用 `**关键词**` 加粗。
  - 首页卡片下方显示子方向的标题和小图标。用子方向的 `icon` 填小图路径，或用 `iconText` 填一个符号。点击标题进入 Research 页的对应详情。
  - Research 显示子方向的 `description`（每段写成数组里的一项）、`image`、`imageAlt` 和 `tags`。可选的 `publicationTopic` 应与论文条目的 `topic` 一致。没有子方向的大方向可以在自己的 `description` 和 `image` 中填写详情和配图。
- `news`：近况，按时间从新到旧排列，可选 `url` 添加详情链接。
- `publications`：论文年份、标题、作者、会议/期刊、摘要；`selected: true` 会显示在首页。列表页按年份从新到旧排序。
- 论文的 `paper` / `code` / `project`：填写链接后自动出现对应入口，留空不显示。`bibtex` 填入真实引用后会出现可展开的引用文本。
- `team`：用 `name`、`group`、`focus` 填写姓名、分组和研究方向。`image` 可用本地相对路径，`website` 可填写个人主页。新增分组（如 Alumni）会自动显示。
  - 学生组按姓氏字母顺序排列，同姓时按显示姓名排序。默认取 `name` 的最后一个单词作为姓氏。姓氏在前或由多个单词组成时，可用 `surname` 指定完整姓氏。
- `affiliation` / `email` / `address` / `github`：填写真实机构与联系方式后显示。

`news` 和 `publications` 中的示例条目可用实验室的真实近况和论文替换。

品牌图标使用原始 `assets/images/branding/lab-icon.png`，顶部导航使用 Logo；首页正文采用实验室完整名称和简介的居中通栏布局，下接最新新闻，不设置整屏高度或首屏入口按钮。网站主色与字体在 `assets/css/styles.css` 中修改。

## 部署到 GitHub Pages

1. 创建 GitHub 仓库，把本目录中的四个 HTML 页面、`assets/`、`README.md`、`.gitignore` 和 `.nojekyll` 上传到仓库根目录。
2. 仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**。
3. 选择存放文件的分支（通常是 `main`），目录选 **/ (root)**，保存。
4. 发布后访问 GitHub 提供的 Pages 地址。项目仓库通常为 `https://<用户名>.github.io/<仓库名>/`。

官方设置说明：[Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

所有站内链接均使用相对路径，兼容项目仓库的子路径。无需额外 GitHub Actions 工作流。请使用 GitHub 当前界面中对应的 Pages 设置；私有仓库的 Pages 可用性取决于账户方案。

## 架构参考

参考的是内容组织方式，没有复用网站代码、图片或实际研究内容。

- [ETH Robotic Systems Lab](https://rsl.ethz.ch/)：主页突出 News and Events，独立论文列表。
- [ETH Soft Robotics Lab](https://srl.ethz.ch/)：Lab News、Research、Publications、Group 的内容分层。
- [Stanford Robotics Lab](https://robotics.stanford.edu/)：清晰的 Projects、Publications、People 导航和研究介绍。

网站页面布局

- Home：实验室简介 → 最新近况 → 研究大方向图文卡片和子方向链接 → 精选论文 → 联系方式。
- Research：每个子方向左侧展示配图，右侧展示详细介绍，并链接到该组的相关论文。
- Publications：标题/作者/关键词搜索、年份与方向筛选、摘要、可选论文链接和 BibTeX。
- Team：按角色分组的成员列表、可选照片及个人主页。

设计：白底、深蓝、灰绿点缀，系统字体，无滚动动画、轮播、追踪脚本或第三方运行依赖。支持手机布局、键盘焦点、跳至正文、折叠菜单及无结果提示。

页头澳门大学标志采用[澳门大学官方标识页面](https://www.um.edu.mo/about-um/identity/)提供的横版彩色标志，保存于 `assets/images/branding/university-of-macau.png`，点击链接到澳门大学官网。
