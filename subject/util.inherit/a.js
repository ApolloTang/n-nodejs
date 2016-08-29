const util = require('util');

function Base(_a){ this.propOfBase = _a; }
Base.prototype.getBaseProp = function(){ console.log('in getBaseProp(): ', this.propOfBase) }

function Child1(_a) {
    this.propOfChild1 = _a;
    // Base.call(this, _a)       // added Base own property to Child1
    Child1.super_.call(this,_a); // same as Bass.call(this, _a);
}
Child1.prototype.getChild1Prop = function(){ console.log('in getChild1Prop(): ', this.propOfChild1) }

util.inherits(Child1, Base); // This will remove getChild1Pros if node version < 5
                             // with the above prototype of Base is added to Child1

var c1 = new Child1('c1');
console.log('Object.key(c1):',  Object.keys(c1))
for ( var k in c1) { console.log('for-in c1: ', k) }
try { c1.getBaseProp(); } catch (er) { console.log('c1.getBaseProps() does not exist') }
try { c1.getChild1Prop(); } catch (er) { console.log('c1.getChild1Prop() does not exist') }

/*
see:
http://stackoverflow.com/questions/13474710/util-inherits-alternative-or-workaround
http://stackoverflow.com/questions/15040717/what-does-eventemitter-call-do
http://stackoverflow.com/questions/27851345/why-is-the-super-property-in-the-nodejs-util-inherits-function-added-to-the-c

https://nodejs.org/docs/latest/api/util.html#util_util_inherits_constructor_superconstructor
usage of util.inherits() is discouraged. Please use the ES6 class and extends keywords to get language level inheritance support. Also note that the two styles are semantically incompatible
https://github.com/nodejs/node/issues/4179
*/
