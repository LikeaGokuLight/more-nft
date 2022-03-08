---
    sidebar_position: 1
    title: Welcome
    sidebar_label: Welcome
---

## Scaffold project website

### The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

    npx create-docusaurus@latest [name] [template]

Example:

    npx create-docusaurus@latest website classic

If you do not specify name or template, it will prompt you for them.

`We recommend the classic template so that you can get started quickly, and it contains features found in Docusaurus 1. The classic template contains @docusaurus/preset-classic which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus.`

The template also accepts a git repo URL or a local file path, with the latter evaluated relative to the current working directory. The repo/folder content will be copied to the site directory. If it's a git repository, you can also specify a cloning strategy. Run npx create-docusaurus@latest --help for more information.

You can also use the template's TypeScript variant by passing the --typescript flag.

npx create-docusaurus@latest my-website classic --typescript

