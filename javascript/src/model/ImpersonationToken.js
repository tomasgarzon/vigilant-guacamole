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
 * The ImpersonationToken model module.
 * @module model/ImpersonationToken
 * @version 4.175.0
 */
class ImpersonationToken {
    /**
     * Constructs a new <code>ImpersonationToken</code>.
     * @alias module:model/ImpersonationToken
     * @param impersonator {String} 
     * @param impersonated {String} 
     * @param token {String} 
     */
    constructor(impersonator, impersonated, token) { 
        
        ImpersonationToken.initialize(this, impersonator, impersonated, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, impersonator, impersonated, token) { 
        obj['impersonator'] = impersonator;
        obj['impersonated'] = impersonated;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>ImpersonationToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImpersonationToken} obj Optional instance to populate.
     * @return {module:model/ImpersonationToken} The populated <code>ImpersonationToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImpersonationToken();

            if (data.hasOwnProperty('impersonator')) {
                obj['impersonator'] = ApiClient.convertToType(data['impersonator'], 'String');
            }
            if (data.hasOwnProperty('impersonated')) {
                obj['impersonated'] = ApiClient.convertToType(data['impersonated'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} impersonator
 */
ImpersonationToken.prototype['impersonator'] = undefined;

/**
 * @member {String} impersonated
 */
ImpersonationToken.prototype['impersonated'] = undefined;

/**
 * @member {String} token
 */
ImpersonationToken.prototype['token'] = undefined;






export default ImpersonationToken;
