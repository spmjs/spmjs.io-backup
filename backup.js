#!/usr/bin/env node
require('shelljs/global');

var join = require('path').join;
var config = {};
try {
  config = require('./config');
} catch(e) {}

var source = join(__dirname, config.source || '../spmjs.io/');
var target = join(__dirname, config.target || './backup');
var keep = config.keep || 30;

mkdir('-p', target);

// Remove expired files
cd(target);
var files = ls();
files = files.sort(function(a, b) {
  a = a.replace('data-', '').replace('.tar.gz', '');
  b = b.replace('data-', '').replace('.tar.gz', '');
  return a - b;
});

if (files.length > keep) {
  console.log('rm %s', files[0]);
  rm(files[0]);
}

// Backup
cd(source);
var cmd = 'tar cvzf '+target+'/data-`date +"%Y%m%d"`.tar.gz ./data';
console.log(cmd);
exec(cmd);

// Log
require('fs').appendFileSync(join(__dirname, './backup/backup.log'), new Date() + '\n');
