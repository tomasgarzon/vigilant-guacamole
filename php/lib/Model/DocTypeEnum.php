<?php
/**
 * DocTypeEnum
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Nucoro API
 *
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.3.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * DocTypeEnum Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class DocTypeEnum
{
    /**
     * Possible values of this enum
     */
    const ID_PERSONAL = 'ID_PERSONAL';
    const BANK_DETAILS = 'BANK_DETAILS';
    const EMPLOYMENT = 'EMPLOYMENT';
    const MARITAL_STATUS = 'MARITAL_STATUS';
    const PENSION = 'PENSION';
    const LEGAL = 'LEGAL';
    const TRANSFERS = 'TRANSFERS';
    const MEDICAL = 'MEDICAL';
    const CONTRACT = 'CONTRACT';
    const OTHERS = 'OTHERS';
    
    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::ID_PERSONAL,
            self::BANK_DETAILS,
            self::EMPLOYMENT,
            self::MARITAL_STATUS,
            self::PENSION,
            self::LEGAL,
            self::TRANSFERS,
            self::MEDICAL,
            self::CONTRACT,
            self::OTHERS,
        ];
    }
}


