"use strict";
var array_util_1 = require('../../common/util/array.util');
var system_exception_1 = require('../../common/exception/system.exception');
var ArrayList = (function () {
    function ArrayList() {
        this.array = [];
        return this;
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
     *  截取集合的数据集
     *
     * @template T
     * @param {number} startIndex
     * @param {number} [endIndex]
     * @returns {ArrayList<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.subList = function (startIndex, endIndex) {
        if (!Number.isNaN(endIndex)) {
            this.array.copyWithin(0, startIndex, endIndex);
            this.array.length = endIndex - startIndex;
        }
        else {
            this.array.copyWithin(0, startIndex);
            this.array.length = this.array.length - startIndex;
        }
        return this;
    };
    /**
     * 往集合内添加数据
     *
     * @template T
     * @param {T} data
     * @returns {ArrayList<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.add = function (data) {
        if (array_util_1.ArrayUtil.empty(this.array)) {
            throw new system_exception_1.SystemException('current list is empty');
        }
        this.array.push(data);
        return this;
    };
    /**
     * 根据索引集合内替换数据
     *
     * @template T
     * @param {T} data
     * @returns {ArrayList<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.replace = function (data, index) {
        if (array_util_1.ArrayUtil.empty(this.array)) {
            throw new system_exception_1.SystemException('current list is empty');
        }
        this.array[index] = data;
        return this;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=arraylist.js.map