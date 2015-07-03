import proxyquire from 'proxyquire';
import extend from 'xtend';
let proxyquireStrict = proxyquire.noCallThru();

export default {
    mockDeps: function (module, dependencies = {}) {
        return proxyquireStrict(module, extend({
            './component.css': {}
        }, dependencies));
    }
};
