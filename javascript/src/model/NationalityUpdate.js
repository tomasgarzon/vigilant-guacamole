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
 * The NationalityUpdate model module.
 * @module model/NationalityUpdate
 * @version 4.175.0
 */
class NationalityUpdate {
    /**
     * Constructs a new <code>NationalityUpdate</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/NationalityUpdate
     * @param country {String} 
     */
    constructor(country) { 
        
        NationalityUpdate.initialize(this, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, country) { 
        obj['country'] = country;
    }

    /**
     * Constructs a <code>NationalityUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NationalityUpdate} obj Optional instance to populate.
     * @return {module:model/NationalityUpdate} The populated <code>NationalityUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NationalityUpdate();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('document_number')) {
                obj['document_number'] = ApiClient.convertToType(data['document_number'], 'String');
            }
            if (data.hasOwnProperty('document_type')) {
                obj['document_type'] = ApiClient.convertToType(data['document_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} country
 */
NationalityUpdate.prototype['country'] = undefined;

/**
 * @member {String} document_number
 */
NationalityUpdate.prototype['document_number'] = undefined;

/**
 * @member {String} document_type
 */
NationalityUpdate.prototype['document_type'] = undefined;






export default NationalityUpdate;
