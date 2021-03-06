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
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.openapitools.client.model.Status260Enum;
import org.openapitools.jackson.nullable.JsonNullable;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * A ModelSerializer that takes additional arguments for \&quot;fields\&quot;, \&quot;omit\&quot; and \&quot;expand\&quot; in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations
 */
@ApiModel(description = "A ModelSerializer that takes additional arguments for \"fields\", \"omit\" and \"expand\" in order to control which fields are displayed, and whether to replace simple values with complex, nested serializations")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-09-01T11:21:17.898459Z[Etc/UTC]")
public class InvoiceDetails {
  public static final String SERIALIZED_NAME_UUID = "uuid";
  @SerializedName(SERIALIZED_NAME_UUID)
  private UUID uuid;

  public static final String SERIALIZED_NAME_NUMBER = "number";
  @SerializedName(SERIALIZED_NAME_NUMBER)
  private String number;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private Status260Enum status;

  public static final String SERIALIZED_NAME_CREATED = "created";
  @SerializedName(SERIALIZED_NAME_CREATED)
  private OffsetDateTime created;

  public static final String SERIALIZED_NAME_DATE_FROM = "date_from";
  @SerializedName(SERIALIZED_NAME_DATE_FROM)
  private LocalDate dateFrom;

  public static final String SERIALIZED_NAME_DATE_TO = "date_to";
  @SerializedName(SERIALIZED_NAME_DATE_TO)
  private LocalDate dateTo;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private URI url;

  public static final String SERIALIZED_NAME_AMOUNT = "amount";
  @SerializedName(SERIALIZED_NAME_AMOUNT)
  private Double amount;

  public static final String SERIALIZED_NAME_CHARGES = "charges";
  @SerializedName(SERIALIZED_NAME_CHARGES)
  private List<String> charges = new ArrayList<String>();


   /**
   * Get uuid
   * @return uuid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public UUID getUuid() {
    return uuid;
  }




  public InvoiceDetails number(String number) {
    
    this.number = number;
    return this;
  }

   /**
   * Invoice legal number
   * @return number
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Invoice legal number")

  public String getNumber() {
    return number;
  }


  public void setNumber(String number) {
    this.number = number;
  }


  public InvoiceDetails status(Status260Enum status) {
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Status260Enum getStatus() {
    return status;
  }


  public void setStatus(Status260Enum status) {
    this.status = status;
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




  public InvoiceDetails dateFrom(LocalDate dateFrom) {
    
    this.dateFrom = dateFrom;
    return this;
  }

   /**
   * Beginning of charge period
   * @return dateFrom
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Beginning of charge period")

  public LocalDate getDateFrom() {
    return dateFrom;
  }


  public void setDateFrom(LocalDate dateFrom) {
    this.dateFrom = dateFrom;
  }


  public InvoiceDetails dateTo(LocalDate dateTo) {
    
    this.dateTo = dateTo;
    return this;
  }

   /**
   * End of charge period
   * @return dateTo
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "End of charge period")

  public LocalDate getDateTo() {
    return dateTo;
  }


  public void setDateTo(LocalDate dateTo) {
    this.dateTo = dateTo;
  }


   /**
   * Get url
   * @return url
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public URI getUrl() {
    return url;
  }




  public InvoiceDetails amount(Double amount) {
    
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * minimum: -1000000000000
   * maximum: 1000000000000
   * @return amount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getAmount() {
    return amount;
  }


  public void setAmount(Double amount) {
    this.amount = amount;
  }


  public InvoiceDetails charges(List<String> charges) {
    
    this.charges = charges;
    return this;
  }

  public InvoiceDetails addChargesItem(String chargesItem) {
    this.charges.add(chargesItem);
    return this;
  }

   /**
   * Get charges
   * @return charges
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public List<String> getCharges() {
    return charges;
  }


  public void setCharges(List<String> charges) {
    this.charges = charges;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoiceDetails invoiceDetails = (InvoiceDetails) o;
    return Objects.equals(this.uuid, invoiceDetails.uuid) &&
        Objects.equals(this.number, invoiceDetails.number) &&
        Objects.equals(this.status, invoiceDetails.status) &&
        Objects.equals(this.created, invoiceDetails.created) &&
        Objects.equals(this.dateFrom, invoiceDetails.dateFrom) &&
        Objects.equals(this.dateTo, invoiceDetails.dateTo) &&
        Objects.equals(this.url, invoiceDetails.url) &&
        Objects.equals(this.amount, invoiceDetails.amount) &&
        Objects.equals(this.charges, invoiceDetails.charges);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && a.get().getClass().isArray() ? Arrays.equals((T[])a.get(), (T[])b.get()) : Objects.equals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(uuid, number, status, created, dateFrom, dateTo, url, amount, charges);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent()
      ? (a.get().getClass().isArray() ? Arrays.hashCode((T[])a.get()) : Objects.hashCode(a.get()))
      : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoiceDetails {\n");
    sb.append("    uuid: ").append(toIndentedString(uuid)).append("\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    dateFrom: ").append(toIndentedString(dateFrom)).append("\n");
    sb.append("    dateTo: ").append(toIndentedString(dateTo)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    charges: ").append(toIndentedString(charges)).append("\n");
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

