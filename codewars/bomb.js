var wire; // Find the wire.
const theKeys=['console',
  'global',
  'process',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout',
  '__filename',
  'exports',
  'module',
  '__dirname',
  'require',] 

const globalThis=Object.keys(this);
[wire] = globalThis.filter(x => !theKeys.includes(x));
CutTheWire(this[wire]);