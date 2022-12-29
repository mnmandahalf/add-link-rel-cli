const main = () => {
  const HTMLParser = require('node-html-parser');
  const { Command } = require('commander');
  const program = new Command();
  program
    .name('add-link-rel')
    .argument('<filename>', 'html filename to correct')
    .option('-a, --autofix')
    .option('--noreferrer')
    .option('--noopener')
    .option('--target-blank, treat only links with target="_blank"');

  program.parse();
  const options = program.opts();
  const filename = program.args[0];

  const relArray = [];
  if(options.noreferrer) relArray.push('noreferrer');
  if(options.noopener) relArray.push('noopenner');
  const relString = relArray.join(' ');

  const fs = require('fs');
  const doc = fs.readFileSync(filename, 'utf-8');
  const root = HTMLParser.parse(doc);
  const nodes = root.querySelectorAll('a');

  nodes.forEach((node) => {
    if(options.targetBlank && !isTargetBlank(node)) return;
    if(relString.length != 0) node.setAttribute('rel', relString);
    console.log(node.toString());
  });
  if(options.autofix) {
    fs.writeFileSync(filename, root.toString());
  }
}

const isTargetBlank = (node) => {
  return node.getAttribute('target') === '_blank';
}

module.exports = () => {
  main();
}
