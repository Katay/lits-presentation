'use strict';

var plan = require('flightplan');

// configuration
plan.target('staging', {
  host: '178.159.110.16',
  username: 'dev_lits',
  privateKey: '/home/lits/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK
}, {
  root: '/var/www/devlits.com/lp.devlits.com'
});

var releaseDir = 'r' + new Date().getTime();

plan.local(function(local) {
  local.log('Copy files to remote hosts');
  var root = plan.runtime.options.root;
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, root + '/releases/' + releaseDir);
});

plan.remote(function(remote) {
  var root = plan.runtime.options.root;
  var currentPath = root + '/current';
  var releasePath = root + '/releases/' + releaseDir;

  remote.log('Reload application');
  remote.exec('rm -f ' + currentPath);
  remote.exec('ln -snf ' + releasePath + ' ' + currentPath , {user: 'dev_lits'});

  remote.log('Install dependencies && Start server');
  remote.exec('cd ' + currentPath + ' && npm install && npm start', {user: 'dev_lits'});
});
