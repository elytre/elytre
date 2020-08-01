# Walden

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

Build Walden site with:

```console
$ yarn build
```

Your project directory will require at least a `site.yaml` file containing your
site's info and configuration (see [site.yaml specification](#siteyaml) below).

## site.yaml

```yaml
title: Site title
```
