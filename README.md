目录结构：
* public目录 静态资源目录
* src 源文件夹
    * app 页面组件
    * components 共用组件库
        * ui UI组件库
        * layout 布局组件
        * features 功能组件
    * hooks 全局hooks
    * lib 共用库
    * static 静态变量
    * store 状态管理
    * typing 全局TypeScript管理


* env 基础环境变量
* env.development 开发环境变量
* env.development.local 本地开发环境变量
* env.production 发布版本环境变量
* .gitignore git忽略文件
* Dockerfile docker 构建配置
* next.config nextjs 配置
* tailwind.config tailwindcss 全局设置

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
