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
 * The NationalDocument model module.
 * @module model/NationalDocument
 * @version 4.175.0
 */
class NationalDocument {
    /**
     * Constructs a new <code>NationalDocument</code>.
     * @alias module:model/NationalDocument
     * @param uuid {String} 
     * @param code {String} 
     * @param name {String} 
     * @param countries {Array.<String>} 
     */
    constructor(uuid, code, name, countries) { 
        
        NationalDocument.initialize(this, uuid, code, name, countries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, code, name, countries) { 
        obj['uuid'] = uuid;
        obj['code'] = code;
        obj['name'] = name;
        obj['countries'] = countries;
    }

    /**
     * Constructs a <code>NationalDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NationalDocument} obj Optional instance to populate.
     * @return {module:model/NationalDocument} The populated <code>NationalDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NationalDocument();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
NationalDocument.prototype['uuid'] = undefined;

/**
 * @member {String} code
 */
NationalDocument.prototype['code'] = undefined;

/**
 * @member {String} name
 */
NationalDocument.prototype['name'] = undefined;

/**
 * @member {Array.<String>} countries
 */
NationalDocument.prototype['countries'] = undefined;






export default NationalDocument;
