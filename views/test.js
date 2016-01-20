(function(root, factory) {
 if (typeof define === 'function') {
   define(factory);
 } else if (typeof require === 'function' && typeof exports === 'object') {
   factory(require, exports, module);
 } else {
   factory();
 }
}(this, function(require, exports, module) {
  var nodetpl = typeof require === 'function' ? require('nodetpl') : window.nodetpl;
  var tpl_id = module && module.uri ? module.uri : nodetpl._getCurrentScript();
  nodetpl._tpls[tpl_id] = {
  "main": function($DATA, guid){
    var _ = '';
    var css = '';
    var duid = nodetpl.duid();
    guid = guid || nodetpl.guid();
try{
with($DATA || {}){

    _ += '<template>\n  \n  <div id="'+ guid +'">\n    <h1>';
    if (typeof title !== "undefined") {
      _ += (title);
    }

    _ += '</h1>\n    ';
for(var i=0; i<10; i++){
    _ += '\n      <p>hello, world, 第 ';
    if (typeof i !== "undefined") {
      _ += (i);
    }

    _ += ' 次</p>\n    ';
}
    _ += '\n  </div>\n</template>';

}} catch(e){ console.log(e.stack); }
    $DATA && (nodetpl._data[duid] = $DATA);
    return _;
  }
};
  return nodetpl._tpls[tpl_id];
}));