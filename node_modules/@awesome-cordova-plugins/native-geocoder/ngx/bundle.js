'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var NativeGeocoder = /** @class */ (function (_super) {
    tslib.__extends(NativeGeocoder, _super);
    function NativeGeocoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeGeocoder.prototype.reverseGeocode = function (latitude, longitude, options) { return core.cordova(this, "reverseGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoder.prototype.forwardGeocode = function (addressString, options) { return core.cordova(this, "forwardGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoder.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeGeocoder, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NativeGeocoder.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeGeocoder });
    NativeGeocoder.pluginName = "NativeGeocoder";
    NativeGeocoder.plugin = "cordova-plugin-nativegeocoder";
    NativeGeocoder.pluginRef = "nativegeocoder";
    NativeGeocoder.repo = "https://github.com/sebastianbaar/cordova-plugin-nativegeocoder";
    NativeGeocoder.platforms = ["iOS", "Android"];
    NativeGeocoder = tslib.__decorate([], NativeGeocoder);
    return NativeGeocoder;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NativeGeocoder, decorators: [{
            type: i0.Injectable
        }], propDecorators: { reverseGeocode: [], forwardGeocode: [] } });

exports.NativeGeocoder = NativeGeocoder;
