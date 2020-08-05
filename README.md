# Walden

[![npm](https://img.shields.io/npm/v/@iwazaru/walden)](https://www.npmjs.com/package/@iwazaru/walden)

Walden is an experimental tool to build a static bookstore front-end from a
catalog file.

## Install

Requirements:

- Node v12.18+
- Yarn

1. Create an empty directory for your project
2. Initialize yarn: `yarn init`
3. Add Walden: `yarn add --exact @iwazaru/walden`
4. Add a `build` script to your package.json:

```json
{
  "scripts": {
    "build": "walden"
  }
}
```

## Usage

Build your Walden site with:

```console
$ yarn build
```

Your project directory will require at least:

- a `site.yaml` file specifying your site's info and configuration (see
  [Site config file specification](#site-config-file-specification) below)
- a `catalog.yaml` specifying your books catalog (see
  [Catalog file specification](#catalog-file-specification) below).
- a `styles.css` stylesheet to customize your site's appearance (see
  [Stylesheet file specification](#stylesheet-file-specification) below).

### Site config file specification

Customize your site's configuration by adding a `site.yaml` file in your
project's directory.

```yaml
title: Les Éditions Paronymie # site title
```

### Catalog file specification

Customize your products catalog by adding a `catalog.yaml` file in your
project's directory.

```yaml
products:
  - title: Chaussons d'ours
  - title: Sous-sol
```

### Stylesheet file specification

Customize your site's appearance by adding a `styles.css` file in your project's
directory.

```css
.WaldenSite {
  /* This is a global wrapper for all your site. Here you can set page width,
  margins, etc. */
}

.Product {
  /* This controls how a single product is displayed */
}

.Product .Product-title {
}

.ProductList {
  /* This controls how a list of products is displayed */
}

.ProductList .Product {
  /* Here you can control how a product is displayed when in a list of products */
}
```
