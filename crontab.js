#!/usr/bin/env node
require('shelljs/global');

var join = require('path').join;

var nodePath = process.execPath.split('/').slice(0, -1).join('/');
var exportCommand = 'export PATH=' + nodePath + ':$PATH';
var backupCommand = join(__dirname, 'backup.js');
var sysCommand = exportCommand + ' && ' + backupCommand;

var cmd = 'crontab -l | { cat; echo "0 1 * * * '+sysCommand+'"; } | crontab -';
exec(cmd);
