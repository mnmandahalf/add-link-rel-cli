# add-link-rel-cli
CLI to add some attributes on html `<a>` tags.

[![npm version](https://badge.fury.io/js/add-link-rel-cli.svg)](https://badge.fury.io/js/add-link-rel-cli)

## Installation
```sh
npm i add-link-rel-cli
```

## Usage
```
Usage: add-link-rel [options] <filename>

Arguments:
  filename                                               html filename to correct

Options:
  -a, --autofix
  --noreferrer
  --noopener
  --only-target-blank
  -h, --help                                             display help for command
```

## Example

sample.html
```html
<a target="_blank"><li>Sample Link</li></a>
```

```sh
$ add-link-rel --noreferrer --noopener test.html
<a target="_blank" rel="noreferrer noopenner"><li>Sample Link</li></a>
```
