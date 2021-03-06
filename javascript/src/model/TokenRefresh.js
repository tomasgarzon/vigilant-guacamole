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
 * The TokenRefresh model module.
 * @module model/TokenRefresh
 * @version 4.175.0
 */
class TokenRefresh {
    /**
     * Constructs a new <code>TokenRefresh</code>.
     * @alias module:model/TokenRefresh
     * @param refresh {String} 
     */
    constructor(refresh) { 
        
        TokenRefresh.initialize(this, refresh);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, refresh) { 
        obj['refresh'] = refresh;
    }

    /**
     * Constructs a <code>TokenRefresh</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenRefresh} obj Optional instance to populate.
     * @return {module:model/TokenRefresh} The populated <code>TokenRefresh</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenRefresh();

            if (data.hasOwnProperty('refresh')) {
                obj['refresh'] = ApiClient.convertToType(data['refresh'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} refresh
 */
TokenRefresh.prototype['refresh'] = undefined;






export default TokenRefresh;

