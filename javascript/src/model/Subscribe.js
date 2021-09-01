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

/**
 * The Subscribe model module.
 * @module model/Subscribe
 * @version 4.175.0
 */
class Subscribe {
    /**
     * Constructs a new <code>Subscribe</code>.
     * @alias module:model/Subscribe
     * @param id {String} 
     * @param subscription {String} 
     */
    constructor(id, subscription) { 
        
        Subscribe.initialize(this, id, subscription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, subscription) { 
        obj['id'] = id;
        obj['subscription'] = subscription;
    }

    /**
     * Constructs a <code>Subscribe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subscribe} obj Optional instance to populate.
     * @return {module:model/Subscribe} The populated <code>Subscribe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscribe();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Subscribe.prototype['id'] = undefined;

/**
 * @member {String} subscription
 */
Subscribe.prototype['subscription'] = undefined;






export default Subscribe;

