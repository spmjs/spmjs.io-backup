# spmjs.io-backup

Backup tool for spmjs.io

---

## Usage

```bash
$ git clone https://github.com/spmjs/spmjs.io-backup
$ cd spmjs.io-backup
$ npm install
$ ./crontab.js
```

Then `../spmjs.io/data` will be backup to `./backup` at 01:00 am everyday.

## Config

```bash
$ cp ./config.sample.js ./config.js
```


### source

Where is spmjs.io be served, defaults `../spmjs.io`

### target

Where is backup files be saved to, defaults `./backup`

### keep

How many days of backup files be kept, defaults `30`
