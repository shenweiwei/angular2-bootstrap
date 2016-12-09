"use strict";
var list_1 = require('./list');
var common_1 = require('../../common');
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
        if (common_1.ArrayUtil.isEmpty(this.array)) {
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
        if (common_1.ArrayUtil.isEmpty(this.array)) {
            throw new common_1.SystemException('current list is empty');
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
        var list = new ArrayList();
        if (!common_1.NumberUtil.isNullOrZone(endIndex)) {
            // this.array.copyWithin(0, startIndex, endIndex);
            // this.array.length = endIndex - startIndex
            list.array = this.array.slice(startIndex, endIndex);
        }
        else {
            // this.array.copyWithin(0, startIndex);
            // this.array.length = this.array.length - startIndex
            list.array = this.array.slice(startIndex);
        }
        return list;
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
        if (common_1.ArrayUtil.isEmpty(this.array)) {
            throw new common_1.SystemException('current list is empty');
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
        if (common_1.ArrayUtil.isEmpty(this.array)) {
            throw new common_1.SystemException('current list is empty');
        }
        this.array[index] = data;
        return this;
    };
    /**
     * 增加整个数组或List集合
     *
     * @template T
     * @param {T} data
     * @returns {List<T>}
     *
     * @memberOf ArrayList
     */
    ArrayList.prototype.addAll = function (data) {
        if (data instanceof Array) {
            for (var i = 0; i < data.length; i++) {
                var object = common_1.BeanUtil.clone(data[i]);
                this.add(object);
            }
        }
        else if (data instanceof list_1.List || data instanceof ArrayList) {
            for (var i = 0; i < data.getSize(); i++) {
                var object = common_1.BeanUtil.clone(data.get(i));
                this.add(object);
            }
        }
        return this;
    };
    ArrayList.prototype.clean = function () {
        this.array.length = 0;
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=arraylist.js.map