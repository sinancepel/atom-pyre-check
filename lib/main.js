/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
 */
'use strict';

const {Disposable} = require('atom');
const {AutoLanguageClient} = require('atom-languageclient');
const path = require('path');

const PACKAGE_NAME = require('../package.json').name;

class PyreLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ['source.py'];
  }

  getLanguageName() {
    return 'python';
  }

  getServerName() {
    return 'pyre';
  }

  startServerProcess() {
    const config = atom.config.get(PACKAGE_NAME);

    const args = ['pyre', 'persistent'];

    return Promise.resolve(this.spawnChildNode(args, {cwd: path.resolve(".")}));
  }
}

module.exports = new PyreLanguageClient();

module.exports.config = {
};
