# Walden

[![npm](https://img.shields.io/npm/v/@iwazaru/walden)](https://www.npmjs.com/package/@iwazaru/walden)
[![CI](https://github.com/iwazaru/walden/workflows/CI/badge.svg)](https://github.com/iwazaru/walden/actions?query=workflow%3ACI)

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
    "start": "walden start",
    "build": "walden build"
  }
}
```

## Usage

For you Walden site to be built successfully, your project directory will
require at least three files:

- a `site.yaml` file specifying your site's info and configuration (see
  [Site config file specification](#site-config-file-specification) below)
- a `catalog.yaml` file describing your books catalog (see
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
    author: Laetitia Mani
  - title: Sous-sol
    author: Matt Yassenar
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
  /* How a single product is displayed */
}

.Product .Product-title {
  /* How a product's title is displayed */
}

.ProductList {
  /* How a list of products is displayed */
}

.ProductList .Product {
  /* How a product is displayed when in a list of products */
}

.HomePage .ProductList .Product {
  /* How a product appears when in a list on home page */
}

.WaldenSite-powered-by {
  /* The "Powered by Walden" text in the footer can be hidden (please don't!)
  or made more discreet here */
}
```

### Once you've created these files, you can:

#### Build your Walden site for production

```console
$ yarn build
```

This will build your website for production in a `build` folder, ready for
deployment. You can serve this folder using any web server or static website
host.

#### Start Walden in development mode:

```console
$ yarn start
```

This will spin a local webserver for development on. Open http://localhost:1854/
to view it in your browser. The page will reload automatically if you edit files
in your project's directory.

## Tests

Run tests inside this repository with:

```console
$ yarn test
```
