(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports,require('fs'),require('path')):typeof define==='function'&&define.amd?define(['exports','fs','path'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.ComponentsHelper={},g.fs,g.path));}(this,(function(exports, fs, path){'use strict';var config = {
  tags: 'tags.json',
  attributes: 'attributes.json',
  webTypes: 'web-types.json',
  titleRegExp: '#+\\s+(.*)\\n+([^(#|\\n)]*)',
  tableRegExp: '#+\\s+(.*)\\n+(\\|?.+\\|.+)\\n\\|?\\s*:?-+:?\\s*\\|.+((\\n\\|?.+\\|.+)+)',
  fileNameRegExp: '\\/((\\w|-)+)\\.\\w+$',
  props: 'props',
  propsName: 'Name',
  propsType: 'Type',
  propsDescription: 'Description',
  propsOptions: 'Options',
  propsDefault: 'Default',
  defaultValSeparators: [', ', '.'],
  separator: '/',
  events: 'events',
  eventsName: 'Name',
  eventsDescription: 'Description',
  slots: 'slots',
  slotsName: 'Name',
  slotsDescription: 'Description',
  directives: 'directives',
  directivesName: 'Name',
  directivesType: 'Type',
  directivesDescription: 'Description',
  subtagsMap: {},
};function read(path) {
  return fs.readFileSync(path, 'utf-8');
}function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}
function checkArray(item) {
  return item && item.length ? item : undefined;
}
function isFunction(val) {
  return typeof val === 'function';
}
function getComponentsName(options, title, fileName, path) {
  if (title === void 0) { title = ''; }
  var reComponentName = options.reComponentName;
  return isFunction(reComponentName)
      ? reComponentName(title, fileName, path)
      : hyphenate(title || fileName);
}
function getDocUrl(options, fileName, header, path) {
  var reDocUrl = options.reDocUrl;
  return isFunction(reDocUrl) ? reDocUrl(fileName, header, path) : undefined;
}function parse(options, file) {
  var titleRegExp = options.titleRegExp, tableRegExp = options.tableRegExp;
  var _file = normalizeFile(file);
  var titleContent = _file.match(new RegExp(titleRegExp, 'g'));
  var subTitles = titleContent ? titleContent.map(function (item) { return parseTitle(options, item); }) : undefined;
  var tableContent = _file.match(new RegExp(tableRegExp, 'g'));
  var table = tableContent
      ? tableContent.map(function (item) { return parseTable(options, item); })
      : undefined;
  return {
      title: titleContent ? titleContent[1].trim() : undefined,
      description: titleContent ? titleContent[2].trim() : undefined,
      table: table,
      subTitles: subTitles,
  };
}
function parseTable(options, str) {
  var tableRegExp = options.tableRegExp;
  var tableContent = str.match(new RegExp(tableRegExp));
  var title = tableContent ? tableContent[1] : '';
  var header = tableContent ? parseColumn(tableContent[2]) : undefined;
  var columns = tableContent ? tableContent[3] : undefined;
  var content = [];
  if (header && columns) {
      content = parseColumns(options, title, header, columns);
  }
  return {
      title: title,
      content: content,
  };
}
function parseColumn(str) {
  return str
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .replace(/([^\\])\|/g, '$1 |')
      .replace(/\|\|/g, '| |')
      .split(/[^\\]\|/)
      .map(function (item) { return item.replace(/\\\|/g, '|').trim(); });
}
function parseColumns(options, title, header, str) {
  var reAttribute = options.reAttribute;
  var list = str.split('\n');
  var columns = [];
  var _loop_1 = function (i) {
      var item = list[i];
      if (item) {
          var column_1 = {};
          var list_1 = parseColumn(item);
          list_1.forEach(function (value, index) {
              var key = header[index];
              if (key) {
                  column_1[key] = isFunction(reAttribute)
                      ? reAttribute(value, key, list_1, title)
                      : value;
              }
          });
          columns.push(column_1);
      }
  };
  for (var i = 0; i < list.length; i++) {
      _loop_1(i);
  }
  return columns;
}
function parseTitle(options, str) {
  var titleRegExp = options.titleRegExp;
  var titleContent = str.match(new RegExp(titleRegExp));
  var title = titleContent ? titleContent[1].trim() : undefined;
  var description = titleContent ? titleContent[2].trim() : undefined;
  return {
      title: title,
      description: description,
  };
}
function normalizeFile(file) {
  return file.replace(/\r\n/g, '\n');
}function normalize(options, data, path) {
  var fileNameRegExp = options.fileNameRegExp, props = options.props, events = options.events, slots = options.slots, directives = options.directives;
  var _path = path.match(new RegExp(fileNameRegExp));
  var fileName = _path ? _path[1] : '';
  var _data = Object.assign(data, { path: path, fileName: fileName });
  var _props = new RegExp(props, 'i');
  var _events = new RegExp(events, 'i');
  var _slots = new RegExp(slots, 'i');
  var _directives = new RegExp(directives, 'i');
  if (!_data.table || !_data.table.length)
      return _data;
  for (var i = 0; i < _data.table.length; i++) {
      var item = _data.table[i];
      var title = item.title;
      if (!title)
          continue;
      if (_props.test(title)) {
          setData({
              data: _data,
              item: item,
              path: path,
              fileName: fileName,
              title: title,
              key: 'props',
              regExp: _props,
          });
      }
      else if (_events.test(title)) {
          setData({
              data: _data,
              item: item,
              path: path,
              fileName: fileName,
              title: title,
              key: 'events',
              regExp: _events,
          });
      }
      else if (_slots.test(title)) {
          setData({
              data: _data,
              item: item,
              path: path,
              fileName: fileName,
              title: title,
              key: 'slots',
              regExp: _slots,
          });
      }
      else if (_directives.test(title)) {
          setData({
              data: _data,
              item: item,
              path: path,
              fileName: fileName,
              title: title,
              key: 'directives',
              regExp: _directives,
          });
      }
  }
  return _data;
}
function setData(_a) {
  var _b;
  var _c, _d;
  var data = _a.data, key = _a.key, item = _a.item, title = _a.title, path = _a.path, fileName = _a.fileName, regExp = _a.regExp;
  var childTitle = title.replace(regExp, '').trim();
  if (childTitle) {
      var childItem = (_b = {
              path: path,
              fileName: fileName,
              title: childTitle,
              description: childTitle === data.title
                  ? data.description
                  : ((_c = data.subTitles) === null || _c === void 0 ? void 0 : _c.filter(function (v) { return v.title === childTitle; }).length)
                      ? (_d = data.subTitles) === null || _d === void 0 ? void 0 : _d.filter(function (v) { return v.title === childTitle; })[0].description
                      : undefined
          },
          _b[key] = item,
          _b);
      if (!data.children) {
          data.children = [childItem];
      }
      else {
          var child = data.children.find(function (item) { return item.title === childTitle; });
          if (child) {
              child[key] = item;
          }
          else {
              data.children.push(childItem);
          }
      }
  }
  else {
      data[key] = item;
  }
}function vetur(options, list) {
  var propsName = options.propsName, propsType = options.propsType, propsDescription = options.propsDescription, propsOptions = options.propsOptions, propsDefault = options.propsDefault, separator = options.separator, eventsName = options.eventsName, eventsDescription = options.eventsDescription;
  var tagsList = {};
  var propsList = {};
  var _loop_1 = function (i) {
      var _a = list[i], title = _a.title, description = _a.description, path = _a.path, fileName = _a.fileName, props = _a.props, events = _a.events, slots = _a.slots, children = _a.children;
      var name = getComponentsName(options, title, fileName, path);
      var _props = props ? props.content : [];
      var _events = events ? events.content : [];
      var tagsProps = [];
      if (children && children.length) {
          var _b = vetur(options, children), tags = _b.tags, attributes = _b.attributes;
          Object.assign(tagsList, tags);
          Object.assign(propsList, attributes);
      }
      if (!name || (!props && !events && !slots))
          return "continue";
      _props.forEach(function (item) {
          var _item = item[propsName];
          if (_item) {
              var _name = name + '/' + _item;
              var _type = item[propsType] || '';
              var _options = item[propsOptions];
              var _optionsList = /string/i.test(_type) && _options
                  ? _options.split(separator).map(function (item) { return item.trim(); })
                  : undefined;
              tagsProps.push(_item);
              propsList[_name] = {
                  type: item[propsType],
                  options: _optionsList,
                  description: reDescription(options, fileName, item[propsDescription], props === null || props === void 0 ? void 0 : props.title, item[propsDefault], path),
              };
          }
      });
      _events.forEach(function (item) {
          var _item = item[eventsName];
          if (_item) {
              var _name = name + '/' + _item;
              tagsProps.push(_item);
              propsList[_name] = {
                  type: 'event',
                  description: reDescription(options, fileName, item[eventsDescription], events === null || events === void 0 ? void 0 : events.title, item[propsDefault], path),
              };
          }
      });
      tagsList[name] = {
          attributes: checkArray(tagsProps),
          subtags: options.subtagsMap[name],
          description: reDescription(options, fileName, description, title, undefined, path),
      };
  };
  for (var i = 0; i < list.length; i++) {
      _loop_1(i);
  }
  return { tags: tagsList, attributes: propsList };
}
function reDescription(options, fileName, description, header, defaultVal, path) {
  var docUrl = getDocUrl(options, fileName, header, path);
  var str = description || '';
  var separators = options.defaultValSeparators;
  if (defaultVal) {
      str += (str ? separators[0] : '') + "default: " + defaultVal + separators[1];
  }
  if (docUrl) {
      str += (str ? '\n\n' : '') + "[Docs](" + docUrl + ")";
  }
  return str ? str : undefined;
}function webTypes(options, list) {
  var name = options.name, version = options.version;
  var _a = getWebTypes(options, list), tags = _a.tags, attributes = _a.attributes;
  return {
      $schema: 'http://json.schemastore.org/web-types',
      framework: 'vue',
      name: name,
      version: version,
      contributions: {
          html: {
              'types-syntax': 'typescript',
              'description-markup': 'markdown',
              tags: tags,
              attributes: attributes,
          },
      },
  };
}
function getWebTypes(options, list) {
  var propsName = options.propsName, propsType = options.propsType, propsDescription = options.propsDescription, propsDefault = options.propsDefault, eventsName = options.eventsName, eventsDescription = options.eventsDescription, slotsName = options.slotsName, slotsDescription = options.slotsDescription, directivesName = options.directivesName, directivesType = options.directivesType, directivesDescription = options.directivesDescription;
  var tagsList = [];
  var directivesList = [];
  var _loop_1 = function (i) {
      var _a = list[i], title = _a.title, description = _a.description, fileName = _a.fileName, path = _a.path, props = _a.props, events = _a.events, slots = _a.slots, directives = _a.directives, children = _a.children;
      var name = getComponentsName(options, title, fileName, path);
      var _props = props ? props.content : [];
      var _events = events ? events.content : [];
      var _slots = slots ? slots.content : [];
      var _directives = directives ? directives.content : [];
      var propsList = [];
      var eventsList = [];
      var slotsList = [];
      _directives.forEach(function (item) {
          var _item = item[directivesName];
          if (_item) {
              directivesList.push({
                  name: _item,
                  description: item[directivesDescription],
                  'doc-url': getDocUrl(options, fileName, directives === null || directives === void 0 ? void 0 : directives.title, path),
                  value: item[directivesType]
                      ? {
                          type: item[directivesType],
                          kind: 'expression',
                      }
                      : undefined,
              });
          }
      });
      if (children && children.length) {
          var child = getWebTypes(options, children);
          if (child.tags) {
              tagsList = tagsList.concat(child.tags);
          }
          if (child.attributes) {
              directivesList = directivesList.concat(child.attributes);
          }
      }
      if (!name || (!props && !events && !slots))
          return "continue";
      _props.forEach(function (item) {
          var _item = item[propsName];
          if (_item) {
              propsList.push({
                  name: _item,
                  description: item[propsDescription],
                  'doc-url': getDocUrl(options, fileName, props === null || props === void 0 ? void 0 : props.title, path),
                  default: item[propsDefault],
                  value: item[propsType]
                      ? {
                          type: item[propsType],
                          kind: 'expression',
                      }
                      : undefined,
              });
          }
      });
      _events.forEach(function (item) {
          var _item = item[eventsName];
          if (_item) {
              eventsList.push({
                  name: _item,
                  description: item[eventsDescription],
                  'doc-url': getDocUrl(options, fileName, events === null || events === void 0 ? void 0 : events.title, path),
              });
          }
      });
      _slots.forEach(function (item) {
          var _item = item[slotsName];
          if (_item) {
              slotsList.push({
                  name: _item,
                  description: item[slotsDescription],
                  'doc-url': getDocUrl(options, fileName, slots === null || slots === void 0 ? void 0 : slots.title, path),
              });
          }
      });
      tagsList.push({
          name: name,
          description: description,
          'doc-url': getDocUrl(options, fileName, title, path),
          attributes: checkArray(propsList),
          events: checkArray(eventsList),
          slots: checkArray(slotsList),
      });
  };
  for (var i = 0; i < list.length; i++) {
      _loop_1(i);
  }
  return {
      tags: checkArray(tagsList),
      attributes: checkArray(directivesList),
  };
}function write(options, type, data) {
  var path$1 = path.join(options.outDir, options[type]).replace(/\\/, '/');
  var buffer = JSON.stringify(data, null, options.space);
  writeFileRecursive(path$1, buffer);
}
function writeFileRecursive(path, buffer) {
  var lastPath = path.substring(0, path.lastIndexOf('/'));
  fs.mkdir(lastPath, { recursive: true }, function () {
      fs.writeFileSync(path, buffer);
  });
}var fg = require('fast-glob');
var main = function (options) {
  if (options === void 0) { options = {}; }
  if (!options.entry)
      throw new Error('entry must be a string (non empty) or an array of strings');
  if (!options.outDir)
      throw new Error('outDir must be a string (non empty)');
  if (!options.name)
      console.warn('missing property "name"');
  if (!options.version)
      console.warn('missing property "version"');
  var _options = Object.assign(config, options);
  var files = fg.sync(_options.entry);
  var data = files.map(function (path) {
      var fileContent = read(path);
      var parseContent = parse(_options, fileContent);
      var content = normalize(_options, parseContent, path);
      return content;
  });
  var _a = vetur(_options, data), tags = _a.tags, attributes = _a.attributes;
  var webTypesData = webTypes(_options, data);
  write(_options, 'tags', tags);
  write(_options, 'attributes', attributes);
  write(_options, 'webTypes', webTypesData);
};
module.exports = main;exports.default=main;Object.defineProperty(exports,'__esModule',{value:true});})));
