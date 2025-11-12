# Vite React TypeScript Demo

一个基于 [Vite](https://vite.dev/)、[React](https://react.dev/) 和 [TypeScript](https://www.typescriptlang.org/) 的现代化前端应用示例项目。展示了如何使用 Vite 构建工具快速开发 React 应用。

## 技术栈

- **Vite**: 7.1.7 (构建工具)
- **React**: 19.1.1
- **TypeScript**: 5.9.3
- **Tailwind CSS**: 4.1.16
- **ESLint**: 9.36.0

## 项目结构

```
vite-react-ts-demo/
├── src/
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 应用入口
│   ├── index.css         # 全局样式
│   └── assets/           # 静态资源
├── public/               # 公共静态文件
├── index.html            # HTML 模板
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.js    # Tailwind CSS 配置（如存在）
└── README.md
```

## 功能特性

- 极速的开发服务器
- 热模块替换 (HMR)
- TypeScript 支持
- Tailwind CSS 集成
- 代码分割和优化
- 现代化的构建工具链

## 快速开始

### 前置要求

- Node.js 18 或更高版本
- npm, yarn, 或 pnpm

### 安装和运行

```bash
# 克隆项目
git clone <repository-url>
cd vite-react-ts-demo

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install

# 运行开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

应用将在 `http://localhost:5173` 启动（Vite 默认端口）。

### 构建和预览

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行 Lint
npm run lint
```

## 项目特点

### Vite 优势

- **极速启动**: 使用原生 ESM，无需打包
- **快速 HMR**: 基于 ESM 的 HMR，保持应用状态
- **优化构建**: 使用 Rollup 进行生产构建优化

### React 19

使用最新的 React 19 特性：
- 改进的并发渲染
- 新的 Hooks
- 更好的 TypeScript 支持

### Tailwind CSS

使用 Tailwind CSS 4.x 进行样式设计：
- 通过 Vite 插件集成
- JIT 编译
- 实用优先的 CSS

## 开发

### 热模块替换

Vite 提供极快的 HMR：
- 修改 React 组件立即更新
- 保持组件状态
- 样式更改即时生效

### TypeScript 配置

项目配置了严格的 TypeScript：
- 类型检查
- 路径别名支持
- React 类型定义

### 代码质量

- **ESLint**: 代码 linting 和格式化
- **TypeScript**: 编译时类型检查

## 构建优化

### 生产构建

Vite 使用 Rollup 进行生产构建：
- 代码分割
- Tree shaking
- 资源优化
- 压缩和混淆

### 性能优化

- 自动代码分割
- 懒加载支持
- 资源预加载
- 优化的 chunk 策略

## 部署

### 静态托管

构建后的 `dist` 目录可以部署到任何静态托管服务：

```bash
# 构建
npm run build

# dist 目录包含所有静态文件
```

### 推荐平台

- **Vercel**: 零配置部署
- **Netlify**: 自动部署
- **GitHub Pages**: 免费托管
- **Cloudflare Pages**: 全球 CDN

## 与 Create React App 的区别

- **更快的启动**: Vite 启动速度显著更快
- **更快的 HMR**: 基于 ESM 的 HMR
- **更小的配置**: 开箱即用的配置
- **更好的开发体验**: 更快的反馈循环

## 参考资源

- [Vite 文档](https://vite.dev/)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
