/*
 * Nucoro API
 * No description
 *
 * The version of the OpenAPI document: 4.175.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.UUID;
import org.openapitools.client.model.ChannelEnum;
import org.threeten.bp.OffsetDateTime;

/**
 * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
@ApiModel(description = "A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class AccessLog {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;

  public static final String SERIALIZED_NAME_USER_AGENT = "user_agent";
  @SerializedName(SERIALIZED_NAME_USER_AGENT)
  private String userAgent;

  public static final String SERIALIZED_NAME_IP_ADDRESS = "ip_address";
  @SerializedName(SERIALIZED_NAME_IP_ADDRESS)
  private String ipAddress;

  public static final String SERIALIZED_NAME_BROWSER = "browser";
  @SerializedName(SERIALIZED_NAME_BROWSER)
  private String browser;

  public static final String SERIALIZED_NAME_BROWSER_VERSION = "browser_version";
  @SerializedName(SERIALIZED_NAME_BROWSER_VERSION)
  private String browserVersion;

  public static final String SERIALIZED_NAME_DEVICE_BRAND = "device_brand";
  @SerializedName(SERIALIZED_NAME_DEVICE_BRAND)
  private String deviceBrand;

  public static final String SERIALIZED_NAME_DEVICE_MODEL = "device_model";
  @SerializedName(SERIALIZED_NAME_DEVICE_MODEL)
  private String deviceModel;

  public static final String SERIALIZED_NAME_OS = "os";
  @SerializedName(SERIALIZED_NAME_OS)
  private String os;

  public static final String SERIALIZED_NAME_OS_VERSION = "os_version";
  @SerializedName(SERIALIZED_NAME_OS_VERSION)
  private String osVersion;

  public static final String SERIALIZED_NAME_CHANNEL = "channel";
  @SerializedName(SERIALIZED_NAME_CHANNEL)
  private ChannelEnum channel;

  public static final String SERIALIZED_NAME_COUNTRY = "country";
  @SerializedName(SERIALIZED_NAME_COUNTRY)
  private String country;

  public static final String SERIALIZED_NAME_CITY = "city";
  @SerializedName(SERIALIZED_NAME_CITY)
  private String city;


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




   /**
   * Get created
   * @return created
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getCreated() {
    return created;
  }




   /**
   * Get userAgent
   * @return userAgent
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getUserAgent() {
    return userAgent;
  }




   /**
   * Get ipAddress
   * @return ipAddress
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getIpAddress() {
    return ipAddress;
  }




   /**
   * Get browser
   * @return browser
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getBrowser() {
    return browser;
  }




   /**
   * Get browserVersion
   * @return browserVersion
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getBrowserVersion() {
    return browserVersion;
  }




   /**
   * Get deviceBrand
   * @return deviceBrand
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getDeviceBrand() {
    return deviceBrand;
  }




   /**
   * Get deviceModel
   * @return deviceModel
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getDeviceModel() {
    return deviceModel;
  }




   /**
   * Get os
   * @return os
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOs() {
    return os;
  }




   /**
   * Get osVersion
   * @return osVersion
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getOsVersion() {
    return osVersion;
  }




   /**
   * Get channel
   * @return channel
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public ChannelEnum getChannel() {
    return channel;
  }




  public AccessLog country(String country) {
    
    this.country = country;
    return this;
  }

   /**
   * Get country
   * @return country
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getCountry() {
    return country;
  }


  public void setCountry(String country) {
    this.country = country;
  }


   /**
   * Get city
   * @return city
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getCity() {
    return city;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccessLog accessLog = (AccessLog) o;
    return Objects.equals(this.uuid, accessLog.uuid) &&
        Objects.equals(this.created, accessLog.created) &&
        Objects.equals(this.userAgent, accessLog.userAgent) &&
        Objects.equals(this.ipAddress, accessLog.ipAddress) &&
        Objects.equals(this.browser, accessLog.browser) &&
        Objects.equals(this.browserVersion, accessLog.browserVersion) &&
        Objects.equals(this.deviceBrand, accessLog.deviceBrand) &&
        Objects.equals(this.deviceModel, accessLog.deviceModel) &&
        Objects.equals(this.os, accessLog.os) &&
        Objects.equals(this.osVersion, accessLog.osVersion) &&
        Objects.equals(this.channel, accessLog.channel) &&
        Objects.equals(this.country, accessLog.country) &&
        Objects.equals(this.city, accessLog.city);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, created, userAgent, ipAddress, browser, browserVersion, deviceBrand, deviceModel, os, osVersion, channel, country, city);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccessLog {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    userAgent: ").append(toIndentedString(userAgent)).append("\n");
    sb.append("    ipAddress: ").append(toIndentedString(ipAddress)).append("\n");
    sb.append("    browser: ").append(toIndentedString(browser)).append("\n");
    sb.append("    browserVersion: ").append(toIndentedString(browserVersion)).append("\n");
    sb.append("    deviceBrand: ").append(toIndentedString(deviceBrand)).append("\n");
    sb.append("    deviceModel: ").append(toIndentedString(deviceModel)).append("\n");
    sb.append("    os: ").append(toIndentedString(os)).append("\n");
    sb.append("    osVersion: ").append(toIndentedString(osVersion)).append("\n");
    sb.append("    channel: ").append(toIndentedString(channel)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

