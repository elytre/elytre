import * as fs from 'fs-extra';

import getSiteConfig from './get-site-config';

jest.mock('fs-extra');
jest.mock('./validate-file');

const yamlFileContent = `
title: Les Éditions Paronymie
`;

describe('getSiteConfig', () => {
  it('returns site config from site.yaml file', () => {
    const pathExistsSync = jest
      .spyOn(fs, 'pathExistsSync')
      .mockImplementationOnce(() => true);
    const readFileSync = jest
      .spyOn(fs, 'readFileSync')
      .mockImplementation(() => yamlFileContent);

    const siteConfig = getSiteConfig();

    expect(pathExistsSync).toHaveBeenCalledWith(`${process.cwd()}/site.yaml`);
    expect(readFileSync).toHaveBeenCalledWith(
      `${process.cwd()}/site.yaml`,
      'utf-8',
    );
    expect(siteConfig).toMatchInlineSnapshot(`
      Object {
        "title": "Les Éditions Paronymie",
      }
    `);
  });
});
