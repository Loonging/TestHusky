# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

---

## 解决 Prettier 和 ESLint 的冲突

解决两者冲突问题，需要用到 **eslint-plugin-prettier** 和 **eslint-config-prettier**

- eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。
- eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。

最后形成优先级：_Prettier 配置规则 > ESLint 配置规则_

- 安装插件

```js
npm i eslint-plugin-prettier eslint-config-prettier -D
```

- 在 .eslintrc.js 添加 prettier 插件

```json
module.exports = {
  ...
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  ...
}
```

## 代码修复流程

- 查看错误代码 npm run lint
- 方法一：挨个文件修复
- 方法二：yarn run lint --fix

---

## husky + lint-staged (commit 时自动修复)

- 安装并自动配置 _husky_

```js
npx husky-init && npm install
```

lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 hook 触发的命令只作用于 git add 那些文件（即 git 暂存区的文件），而不会影响到其他文件。

- 安装 lint-staged

```js
npm i lint-staged -D
```

- 在 package.json 里增加 lint-staged 配置项

```json
"lint-staged": {
  "*.{vue,js,ts}": "eslint --fix"
},
```

这行命令表示：只对 git 暂存区的 .vue、.js、.ts 文件执行 eslint --fix。

- 修改 .husky/pre-commit hook 的触发命令为：npx lint-staged

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
