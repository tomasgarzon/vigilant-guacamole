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
 * The PortfolioType model module.
 * @module model/PortfolioType
 * @version 4.175.0
 */
class PortfolioType {
    /**
     * Constructs a new <code>PortfolioType</code>.
     * @alias module:model/PortfolioType
     * @param code {String} 
     * @param name {String} 
     */
    constructor(code, name) { 
        
        PortfolioType.initialize(this, code, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, name) { 
        obj['code'] = code;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PortfolioType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioType} obj Optional instance to populate.
     * @return {module:model/PortfolioType} The populated <code>PortfolioType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioType();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
PortfolioType.prototype['code'] = undefined;

/**
 * @member {String} name
 */
PortfolioType.prototype['name'] = undefined;






export default PortfolioType;
