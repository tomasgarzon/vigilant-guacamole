<?php
/**
 * DepositDetail
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
 * DepositDetail Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class DepositDetail implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'DepositDetail';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'uuid' => 'string',
        'portfolio' => 'string',
        'amount' => 'double',
        'provider' => 'string',
        'reference' => 'string',
        'status' => '\OpenAPI\Client\Model\StatusB6aEnum',
        'reason' => 'string',
        'completed' => '\DateTime',
        'deposit_type' => '\OpenAPI\Client\Model\DepositTypeEnum',
        'transacted_at' => '\DateTime',
        'extra_data' => 'array<string,mixed>'
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
        'portfolio' => null,
        'amount' => 'double',
        'provider' => null,
        'reference' => null,
        'status' => null,
        'reason' => null,
        'completed' => 'date-time',
        'deposit_type' => null,
        'transacted_at' => 'date-time',
        'extra_data' => null
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
        'portfolio' => 'portfolio',
        'amount' => 'amount',
        'provider' => 'provider',
        'reference' => 'reference',
        'status' => 'status',
        'reason' => 'reason',
        'completed' => 'completed',
        'deposit_type' => 'deposit_type',
        'transacted_at' => 'transacted_at',
        'extra_data' => 'extra_data'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'uuid' => 'setUuid',
        'portfolio' => 'setPortfolio',
        'amount' => 'setAmount',
        'provider' => 'setProvider',
        'reference' => 'setReference',
        'status' => 'setStatus',
        'reason' => 'setReason',
        'completed' => 'setCompleted',
        'deposit_type' => 'setDepositType',
        'transacted_at' => 'setTransactedAt',
        'extra_data' => 'setExtraData'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'uuid' => 'getUuid',
        'portfolio' => 'getPortfolio',
        'amount' => 'getAmount',
        'provider' => 'getProvider',
        'reference' => 'getReference',
        'status' => 'getStatus',
        'reason' => 'getReason',
        'completed' => 'getCompleted',
        'deposit_type' => 'getDepositType',
        'transacted_at' => 'getTransactedAt',
        'extra_data' => 'getExtraData'
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
        $this->container['portfolio'] = $data['portfolio'] ?? null;
        $this->container['amount'] = $data['amount'] ?? null;
        $this->container['provider'] = $data['provider'] ?? null;
        $this->container['reference'] = $data['reference'] ?? null;
        $this->container['status'] = $data['status'] ?? null;
        $this->container['reason'] = $data['reason'] ?? null;
        $this->container['completed'] = $data['completed'] ?? null;
        $this->container['deposit_type'] = $data['deposit_type'] ?? null;
        $this->container['transacted_at'] = $data['transacted_at'] ?? null;
        $this->container['extra_data'] = $data['extra_data'] ?? null;
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
        if ($this->container['portfolio'] === null) {
            $invalidProperties[] = "'portfolio' can't be null";
        }
        if ($this->container['amount'] === null) {
            $invalidProperties[] = "'amount' can't be null";
        }
        if (($this->container['amount'] > 1000000000000)) {
            $invalidProperties[] = "invalid value for 'amount', must be smaller than or equal to 1000000000000.";
        }

        if (($this->container['amount'] < -1000000000000)) {
            $invalidProperties[] = "invalid value for 'amount', must be bigger than or equal to -1000000000000.";
        }

        if ($this->container['provider'] === null) {
            $invalidProperties[] = "'provider' can't be null";
        }
        if ($this->container['reference'] === null) {
            $invalidProperties[] = "'reference' can't be null";
        }
        if (!is_null($this->container['reason']) && (mb_strlen($this->container['reason']) > 250)) {
            $invalidProperties[] = "invalid value for 'reason', the character length must be smaller than or equal to 250.";
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
     * Gets portfolio
     *
     * @return string
     */
    public function getPortfolio()
    {
        return $this->container['portfolio'];
    }

    /**
     * Sets portfolio
     *
     * @param string $portfolio portfolio
     *
     * @return self
     */
    public function setPortfolio($portfolio)
    {
        $this->container['portfolio'] = $portfolio;

        return $this;
    }

    /**
     * Gets amount
     *
     * @return double
     */
    public function getAmount()
    {
        return $this->container['amount'];
    }

    /**
     * Sets amount
     *
     * @param double $amount amount
     *
     * @return self
     */
    public function setAmount($amount)
    {

        if (($amount > 1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount when calling DepositDetail., must be smaller than or equal to 1000000000000.');
        }
        if (($amount < -1000000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount when calling DepositDetail., must be bigger than or equal to -1000000000000.');
        }

        $this->container['amount'] = $amount;

        return $this;
    }

    /**
     * Gets provider
     *
     * @return string
     */
    public function getProvider()
    {
        return $this->container['provider'];
    }

    /**
     * Sets provider
     *
     * @param string $provider provider
     *
     * @return self
     */
    public function setProvider($provider)
    {
        $this->container['provider'] = $provider;

        return $this;
    }

    /**
     * Gets reference
     *
     * @return string
     */
    public function getReference()
    {
        return $this->container['reference'];
    }

    /**
     * Sets reference
     *
     * @param string $reference reference
     *
     * @return self
     */
    public function setReference($reference)
    {
        $this->container['reference'] = $reference;

        return $this;
    }

    /**
     * Gets status
     *
     * @return \OpenAPI\Client\Model\StatusB6aEnum|null
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param \OpenAPI\Client\Model\StatusB6aEnum|null $status status
     *
     * @return self
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets reason
     *
     * @return string|null
     */
    public function getReason()
    {
        return $this->container['reason'];
    }

    /**
     * Sets reason
     *
     * @param string|null $reason Cancelled reason
     *
     * @return self
     */
    public function setReason($reason)
    {
        if (!is_null($reason) && (mb_strlen($reason) > 250)) {
            throw new \InvalidArgumentException('invalid length for $reason when calling DepositDetail., must be smaller than or equal to 250.');
        }

        $this->container['reason'] = $reason;

        return $this;
    }

    /**
     * Gets completed
     *
     * @return \DateTime|null
     */
    public function getCompleted()
    {
        return $this->container['completed'];
    }

    /**
     * Sets completed
     *
     * @param \DateTime|null $completed completed
     *
     * @return self
     */
    public function setCompleted($completed)
    {
        $this->container['completed'] = $completed;

        return $this;
    }

    /**
     * Gets deposit_type
     *
     * @return \OpenAPI\Client\Model\DepositTypeEnum|null
     */
    public function getDepositType()
    {
        return $this->container['deposit_type'];
    }

    /**
     * Sets deposit_type
     *
     * @param \OpenAPI\Client\Model\DepositTypeEnum|null $deposit_type deposit_type
     *
     * @return self
     */
    public function setDepositType($deposit_type)
    {
        $this->container['deposit_type'] = $deposit_type;

        return $this;
    }

    /**
     * Gets transacted_at
     *
     * @return \DateTime|null
     */
    public function getTransactedAt()
    {
        return $this->container['transacted_at'];
    }

    /**
     * Sets transacted_at
     *
     * @param \DateTime|null $transacted_at transacted_at
     *
     * @return self
     */
    public function setTransactedAt($transacted_at)
    {
        $this->container['transacted_at'] = $transacted_at;

        return $this;
    }

    /**
     * Gets extra_data
     *
     * @return array<string,mixed>|null
     */
    public function getExtraData()
    {
        return $this->container['extra_data'];
    }

    /**
     * Sets extra_data
     *
     * @param array<string,mixed>|null $extra_data Additional deposit attributes for the specific portal
     *
     * @return self
     */
    public function setExtraData($extra_data)
    {
        $this->container['extra_data'] = $extra_data;

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

