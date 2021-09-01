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

/**
 * CountryList
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class CountryList {
  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_ISO3 = "iso3";
  @SerializedName(SERIALIZED_NAME_ISO3)
  private String iso3;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_LONG_NAME = "long_name";
  @SerializedName(SERIALIZED_NAME_LONG_NAME)
  private String longName;

  public static final String SERIALIZED_NAME_EEA_COUNTRY = "eea_country";
  @SerializedName(SERIALIZED_NAME_EEA_COUNTRY)
  private Boolean eeaCountry;


   /**
   * Get code
   * @return code
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getCode() {
    return code;
  }




   /**
   * Get iso3
   * @return iso3
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getIso3() {
    return iso3;
  }




   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getName() {
    return name;
  }




   /**
   * Get longName
   * @return longName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getLongName() {
    return longName;
  }




   /**
   * Get eeaCountry
   * @return eeaCountry
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getEeaCountry() {
    return eeaCountry;
  }




  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CountryList countryList = (CountryList) o;
    return Objects.equals(this.code, countryList.code) &&
        Objects.equals(this.iso3, countryList.iso3) &&
        Objects.equals(this.name, countryList.name) &&
        Objects.equals(this.longName, countryList.longName) &&
        Objects.equals(this.eeaCountry, countryList.eeaCountry);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, iso3, name, longName, eeaCountry);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CountryList {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    iso3: ").append(toIndentedString(iso3)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    longName: ").append(toIndentedString(longName)).append("\n");
    sb.append("    eeaCountry: ").append(toIndentedString(eeaCountry)).append("\n");
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
