<?php
/**
 * BankAccountCreateUpdate
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

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * BankAccountCreateUpdate Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class BankAccountCreateUpdate implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'BankAccountCreateUpdate';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'account_number' => 'string',
        'account_sort_code' => 'string',
        'account_holder_name' => 'string',
        'joint' => 'bool',
        'bank_name' => 'string',
        'iban' => 'string',
        'swift_code' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'uuid' => 'uuid',
        'account_number' => null,
        'account_sort_code' => null,
        'account_holder_name' => null,
        'joint' => null,
        'bank_name' => null,
        'iban' => null,
        'swift_code' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'uuid' => 'uuid',
        'account_number' => 'account_number',
        'account_sort_code' => 'account_sort_code',
        'account_holder_name' => 'account_holder_name',
        'joint' => 'joint',
        'bank_name' => 'bank_name',
        'iban' => 'iban',
        'swift_code' => 'swift_code'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'account_number' => 'setAccountNumber',
        'account_sort_code' => 'setAccountSortCode',
        'account_holder_name' => 'setAccountHolderName',
        'joint' => 'setJoint',
        'bank_name' => 'setBankName',
        'iban' => 'setIban',
        'swift_code' => 'setSwiftCode'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'account_number' => 'getAccountNumber',
        'account_sort_code' => 'getAccountSortCode',
        'account_holder_name' => 'getAccountHolderName',
        'joint' => 'getJoint',
        'bank_name' => 'getBankName',
        'iban' => 'getIban',
        'swift_code' => 'getSwiftCode'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['uuid'] = $data['uuid'] ?? null;
        $this->container['account_number'] = $data['account_number'] ?? null;
        $this->container['account_sort_code'] = $data['account_sort_code'] ?? null;
        $this->container['account_holder_name'] = $data['account_holder_name'] ?? null;
        $this->container['joint'] = $data['joint'] ?? null;
        $this->container['bank_name'] = $data['bank_name'] ?? null;
        $this->container['iban'] = $data['iban'] ?? null;
        $this->container['swift_code'] = $data['swift_code'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['uuid'] === null) {
            $invalidProperties[] = "'uuid' can't be null";
        }
        if (!is_null($this->container['account_number']) && (mb_strlen($this->container['account_number']) > 30)) {
            $invalidProperties[] = "invalid value for 'account_number', the character length must be smaller than or equal to 30.";
        }

        if (!is_null($this->container['account_sort_code']) && (mb_strlen($this->container['account_sort_code']) > 6)) {
            $invalidProperties[] = "invalid value for 'account_sort_code', the character length must be smaller than or equal to 6.";
        }

        if (!is_null($this->container['bank_name']) && (mb_strlen($this->container['bank_name']) > 250)) {
            $invalidProperties[] = "invalid value for 'bank_name', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['iban']) && (mb_strlen($this->container['iban']) > 34)) {
            $invalidProperties[] = "invalid value for 'iban', the character length must be smaller than or equal to 34.";
        }

        if (!is_null($this->container['swift_code']) && (mb_strlen($this->container['swift_code']) > 11)) {
            $invalidProperties[] = "invalid value for 'swift_code', the character length must be smaller than or equal to 11.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets uuid
     *
     * @return string
     */
    public function getUuid()
    {
        return $this->container['uuid'];
    }

    /**
     * Sets uuid
     *
     * @param string $uuid uuid
     *
     * @return self
     */
    public function setUuid($uuid)
    {
        $this->container['uuid'] = $uuid;

        return $this;
    }

    /**
     * Gets account_number
     *
     * @return string|null
     */
    public function getAccountNumber()
    {
        return $this->container['account_number'];
    }

    /**
     * Sets account_number
     *
     * @param string|null $account_number account_number
     *
     * @return self
     */
    public function setAccountNumber($account_number)
    {
        if (!is_null($account_number) && (mb_strlen($account_number) > 30)) {
            throw new \InvalidArgumentException('invalid length for $account_number when calling BankAccountCreateUpdate., must be smaller than or equal to 30.');
        }

        $this->container['account_number'] = $account_number;

        return $this;
    }

    /**
     * Gets account_sort_code
     *
     * @return string|null
     */
    public function getAccountSortCode()
    {
        return $this->container['account_sort_code'];
    }

    /**
     * Sets account_sort_code
     *
     * @param string|null $account_sort_code account_sort_code
     *
     * @return self
     */
    public function setAccountSortCode($account_sort_code)
    {
        if (!is_null($account_sort_code) && (mb_strlen($account_sort_code) > 6)) {
            throw new \InvalidArgumentException('invalid length for $account_sort_code when calling BankAccountCreateUpdate., must be smaller than or equal to 6.');
        }

        $this->container['account_sort_code'] = $account_sort_code;

        return $this;
    }

    /**
     * Gets account_holder_name
     *
     * @return string|null
     */
    public function getAccountHolderName()
    {
        return $this->container['account_holder_name'];
    }

    /**
     * Sets account_holder_name
     *
     * @param string|null $account_holder_name account_holder_name
     *
     * @return self
     */
    public function setAccountHolderName($account_holder_name)
    {
        $this->container['account_holder_name'] = $account_holder_name;

        return $this;
    }

    /**
     * Gets joint
     *
     * @return bool|null
     */
    public function getJoint()
    {
        return $this->container['joint'];
    }

    /**
     * Sets joint
     *
     * @param bool|null $joint joint
     *
     * @return self
     */
    public function setJoint($joint)
    {
        $this->container['joint'] = $joint;

        return $this;
    }

    /**
     * Gets bank_name
     *
     * @return string|null
     */
    public function getBankName()
    {
        return $this->container['bank_name'];
    }

    /**
     * Sets bank_name
     *
     * @param string|null $bank_name bank_name
     *
     * @return self
     */
    public function setBankName($bank_name)
    {
        if (!is_null($bank_name) && (mb_strlen($bank_name) > 250)) {
            throw new \InvalidArgumentException('invalid length for $bank_name when calling BankAccountCreateUpdate., must be smaller than or equal to 250.');
        }

        $this->container['bank_name'] = $bank_name;

        return $this;
    }

    /**
     * Gets iban
     *
     * @return string|null
     */
    public function getIban()
    {
        return $this->container['iban'];
    }

    /**
     * Sets iban
     *
     * @param string|null $iban iban
     *
     * @return self
     */
    public function setIban($iban)
    {
        if (!is_null($iban) && (mb_strlen($iban) > 34)) {
            throw new \InvalidArgumentException('invalid length for $iban when calling BankAccountCreateUpdate., must be smaller than or equal to 34.');
        }

        $this->container['iban'] = $iban;

        return $this;
    }

    /**
     * Gets swift_code
     *
     * @return string|null
     */
    public function getSwiftCode()
    {
        return $this->container['swift_code'];
    }

    /**
     * Sets swift_code
     *
     * @param string|null $swift_code swift_code
     *
     * @return self
     */
    public function setSwiftCode($swift_code)
    {
        if (!is_null($swift_code) && (mb_strlen($swift_code) > 11)) {
            throw new \InvalidArgumentException('invalid length for $swift_code when calling BankAccountCreateUpdate., must be smaller than or equal to 11.');
        }

        $this->container['swift_code'] = $swift_code;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


