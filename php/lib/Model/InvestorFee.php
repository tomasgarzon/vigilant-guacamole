<?php
/**
 * InvestorFee
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
 * InvestorFee Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class InvestorFee implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'InvestorFee';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'value' => 'double',
        'value_unit' => 'ValueUnitEnum',
        'fee_type' => 'FeeTypeEnum',
        'concept' => 'string',
        'date_from' => '\DateTime',
        'date_to' => '\DateTime',
        'amount_from' => 'double',
        'amount_to' => 'double',
        'uuid' => 'string',
        'created' => '\DateTime',
        'updated' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'value' => 'double',
        'value_unit' => null,
        'fee_type' => null,
        'concept' => null,
        'date_from' => 'date',
        'date_to' => 'date',
        'amount_from' => 'double',
        'amount_to' => 'double',
        'uuid' => 'uuid',
        'created' => 'date-time',
        'updated' => 'date-time'
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
        'value' => 'value',
        'value_unit' => 'value_unit',
        'fee_type' => 'fee_type',
        'concept' => 'concept',
        'date_from' => 'date_from',
        'date_to' => 'date_to',
        'amount_from' => 'amount_from',
        'amount_to' => 'amount_to',
        'uuid' => 'uuid',
        'created' => 'created',
        'updated' => 'updated'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'value' => 'setValue',
        'value_unit' => 'setValueUnit',
        'fee_type' => 'setFeeType',
        'concept' => 'setConcept',
        'date_from' => 'setDateFrom',
        'date_to' => 'setDateTo',
        'amount_from' => 'setAmountFrom',
        'amount_to' => 'setAmountTo',
        'uuid' => 'setUuid',
        'created' => 'setCreated',
        'updated' => 'setUpdated'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'value' => 'getValue',
        'value_unit' => 'getValueUnit',
        'fee_type' => 'getFeeType',
        'concept' => 'getConcept',
        'date_from' => 'getDateFrom',
        'date_to' => 'getDateTo',
        'amount_from' => 'getAmountFrom',
        'amount_to' => 'getAmountTo',
        'uuid' => 'getUuid',
        'created' => 'getCreated',
        'updated' => 'getUpdated'
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
        $this->container['value'] = $data['value'] ?? null;
        $this->container['value_unit'] = $data['value_unit'] ?? null;
        $this->container['fee_type'] = $data['fee_type'] ?? null;
        $this->container['concept'] = $data['concept'] ?? null;
        $this->container['date_from'] = $data['date_from'] ?? null;
        $this->container['date_to'] = $data['date_to'] ?? null;
        $this->container['amount_from'] = $data['amount_from'] ?? null;
        $this->container['amount_to'] = $data['amount_to'] ?? null;
        $this->container['uuid'] = $data['uuid'] ?? null;
        $this->container['created'] = $data['created'] ?? null;
        $this->container['updated'] = $data['updated'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['value']) && ($this->container['value'] > 100)) {
            $invalidProperties[] = "invalid value for 'value', must be smaller than or equal to 100.";
        }

        if (!is_null($this->container['value']) && ($this->container['value'] < 0)) {
            $invalidProperties[] = "invalid value for 'value', must be bigger than or equal to 0.";
        }

        if ($this->container['fee_type'] === null) {
            $invalidProperties[] = "'fee_type' can't be null";
        }
        if ($this->container['concept'] === null) {
            $invalidProperties[] = "'concept' can't be null";
        }
        if ((mb_strlen($this->container['concept']) > 100)) {
            $invalidProperties[] = "invalid value for 'concept', the character length must be smaller than or equal to 100.";
        }

        if (!is_null($this->container['amount_from']) && ($this->container['amount_from'] > 1000000000)) {
            $invalidProperties[] = "invalid value for 'amount_from', must be smaller than or equal to 1000000000.";
        }

        if (!is_null($this->container['amount_from']) && ($this->container['amount_from'] < -1000000000)) {
            $invalidProperties[] = "invalid value for 'amount_from', must be bigger than or equal to -1000000000.";
        }

        if (!is_null($this->container['amount_to']) && ($this->container['amount_to'] > 1000000000)) {
            $invalidProperties[] = "invalid value for 'amount_to', must be smaller than or equal to 1000000000.";
        }

        if (!is_null($this->container['amount_to']) && ($this->container['amount_to'] < -1000000000)) {
            $invalidProperties[] = "invalid value for 'amount_to', must be bigger than or equal to -1000000000.";
        }

        if ($this->container['uuid'] === null) {
            $invalidProperties[] = "'uuid' can't be null";
        }
        if ($this->container['created'] === null) {
            $invalidProperties[] = "'created' can't be null";
        }
        if ($this->container['updated'] === null) {
            $invalidProperties[] = "'updated' can't be null";
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
     * Gets value
     *
     * @return double|null
     */
    public function getValue()
    {
        return $this->container['value'];
    }

    /**
     * Sets value
     *
     * @param double|null $value Determinates a percentage or an amount (between 0 and 1 if percentage otherwise Positive Decimal)
     *
     * @return self
     */
    public function setValue($value)
    {

        if (!is_null($value) && ($value > 100)) {
            throw new \InvalidArgumentException('invalid value for $value when calling InvestorFee., must be smaller than or equal to 100.');
        }
        if (!is_null($value) && ($value < 0)) {
            throw new \InvalidArgumentException('invalid value for $value when calling InvestorFee., must be bigger than or equal to 0.');
        }

        $this->container['value'] = $value;

        return $this;
    }

    /**
     * Gets value_unit
     *
     * @return ValueUnitEnum|null
     */
    public function getValueUnit()
    {
        return $this->container['value_unit'];
    }

    /**
     * Sets value_unit
     *
     * @param ValueUnitEnum|null $value_unit Determines the type of the value(Fixed, Percentage)
     *
     * @return self
     */
    public function setValueUnit($value_unit)
    {
        $this->container['value_unit'] = $value_unit;

        return $this;
    }

    /**
     * Gets fee_type
     *
     * @return FeeTypeEnum
     */
    public function getFeeType()
    {
        return $this->container['fee_type'];
    }

    /**
     * Sets fee_type
     *
     * @param FeeTypeEnum $fee_type Each choice should have a related method on fee model that contains the logic to charge the client
     *
     * @return self
     */
    public function setFeeType($fee_type)
    {
        $this->container['fee_type'] = $fee_type;

        return $this;
    }

    /**
     * Gets concept
     *
     * @return string
     */
    public function getConcept()
    {
        return $this->container['concept'];
    }

    /**
     * Sets concept
     *
     * @param string $concept Describes the concept that will be shown on invoice
     *
     * @return self
     */
    public function setConcept($concept)
    {
        if ((mb_strlen($concept) > 100)) {
            throw new \InvalidArgumentException('invalid length for $concept when calling InvestorFee., must be smaller than or equal to 100.');
        }

        $this->container['concept'] = $concept;

        return $this;
    }

    /**
     * Gets date_from
     *
     * @return \DateTime|null
     */
    public function getDateFrom()
    {
        return $this->container['date_from'];
    }

    /**
     * Sets date_from
     *
     * @param \DateTime|null $date_from Defines the end date when the percentage should be applied
     *
     * @return self
     */
    public function setDateFrom($date_from)
    {
        $this->container['date_from'] = $date_from;

        return $this;
    }

    /**
     * Gets date_to
     *
     * @return \DateTime|null
     */
    public function getDateTo()
    {
        return $this->container['date_to'];
    }

    /**
     * Sets date_to
     *
     * @param \DateTime|null $date_to Defines the start date when the percentage should be applied
     *
     * @return self
     */
    public function setDateTo($date_to)
    {
        $this->container['date_to'] = $date_to;

        return $this;
    }

    /**
     * Gets amount_from
     *
     * @return double|null
     */
    public function getAmountFrom()
    {
        return $this->container['amount_from'];
    }

    /**
     * Sets amount_from
     *
     * @param double|null $amount_from Defines the amount start range when the percentage should be applied
     *
     * @return self
     */
    public function setAmountFrom($amount_from)
    {

        if (!is_null($amount_from) && ($amount_from > 1000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount_from when calling InvestorFee., must be smaller than or equal to 1000000000.');
        }
        if (!is_null($amount_from) && ($amount_from < -1000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount_from when calling InvestorFee., must be bigger than or equal to -1000000000.');
        }

        $this->container['amount_from'] = $amount_from;

        return $this;
    }

    /**
     * Gets amount_to
     *
     * @return double|null
     */
    public function getAmountTo()
    {
        return $this->container['amount_to'];
    }

    /**
     * Sets amount_to
     *
     * @param double|null $amount_to Defines the amount end range when the percentage should be applied
     *
     * @return self
     */
    public function setAmountTo($amount_to)
    {

        if (!is_null($amount_to) && ($amount_to > 1000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount_to when calling InvestorFee., must be smaller than or equal to 1000000000.');
        }
        if (!is_null($amount_to) && ($amount_to < -1000000000)) {
            throw new \InvalidArgumentException('invalid value for $amount_to when calling InvestorFee., must be bigger than or equal to -1000000000.');
        }

        $this->container['amount_to'] = $amount_to;

        return $this;
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
     * Gets created
     *
     * @return \DateTime
     */
    public function getCreated()
    {
        return $this->container['created'];
    }

    /**
     * Sets created
     *
     * @param \DateTime $created created
     *
     * @return self
     */
    public function setCreated($created)
    {
        $this->container['created'] = $created;

        return $this;
    }

    /**
     * Gets updated
     *
     * @return \DateTime
     */
    public function getUpdated()
    {
        return $this->container['updated'];
    }

    /**
     * Sets updated
     *
     * @param \DateTime $updated updated
     *
     * @return self
     */
    public function setUpdated($updated)
    {
        $this->container['updated'] = $updated;

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


