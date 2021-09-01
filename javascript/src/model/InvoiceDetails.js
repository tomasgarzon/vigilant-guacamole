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
import Status260Enum from './Status260Enum';

/**
 * The InvoiceDetails model module.
 * @module model/InvoiceDetails
 * @version 4.175.0
 */
class InvoiceDetails {
    /**
     * Constructs a new <code>InvoiceDetails</code>.
     * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
     * @alias module:model/InvoiceDetails
     * @param uuid {String} 
     * @param created {Date} 
     * @param url {String} 
     * @param amount {Number} 
     * @param charges {Array.<String>} 
     */
    constructor(uuid, created, url, amount, charges) { 
        
        InvoiceDetails.initialize(this, uuid, created, url, amount, charges);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, created, url, amount, charges) { 
        obj['uuid'] = uuid;
        obj['created'] = created;
        obj['url'] = url;
        obj['amount'] = amount;
        obj['charges'] = charges;
    }

    /**
     * Constructs a <code>InvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceDetails} obj Optional instance to populate.
     * @return {module:model/InvoiceDetails} The populated <code>InvoiceDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceDetails();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = Status260Enum.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('date_from')) {
                obj['date_from'] = ApiClient.convertToType(data['date_from'], 'Date');
            }
            if (data.hasOwnProperty('date_to')) {
                obj['date_to'] = ApiClient.convertToType(data['date_to'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
InvoiceDetails.prototype['uuid'] = undefined;

/**
 * Invoice legal number
 * @member {String} number
 */
InvoiceDetails.prototype['number'] = undefined;

/**
 * @member {module:model/Status260Enum} status
 */
InvoiceDetails.prototype['status'] = undefined;

/**
 * @member {Date} created
 */
InvoiceDetails.prototype['created'] = undefined;

/**
 * Beginning of charge period
 * @member {Date} date_from
 */
InvoiceDetails.prototype['date_from'] = undefined;

/**
 * End of charge period
 * @member {Date} date_to
 */
InvoiceDetails.prototype['date_to'] = undefined;

/**
 * @member {String} url
 */
InvoiceDetails.prototype['url'] = undefined;

/**
 * @member {Number} amount
 */
InvoiceDetails.prototype['amount'] = undefined;

/**
 * @member {Array.<String>} charges
 */
InvoiceDetails.prototype['charges'] = undefined;






export default InvoiceDetails;
