/**
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateOrderMethodEnum from './CreateOrderMethodEnum';
import OneOfDurationEnumNullEnum from './OneOfDurationEnumNullEnum';
import OrderTypeEnum from './OrderTypeEnum';
import RelatedAssetSerializerWithAssetCategories from './RelatedAssetSerializerWithAssetCategories';

/**
 * The CreateOrder model module.
 * @module model/CreateOrder
 * @version 4.175.0
 */
class CreateOrder {
    /**
     * Constructs a new <code>CreateOrder</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/CreateOrder
     * @param shares {Number} 
     * @param asset {module:model/RelatedAssetSerializerWithAssetCategories} 
     * @param orderType {module:model/OrderTypeEnum} 
     * @param method {module:model/CreateOrderMethodEnum} 
     */
    constructor(shares, asset, orderType, method) { 
        
        CreateOrder.initialize(this, shares, asset, orderType, method);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, shares, asset, orderType, method) { 
        obj['shares'] = shares;
        obj['asset'] = asset;
        obj['order_type'] = orderType;
        obj['method'] = method;
    }

    /**
     * Constructs a <code>CreateOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOrder} obj Optional instance to populate.
     * @return {module:model/CreateOrder} The populated <code>CreateOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrder();

            if (data.hasOwnProperty('shares')) {
                obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = RelatedAssetSerializerWithAssetCategories.constructFromObject(data['asset']);
            }
            if (data.hasOwnProperty('portfolio')) {
                obj['portfolio'] = ApiClient.convertToType(data['portfolio'], 'String');
            }
            if (data.hasOwnProperty('order_type')) {
                obj['order_type'] = OrderTypeEnum.constructFromObject(data['order_type']);
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = CreateOrderMethodEnum.constructFromObject(data['method']);
            }
            if (data.hasOwnProperty('limit_price')) {
                obj['limit_price'] = ApiClient.convertToType(data['limit_price'], 'Number');
            }
            if (data.hasOwnProperty('stop_price')) {
                obj['stop_price'] = ApiClient.convertToType(data['stop_price'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], OneOfDurationEnumNullEnum);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} shares
 */
CreateOrder.prototype['shares'] = undefined;

/**
 * @member {module:model/RelatedAssetSerializerWithAssetCategories} asset
 */
CreateOrder.prototype['asset'] = undefined;

/**
 * @member {String} portfolio
 */
CreateOrder.prototype['portfolio'] = undefined;

/**
 * @member {module:model/OrderTypeEnum} order_type
 */
CreateOrder.prototype['order_type'] = undefined;

/**
 * @member {module:model/CreateOrderMethodEnum} method
 */
CreateOrder.prototype['method'] = undefined;

/**
 * @member {Number} limit_price
 */
CreateOrder.prototype['limit_price'] = undefined;

/**
 * @member {Number} stop_price
 */
CreateOrder.prototype['stop_price'] = undefined;

/**
 * @member {module:model/OneOfDurationEnumNullEnum} duration
 */
CreateOrder.prototype['duration'] = undefined;






export default CreateOrder;

