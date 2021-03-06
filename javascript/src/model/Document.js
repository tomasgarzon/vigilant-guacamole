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
import DocTypeEnum from './DocTypeEnum';

/**
 * The Document model module.
 * @module model/Document
 * @version 4.175.0
 */
class Document {
    /**
     * Constructs a new <code>Document</code>.
     * @alias module:model/Document
     * @param uuid {String} 
     * @param name {String} 
     * @param docType {module:model/DocTypeEnum} 
     * @param path {String} 
     */
    constructor(uuid, name, docType, path) { 
        
        Document.initialize(this, uuid, name, docType, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, name, docType, path) { 
        obj['uuid'] = uuid;
        obj['name'] = name;
        obj['doc_type'] = docType;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Document} obj Optional instance to populate.
     * @return {module:model/Document} The populated <code>Document</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Document();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('doc_type')) {
                obj['doc_type'] = DocTypeEnum.constructFromObject(data['doc_type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('extra_data')) {
                obj['extra_data'] = ApiClient.convertToType(data['extra_data'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
Document.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
Document.prototype['name'] = undefined;

/**
 * @member {module:model/DocTypeEnum} doc_type
 */
Document.prototype['doc_type'] = undefined;

/**
 * @member {String} description
 */
Document.prototype['description'] = undefined;

/**
 * @member {String} path
 */
Document.prototype['path'] = undefined;

/**
 * Additional document attributes for the specific portal
 * @member {Object.<String, Object>} extra_data
 */
Document.prototype['extra_data'] = undefined;






export default Document;

