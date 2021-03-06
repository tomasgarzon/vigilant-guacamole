<?php
/**
 * AllocationList
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
 * AllocationList Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class AllocationList implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'AllocationList';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'valuation_date' => '\DateTime',
        'balance' => 'double',
        'invested' => 'double',
        'earnings' => 'double',
        'cash_active' => 'double',
        'trade_total' => 'double',
        'performance' => 'double'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'valuation_date' => 'date',
        'balance' => 'double',
        'invested' => 'double',
        'earnings' => 'double',
        'cash_active' => 'double',
        'trade_total' => 'double',
        'performance' => 'double'
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
        'valuation_date' => 'valuation_date',
        'balance' => 'balance',
        'invested' => 'invested',
        'earnings' => 'earnings',
        'cash_active' => 'cash_active',
        'trade_total' => 'trade_total',
        'performance' => 'performance'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'valuation_date' => 'setValuationDate',
        'balance' => 'setBalance',
        'invested' => 'setInvested',
        'earnings' => 'setEarnings',
        'cash_active' => 'setCashActive',
        'trade_total' => 'setTradeTotal',
        'performance' => 'setPerformance'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'valuation_date' => 'getValuationDate',
        'balance' => 'getBalance',
        'invested' => 'getInvested',
        'earnings' => 'getEarnings',
        'cash_active' => 'getCashActive',
        'trade_total' => 'getTradeTotal',
        'performance' => 'getPerformance'
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
        $this->container['valuation_date'] = $data['valuation_date'] ?? null;
        $this->container['balance'] = $data['balance'] ?? null;
        $this->container['invested'] = $data['invested'] ?? null;
        $this->container['earnings'] = $data['earnings'] ?? null;
        $this->container['cash_active'] = $data['cash_active'] ?? null;
        $this->container['trade_total'] = $data['trade_total'] ?? null;
        $this->container['performance'] = $data['performance'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['valuation_date'] === null) {
            $invalidProperties[] = "'valuation_date' can't be null";
        }
        if ($this->container['balance'] === null) {
            $invalidProperties[] = "'balance' can't be null";
        }
        if (($this->container['balance'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'balance', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['balance'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'balance', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['invested'] === null) {
            $invalidProperties[] = "'invested' can't be null";
        }
        if (($this->container['invested'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'invested', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['invested'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'invested', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['earnings'] === null) {
            $invalidProperties[] = "'earnings' can't be null";
        }
        if (($this->container['earnings'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'earnings', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['earnings'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'earnings', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['cash_active'] === null) {
            $invalidProperties[] = "'cash_active' can't be null";
        }
        if (($this->container['cash_active'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'cash_active', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['cash_active'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'cash_active', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['trade_total'] === null) {
            $invalidProperties[] = "'trade_total' can't be null";
        }
        if (($this->container['trade_total'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'trade_total', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['trade_total'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'trade_total', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['performance'] === null) {
            $invalidProperties[] = "'performance' can't be null";
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
     * Gets valuation_date
     *
     * @return \DateTime
     */
    public function getValuationDate()
    {
        return $this->container['valuation_date'];
    }

    /**
     * Sets valuation_date
     *
     * @param \DateTime $valuation_date valuation_date
     *
     * @return self
     */
    public function setValuationDate($valuation_date)
    {
        $this->container['valuation_date'] = $valuation_date;

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
            throw new \InvalidArgumentException('invalid value for $balance when calling AllocationList., must be smaller than or equal to 1000000000000.');
        }
        if (($balance < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $balance when calling AllocationList., must be bigger than or equal to -1000000000000.');
        }

        $this->container['balance'] = $balance;

        return $this;
    }

    /**
     * Gets invested
     *
     * @return double
     */
    public function getInvested()
    {
        return $this->container['invested'];
    }

    /**
     * Sets invested
     *
     * @param double $invested invested
     *
     * @return self
     */
    public function setInvested($invested)
    {

        if (($invested > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $invested when calling AllocationList., must be smaller than or equal to 1000000000000.');
        }
        if (($invested < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $invested when calling AllocationList., must be bigger than or equal to -1000000000000.');
        }

        $this->container['invested'] = $invested;

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
            throw new \InvalidArgumentException('invalid value for $earnings when calling AllocationList., must be smaller than or equal to 1000000000000.');
        }
        if (($earnings < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $earnings when calling AllocationList., must be bigger than or equal to -1000000000000.');
        }

        $this->container['earnings'] = $earnings;

        return $this;
    }

    /**
     * Gets cash_active
     *
     * @return double
     */
    public function getCashActive()
    {
        return $this->container['cash_active'];
    }

    /**
     * Sets cash_active
     *
     * @param double $cash_active cash_active
     *
     * @return self
     */
    public function setCashActive($cash_active)
    {

        if (($cash_active > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $cash_active when calling AllocationList., must be smaller than or equal to 1000000000000.');
        }
        if (($cash_active < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $cash_active when calling AllocationList., must be bigger than or equal to -1000000000000.');
        }

        $this->container['cash_active'] = $cash_active;

        return $this;
    }

    /**
     * Gets trade_total
     *
     * @return double
     */
    public function getTradeTotal()
    {
        return $this->container['trade_total'];
    }

    /**
     * Sets trade_total
     *
     * @param double $trade_total trade_total
     *
     * @return self
     */
    public function setTradeTotal($trade_total)
    {

        if (($trade_total > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $trade_total when calling AllocationList., must be smaller than or equal to 1000000000000.');
        }
        if (($trade_total < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $trade_total when calling AllocationList., must be bigger than or equal to -1000000000000.');
        }

        $this->container['trade_total'] = $trade_total;

        return $this;
    }

    /**
     * Gets performance
     *
     * @return double
     */
    public function getPerformance()
    {
        return $this->container['performance'];
    }

    /**
     * Sets performance
     *
     * @param double $performance performance
     *
     * @return self
     */
    public function setPerformance($performance)
    {
        $this->container['performance'] = $performance;

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


