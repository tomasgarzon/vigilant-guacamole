<?php
/**
 * ClientEmbedRanking
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
 * ClientEmbedRanking Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class ClientEmbedRanking implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ClientEmbedRanking';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'full_name' => 'string',
        'balance' => 'double',
        'earnings' => 'double',
        'mwrr' => 'double',
        'twrr' => 'double'
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
        'full_name' => null,
        'balance' => 'double',
        'earnings' => 'double',
        'mwrr' => 'double',
        'twrr' => 'double'
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
        'full_name' => 'full_name',
        'balance' => 'balance',
        'earnings' => 'earnings',
        'mwrr' => 'mwrr',
        'twrr' => 'twrr'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'full_name' => 'setFullName',
        'balance' => 'setBalance',
        'earnings' => 'setEarnings',
        'mwrr' => 'setMwrr',
        'twrr' => 'setTwrr'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'full_name' => 'getFullName',
        'balance' => 'getBalance',
        'earnings' => 'getEarnings',
        'mwrr' => 'getMwrr',
        'twrr' => 'getTwrr'
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
        $this->container['full_name'] = $data['full_name'] ?? null;
        $this->container['balance'] = $data['balance'] ?? null;
        $this->container['earnings'] = $data['earnings'] ?? null;
        $this->container['mwrr'] = $data['mwrr'] ?? null;
        $this->container['twrr'] = $data['twrr'] ?? null;
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
        if ($this->container['full_name'] === null) {
            $invalidProperties[] = "'full_name' can't be null";
        }
        if ($this->container['balance'] === null) {
            $invalidProperties[] = "'balance' can't be null";
        }
        if (($this->container['balance'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'balance', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['balance'] < 0)) {
            $invalidProperties[] = "invalid value for 'balance', must be bigger than or equal to 0.";
        }

        if ($this->container['earnings'] === null) {
            $invalidProperties[] = "'earnings' can't be null";
        }
        if (($this->container['earnings'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'earnings', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['earnings'] < 0)) {
            $invalidProperties[] = "invalid value for 'earnings', must be bigger than or equal to 0.";
        }

        if ($this->container['mwrr'] === null) {
            $invalidProperties[] = "'mwrr' can't be null";
        }
        if (($this->container['mwrr'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'mwrr', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['mwrr'] < 0)) {
            $invalidProperties[] = "invalid value for 'mwrr', must be bigger than or equal to 0.";
        }

        if ($this->container['twrr'] === null) {
            $invalidProperties[] = "'twrr' can't be null";
        }
        if (($this->container['twrr'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'twrr', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['twrr'] < 0)) {
            $invalidProperties[] = "invalid value for 'twrr', must be bigger than or equal to 0.";
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
     * Gets full_name
     *
     * @return string
     */
    public function getFullName()
    {
        return $this->container['full_name'];
    }

    /**
     * Sets full_name
     *
     * @param string $full_name full_name
     *
     * @return self
     */
    public function setFullName($full_name)
    {
        $this->container['full_name'] = $full_name;

        return $this;
    }

    /**
     * Gets balance
     *
     * @return double
     */
    public function getBalance()
    {
        return $this->container['balance'];
    }

    /**
     * Sets balance
     *
     * @param double $balance balance
     *
     * @return self
     */
    public function setBalance($balance)
    {

        if (($balance > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $balance when calling ClientEmbedRanking., must be smaller than or equal to 1000000000000.');
        }
        if (($balance < 0)) {
            throw new \InvalidArgumentException('invalid value for $balance when calling ClientEmbedRanking., must be bigger than or equal to 0.');
        }

        $this->container['balance'] = $balance;

        return $this;
    }

    /**
     * Gets earnings
     *
     * @return double
     */
    public function getEarnings()
    {
        return $this->container['earnings'];
    }

    /**
     * Sets earnings
     *
     * @param double $earnings earnings
     *
     * @return self
     */
    public function setEarnings($earnings)
    {

        if (($earnings > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $earnings when calling ClientEmbedRanking., must be smaller than or equal to 1000000000000.');
        }
        if (($earnings < 0)) {
            throw new \InvalidArgumentException('invalid value for $earnings when calling ClientEmbedRanking., must be bigger than or equal to 0.');
        }

        $this->container['earnings'] = $earnings;

        return $this;
    }

    /**
     * Gets mwrr
     *
     * @return double
     */
    public function getMwrr()
    {
        return $this->container['mwrr'];
    }

    /**
     * Sets mwrr
     *
     * @param double $mwrr mwrr
     *
     * @return self
     */
    public function setMwrr($mwrr)
    {

        if (($mwrr > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $mwrr when calling ClientEmbedRanking., must be smaller than or equal to 1000000000000.');
        }
        if (($mwrr < 0)) {
            throw new \InvalidArgumentException('invalid value for $mwrr when calling ClientEmbedRanking., must be bigger than or equal to 0.');
        }

        $this->container['mwrr'] = $mwrr;

        return $this;
    }

    /**
     * Gets twrr
     *
     * @return double
     */
    public function getTwrr()
    {
        return $this->container['twrr'];
    }

    /**
     * Sets twrr
     *
     * @param double $twrr twrr
     *
     * @return self
     */
    public function setTwrr($twrr)
    {

        if (($twrr > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $twrr when calling ClientEmbedRanking., must be smaller than or equal to 1000000000000.');
        }
        if (($twrr < 0)) {
            throw new \InvalidArgumentException('invalid value for $twrr when calling ClientEmbedRanking., must be bigger than or equal to 0.');
        }

        $this->container['twrr'] = $twrr;

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


