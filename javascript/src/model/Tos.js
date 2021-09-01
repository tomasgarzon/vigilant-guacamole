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
 * The Tos model module.
 * @module model/Tos
 * @version 4.175.0
 */
class Tos {
    /**
     * Constructs a new <code>Tos</code>.
     * @alias module:model/Tos
     * @param uuid {String} 
     * @param version {String} 
     * @param content {String} 
     * @param previousTosUuid {String} 
     * @param nextTosUuid {String} 
     */
    constructor(uuid, version, content, previousTosUuid, nextTosUuid) { 
        
        Tos.initialize(this, uuid, version, content, previousTosUuid, nextTosUuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, version, content, previousTosUuid, nextTosUuid) { 
        obj['uuid'] = uuid;
        obj['version'] = version;
        obj['content'] = content;
        obj['previous_tos_uuid'] = previousTosUuid;
        obj['next_tos_uuid'] = nextTosUuid;
    }

    /**
     * Constructs a <code>Tos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tos} obj Optional instance to populate.
     * @return {module:model/Tos} The populated <code>Tos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tos();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Date');
            }
            if (data.hasOwnProperty('previous_tos_uuid')) {
                obj['previous_tos_uuid'] = ApiClient.convertToType(data['previous_tos_uuid'], 'String');
            }
            if (data.hasOwnProperty('next_tos_uuid')) {
                obj['next_tos_uuid'] = ApiClient.convertToType(data['next_tos_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
Tos.prototype['uuid'] = undefined;

/**
 * @member {String} version
 */
Tos.prototype['version'] = undefined;

/**
 * @member {String} content
 */
Tos.prototype['content'] = undefined;

/**
 * @member {Date} published
 */
Tos.prototype['published'] = undefined;

/**
 * @member {String} previous_tos_uuid
 */
Tos.prototype['previous_tos_uuid'] = undefined;

/**
 * @member {String} next_tos_uuid
 */
Tos.prototype['next_tos_uuid'] = undefined;






export default Tos;
