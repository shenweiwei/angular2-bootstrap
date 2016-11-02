"use strict";
var array_util_1 = require('../../common/util/array.util');
var system_exception_1 = require('../../common/exception/system.exception');
var ArrayList = (function () {
    function ArrayList() {
        this.array = [];
    }
    /**
     * 获取集合总数
     *
     * @returns {number}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.getSize = function () {
        if (array_util_1.ArrayUtil.empty(this.array)) {
            return 0;
        }
        return this.array.length;
    };
    /**
     * 转换成数组
     *
     * @template T
     * @returns {Array<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.toArray = function () {
        if (array_util_1.ArrayUtil.empty(this.array)) {
            throw new system_exception_1.SystemException('current list is empty');
        }
        return this.array;
    };
    /**
     * 根据索引号获取集合中数据
     *
     * @template T
     * @param {number} index
     * @returns {T}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.get = function (index) {
        return this.array[index];
    };
    /**
     * 截取集合的数据集
     *
     * @template T
     * @param {number} startIndex
     * @param {number} [endIndex]
     * @returns {Array<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.subList = function (startIndex, endIndex) {
        var temp_array;
        if (!Number.isNaN(endIndex)) {
            temp_array = this.array.copyWithin(0, startIndex, endIndex);
            temp_array.length = endIndex - startIndex;
        }
        else {
            temp_array = this.array.copyWithin(0, startIndex);
            temp_array.length = this.array.length;
        }
        return temp_array;
    };
    /**
     * 往集合内添加数据
     *
     * @template T
     * @param {T} data
     * @returns {boolean}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.add = function (data) {
        if (array_util_1.ArrayUtil.empty(this.array)) {
            throw new system_exception_1.SystemException('current list is empty');
        }
        this.array.push(data);
        return true;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=arraylist.js.map