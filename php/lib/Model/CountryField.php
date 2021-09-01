<?php
/**
 * CountryField
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
 * CountryField Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class CountryField implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'CountryField';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'code' => 'string',
        'iso3' => 'string',
        'name' => 'string',
        'name_en_gb' => 'string',
        'name_en_ch' => 'string',
        'name_fr_ch' => 'string',
        'name_de_ch' => 'string',
        'name_es_es' => 'string',
        'name_it_ch' => 'string',
        'long_name' => 'string',
        'long_name_en_gb' => 'string',
        'long_name_en_ch' => 'string',
        'long_name_fr_ch' => 'string',
        'long_name_de_ch' => 'string',
        'long_name_es_es' => 'string',
        'long_name_it_ch' => 'string',
        'eea_country' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'id' => null,
        'code' => null,
        'iso3' => null,
        'name' => null,
        'name_en_gb' => null,
        'name_en_ch' => null,
        'name_fr_ch' => null,
        'name_de_ch' => null,
        'name_es_es' => null,
        'name_it_ch' => null,
        'long_name' => null,
        'long_name_en_gb' => null,
        'long_name_en_ch' => null,
        'long_name_fr_ch' => null,
        'long_name_de_ch' => null,
        'long_name_es_es' => null,
        'long_name_it_ch' => null,
        'eea_country' => null
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
        'id' => 'id',
        'code' => 'code',
        'iso3' => 'iso3',
        'name' => 'name',
        'name_en_gb' => 'name_en_gb',
        'name_en_ch' => 'name_en_ch',
        'name_fr_ch' => 'name_fr_ch',
        'name_de_ch' => 'name_de_ch',
        'name_es_es' => 'name_es_es',
        'name_it_ch' => 'name_it_ch',
        'long_name' => 'long_name',
        'long_name_en_gb' => 'long_name_en_gb',
        'long_name_en_ch' => 'long_name_en_ch',
        'long_name_fr_ch' => 'long_name_fr_ch',
        'long_name_de_ch' => 'long_name_de_ch',
        'long_name_es_es' => 'long_name_es_es',
        'long_name_it_ch' => 'long_name_it_ch',
        'eea_country' => 'eea_country'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'code' => 'setCode',
        'iso3' => 'setIso3',
        'name' => 'setName',
        'name_en_gb' => 'setNameEnGb',
        'name_en_ch' => 'setNameEnCh',
        'name_fr_ch' => 'setNameFrCh',
        'name_de_ch' => 'setNameDeCh',
        'name_es_es' => 'setNameEsEs',
        'name_it_ch' => 'setNameItCh',
        'long_name' => 'setLongName',
        'long_name_en_gb' => 'setLongNameEnGb',
        'long_name_en_ch' => 'setLongNameEnCh',
        'long_name_fr_ch' => 'setLongNameFrCh',
        'long_name_de_ch' => 'setLongNameDeCh',
        'long_name_es_es' => 'setLongNameEsEs',
        'long_name_it_ch' => 'setLongNameItCh',
        'eea_country' => 'setEeaCountry'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'code' => 'getCode',
        'iso3' => 'getIso3',
        'name' => 'getName',
        'name_en_gb' => 'getNameEnGb',
        'name_en_ch' => 'getNameEnCh',
        'name_fr_ch' => 'getNameFrCh',
        'name_de_ch' => 'getNameDeCh',
        'name_es_es' => 'getNameEsEs',
        'name_it_ch' => 'getNameItCh',
        'long_name' => 'getLongName',
        'long_name_en_gb' => 'getLongNameEnGb',
        'long_name_en_ch' => 'getLongNameEnCh',
        'long_name_fr_ch' => 'getLongNameFrCh',
        'long_name_de_ch' => 'getLongNameDeCh',
        'long_name_es_es' => 'getLongNameEsEs',
        'long_name_it_ch' => 'getLongNameItCh',
        'eea_country' => 'getEeaCountry'
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
        $this->container['id'] = $data['id'] ?? null;
        $this->container['code'] = $data['code'] ?? null;
        $this->container['iso3'] = $data['iso3'] ?? null;
        $this->container['name'] = $data['name'] ?? null;
        $this->container['name_en_gb'] = $data['name_en_gb'] ?? null;
        $this->container['name_en_ch'] = $data['name_en_ch'] ?? null;
        $this->container['name_fr_ch'] = $data['name_fr_ch'] ?? null;
        $this->container['name_de_ch'] = $data['name_de_ch'] ?? null;
        $this->container['name_es_es'] = $data['name_es_es'] ?? null;
        $this->container['name_it_ch'] = $data['name_it_ch'] ?? null;
        $this->container['long_name'] = $data['long_name'] ?? null;
        $this->container['long_name_en_gb'] = $data['long_name_en_gb'] ?? null;
        $this->container['long_name_en_ch'] = $data['long_name_en_ch'] ?? null;
        $this->container['long_name_fr_ch'] = $data['long_name_fr_ch'] ?? null;
        $this->container['long_name_de_ch'] = $data['long_name_de_ch'] ?? null;
        $this->container['long_name_es_es'] = $data['long_name_es_es'] ?? null;
        $this->container['long_name_it_ch'] = $data['long_name_it_ch'] ?? null;
        $this->container['eea_country'] = $data['eea_country'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['code'] === null) {
            $invalidProperties[] = "'code' can't be null";
        }
        if ((mb_strlen($this->container['code']) > 2)) {
            $invalidProperties[] = "invalid value for 'code', the character length must be smaller than or equal to 2.";
        }

        if ($this->container['iso3'] === null) {
            $invalidProperties[] = "'iso3' can't be null";
        }
        if ((mb_strlen($this->container['iso3']) > 3)) {
            $invalidProperties[] = "invalid value for 'iso3', the character length must be smaller than or equal to 3.";
        }

        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ((mb_strlen($this->container['name']) > 150)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_en_gb']) && (mb_strlen($this->container['name_en_gb']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_en_gb', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_en_ch']) && (mb_strlen($this->container['name_en_ch']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_en_ch', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_fr_ch']) && (mb_strlen($this->container['name_fr_ch']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_fr_ch', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_de_ch']) && (mb_strlen($this->container['name_de_ch']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_de_ch', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_es_es']) && (mb_strlen($this->container['name_es_es']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_es_es', the character length must be smaller than or equal to 150.";
        }

        if (!is_null($this->container['name_it_ch']) && (mb_strlen($this->container['name_it_ch']) > 150)) {
            $invalidProperties[] = "invalid value for 'name_it_ch', the character length must be smaller than or equal to 150.";
        }

        if ($this->container['long_name'] === null) {
            $invalidProperties[] = "'long_name' can't be null";
        }
        if ((mb_strlen($this->container['long_name']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_en_gb']) && (mb_strlen($this->container['long_name_en_gb']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_en_gb', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_en_ch']) && (mb_strlen($this->container['long_name_en_ch']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_en_ch', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_fr_ch']) && (mb_strlen($this->container['long_name_fr_ch']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_fr_ch', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_de_ch']) && (mb_strlen($this->container['long_name_de_ch']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_de_ch', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_es_es']) && (mb_strlen($this->container['long_name_es_es']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_es_es', the character length must be smaller than or equal to 250.";
        }

        if (!is_null($this->container['long_name_it_ch']) && (mb_strlen($this->container['long_name_it_ch']) > 250)) {
            $invalidProperties[] = "invalid value for 'long_name_it_ch', the character length must be smaller than or equal to 250.";
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
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->container['code'];
    }

    /**
     * Sets code
     *
     * @param string $code code
     *
     * @return self
     */
    public function setCode($code)
    {
        if ((mb_strlen($code) > 2)) {
            throw new \InvalidArgumentException('invalid length for $code when calling CountryField., must be smaller than or equal to 2.');
        }

        $this->container['code'] = $code;

        return $this;
    }

    /**
     * Gets iso3
     *
     * @return string
     */
    public function getIso3()
    {
        return $this->container['iso3'];
    }

    /**
     * Sets iso3
     *
     * @param string $iso3 iso3
     *
     * @return self
     */
    public function setIso3($iso3)
    {
        if ((mb_strlen($iso3) > 3)) {
            throw new \InvalidArgumentException('invalid length for $iso3 when calling CountryField., must be smaller than or equal to 3.');
        }

        $this->container['iso3'] = $iso3;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return self
     */
    public function setName($name)
    {
        if ((mb_strlen($name) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets name_en_gb
     *
     * @return string|null
     */
    public function getNameEnGb()
    {
        return $this->container['name_en_gb'];
    }

    /**
     * Sets name_en_gb
     *
     * @param string|null $name_en_gb name_en_gb
     *
     * @return self
     */
    public function setNameEnGb($name_en_gb)
    {
        if (!is_null($name_en_gb) && (mb_strlen($name_en_gb) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_en_gb when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_en_gb'] = $name_en_gb;

        return $this;
    }

    /**
     * Gets name_en_ch
     *
     * @return string|null
     */
    public function getNameEnCh()
    {
        return $this->container['name_en_ch'];
    }

    /**
     * Sets name_en_ch
     *
     * @param string|null $name_en_ch name_en_ch
     *
     * @return self
     */
    public function setNameEnCh($name_en_ch)
    {
        if (!is_null($name_en_ch) && (mb_strlen($name_en_ch) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_en_ch when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_en_ch'] = $name_en_ch;

        return $this;
    }

    /**
     * Gets name_fr_ch
     *
     * @return string|null
     */
    public function getNameFrCh()
    {
        return $this->container['name_fr_ch'];
    }

    /**
     * Sets name_fr_ch
     *
     * @param string|null $name_fr_ch name_fr_ch
     *
     * @return self
     */
    public function setNameFrCh($name_fr_ch)
    {
        if (!is_null($name_fr_ch) && (mb_strlen($name_fr_ch) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_fr_ch when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_fr_ch'] = $name_fr_ch;

        return $this;
    }

    /**
     * Gets name_de_ch
     *
     * @return string|null
     */
    public function getNameDeCh()
    {
        return $this->container['name_de_ch'];
    }

    /**
     * Sets name_de_ch
     *
     * @param string|null $name_de_ch name_de_ch
     *
     * @return self
     */
    public function setNameDeCh($name_de_ch)
    {
        if (!is_null($name_de_ch) && (mb_strlen($name_de_ch) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_de_ch when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_de_ch'] = $name_de_ch;

        return $this;
    }

    /**
     * Gets name_es_es
     *
     * @return string|null
     */
    public function getNameEsEs()
    {
        return $this->container['name_es_es'];
    }

    /**
     * Sets name_es_es
     *
     * @param string|null $name_es_es name_es_es
     *
     * @return self
     */
    public function setNameEsEs($name_es_es)
    {
        if (!is_null($name_es_es) && (mb_strlen($name_es_es) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_es_es when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_es_es'] = $name_es_es;

        return $this;
    }

    /**
     * Gets name_it_ch
     *
     * @return string|null
     */
    public function getNameItCh()
    {
        return $this->container['name_it_ch'];
    }

    /**
     * Sets name_it_ch
     *
     * @param string|null $name_it_ch name_it_ch
     *
     * @return self
     */
    public function setNameItCh($name_it_ch)
    {
        if (!is_null($name_it_ch) && (mb_strlen($name_it_ch) > 150)) {
            throw new \InvalidArgumentException('invalid length for $name_it_ch when calling CountryField., must be smaller than or equal to 150.');
        }

        $this->container['name_it_ch'] = $name_it_ch;

        return $this;
    }

    /**
     * Gets long_name
     *
     * @return string
     */
    public function getLongName()
    {
        return $this->container['long_name'];
    }

    /**
     * Sets long_name
     *
     * @param string $long_name long_name
     *
     * @return self
     */
    public function setLongName($long_name)
    {
        if ((mb_strlen($long_name) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name'] = $long_name;

        return $this;
    }

    /**
     * Gets long_name_en_gb
     *
     * @return string|null
     */
    public function getLongNameEnGb()
    {
        return $this->container['long_name_en_gb'];
    }

    /**
     * Sets long_name_en_gb
     *
     * @param string|null $long_name_en_gb long_name_en_gb
     *
     * @return self
     */
    public function setLongNameEnGb($long_name_en_gb)
    {
        if (!is_null($long_name_en_gb) && (mb_strlen($long_name_en_gb) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_en_gb when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_en_gb'] = $long_name_en_gb;

        return $this;
    }

    /**
     * Gets long_name_en_ch
     *
     * @return string|null
     */
    public function getLongNameEnCh()
    {
        return $this->container['long_name_en_ch'];
    }

    /**
     * Sets long_name_en_ch
     *
     * @param string|null $long_name_en_ch long_name_en_ch
     *
     * @return self
     */
    public function setLongNameEnCh($long_name_en_ch)
    {
        if (!is_null($long_name_en_ch) && (mb_strlen($long_name_en_ch) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_en_ch when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_en_ch'] = $long_name_en_ch;

        return $this;
    }

    /**
     * Gets long_name_fr_ch
     *
     * @return string|null
     */
    public function getLongNameFrCh()
    {
        return $this->container['long_name_fr_ch'];
    }

    /**
     * Sets long_name_fr_ch
     *
     * @param string|null $long_name_fr_ch long_name_fr_ch
     *
     * @return self
     */
    public function setLongNameFrCh($long_name_fr_ch)
    {
        if (!is_null($long_name_fr_ch) && (mb_strlen($long_name_fr_ch) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_fr_ch when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_fr_ch'] = $long_name_fr_ch;

        return $this;
    }

    /**
     * Gets long_name_de_ch
     *
     * @return string|null
     */
    public function getLongNameDeCh()
    {
        return $this->container['long_name_de_ch'];
    }

    /**
     * Sets long_name_de_ch
     *
     * @param string|null $long_name_de_ch long_name_de_ch
     *
     * @return self
     */
    public function setLongNameDeCh($long_name_de_ch)
    {
        if (!is_null($long_name_de_ch) && (mb_strlen($long_name_de_ch) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_de_ch when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_de_ch'] = $long_name_de_ch;

        return $this;
    }

    /**
     * Gets long_name_es_es
     *
     * @return string|null
     */
    public function getLongNameEsEs()
    {
        return $this->container['long_name_es_es'];
    }

    /**
     * Sets long_name_es_es
     *
     * @param string|null $long_name_es_es long_name_es_es
     *
     * @return self
     */
    public function setLongNameEsEs($long_name_es_es)
    {
        if (!is_null($long_name_es_es) && (mb_strlen($long_name_es_es) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_es_es when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_es_es'] = $long_name_es_es;

        return $this;
    }

    /**
     * Gets long_name_it_ch
     *
     * @return string|null
     */
    public function getLongNameItCh()
    {
        return $this->container['long_name_it_ch'];
    }

    /**
     * Sets long_name_it_ch
     *
     * @param string|null $long_name_it_ch long_name_it_ch
     *
     * @return self
     */
    public function setLongNameItCh($long_name_it_ch)
    {
        if (!is_null($long_name_it_ch) && (mb_strlen($long_name_it_ch) > 250)) {
            throw new \InvalidArgumentException('invalid length for $long_name_it_ch when calling CountryField., must be smaller than or equal to 250.');
        }

        $this->container['long_name_it_ch'] = $long_name_it_ch;

        return $this;
    }

    /**
     * Gets eea_country
     *
     * @return bool|null
     */
    public function getEeaCountry()
    {
        return $this->container['eea_country'];
    }

    /**
     * Sets eea_country
     *
     * @param bool|null $eea_country eea_country
     *
     * @return self
     */
    public function setEeaCountry($eea_country)
    {
        $this->container['eea_country'] = $eea_country;

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

