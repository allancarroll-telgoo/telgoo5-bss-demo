---
title: Telgoo5 BSS
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.27"

---

# Telgoo5 BSS

Base URLs:

* <a href="https://www.vcareapi.com:8080">Develop Env: https://www.vcareapi.com:8080</a>

# Authentication

# Default

## POST refer_friend

POST /customer

> Body Parameters

```json
{
  "action": "refer_friend",
  "friend_telephone_number": "",
  "friend_name": "John",
  "enrollment_id": "WCRN11144",
  "referral_enrollment_id": "WCRN8258",
  "agent_id": "your_agent_id",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» action|body|string| yes |This is the fixed value refer_friend|
|» friend_telephone_number|body|string| no |This is the phone number of the person being reffered|
|» friend_name|body|string| no |This is the name of the person being reffered|
|» enrollment_id|body|string| yes |This is the enrollment_id the person reffering|
|» referral_enrollment_id|body|string| yes |This is the enrollment_id of the person being reffered|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "msg": "Success",
  "data": {
    "message": "Success",
    "status": "00",
    "refer_friend_credit_applied": "Yes",
    "insert_status": "Successfully Data inserted in tbl_enroll_cust_discount_credit_master",
    "refer_friend_credit_applied_amount": "0"
  },
  "msg_code": "RESTAPI000"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» message|string|true|none||none|
|»» status|string|true|none||none|
|»» refer_friend_credit_applied|string|true|none||none|
|»» insert_status|string|true|none||none|
|»» refer_friend_credit_applied_amount|string|true|none||none|
|» msg_code|string|true|none||none|

## POST equipment_list

POST /equipment

> Body Parameters

```json
{
  "is_image_required": "Y",
  "additional_info": "Y",
  "website_equipment_phone_type": "Y",
  "action": "equipment_list",
  "agent_id": "your_agent_id",
  "source": "WEBSITE",
  "current_page": 1,
  "record_limit": "15",
  "include_specification": "Y",
  "include_key_benefits": "Y"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» is_image_required|body|string| no |This will return the image of the equimpent. Expected values Y or N|
|» additional_info|body|string| no |This will any additional info specified in the inventory for  the equimpent. Expected values Y or N|
|» website_equipment_phone_type|body|string| no |none|
|» action|body|string| yes |This is the fixed value equipment_list|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» current_page|body|integer| yes |This is the page number|
|» record_limit|body|string| yes |This is the number of items you want to return on one page. Recommended limit is 10|
|» include_specification|body|string| no |Expected values are Y and N. This will return device specifications.|
|» include_key_benefits|body|string| no |Expected values are Y and N. This will return any benefits specified in inventory|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "data": {
    "total_count": 779,
    "records": [
      {
        "model_id": 3,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone® 13 mini",
        "serialize_type": null,
        "amount": "629.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "sku124",
        "discounted_price": "11.00",
        "rating": "5.00",
        "no_of_rating": 4,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": "0.00",
        "records": {
          "0": {
            "model_child_id": 2274,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "STARLIGHT #F8F9EC",
            "amount": "629.00",
            "inventory": 99999,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "FIXED",
            "discounted_price": "629.00",
            "status": "1",
            "version": "2.3",
            "screen": "5.5",
            "camera": "12",
            "talkhour": "120",
            "grade": "New"
          },
          "1": {
            "model_child_id": 2364,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "Green #008000",
            "amount": "629.00",
            "inventory": 58,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "FIXED",
            "discounted_price": "629.00",
            "status": "1",
            "version": "2.3",
            "screen": "5.5",
            "camera": "12",
            "talkhour": "120",
            "grade": "New"
          },
          "total_count1": 2
        }
      },
      {
        "model_id": 5,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "sku127",
        "discounted_price": "7.00",
        "rating": "3.00",
        "no_of_rating": 1,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 6,
        "equipment_type": "Phone Model",
        "make": "APPLE",
        "model": "testpjne",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "CDMA",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU5412",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 7,
        "equipment_type": "Phone Model",
        "make": "SAMSUNG",
        "model": "GALAXY 33",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU512",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 256,
        "equipment_type": "Phone Model",
        "make": "APPLE",
        "model": "iPhone 6 Plus 64GB Space Gray",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "CDMA",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "33345",
        "discounted_price": "0.00",
        "rating": "2.60",
        "no_of_rating": 16,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 519,
        "equipment_type": "Phone Model",
        "make": "APPLE",
        "model": "iPhone SE 32GB Gold Store",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU456",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 769,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone 7 Plus 32GB Jet Black BYO",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "sku7222",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 1188,
        "equipment_type": "Phone Model",
        "make": "SAMSUNG",
        "model": "Galaxy S22 Plus 128GB Phantom Black BYO",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "SIM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "34534534",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 1189,
        "equipment_type": "Phone Model",
        "make": "SAMSUNG",
        "model": "Galaxy S22 Ultra 128GB Phantom Black BYO",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "SIM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "sddsf",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 1190,
        "equipment_type": "Phone Model",
        "make": "BYOD",
        "model": "Device",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "SIM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU45688",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2055,
        "equipment_type": "Phone Model",
        "make": "SAMSUNG",
        "model": "Galaxy S2 Pro",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU2415412",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2056,
        "equipment_type": "Phone Model",
        "make": "VIVO",
        "model": "V15 Pro",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU52144512",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2058,
        "equipment_type": "Phone Model",
        "make": "IPHONE",
        "model": "125",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "CDMA",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKU5214512",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2060,
        "equipment_type": "Phone Model",
        "make": "VIVO",
        "model": "test",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "sku215",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2065,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone® 12",
        "serialize_type": null,
        "amount": "629.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "54645434",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "NO",
        "copay_amount": "0.00",
        "records": {
          "0": {
            "model_child_id": 67,
            "ram_memory": 8,
            "inbuilt_memory": 64,
            "color": "Black #000000",
            "amount": "629.00",
            "inventory": 59,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "629.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "1": {
            "model_child_id": 69,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "White #ffffff",
            "amount": "679.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "679.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "2": {
            "model_child_id": 2386,
            "ram_memory": 8,
            "inbuilt_memory": 64,
            "color": "White #ffffff",
            "amount": "629.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "629.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "3": {
            "model_child_id": 2394,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "Black #000000",
            "amount": "679.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "679.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "4": {
            "model_child_id": 2398,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "Red #FF0000",
            "amount": "679.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "679.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "5": {
            "model_child_id": 2400,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": "Black #000000",
            "amount": "779.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "779.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "6": {
            "model_child_id": 2402,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": "BLUE #0000FF",
            "amount": "779.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "779.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "7": {
            "model_child_id": 2404,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": "Red #FF0000",
            "amount": "779.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "779.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "8": {
            "model_child_id": 2406,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": "White #ffffff",
            "amount": "779.00",
            "inventory": 0,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "779.00",
            "status": "1",
            "version": "9.2",
            "screen": "6",
            "camera": "25",
            "talkhour": "50",
            "grade": "New"
          },
          "total_count1": 9
        }
      },
      {
        "model_id": 2066,
        "equipment_type": "Phone Model",
        "make": "SAMSUNG",
        "model": "Galaxy Su00ae 20 5G",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "GSM",
        "fcc_id": "",
        "hac": "",
        "wifi": "",
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": "",
        "hotspot_capable": "",
        "mrating": "",
        "trating": "",
        "sku": "SKu156156",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": "",
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "YES",
        "copay_amount": null
      },
      {
        "model_id": 2070,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone® SE 3rd Gen",
        "serialize_type": null,
        "amount": "429.99",
        "network_type": "GSM",
        "fcc_id": null,
        "hac": null,
        "wifi": null,
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": null,
        "hotspot_capable": null,
        "mrating": null,
        "trating": null,
        "sku": "1002454",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": null,
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "NO",
        "copay_amount": "0.00",
        "records": {
          "0": {
            "model_child_id": 48,
            "ram_memory": 8,
            "inbuilt_memory": 64,
            "color": "Red #FF0000",
            "amount": "429.99",
            "inventory": 69,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "429.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "1": {
            "model_child_id": 49,
            "ram_memory": 8,
            "inbuilt_memory": 64,
            "color": "STARLIGHT #F8F9EC",
            "amount": "429.99",
            "inventory": 36,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "429.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "2": {
            "model_child_id": 88,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "Red #FF0000",
            "amount": "479.99",
            "inventory": 24,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "479.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "3": {
            "model_child_id": 2258,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": " MIDNIGHT #03012D",
            "amount": "579.99",
            "inventory": 11,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "579.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "4": {
            "model_child_id": 2260,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "STARLIGHT #F8F9EC",
            "amount": "479.99",
            "inventory": 14,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "479.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "5": {
            "model_child_id": 2268,
            "ram_memory": 8,
            "inbuilt_memory": 64,
            "color": " MIDNIGHT #03012D",
            "amount": "429.99",
            "inventory": 87,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "429.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "6": {
            "model_child_id": 2270,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": " MIDNIGHT #03012D",
            "amount": "479.99",
            "inventory": 32,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "479.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "7": {
            "model_child_id": 2298,
            "ram_memory": 8,
            "inbuilt_memory": 256,
            "color": "Red #FF0000",
            "amount": "579.99",
            "inventory": 17,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "579.99",
            "status": "1",
            "version": "2.3",
            "screen": "6.0",
            "camera": "20",
            "talkhour": "130",
            "grade": "New"
          },
          "total_count1": 8
        }
      },
      {
        "model_id": 2071,
        "equipment_type": "Phone Model",
        "make": "Samsung",
        "model": "Galaxy® S22 Ultra",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "SIM",
        "fcc_id": null,
        "hac": null,
        "wifi": null,
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": null,
        "hotspot_capable": null,
        "mrating": null,
        "trating": null,
        "sku": "SKU8789798",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": null,
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "NO",
        "copay_amount": "0.00"
      },
      {
        "model_id": 2072,
        "equipment_type": "Phone Model",
        "make": "Samsung",
        "model": "Galaxy® S22",
        "serialize_type": null,
        "amount": "699.99",
        "network_type": "SIM",
        "fcc_id": null,
        "hac": null,
        "wifi": null,
        "data": "",
        "os": "Android",
        "Data": "",
        "OS": "Android",
        "voice_only": null,
        "hotspot_capable": null,
        "mrating": null,
        "trating": null,
        "sku": "SKU8998",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": "",
        "grade": null,
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "NO",
        "copay_amount": "0.00",
        "records": {
          "0": {
            "model_child_id": 2272,
            "ram_memory": 8,
            "inbuilt_memory": 128,
            "color": "PHANTOM BLACK #2D3134",
            "amount": "699.99",
            "inventory": 28,
            "discount": "",
            "discount_from": null,
            "discount_till": null,
            "discount_type": "",
            "discounted_price": "699.99",
            "status": "1",
            "version": "3.6",
            "screen": "5.5",
            "camera": "24",
            "talkhour": "120",
            "grade": "New"
          },
          "total_count1": 1
        }
      },
      {
        "model_id": 2073,
        "equipment_type": "Phone Model",
        "make": "Apple",
        "model": "iPhone® SE",
        "serialize_type": null,
        "amount": "0.00",
        "network_type": "SIM",
        "fcc_id": null,
        "hac": null,
        "wifi": null,
        "data": "",
        "os": "iOS",
        "Data": "",
        "OS": "iOS",
        "voice_only": null,
        "hotspot_capable": null,
        "mrating": null,
        "trating": null,
        "sku": "1006130",
        "discounted_price": "0.00",
        "rating": "0.00",
        "no_of_rating": 0,
        "device_type": "PHONE",
        "contract_consent": "",
        "contract_discount": "0.00",
        "short_description": null,
        "grade": null,
        "acp_website_show": "Y",
        "prepaid_website_show": "Y",
        "is_esim": "NO",
        "copay_amount": null
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» data|object|true|none||none|
|»» total_count|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» model_id|integer|true|none||none|
|»»» equipment_type|string|true|none||none|
|»»» make|string|true|none||none|
|»»» model|string|true|none||none|
|»»» serialize_type|null|true|none||none|
|»»» amount|string|true|none||none|
|»»» network_type|string|true|none||none|
|»»» fcc_id|string¦null|true|none||none|
|»»» hac|string¦null|true|none||none|
|»»» wifi|string¦null|true|none||none|
|»»» data|string|true|none||none|
|»»» os|string|true|none||none|
|»»» Data|string|true|none||none|
|»»» OS|string|true|none||none|
|»»» voice_only|string¦null|true|none||none|
|»»» hotspot_capable|string¦null|true|none||none|
|»»» mrating|string¦null|true|none||none|
|»»» trating|string¦null|true|none||none|
|»»» sku|string|true|none||none|
|»»» discounted_price|string|true|none||none|
|»»» rating|string|true|none||none|
|»»» no_of_rating|integer|true|none||none|
|»»» device_type|string|true|none||none|
|»»» contract_consent|string|true|none||none|
|»»» contract_discount|string|true|none||none|
|»»» short_description|string¦null|true|none||none|
|»»» grade|string¦null|true|none||none|
|»»» acp_website_show|string|true|none||none|
|»»» prepaid_website_show|string|true|none||none|
|»»» is_esim|string|true|none||none|
|»»» copay_amount|string¦null|true|none||none|
|»»» records|object|true|none||none|
|»»»» 0|object|true|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 1|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 2|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 3|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 4|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 5|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 6|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 7|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» 8|object|false|none||none|
|»»»»» model_child_id|integer|true|none||none|
|»»»»» ram_memory|integer|true|none||none|
|»»»»» inbuilt_memory|integer|true|none||none|
|»»»»» color|string|true|none||none|
|»»»»» amount|string|true|none||none|
|»»»»» inventory|integer|true|none||none|
|»»»»» discount|string|true|none||none|
|»»»»» discount_from|null|true|none||none|
|»»»»» discount_till|null|true|none||none|
|»»»»» discount_type|string|true|none||none|
|»»»»» discounted_price|string|true|none||none|
|»»»»» status|string|true|none||none|
|»»»»» version|string|true|none||none|
|»»»»» screen|string|true|none||none|
|»»»»» camera|string|true|none||none|
|»»»»» talkhour|string|true|none||none|
|»»»»» grade|string|true|none||none|
|»»»» total_count1|integer|true|none||none|

# APIs for Prepaid/Postpaid order flows/Use Case: APIs for dealer portal(Prepaid)

## POST Get available money in dealer wallet

POST /dealer

> Body Parameters

```json
{
  "type": "get",
  "action": "wallet",
  "agent_id": "Devteam",
  "external_transaction_id": "123456APCTG5",
  "source": "API"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» type|body|string| yes |This is a fixed value and should be "get" when you are fetching amount from the dealer's wallet.|
|» action|body|string| yes |This is a fixed value and should be "wallet" for this API.|
|» agent_id|body|string| yes |This is the dealer/user login id in Telgoo5. This is the user for  which you want to check dealer wallet balance.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» agent_id**: This is the dealer/user login id in Telgoo5. This is the user for  which you want to check dealer wallet balance.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "errors": [
    "Invalid Agent Id"
  ],
  "msg": "Invalid Agent Id",
  "msg_code": "RESTAPI104",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SaXZlcnRlbEluY0NsaWVudFVzZXIiLCJwYXNzd29yZCI6IkRlbW8tUml2ZXJ0ZWw1a3czeTh2cHI0bmYiLCJwaW4iOiJEZW1vLTMxNzc0ODgyMDM5NCIsInZlbmRvcl9pZCI6IkRlbW8tUml2ZXJ0ZWxJbmNDbGllbnQiLCJsb2dfaWQiOjY0MjE0MTcsInVybCI6Imh0dHBzOi8vZGVtby1yaXZlcnRlbC50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzE4OTA2MTczfQ.ChpYzDcLr_g7_BP65R6OYuFIxwnmS4_pdRBRjp64wEQ"
}
```

```json
{
  "errors": [
    "Please enter valid type i.e. add or get"
  ],
  "msg": "Error occured",
  "msg_code": "RESTAPI110",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SaXZlcnRlbEluY0NsaWVudFVzZXIiLCJwYXNzd29yZCI6IkRlbW8tUml2ZXJ0ZWw1a3czeTh2cHI0bmYiLCJwaW4iOiJEZW1vLTMxNzc0ODgyMDM5NCIsInZlbmRvcl9pZCI6IkRlbW8tUml2ZXJ0ZWxJbmNDbGllbnQiLCJsb2dfaWQiOjY0MjE0NTgsInVybCI6Imh0dHBzOi8vZGVtby1yaXZlcnRlbC50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzE4OTA2MjM5fQ.0Lphgn-xzSMIuB1nNrGGUXykpAwkAhllIa52w8suGsw"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errors|[string]|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# APIs for Prepaid/Postpaid order flows/Use Case: APIs for customer self care

## POST cancel_autopay

POST /autopay

This API can be used to cancel/remove autopay from the customer's account in Telgoo5.

> Body Parameters

```json
{
  "enrollment_id": "A2069",
  "action": "cancel_autopay",
  "agent_id": "ewebsiteapi",
  "autopay_type": "PLAN",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» enrollment_id|body|string| yes |enrollment_id can be obtained from the responses of the following APIs:|
|» action|body|string| yes |This should be the fixed value for this API the value is cancel_autopay|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» autopay_type|body|string| yes |This should be the fixed value for this API the value is PLAN|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» enrollment_id**: enrollment_id can be obtained from the responses of the following APIs:

- [create_customer_prepaid_multiline](api-7530812): When a customer is created enrollment_id for each line is returned in the response of this API call.    

- [customer_info](api-7530928)

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "errors": [
    "Auto Pay not set for selected Customer."
  ],
  "msg": "Error occured",
  "msg_code": "RESTAPI110",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiUmVhbGx5Q29tbXVuaWNhdGlvbkluY0NsaWVudE5ld1VzZXIiLCJwYXNzd29yZCI6IlJlYWxseUNvN2M0M3I3NGQzMjU1IiwicGluIjoiNjUxNzIxNjE0NDc1IiwidmVuZG9yX2lkIjoiUmVhbGx5Q29tbXVuaWNhdGlvbkluY0NsaWVudE5ldyIsImxvZ19pZCI6MjI1MTgwMjExNTcwMjA5NiwidXJsIjoiaHR0cHM6Ly9yZWFsbHkudGVsZ29vNS5jb20vdmNhcmVPc3NBcGkvIn0sImV4cCI6MTcxOTg1NDA2MH0.5-1aZpYo7WBfs_ZV6dK3rJrwzf9NzSMXL8dx2Ng3t_Y"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errors|[string]|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

## POST create_portin_v2_when_create_customer_was_called_without_portin_tag

POST /port

This API is used to submit the port in request for the new customers. 

:::highlight green 📌
This API will be used only when you created a new customer using [create_customer_prepaid_multiline](api-7530812) API and when creating a new customer you did not specify that its a PORTIN order in **activation_type** attribute.
**activation_type** attribute in [create_customer_prepaid_multiline](api-7530812) API determines if its a new number activation or portin activation.

**activation_type** attribute in [create_customer_prepaid_multiline](api-7530812) API accepts following values
- NEWACTIVATION: If the value is NEWACTIVATION then customer will be given a new telephone number.

- PORTIN: If the value is PORTIN then we will process a portin order.

Now, if you do not want customer to decide if they want to port the number or want a new number during the purchase you can simply pass activation_type as NEWACTIVATION. When you do this you do not have to collect any port information upfront.

After the customer is created and purchase is complete you can preset the options to the customer if the want to port the number or if the need a new number. 
If the want to port the number then you can use [create_portin_v2_when_create_customer_was_called_without_portin_tag](api-7914460) API to process the port order.
:::

<Steps>
  <Step title="First Step">
You create a customer using [create_customer_prepaid_multiline](api-7530812) with **"activation_type" as "NEWACTIVATION"**
  </Step>

  <Step title="Second Step">
  Then you call [create_portin_v2_when_create_customer_was_called_without_portin_tag](api-7914460) API. In this API you can send all of the port information.
  </Step>
      <Step title="Third Step">
Use [query_portin](api-7530925) API to check the port status. If the port is completed its all set and you can proceed to any other actions you have.
If there is an error/resolution required follow fifth step.          
  </Step>
          <Step title="Fourth Step">
Use [update_portin](api-7530927) API to update the port information and resubmit the port. After submission repeat fourth step.      
  </Step>
</Steps>

:::tip
It is recommended to keep at least 10 seconds gap between the [create_portin_v2_when_create_customer_was_called_without_portin_tag](api-7914460) API and query_portin API as it could take upto that much time for the port to go over to the old carrier and respond back to us. And same thing goes with update_portin API and query_portin API.
:::

**enrollment_id** attribute in this API is a conditional. In the request you are needed to send either enrollment_id or sim.
In case you send both enrollment_id and sim we will give priorty to enrollment_id and will fetch the customer based on enrollment_id to activate it.

**sim** attribute in this API is conditional. This is the sim that is attached to the customer's account.
When you send only sim and no enrollment_id in the request we will fetch the customer on the basis of sim to activate it.

**imei** attribute in this API is conditional and is needed where the carrier being used is either of the following TELGOOATT, HELIX, ATT, VERIZON, BLUECONNECTS.

In case your sim is already tagged to imei in Telgoo5 inventory you are not needed to send it.

> Body Parameters

```json
{
  "enrollment_id": "WN11985",
  "first_name": "john",
  "last_name": "allen",
  "account_number": "985694",
  "zip_code": "21215",
  "state": "MD",
  "city": "baltimore",
  "address_one": "",
  "address_two": "",
  "password_pin": "36544455",
  "port_number": "2062091145",
  "imei": "",
  "sim": "",
  "current_carrier": "",
  "action": "create_portin_v2_when_create_customer_was_called_without_portin_tag",
  "agent_id": "ewebsiteapi",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» enrollment_id|body|string| yes |This is the enrollment_id for the customer on which you are placing the port request.|
|» first_name|body|string| yes |This is the first name of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» last_name|body|string| yes |This is the last name of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» account_number|body|string| yes |This is the account number of the customer with the service provider from where customer is porting over the number. If customer is not able to provide this then they can contact there current provider to get the account number.|
|» zip_code|body|string| yes |This is the zip code of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» state|body|string| yes |This is the state of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» city|body|string| yes |This is the city of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» address_one|body|string| yes |This is the address line one of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» address_two|body|string| no |This is the address line two of the customer as registered with the old service provider from where customer is porting the number over to you.|
|» password_pin|body|string| yes |This is the port out PIN/password of the customer with the service provider from where customer is porting over the number. If customer is not able to provide this then they can contact there current provider to get the account number.|
|» port_number|body|string| yes |This is the phone number that customer wants to portin over to you.|
|» imei|body|string| no |This is the IMEI of the device customer want to use, only needed if your carrier is ATT|
|» sim|body|string| no |This is the sim that is attached on the customer's account.|
|» current_carrier|body|string| no |This is the name of the current service provider from where customer is porting out the number.|
|» action|body|string| yes |This parameter must be set to a fixed value: **create_portin_v2_when_create_customer_was_called_without_portin_tag** for this API.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» enrollment_id**: This is the enrollment_id for the customer on which you are placing the port request.

enrollment_id can be obtained from the responses of the following APIs:

- [create_customer_prepaid_multiline](api-7530812): When a customer is created enrollment_id for each line is returned in the response of this API call.
- [customer_info](api-7530928): You can also fetch the enrollment_id associated with the customer using te customer_info API.

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "errors": "PortinRequest: SIM or new SIM not found",
  "msg": "Error occurred",
  "msg_code": "RESTAPI110",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jVXNlciIsInBhc3N3b3JkIjoiRGVtby1SZWFsbHlDbzRkOG43cTM2cnlkMyIsInBpbiI6IkRlbW8tMzkwMzExNDQ2Nzk3IiwidmVuZG9yX2lkIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jIiwibG9nX2lkIjo2MDYyOTA2LCJ1cmwiOiJodHRwczovL2RlbW8tcmVhbGx5LnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTgzNjg3MTh9.6exCT6G4SXfZPMwFwYxDr0f_nxP2LUnsE9e5RZkYZdw"
}
```

```json
{
  "errors": "PortinRequest:",
  "msg": "Error occurred",
  "msg_code": "RESTAPI110",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jVXNlciIsInBhc3N3b3JkIjoiRGVtby1SZWFsbHlDbzRkOG43cTM2cnlkMyIsInBpbiI6IkRlbW8tMzkwMzExNDQ2Nzk3IiwidmVuZG9yX2lkIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jIiwibG9nX2lkIjo2MDYzNzQ0LCJ1cmwiOiJodHRwczovL2RlbW8tcmVhbGx5LnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTgzNjk2ODF9.F_gEvo-mD-zxeY0bybQL5Kd2_Eaoq9Xd7Edg9M-Boro"
}
```

```json
{
  "errors": "No customer found against this enrolment ID",
  "msg": "Error occurred",
  "msg_code": "RESTAPI110",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jVXNlciIsInBhc3N3b3JkIjoiRGVtby1SZWFsbHlDbzRkOG43cTM2cnlkMyIsInBpbiI6IkRlbW8tMzkwMzExNDQ2Nzk3IiwidmVuZG9yX2lkIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jIiwibG9nX2lkIjo2MDYzNzY3LCJ1cmwiOiJodHRwczovL2RlbW8tcmVhbGx5LnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTgzNjk3MjF9.xRtlxepCWkVufbvPcvaRCHcl71ukConCAQHdmKkDi0c"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» errors|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

## POST get_usage

POST /usage

This API is used to get the usage on the customer's account. This API can only be used to fetch the usage record on the account for the last 90 days only. You can ofcourse define the date range but that range can only fall between the last 90 days only.

You can also use this API to get the usage summary, for the user. When using this API to get the summary it will by default give the summary of the last 90 days and you can not define a date range on that.

When using the API to get the summary your request should be as follows:

```js
{
    "agent_id": "your_agent_id",
    "source": "TABLET",
    "action": "get_usage",
    "enrollment_id": "WN10958",
    "summary_by_user": "Y"
}
```

When there are multiple lines associated with the account it will always return the summary for all the lines.

:::highlight purple 💡
When there are multiple lines associated with the account it will always return the summary for all the lines.
:::

:::tip
To proceed with a usage check, ensure the following conditions are met based on the [customer_info](api-7530928) API:

The customer account must have both a telephone number (**"telephone_number"**)and a SIM card **("esn_number")**.

The customer status **("status": "Active",)** must be either Active or Suspend.
If these conditions are not met, the usage check should not be allowed.
:::

> Body Parameters

```json
{
  "agent_id": "ewebsiteapi",
  "source": "TABLET",
  "action": "get_usage",
  "enrollment_id": "A26927",
  "start_date": "2024-06-06",
  "end_date": "2024-06-10",
  "external_transaction_id": "123456APCTG5",
  "summary_by_user": "N"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| no |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» action|body|string| yes |This parameter must be set to a fixed value: **get_usage** for this API.|
|» enrollment_id|body|string| yes |enrollment_id can be obtained from the responses of the following APIs:|
|» start_date|body|string| yes |This is the end date of the duration till when you want to see the usage on customer's account the is in YYYY-MM-DD format. Only needed when summary_by_user is "N"|
|» end_date|body|string| yes |This is the end date of the duration till when you want to see the usage on customer's account the is in YYYY-MM-DD format. Only needed when summary_by_user is "N"|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» summary_by_user|body|string| yes |When using the API to get the summary your request should be as follows:|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

**» enrollment_id**: enrollment_id can be obtained from the responses of the following APIs:

- [create_customer_prepaid_multiline](api-7530812): When a customer is created enrollment_id for each line is returned in the response of this API call.
- [customer_info](api-7530928): You can also fetch the enrollment_id associated with the customer using the customer_info API.

**» summary_by_user**: When using the API to get the summary your request should be as follows:

```js
{
    "agent_id": "your_agent_id",
    "source": "TABLET",
    "action": "get_usage",
    "enrollment_id": "WN10958",
    "summary_by_user": "Y"
}
```

> Response Examples

```json
{
  "data": {
    "data_usage_unit_type": "KB",
    "decimal_digit_number_usage": 4,
    "total_usage": {
      "data": 333,
      "mms": 0,
      "sms": 1,
      "total_normal_usage": 0,
      "total_throttled_usage": 0,
      "voice": 0
    },
    "usage_detail": [
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-07 09:14:48",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-07 09:14:47",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 46,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-07 09:09:31",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-07 09:09:30",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 46,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 23:26:14",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 23:26:13",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 17,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "",
        "dialled_digit": "",
        "effective_date": "2024-06-06 12:35:51",
        "other_party_number": 2222221136,
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 1,
        "unit_more_digit": "",
        "unitun": "",
        "usage_type": "SMS_MT"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:50:03",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:50:02",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 36,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:44:54",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:44:53",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 45,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:39:13",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:39:12",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 36,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:36:12",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:36:11",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 37,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:35:54",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 3,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      },
      {
        "call_type": "Charged",
        "dialled_digit": "",
        "effective_date": "2024-06-06 10:35:53",
        "other_party_number": "Data Usage",
        "redirecting_party": "",
        "resource": 5125766339,
        "unit": 46,
        "unit_more_digit": "",
        "unitun": "KB",
        "usage_type": "DATA"
      }
    ]
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiUmVhbGx5Q29tbXVuaWNhdGlvbkluY0NsaWVudE5ld1VzZXIiLCJwYXNzd29yZCI6IlJlYWxseUNvN2M0M3I3NGQzMjU1IiwicGluIjoiNjUxNzIxNjE0NDc1IiwidmVuZG9yX2lkIjoiUmVhbGx5Q29tbXVuaWNhdGlvbkluY0NsaWVudE5ldyIsImxvZ19pZCI6MTEyNTkwMjE1MDM4NTI1MSwidXJsIjoiaHR0cHM6Ly9yZWFsbHkudGVsZ29vNS5jb20vdmNhcmVPc3NBcGkvIn0sImV4cCI6MTcxODAzOTk4Mn0.FI127l9OY-zBsvR7FycX5cbwEvboo8T3vVe8u5GOSYs"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» data_usage_unit_type|string|true|none||none|
|»» decimal_digit_number_usage|integer|true|none||none|
|»» total_usage|object|true|none||none|
|»»» data|integer|true|none||none|
|»»» mms|integer|true|none||none|
|»»» sms|integer|true|none||none|
|»»» total_normal_usage|integer|true|none||none|
|»»» total_throttled_usage|integer|true|none||none|
|»»» voice|integer|true|none||none|
|»» usage_detail|[object]|true|none||none|
|»»» call_type|string|true|none||none|
|»»» dialled_digit|string|true|none||none|
|»»» effective_date|string|true|none||none|
|»»» other_party_number|string|true|none||none|
|»»» redirecting_party|string|true|none||none|
|»»» resource|integer|true|none||none|
|»»» unit|integer|true|none||none|
|»»» unit_more_digit|string|true|none||none|
|»»» unitun|string|true|none||none|
|»»» usage_type|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# APIs for Prepaid/Postpaid order flows/topup

## POST topup_list

POST /topup

### PURPOSE: 

This API provides the available top-up options for customer purchases.

> Body Parameters

```json
{
  "action": "topup_list",
  "agent_id": "ewebsiteapi",
  "source": "WEBSITE",
  "topup_type": "DATA",
  "payment_method": "Credit Card",
  "external_transaction_id": "123456APCTG5",
  "state": "LA"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed parameter. Pass "topup_list" to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» topup_type|body|string| yes |The type of top-up added. Possible values for this parameter are:|
|» payment_method|body|string| yes |Mention the type of payment method.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» state|body|string| no |Specify the state for which you would like to generate the top-up list. If you are not passing anything then it will display results for all states.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial, you can learn about user setup in Telgoo5.
</Card>
:::

**» topup_type**: The type of top-up added. Possible values for this parameter are:
**TOPUP**, **DATA**, **ILD**, **ALL**, **ADDON**, **IRTOPUP**

> Response Examples

```json
{
  "data": {
    "data_plans": [
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 5,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2068",
        "plan_id": 3785,
        "sms": null,
        "type": "DATA",
        "voice": null
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 10,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2069",
        "plan_id": 3786,
        "sms": null,
        "type": "DATA",
        "voice": null
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 10,
        "carrier": "TMB",
        "category": "",
        "data": "0",
        "description": "Training Topup",
        "details": "Training Topup",
        "expiry_days": 0,
        "is_tax_included": "",
        "plan_code": "2063",
        "plan_id": 4074,
        "sms": "50",
        "type": "DATA",
        "voice": "50"
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 10,
        "carrier": "ZOOMATT",
        "category": "",
        "data": "123MB",
        "description": "M11",
        "details": "M11",
        "expiry_days": 0,
        "is_tax_included": "Y",
        "plan_code": "Test Topup 1",
        "plan_id": 4176,
        "sms": "12",
        "type": "DATA",
        "voice": "12"
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 18.99,
        "carrier": "TMB",
        "category": "",
        "data": "2048",
        "description": "2 GB Data Topup",
        "details": "2 GB Data Topup",
        "expiry_days": 0,
        "is_tax_included": "N",
        "plan_code": "2398",
        "plan_id": 4249,
        "sms": "0",
        "type": "DATA",
        "voice": "0"
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 18.99,
        "carrier": "SPR",
        "category": "",
        "data": "0",
        "description": "2 GB TOPUP",
        "details": "2 GB TOPUP",
        "expiry_days": 0,
        "is_tax_included": "N",
        "plan_code": "500",
        "plan_id": 4282,
        "sms": "0",
        "type": "DATA",
        "voice": "500"
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 20,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2070",
        "plan_id": 3787,
        "sms": null,
        "type": "DATA",
        "voice": null
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 42,
        "carrier": "SPR",
        "category": null,
        "data": "0",
        "description": "Topup Name",
        "details": "Topup Name",
        "expiry_days": 0,
        "is_tax_included": "",
        "plan_code": "sdgffgsdgsdg",
        "plan_id": 3947,
        "sms": "0",
        "type": "DATA",
        "voice": "2323"
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 50,
        "carrier": "TMB",
        "category": "",
        "data": "1000000",
        "description": "abcd",
        "details": "abcd",
        "expiry_days": 0,
        "is_tax_included": "",
        "plan_code": "TestData",
        "plan_id": 4142,
        "sms": "0",
        "type": "DATA",
        "voice": "0"
      }
    ],
    "minute_plans": [
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 5,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2068",
        "plan_id": 3785,
        "sms": null,
        "type": "TOPUP",
        "voice": null
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 10,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2069",
        "plan_id": 3786,
        "sms": null,
        "type": "TOPUP",
        "voice": null
      },
      {
        "allowed_service_type": "NL_LIFELINE_ACP",
        "amount": 20,
        "carrier": "TMB",
        "category": null,
        "data": null,
        "description": "",
        "details": "",
        "expiry_days": 30,
        "is_tax_included": "",
        "plan_code": "2070",
        "plan_id": 3787,
        "sms": null,
        "type": "TOPUP",
        "voice": null
      }
    ]
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjYzNDk4OTYsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTg4MTgxNjN9.yJ2aKh5wUxPixudnYoUWTbN4EUPeN-Mxp-xeDSxYyz4"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» data_plans|[object]|true|none||none|
|»»» allowed_service_type|string|true|none||none|
|»»» amount|integer|true|none||none|
|»»» carrier|string|true|none||none|
|»»» category|string¦null|true|none||none|
|»»» data|string¦null|true|none||none|
|»»» description|string|true|none||none|
|»»» details|string|true|none||none|
|»»» expiry_days|integer|true|none||none|
|»»» is_tax_included|string|true|none||none|
|»»» plan_code|string|true|none||none|
|»»» plan_id|integer|true|none||none|
|»»» sms|string¦null|true|none||none|
|»»» type|string|true|none||none|
|»»» voice|string¦null|true|none||none|
|»» minute_plans|[object]|true|none||none|
|»»» allowed_service_type|string|true|none||none|
|»»» amount|integer|true|none||none|
|»»» carrier|string|true|none||none|
|»»» category|null|true|none||none|
|»»» data|null|true|none||none|
|»»» description|string|true|none||none|
|»»» details|string|true|none||none|
|»»» expiry_days|integer|true|none||none|
|»»» is_tax_included|string|true|none||none|
|»»» plan_code|string|true|none||none|
|»»» plan_id|integer|true|none||none|
|»»» sms|null|true|none||none|
|»»» type|string|true|none||none|
|»»» voice|null|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# APIs for Prepaid/Postpaid order flows/cards

## POST update_card

POST /cards

This REST API is used to update a saved card. 

> Body Parameters

```json
{
  "action": "update_card",
  "agent_id": "your_agent_ID",
  "source": "API",
  "enrollment_id": "ETEL784512",
  "card_id": "1128",
  "card_type": "",
  "card_number": "",
  "cvv": "",
  "expiration_month": "",
  "expiration_year": "",
  "name_on_card": "",
  "billing_state": "",
  "billing_city": "",
  "billing_zip": "",
  "billing_address1": "",
  "external_transaction_id": "123456APCTG5",
  "billing_address2": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed parameter. Pass **update_card** to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |The source of the API call.|
|» enrollment_id|body|string| no |The enrollment ID of the customer account for which you would like to update the card information.|
|» card_id|body|string| no |Enter the card ID of the saved card on the customer account if you wish to designate that card as the primary card.|
|» card_type|body|string| yes |The type of the updated card.|
|» card_number|body|string| yes |The existing card number of the customer.|
|» cvv|body|string| yes |The CVV number of the updated card.|
|» expiration_month|body|string| yes |The expiration month of the updated card.|
|» expiration_year|body|string| yes |The expiration year of the updated card.|
|» name_on_card|body|string| no |The name on the card.|
|» billing_state|body|string| no |The billing state of the updated card.|
|» billing_city|body|string| no |The billing city of the updated card.|
|» billing_zip|body|string| no |The billing zip of the updated card.|
|» billing_address1|body|string| no |The street address of the billing address.|
|» billing_address2|body|string| no |The apartment or house number of the billing address.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» card_id**: Enter the card ID of the saved card on the customer account if you wish to designate that card as the primary card.

Card ID can be retrieved from **id** field in [saved_card](api-7773451) API or **trans_id** from the [add_card](api-7733026) API.

> Response Examples

```json
{
  "data": {
    "CUSTOMER_TOKEN": "519041750",
    "ERRORCODE": "",
    "ERRORMSG": "",
    "GETWAYRESPONSESTR": "SUCCESS::80022036610::0.00::Y::AK931W::519041750::529411773",
    "LASTINSERTEDCARDID": "1553",
    "LONGMESSAGE": "",
    "MERREFODE": "VCAREBKRIPU49LY",
    "PAYMENT_TOKEN": "529411773",
    "RECONCILIATIONID": "AK931W",
    "REQUESTTOKEN": "AK931W",
    "STATUS": "SUCCESS",
    "TRANSACTIONNO": "80022036610"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1XaG9vcENvbm5lY3QyMDIzMDUwMVVzZXIyMDIzMDUwMSIsInBhc3N3b3JkIjoiRGVtby1XaG9vcENvbjg4MjczNHF0NTRtdSIsInBpbiI6IkRlbW8tMjQyODcxOTk2MjczIiwidmVuZG9yX2lkIjoiRGVtby1XaG9vcENvbm5lY3QyMDIzMDUwMSIsImxvZ19pZCI6NzMyMjY2OSwidXJsIjoiaHR0cHM6Ly9kZW1vLXdob29wY29ubmVjdC50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzIxMDYzNDEzfQ.BHkEEiP1aDPjAp_cYVNynLAQXYk42T0m068ilo_SYOc"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# APIs for Lifeline

## POST authenticate

POST /authenticate

### Purpose:
Use this API to obtain the token. The token must be included in the header for all subsequent API calls.

### Token Validity:

- The token is valid for a maximum of 15 seconds from its issuance and will expire after this period.

### Token Lifecycle:

- When you call any API, the response will include a new authentication token.
- This new token can be used for another API call.
- You do not need to call the token API every time you make an API call unless:
1. You are using the API for the first time and do not have a token.
2. The previously returned token has expired.

:::info
- Ensure the token is included in the header for all API calls.
- Monitor the validity of your token and request a new one as needed.

**The table below lists API message codes, indicating response success or failure, along with descriptions and resolution instructions.**
| Message Code | Message | Resolution |
|--------------|---------|------------|
| RESTAPI000   | "Successfully Authenticate"| No action needed! Successful API call. |
| RESTAPI001   | "Invalid credentials!!"<br> " username, password, pin, and vendor_id are required" | Ensure all four parameters are entered correctly and try again. <br> Verify that you have entered all required parameters- the username, password, pin, and vendor_id. Contact your manager if you do not have access to these credentials. |

:::

> Body Parameters

```json
{
  "vendor_id": "your_vendorid",
  "username": "your_username",
  "password": "your_password",
  "pin": "your_pin"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» vendor_id|body|string| yes |A unique Vendor ID is associated with the MVNO. This is used for authorization purpose and can be obtained by contacting your account manager.|
|» username|body|string| yes |A unique User name is associated with the MVNO. This is used for authorization purpose and can be obtained by contacting your account manager.|
|» password|body|string| yes |This is a random string which is generated by Vcare and is tied to the MVNO user name. This is specifically used for authentication purpose and can be obtained by contacting your account manager.|
|» pin|body|string| yes |This is generated by Telgoo5 to provide an additional layer of security. This is used for authentication purpose and can be obtained by contacting your account manager.|

> Response Examples

```json
{
  "msg": "Successfully Authenticate",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jVXNlciIsInBhc3N3b3JkIjoiRGVtby1SZWFsbHlDbzRkOG43cTM2cnlkMyIsInBpbiI6IkRlbW8tMzkwMzExNDQ2Nzk3IiwidmVuZG9yX2lkIjoiRGVtby1SZWFsbHlDb21tdW5pY2F0aW9uSW5jIiwibG9nX2lkIjo1MjM4NzczLCJ1cmwiOiJodHRwczovL2RlbW8tcmVhbGx5LnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTYyNDQ3NTh9.eFFeg400VLzPA9gAHiEQ-T_CxAPeXJlcn925mR42-WI"
}
```

```json
{
  "msg": "Invalid credentials!!",
  "msg_code": "RESTAPI001",
  "token": ""
}
```

```json
{
  "msg": "username and password pin and vendor_id are required",
  "msg_code": "RESTAPI001",
  "token": ""
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg|string|false|none||none|
|» msg_code|string|false|none||none|
|» token|string|false|none||none|

## POST check_service_availability

POST /enrollment

### Purpose:
The check_service_availability API is used to verify if a specific Zip Code is included as a serviceable area in Telgoo5.

### Functionality:

If the services are not available for the given Zip Code, the API will return a response indicating that the services are unavailable.
If the Zip Code is not currently a serviceable area, partners can either add it through Telgoo5 or contact their account manager for assistance.

:::info
<Card title="How to add service area zip codes in Telgoo5 from Telgoo5 dashboard?" href="https://support.telgoo5.com/hc/en-us/articles/32259845211289-7-Verify-Add-Service-Area-Zip-Codes">

</Card>
**Why do Telgoo5 needs a zip code?**

A zip code is used for the following purposes in Telgoo5:

1. To determine the service availability. You add the zip codes in Telgoo5 where you provide services, if a customer uses a zip code outside your designated service area you can block the application from further processing.
2. Telgoo5 uses service zip codes for tax calculation. Taxes are not fixed across all the zip codes, taxes vary from county to county, city to city and zip code to zip code. That's why we require a correct zip code for accurate tax calculations.
3. To determine the area code of the new telephone number which will assigned to the customer upon activation.

:::

### Additional Feature:

This API also generates an enrollment ID for an order. The generated enrollment_id will be used to process order completion in other APIs which are:

- [make_payment with card](api-7530808)
- [make_payment with stripe hosted checkout](api-7533878)
- [address_validation](api-7585045)
- [programs_income_list](api-7609773)
- [get_enrollments](api-7710451)
- [eligibility_check](api-7666819)
- [eligibility_status_check](api-7706740)
- [plan_list](api-7731079)
- [payment_details](api-7731259)
- [create_lifeline_customer](api-7636604)

> Body Parameters

```json
{
  "action": "check_service_availability",
  "zip_code": "98104",
  "enrollment_type": "LIFELINE",
  "is_enrollment": "Y",
  "agent_id": "your_agent_id",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This parameter must be set to a fixed value: **check_service_availability** for this API.|
|» zip_code|body|string| yes |This is the Zip Code for the customer's service address. It should contain only numbers, no letters or special characters, and must be exactly 5 digits long.|
|» enrollment_type|body|string| yes |When creating an order, the value passed should correspond to the type of service:|
|» is_enrollment|body|string| no |**Expected values: "Y" or "N" |
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» zip_code**: This is the Zip Code for the customer's service address. It should contain only numbers, no letters or special characters, and must be exactly 5 digits long.

:::note
**What is considered a service address in Telgoo5?**

Service address in Telgoo5 refers to te customer's primary address where customer will be using the services primarily.
        
-     For example: If a customer lives in Los Angles, CA then you should use a zip code from Los Angles, CA to verify the service availability.
    
This zip code will be used in other API calls as well. In the payment details API this zip code will be used for tax calculation purposes, in add_line_nonlifeline_customer API the service zip code will be used to get the correct area code for the customer.

:::

**» enrollment_type**: When creating an order, the value passed should correspond to the type of service:

:::highlight blue 
For prepaid or postpaid services, pass **NON_LIFELINE.**
For ACP/Lifeline orders, pass **LIFELINE**.
:::

**» is_enrollment**: **Expected values: "Y" or "N" 
**If you are creating a customer order and checking for the service availabilty for the customer on the given zip code then you should pass the value as "Y", when you pass the value as "Y" in the response you are given an "enrollment_id" which you will need to pass in the other subsequent APIs for creating an order successfully. If you are just checking a zip code for the service availability without any intention of creating an order for the customer you can pass this value as "N".**
:::highlight blue 
**Value: "Y"**
Purpose: When creating a customer order and checking service availability for the given Zip Code.Response: An enrollment_id will be returned. This enrollment_id will be used in subsequent APIs to successfully create the order.
**Value: "N"**
Purpose: When checking Zip Code service availability without the intention of creating a customer order.
:::

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" "ENROLLMENT_PORTAL"or "WEBSITE"**

> Response Examples

```json
{
  "data": {
    "acp_transfer_exception_config": "Y",
    "allow_acp_transfer_exception": "Y",
    "allow_business_address_mailing_address": "AgentProgram,ENROLLMENT_PORTAL,CSR,website",
    "allow_business_address_service_address": "AgentProgram,ENROLLMENT_PORTAL,CSR,website",
    "allowed_enrollment_type": "ACP,LIFELINE,COMBO,COMBO_SEPERATE_PARENT",
    "beneficiary_required_ssn_digits": "4",
    "city": "PATERSON",
    "combo_enroll_with_acp_parent_lifeline_child": "NO",
    "ebb_nlad_call_type": "NV",
    "ebb_state_through_national_verifier": "GA,KY,MI,PA,WI,AL,AZ,AR,CA,CO,CT,DE,FL,ID,IL,IN,IA,KS,LA,ME,LA,MD,MA,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,RI,SC,SD,TN,UT,VT,VA,WA,WV,WY,VI,TX,PR,DC",
    "enable_address_validate_from_usps": "Y",
    "enrollment_id": "WTEL784512",
    "enrollment_type_default_value": "COMBO",
    "is_combo": 1,
    "is_driving_license_required": "Y",
    "is_ebb": "1",
    "is_lifeline": "1",
    "is_national_verifier_state": "Y",
    "is_tribal": "N",
    "lifeline_alternate_phone_required": "N",
    "lifeline_email_required": "Y",
    "nlad_address_override_rural": "Y",
    "nlad_verification_override": "Y",
    "nv_ga_proof_required": "Y",
    "nv_id_proof_required": "Y",
    "nv_tribal_state_array": "OK,PA,WI",
    "permission_to_show_sim_option_during_enrollment": "Y",
    "priority_wise_carrier_list_for_csa": "TMB",
    "proof_required_for_nv": "ALL",
    "required_ssn_digits": "4",
    "show_alert_for_multiple_carrier": "N",
    "show_enrollment_type_list": "YES",
    "state": "NJ",
    "validate_tribal_from_address": "N",
    "zip_code": "07502"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjYyOTE3NjYsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTg3NDEyNzh9.LqNJv0GXTzFyh9fwWnYYcvwXN_x0CRXD3QybtckilWM"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|false|none||none|
|»» allow_business_address_mailing_address|string|false|none||This is a configuration setting. This tells you want to accept business addresses as mailing address or not. This is primarliy used in lifeline application only.|
|»» allow_business_address_service_address|string|false|none||This is a configuration setting. This tells you want to accept business addresses as service address or not. This is primarliy used in lifeline application only.|
|»» allow_enrollment_in_case_of_unconfirmed_address|string|false|none||This is a configuration setting. This tells you want to accept USPS unconfirmed addresses as service address or not. This is primarliy used in lifeline application only.|
|»» allowed_enrollment_type|string|false|none||This is a configuration setting. This tells you if LIFELINE, ACP and COMBO orders are allowed on zip code or not.|
|»» beneficiary_required_ssn_digits|integer|false|none||This is a configuration setting. This determines if the last 4 digits of social security number are needed or not. This is primarliy used in lifeline application only.|
|»» city|string|false|none||This returns the city associated with the zip code you sent in the request.|
|»» combo_enroll_with_acp_parent_lifeline_child|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» ebb_nlad_call_type|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» ebb_state_through_national_verifier|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» enable_address_validate_from_usps|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» enrollment_id|string|false|none||This is the enrollment_id which is created by Telgoo5 when you send is_enrollment as "Y" in the request. This enrollment_id will be used in other API calls.|
|»» enrollment_type_default_value|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» is_combo|integer|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» is_national_verifier_state|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» nv_ga_proof_required|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» nv_id_proof_required|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» permission_to_show_sim_option_during_enrollment|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» priority_wise_carrier_list_for_csa|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» proof_required_for_nv|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» required_ssn_digits|integer|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» show_alert_for_multiple_carrier|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» show_enrollment_type_list|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» state|string|false|none||This returns the state associated with the zip code you sent in the request.|
|»» validate_tribal_from_address|string|false|none||This is specifc to lifeline/ACP orders and can be ignored on prepaid/postpaid orders.|
|»» zip_code|integer|false|none||This returns the same zip code which you sent in the request.|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

## POST plan_list

POST /plan

### Purpose:
The plan_list API is designed to retrieve detailed information about the plans set up in Telgoo5 for the service provider. 

### Functionality:

1. This API provides comprehensive details about each available plan.
2. The response includes various attributes of the plan but is not limited to the following, such as:
- **Plan Name:** The name of the plan.
- **Plan Features and Description:** A detailed description of what the plan offers.
- **Plan ID:** A unique identifier for the plan.
- **Plan Code:** A specific code associated with the plan.

This detailed information helps in selecting and managing the appropriate plans for customers.

:::info
<Card title="How to add plans in Telgoo5 from Telgoo5 dashboard?" href="https://support.telgoo5.com/hc/en-us/articles/32167239927321-3-Plan-Configuration">
 
</Card>
<Card title="Watch video tutorial on plan setup in Telgoo5 here." href="https://support.telgoo5.com/hc/en-us/articles/14053708849945-Prepaid-Postpaid-Plan">
 
</Card>

<Card title="How to add service area zip codes in Telgoo5 from Telgoo5 dashboard?" href="https://support.telgoo5.com/hc/en-us/articles/32259845211289-7-Verify-Add-Service-Area-Zip-Codes">

</Card>

<Card title="Why do Telgoo5 needs a zip code?">
    
A zip code is used for the following purposes in Telgoo5:

- To determine the service availability. You add the zip codes in Telgoo5 where you provide services, if a customer uses a zip code outside your designated service area you can block the application from further processing.
- Telgoo5 uses service zip code for tax calculation. Taxes are not fixed across all the zip codes, taxes vary from county to county, city to city and zip code to zip code. That's why we require a correct zip code for accurate tax calculations.
- To determine the area code of the new telphone number which will assigned to the customer upon activation.
</Card>

**The table below lists API message codes, indicating response success or failure, along with descriptions and resolution instructions.**
| Message Code | Message | Resolution |
|--------------|---------|------------|
| RESTAPI000   | "Success" | No action needed! Successful API call. |
| RESTAPI001   | "Token expire" <br> "Token already used" <br> "Invalid Token"<br> "Invalid Access!!" | Token expired, generate a new token and try again<br> Token already used, generate a new token and try again<br> Token Invalid, ensure the token is correct and try again <br> Access Invalid, ensure the API call method is set as POST |
| RESTAPI110   | "Invalid enrollment id. Please provide a valid enrollment ID."<br> "No record found!" <br>"Source should be valid string" <br> "Plans not found" <br> "Please enter valid enrollment_type (i.e.NON_LIFELINE, LIFELINE)" | Check the enrollment ID and ensure it is correct. Try again! <br> Ensure the email/enrollment ID combination is correct. <br> Ensure the source entered is correct. <br> Ensure the plan permissions are given to the user and try again. <br> Enter a valid enrollment type - LIFELINE or NON_LIFELINE|
| RESTAPI102   | "Action required" | Pass "get_enrollments" in the action field and try again. |
| RESTAPI103   | "Source can not be blank" <br> "This source not allowed." | Enter the source of the application. <br> Ensure the source entered is correct & try again!|
| RESTAPI104   | "Invalid Agent Id" | Enter a valid agent ID and try again. |

:::

> Body Parameters

```json
{
  "action": "plan_list",
  "zip_code": "60644",
  "enrollment_type": "LIFELINE",
  "plan_id": "",
  "agent_id": "your_agent_id",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE",
  "tribal": "N"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This parameter must be set to a fixed value: **plan_list** for this API.|
|» zip_code|body|string| yes |This is the Zip Code for the customer's service address. It should contain only numbers, no letters or special characters, and must be exactly 5 digits long.|
|» enrollment_type|body|string| yes |When creating an order, the value passed should correspond to the type of service:|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» request_name|body|string| no |This parameter must be set to a fixed value: **plan** for this API.|
|» tribal|body|string| no |You can refer to [eligibility_check](api-7666819). If the response for tribalStatusConfirmed field in [eligibility_check](api-7666819) API is N then the tribal status is not confirmed or else it is confirmed as a tribal. Pass "Y" or "N" based on the response.|
|» external_transaction_id|body|string| no |none|

#### Description

**» zip_code**: This is the Zip Code for the customer's service address. It should contain only numbers, no letters or special characters, and must be exactly 5 digits long.

:::note
**What is considered a service address in Telgoo5?**

Service address in Telgoo5 refers to te customer's primary address where customer will be using the services primarily.
        
-     For example: If a customer lives in Los Angles, CA then you should use a zip code from Los Angles, CA to verify the service availability.
    
This zip code will be used in other API calls as well. In the payment details API this zip code will be used for tax calculation purposes, in add_line_nonlifeline_customer API the service zip code will be used to get the correct area code for the customer.

:::

**» enrollment_type**: When creating an order, the value passed should correspond to the type of service:

:::highlight blue 
For prepaid or postpaid services, pass **NON_LIFELINE.**
For ACP/Lifeline orders, pass **LIFELINE**.
:::

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API","WEBSITE" or "Enrollment_portal"**

> Response Examples

```json
{
  "data": [
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "1",
      "advance_repayment_month_allowed": "Y",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "SPRTAG"
      ],
      "connected_plans": [],
      "data": "0",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "N",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "",
      "is_tax_included": "",
      "is_unlimited_plan": "N",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "53",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "231",
      "plan_name": "SPR TAG_2_PLAN",
      "plan_price": "0",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "talk": "1500",
      "text": "2000",
      "text_unlimited": "",
      "total_plan_price": "0"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "0",
      "advance_repayment_month_allowed": "N",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "ZOOMATT"
      ],
      "connected_plans": [],
      "data": "100",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "111",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "1305",
      "plan_name": "Mplann",
      "plan_price": "0",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "talk": "1000",
      "text": "500",
      "text_unlimited": "",
      "total_plan_price": "0"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "1",
      "advance_repayment_month_allowed": "Y",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "HELIXATT"
      ],
      "connected_plans": [],
      "data": "1500000",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "N",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "",
      "is_tax_included": "",
      "is_unlimited_plan": "N",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "48",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 1,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "199",
      "plan_name": "SPR test CA plan",
      "plan_price": "6",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "talk": 0,
      "text": "0",
      "text_unlimited": "",
      "total_plan_price": "6"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "0",
      "advance_repayment_month_allowed": "N",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "TMB",
        "SPR",
        "SPRTAG"
      ],
      "connected_plans": [],
      "data": "1",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "77",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "506",
      "plan_name": "Snet Lifeline Plan",
      "plan_price": "0",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        }
      ],
      "talk": "60",
      "text": "",
      "text_unlimited": "",
      "total_plan_price": "9.25"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "0",
      "advance_repayment_month_allowed": "N",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "SPR"
      ],
      "connected_plans": [],
      "data": "0",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "60",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "816",
      "plan_name": "Degrade Plan Test Lifeline CA",
      "plan_price": "0",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        }
      ],
      "talk": "500",
      "text": "500",
      "text_unlimited": "",
      "total_plan_price": "9.25"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "0",
      "advance_repayment_month_allowed": "N",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "ZOOMATT"
      ],
      "connected_plans": [],
      "data": "1024",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "115",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "1092",
      "plan_name": "Test Zoom Lifeline Plan",
      "plan_price": "0",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        }
      ],
      "talk": "100",
      "text": "100",
      "text_unlimited": "",
      "total_plan_price": "9.25"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "advance_repayment_month": "5",
      "advance_repayment_month_allowed": "Y",
      "allowed_device_type": null,
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "ZOOMATT",
        "TMB",
        "HELIXATT"
      ],
      "connected_plans": [],
      "data": "8192",
      "data_unlimited": "",
      "display_data": null,
      "display_description": null,
      "display_features_description": [],
      "display_minute": null,
      "display_name": null,
      "display_price": "",
      "display_sequence": "",
      "display_status": "Y",
      "display_text": null,
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_connected_plan": "NO",
      "is_familyplan": "N",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "122",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 30,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "1547",
      "plan_name": "Testing change plan demo ",
      "plan_price": "15",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": [],
      "talk": "4000",
      "text": "3000",
      "text_unlimited": "",
      "total_plan_price": "15"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": "",
      "autopay_details": {
        "autopay_discount_detail": []
      },
      "autopay_discount": "N",
      "carrier": [
        "SPR"
      ],
      "data": "500",
      "data_unlimited": "",
      "display_description": "",
      "display_features_description": [],
      "display_name": "",
      "display_status": "Y",
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_familyplan": "N",
      "is_prepaid_postpaid": "prepaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "35",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": 1,
      "plan_expiry_type": "MONTHLY",
      "plan_id": "272",
      "plan_name": "Test Combo Plan",
      "plan_price": "15.75",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": "",
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        }
      ],
      "talk": "500",
      "text": "500",
      "text_unlimited": "",
      "total_plan_price": "25"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": null,
      "autopay_details": null,
      "autopay_discount": "N",
      "carrier": [
        "SPR"
      ],
      "data": "600",
      "data_unlimited": "",
      "display_description": "",
      "display_features_description": [],
      "display_name": "",
      "display_status": "Y",
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_familyplan": "N",
      "is_prepaid_postpaid": "postpaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "N",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "34",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": null,
      "plan_expiry_type": null,
      "plan_id": "131",
      "plan_name": "Lifeline iPhone Promo Unlimited Voice &amp; Text &amp; 600 MB Data ($1)",
      "plan_price": "1",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": "",
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        },
        {
          "service_amt": "13.75",
          "service_desc": "CA Lifeline Credit",
          "service_name": "CA Lifeline Credit",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "2"
        },
        {
          "service_amt": "5.24",
          "service_desc": "CA Promotional Discount 2",
          "service_name": "CA Promotional Discount 2",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "4"
        }
      ],
      "talk": "1500",
      "text": "",
      "text_unlimited": "",
      "total_plan_price": "29.24"
    },
    {
      "Plan_service_type": "V",
      "advance_billing_month": 0,
      "advance_purchase_discount": null,
      "autopay_details": null,
      "autopay_discount": "N",
      "carrier": [
        "SPR"
      ],
      "data": "500",
      "data_unlimited": "",
      "display_description": "",
      "display_features_description": [],
      "display_name": "",
      "display_status": "Y",
      "familyPlanConfig": null,
      "grace_period_allowed_days": "0",
      "is_byod": null,
      "is_familyplan": "N",
      "is_prepaid_postpaid": "postpaid",
      "is_regulatory_fee_applicable": "N",
      "is_tax_included": "",
      "is_unlimited_plan": "N",
      "minute_unlimited": "",
      "multiline_planconfig": null,
      "offer_type": "",
      "plan_code": "36",
      "plan_description": "",
      "plan_discount_details": [],
      "plan_expiry_days": null,
      "plan_expiry_type": null,
      "plan_id": "132",
      "plan_name": "Lifeline VOLT Promo Unl Voice &amp; Text &amp; 600MB Data ($1)",
      "plan_price": "1",
      "plan_state": "CA",
      "prepaid_ach_autopay_discount": "",
      "prepaid_credit_card_autopay_discount": "",
      "regulatory_fee_charge_details": "",
      "service_details": [
        {
          "service_amt": "9.25",
          "service_desc": "CA Federal Lifeline Discount",
          "service_name": "CA Federal Lifeline Discount",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "1"
        },
        {
          "service_amt": "13.75",
          "service_desc": "CA Lifeline Credit",
          "service_name": "CA Lifeline Credit",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "2"
        },
        {
          "service_amt": "5.24",
          "service_desc": "CA Promotional Discount 2",
          "service_name": "CA Promotional Discount 2",
          "service_status": "Y",
          "service_type": "D",
          "tier_type": "4"
        }
      ],
      "talk": "1500",
      "text": "2000",
      "text_unlimited": "",
      "total_plan_price": "29.24"
    }
  ],
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjYyOTEwODksInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTg3Mzk5Mzl9.IT_A-vxDNH1OPgpEkTaiobc2XCoK-oP_TTjy3b0Fu-g"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|[object]|true|none||none|
|»» Plan_service_type|string|true|none||none|
|»» advance_billing_month|integer|true|none||none|
|»» advance_purchase_discount|string|true|none||none|
|»» advance_repayment_month|integer|true|none||none|
|»» advance_repayment_month_allowed|string|true|none||none|
|»» allowed_device_type|null|true|none||none|
|»» autopay_details|object|true|none||none|
|»»» autopay_discount_detail|[string]|true|none||none|
|»» autopay_discount|string|true|none||none|
|»» carrier|[string]|true|none||none|
|»» connected_plans|[string]|true|none||none|
|»» data|integer|true|none||none|
|»» data_unlimited|string|true|none||none|
|»» display_data|string¦null|true|none||none|
|»» display_description|string¦null|true|none||none|
|»» display_features_description|[string]|true|none||none|
|»» display_minute|string¦null|true|none||none|
|»» display_name|string¦null|true|none||none|
|»» display_price|string|true|none||none|
|»» display_sequence|string|true|none||none|
|»» display_status|string|true|none||none|
|»» display_text|string¦null|true|none||none|
|»» familyPlanConfig|object|true|none||none|
|»»» base_amount|integer|true|none||none|
|»»» extra_line_cal_type|string|true|none||none|
|»»» line_amount|integer|true|none||none|
|»»» max_line|integer|true|none||none|
|»»» min_line|integer|true|none||none|
|»»» minimum_line_type|string|true|none||none|
|»»» prorated_plan|string|true|none||none|
|»» grace_period_allowed_days|integer|true|none||none|
|»» is_byod|string|true|none||none|
|»» is_connected_plan|string|true|none||none|
|»» is_familyplan|string|true|none||none|
|»» is_prepaid_postpaid|string|true|none||none|
|»» is_regulatory_fee_applicable|string|true|none||none|
|»» is_tax_included|string|true|none||none|
|»» is_unlimited_plan|string|true|none||none|
|»» minute_unlimited|string|true|none||none|
|»» multiline_planconfig|string|true|none||none|
|»» offer_type|string|true|none||none|
|»» plan_code|integer|true|none||none|
|»» plan_description|string|true|none||none|
|»» plan_discount_details|[string]|true|none||none|
|»» plan_expiry_days|integer|true|none||none|
|»» plan_expiry_type|string|true|none||none|
|»» plan_id|integer|true|none||none|
|»» plan_name|string|true|none||none|
|»» plan_price|integer|true|none||none|
|»» plan_state|string|true|none||none|
|»» prepaid_ach_autopay_discount|string|true|none||none|
|»» prepaid_credit_card_autopay_discount|string|true|none||none|
|»» regulatory_fee_charge_details|[string]|true|none||none|
|»» talk|integer|true|none||none|
|»» text|integer|true|none||none|
|»» text_unlimited|string|true|none||none|
|»» total_plan_price|integer|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

## POST handover_activation

POST /handover

This API is used to assign deviceID and ESN to the customer account. 

If the   "payment_method": "CREDIT_CARD" in this API request then pass the customers' card details. If the   "payment_method": "CASH" card details are not required. 

```json
  "card_number": "4242424242424242",
  "expiration_month": "12",
  "expiration_year": "2026",
  "cvv": "456",
  "card_type" :"Visa",
  "name_on_card" : "John Doe"
```

> Body Parameters

```json
{
  "enrollment_id": "ETEL4689328",
  "esn": "89012403471922XX203",
  "device_id": "3577387605XX639",
  "card_number": "",
  "cvv": "",
  "expiration_month": "",
  "expiration_year": "",
  "name_on_card": "",
  "billing_state": "OK",
  "billing_city": "YUKON",
  "billing_zip": "73099",
  "billing_address1": "12513 SW 11TH ST",
  "billing_address2": "",
  "handover_type": "",
  "carrier": "TMB",
  "payment_method": "CASH",
  "service_zip": "73099",
  "device_benefit_already_reimbursed": "Y",
  "is_free_phone_order": "Y",
  "child_device_id": "",
  "action": "handover_activation",
  "agent_id": "your_agentID",
  "source": "API",
  "external_transaction_id": "123456APCTG5"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed parameter. Pass **"handover_activation"** to identify the action to perform.|
|» enrollment_id|body|string| yes |This is the enrollment ID you receive in response to the [check_service_availability](api-7529498) API.|
|» esn|body|string| yes |This is the ESN number of the new sim to be added on the customer account.|
|» device_id|body|string| no |This is the IMEI of the tablet/phone that needs to be assigned to the customer.|
|» billing_state|body|string| yes |This is the billing state of the customer. It is required when the payment_method is CREDIT_CARD|
|» billing_city|body|string| yes |This is the billing city of the customer. It is required when the payment_method is CREDIT_CARD|
|» billing_zip|body|string| yes |This is the billing zipcode of the customer. It is required when the payment_method is CREDIT_CARD|
|» billing_address1|body|string| yes |This is the street name of the billing address. It is required when the payment_method is CREDIT_CARD|
|» billing_address2|body|string| no |This is the apartment or house number of the billing address.|
|» carrier|body|string| yes |The name of the carrier.|
|» payment_method|body|string| yes |Specify the payment method chosen by the customer to pay for the device or SIM. |
|» service_zip|body|string| no |The zip code where the customer will use the service.|
|» is_free_phone_order|body|string| no |Specify if providing a free phone by passing **Y**. If not providing a phone for free then pass **N*.|
|» child_device_id|body|string| no |If the customer already have a device and you are providing another device, specify the IMEI number of the first device/child in this field.|
|» agent_id|body|string| yes |This is the user login ID which will be created in Telgoo5 for the API user. |
|» source|body|string| yes |This determines the source of the API call.|
|» request_name|body|string| no |Specify the request name. It is a fixed parameter **"handover**" for this API.|
|» card_type|body|string| no |Expected values are VISA, MASTERCARD, DISCOVER, AMERICAN EXPRESS, AMEX|
|» card_number|body|string| no |This is the 16 or 15 digit card number depending on the card_type|
|» cvv|body|string| no |This is the cvv number depending on the card_type|
|» expiration_month|body|string| no |This is the expiration month of the card. This should be in two digits.|
|» expiration_year|body|string| no |This is the expiration year of the card and must be in 4 digits.|
|» name_on_card|body|string| no |This is the name on the card|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» payment_method**: Specify the payment method chosen by the customer to pay for the device or SIM. 

Payment Methods

- CREDIT_CARD: Used when you are collecting customer's card detail  to process a payment.

- CASH:  Used when you are collecting payment in Cash and want to create a payment record in Telgoo5.

- SKIP_PAYMENT: Use this if you want to skip payment.

**» agent_id**: This is the user login ID which will be created in Telgoo5 for the API user. 
 :::highlight blue
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» card_number**: This is the 16 or 15 digit card number depending on the card_type
For AMEX this is 15 digits, for rest card_types this is 16

**» cvv**: This is the cvv number depending on the card_type
For AMEX this is 4 digits, for rest card_types this is 3

> Response Examples

```json
{
  "data": {
    "customer_firstname": "DSFDS",
    "customer_id": "3796147",
    "customer_lastname": "FDSFDS",
    "customer_state": "NJ",
    "enrollment_id": "ETEL561457",
    "mdn": "740850XX55",
    "mdn_status": "",
    "plan_id": "1346",
    "plan_price": "550"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "success": "successfully proceed",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjYyNzc5NjAsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTg3MjgyOTl9.iAOqjFadDmKvl6h88aOleviEbR3iyhBw7Mq5C2vFvgI"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» customer_firstname|string|true|none||none|
|»» customer_id|string|true|none||none|
|»» customer_lastname|string|true|none||none|
|»» customer_state|string|true|none||none|
|»» enrollment_id|string|true|none||none|
|»» mdn|string|true|none||none|
|»» mdn_status|string|true|none||none|
|»» plan_id|string|true|none||none|
|»» plan_price|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» success|string|true|none||none|
|» token|string|true|none||none|

## POST  programs_income_list 

POST /programs

### Purpose:

This REST API provides a list of available eligibility programs in the state along with the income-based guidelines. By supplying the Zip Code, the API determines the state and returns the relevant results.

This API is called after address validation and answering all the qualifying questions for government-assisted programs. 

> Body Parameters

```json
{
  "zip_code": "21227",
  "action": "programs_income_list",
  "is_tribal": "N",
  "agent_id": "your_agentid",
  "source": "WEBSITE",
  "initial_choosen_enrollment_type": "LIFELINE ",
  "external_transaction_id": "123456APCTG5",
  "lifeline_enrollment_type": "LIFELINE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This needs to be passed as programs_income_list to identify the action to be performed|
|» zip_code|body|string| yes |This is the zip code for the service address of the customer. It is mandatory since the programs displayed will be based on the zipcode entered.|
|» source|body|string| yes |Source of the enrollment.|
|» agent_password|body|string| no |This is the password for the Agent ID mentioned above, a configuration-level field. If the permissions for the Agent ID require a password for API transactions, you must include the Agent Password in all REST API requests. If the permissions do not require a password, you can omit the Agent Password from the REST API requests.|
|» lifeline_enrollment_type|body|string| yes |For EBB, Lifeline, and Combo pass "EBB", "Lifeline" and "Combo" respectively.|
|» initial_chosen_enrollment_type|body|string| no |none|
|» is_tribal|body|string| no |Specify if the zip is tribal or not.|
|» agent_id|body|string| yes |This is the Telgoo5 user ID of the Agent or Employee sending the API request.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the Telgoo5 user ID of the Agent or Employee sending the API request.
 :::highlight blue
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

> Response Examples

```json
{
  "data": {
    "income": [
      {
        "annual_income": "19683",
        "persons_household": "1"
      },
      {
        "annual_income": "26622",
        "persons_household": "2"
      },
      {
        "annual_income": "33561",
        "persons_household": "3"
      },
      {
        "annual_income": "40500",
        "persons_household": "4"
      },
      {
        "annual_income": "47439",
        "persons_household": "5"
      },
      {
        "annual_income": "54378",
        "persons_household": "6"
      },
      {
        "annual_income": "61317",
        "persons_household": "7"
      },
      {
        "annual_income": "68256",
        "persons_household": "8"
      },
      {
        "annual_income": "6939",
        "persons_household": "Each additional Person"
      }
    ],
    "income_at_below": "135",
    "is_tribal": "N",
    "programs_list": [
      {
        "is_state_db": "Y",
        "nlad_code": "E1",
        "program_code": "Medic",
        "program_name": "Medicaid HMO Program",
        "program_type": "Federal Programs",
        "statedb_online_offline": null
      },
      {
        "is_state_db": "Y",
        "nlad_code": "E2",
        "program_code": "SNAP",
        "program_name": "Supplemental Nutrition Assistance Program (SNAP) Food Stamps",
        "program_type": "Federal Programs",
        "statedb_online_offline": null
      },
      {
        "is_state_db": "Y",
        "nlad_code": "E3",
        "program_code": "SSI",
        "program_name": "Supplemental Security Income (SSI)",
        "program_type": "Federal Programs",
        "statedb_online_offline": null
      },
      {
        "is_state_db": "Y",
        "nlad_code": "E4",
        "program_code": "FPHA",
        "program_name": "Federal Public Housing (FPHA, SECTION 8)",
        "program_type": "Federal Programs",
        "statedb_online_offline": null
      },
      {
        "is_state_db": "Y",
        "nlad_code": "E15",
        "program_code": "VPSBP",
        "program_name": "Veterans Pension and Survivors Benefit Program",
        "program_type": "Federal Programs",
        "statedb_online_offline": null
      }
    ],
    "programs_list_nsl": "",
    "state_req_cust_info": "NA"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjYyODkxNjEsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTg3MzY4MjB9.JmSiV0OfjF_4sYnE1RtDd_yEjRssjt-olIqQ0bAcuKk"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» income|[object]|true|none||none|
|»»» annual_income|integer|true|none||none|
|»»» persons_household|integer|true|none||none|
|»» income_at_below|integer|true|none||none|
|»» is_tribal|string|true|none||none|
|»» programs_list|[object]|true|none||none|
|»»» is_state_db|string|true|none||none|
|»»» nlad_code|string|true|none||none|
|»»» program_code|string|true|none||none|
|»»» program_name|string|true|none||none|
|»»» program_type|string|true|none||none|
|»»» statedb_online_offline|null|true|none||none|
|»» programs_list_nsl|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

## POST eligibility_status_check

POST /nlad

### PURPOSE:

This API is called after the [eligibility_check](api-7666819). 

It is used to confirm the consumer's current application status in the National Verifier. 

:::note
An **eligibilityCheckId** will be provided to the user in response of the [eligibility_check](api-7666819) API. Similar to the eligibility check, service providers can include a callback URL in this API as well so that the prospective consumers can be re-directed back to the provider upon uploading documents and completing their application in the national verifier. 
:::

:::info

If the application status for this API is still IN_PROGRESS or PENDING_REVIEW application will remain in the review queue in Telgoo5 and the automated process will keep checking the status in NV for the customer's application with this API.

Once the API returns status as COMPLETE the order will be approved.

eligibility_status_check API can also return PENDING_RESOLUTION which means the application was rejected and there is a rejection reason as well with the URL where we can redirect customers to update the application in NV.

| Status   | Status Description  | Action Needed   |
|------------|------------|------------|
| COMPLETE| This status indicates that the application requested is complete. The consumer is qualified and considered eligible to receive the Lifeline benefit. | No further action is required.|
| IN_PROGRESS| This status indicates that the eligibility check requested is still in progress. No further action can be taken for this eligibilityCheckId at this time.|  No further action is required.|
| PENDING_CERT| This status indicates the application is pending a consumer’s completed certifications. The consumer is determined to be eligible, but must complete all required certifications in the National Verifier via the URL provided in “links.”| Complete all required certifications and documents in the National verifier. |
|PENDING_REVIEW| This status indicates the application is undergoing a manual review by USAC for uploaded supporting documentation to confirm their Lifeline eligibility. The failure(s) being reviewed will be listed in the JSON.| No action needed. Wait for National Verifier to review the application or start another application.|
| PENDING_RESOLUTION| This status indicates the application is incomplete and requires the consumer to provide additional information/documents through the National Verifier.| Submit the missing or failure documents via the url provided under links.|
| PENDING_ELIGIBILITY | This status indicates the application is still pending an eligibility result response from a non-real-time eligibility data source. | Submit pending documents via the URL provided under the links.|
| APP_NOT_FOUND | This status occurs when an application is expired and the application cannot be found. | No further action can be taken on the unique eligibilityCheckID and a new application can be initiated for the customer. |
:::

> Body Parameters

```json
{
  "enrollment_id": "ETEL565656",
  "first_name": "JOHN",
  "middle_name": "",
  "last_name": "DOE",
  "address_one": "4242 BONNER RD",
  "address_two": "APT 2",
  "city": "Baltimore",
  "state": "MD",
  "zip_code": "21229",
  "ssn": "3454",
  "dob": "1996-01-03",
  "tribal_id": null,
  "beneficiary_first_name": "",
  "beneficiary_last_name": "",
  "beneficiary_dob": "",
  "beneficiary_ssn": "",
  "beneficiary_tribal_id": "",
  "program_code": [
    "SNAP"
  ],
  "no_of_household": "",
  "contact_phone": "",
  "contact_email": "",
  "mailing_address_one": "",
  "mailing_address_two": "",
  "mailing_city": "",
  "mailing_state": "",
  "mailing_zip": "",
  "public_housing_code": "",
  "carrier_url": "https://telgoo5.com/national-verifier-callback/",
  "action": "eligibility_status_check",
  "agent_id": "your_agent_id",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This needs to be passed as eligibility_status_check to identify the action to be performed|
|» enrollment_id|body|string| yes |This is the enrollment ID you receive in response to the [check_service_availability](api-7529498) API.|
|» first_name|body|string| no |The first name of the subscriber. Accepts these special characters: space, apostrophe (‘), accent Grave (`), hyphen (-). Minimum of 1 alphabetic character.|
|» middle_name|body|string| no |The middle name of the applicant. Accepts these special characters: space, apostrophe (‘), accent Grave (`), hyphen (-). Minimum of 1 alphabetic character|
|» last_name|body|string| no |The last name of the applicant. Accepts these special characters: space, apostrophe (‘), accent grave (`), hyphen (-). Minimum of 2 alphabetic characters.|
|» address_one|body|string| no |The residence address of the applicant (line 1 / street address). Accepts these special characters: space, forward slash (/), hash (#), hyphen (-).|
|» address_two|body|string| no |The residence address of the applicant (line 2 / secondary address). Accepts these special characters: space, forward slash (/), hash (#), hyphen (-).|
|» beneficiary_first_name|body|string| no |The first name of the beneficiary. If the eligibility check is based on a child or a dependent, then enter that beneficiary's name in this field.|
|» beneficiary_middle_name|body|string| no |The middle name of the beneficiary.|
|» beneficiary_last_name|body|string(date)| no |The last name of the beneficiary.|
|» beneficiary_dob|body|string| no |The date of birth of the beneficiary.|
|» beneficiary_ssn|body|string| no |The social security number of the beneficiary, if applicable.|
|» beneficiary_tribal_id|body|string| no |The tribal id of the beneficiary.|
|» city|body|string| no |The city of residence of the applicant.|
|» state|body|string| no |The state of residence of the applicant.|
|» zip_code|body|string| no |The zip code of the service address of the applicant.|
|» tribal_id|body|string| no |If the applicant resides in a tribal area. Pass the tribal id in this field.|
|» ssn|body|string| no |The last four digits of the social security number of the applicant.|
|» dob|body|string(date)| no |The date of birth of the applicant.|
|» program_code|body|[string]| no |The program code is returned from the [programs_income_list] (api-7609773) API. It displays the list of all the qualifying programs the applicant is eligible.|
|» no_of_household|body|string| no |If the applicant is applying based on income then pass the total number of people in the household.|
|» agent_id|body|string| yes |This is the Telgoo5 user ID of the Agent or Employee sending the API request.|
|» source|body|string| yes |This determines the source of the API call.|
|» carrier_url|body|string| no |Carrier can provide a callback return URL so that the user can return to the carrier's website after completing the appropriate steps of their Lifeline application within the National Verifier. You will also need to get the domain of this URL whitelisted in USAC.|
|» request_name|body|string| no |This request is passed to nlad to check the eligibility. Pass "nlad" in this field.|
|» vendor_id|body|string| no |This is the same vendor_id which is passed in the [authenticate](api-7529550) API call. This will be a fixed value and will be provided by Telgoo5.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

> Response Examples

```json
{
  "data": {
    "activeSubscriber": "Y",
    "applicationId": "Q84692-134xx",
    "coordinateSource": "Automated",
    "eligibilityCheckId": "2EC223E7F3E6D858BB8EAF6B8C0BE68092501B56F416FD5B400D226FF2C0D4xx",
    "eligibilityExpirationDate": "2021-07-25",
    "latitude": "39.307229",
    "longitude": "-76.62188",
    "status": "COMPLETE",
    "tribalStatusConfirmed": "N"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjU2MTA0NzMsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTc0NDA3Njd9.dKFUfj104xGx_2YluC4jKnPe0-IJzl2m1SqjE-RkLXk"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» activeSubscriber|string|true|none||none|
|»» applicationId|string|true|none||none|
|»» coordinateSource|string|true|none||none|
|»» eligibilityCheckId|string|true|none||none|
|»» eligibilityExpirationDate|string|true|none||none|
|»» latitude|string|true|none||none|
|»» longitude|string|true|none||none|
|»» status|string|true|none||none|
|»» tribalStatusConfirmed|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# APIs for Lifeline/Use Case: Enrollments in California

## POST ca_check_customer_status

POST /cpuc

Use this API to check customer status in CPUC/Maximus.

> Body Parameters

```json
{
  "enrollment_id": "ETEL784512",
  "customer_prefix": "",
  "first_name": "ABKJDHGKJH",
  "middle_name": "",
  "last_name": "BKJHDGKJH",
  "customer_suffix": "",
  "address_one": "631 S KENMORE AVE APT 404",
  "address_two": "",
  "city": "LOS ANGELES",
  "state": "CA",
  "zip_code": "90005",
  "ssn": "4586",
  "dob": "1996-10-10",
  "language_code": "1",
  "print_font_size": "S",
  "action": "ca_check_customer_status",
  "external_transaction_id": "123456APCTG5",
  "agent_id": "your_agent_id",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» enrollment_id|body|string| no |This is the enrollment ID you receive in response to the [check_service_availability](api-8105431) API.|
|» customer_prefix|body|string| no |Enter the customer prefix, if applicable.|
|» first_name|body|string| yes |The first name of the applicant.|
|» middle_name|body|string| no |The middle initial of the applicant.|
|» last_name|body|string| yes |The last name of the applicant.|
|» customer_suffix|body|string| no |Enter the customer suffix, if applicable.|
|» address_one|body|string| yes |The street address of the service address of the customer.|
|» address_two|body|string| no |The apartment number or house number of the applicant.|
|» city|body|string| yes |The city name of the service address.|
|» state|body|string| yes |The state name of the service address.|
|» zip_code|body|string| yes |The zipcode of the service address.|
|» ssn|body|string| yes |The last four of the social security of the customer.|
|» dob|body|string(date)| yes |The date of birth of the applicant.|
|» language_code|body|string| yes |This is the language in which the applicant wish to receive future notifications from the California Administrator.|
|» print_font_size|body|string| yes |Based on the applicant's preference, specify to receive notifications in standard print **S**, large print **L**, or braille **B**.|
|» action|body|string| yes |This is a fixed parameter. Pass **ca_check_customer_status** to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user. |
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» language_code**: This is the language in which the applicant wish to receive future notifications from the California Administrator.
This needs to be send in both the api's (create_lifeline_customer and ca_check_customer_status)

:::highlight blue
| Language    | Language Code |
|-------------|-------------|
| ENGLISH| 1 |
| SPANISH| 2 |
| CHINESE | 3 |
| KOREAN | 4 |
| JAPANESE | 5 |
|  VIETNAMESE| 6 |
| TAGALOG|  7|

:::

**» print_font_size**: Based on the applicant's preference, specify to receive notifications in standard print **S**, large print **L**, or braille **B**.
This needs to be send in both the api's (create_lifeline_customer and ca_check_customer_status)

:::highlight blue
| Print Font Size    | Code |
|-------------|-------------|
| Standard Print| **S** |
| Large Font| **L**|
| Braille | **B** |

:::

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user. 
 :::highlight blue 

 <Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">  
    In this tutorial you can learn about user setup in Telgoo5. 
</Card>
 :::

> Response Examples

```json
"\n/* In the response you will need to look for the following conditions to determine if you need to collect documents and which ones.\n\nieh here means Independent Economic household\n\n- **Both proof required** \n\n*\"id_document_required\":\"Y\",\n\"is_external_eligibility_found\":\"N\"*\n\n- **ID required **\n\n*\"id_document_required\":\"Y\",\n\"is_external_eligibility_found\":\"Y\"*\n\n- **Eligibility required **\n\n*\"id_document_required\":\"N\",\n\"is_external_eligibility_found\":\"N\"*\n\n- **No proof is required**:\n\n*\"id_document_required\":\"N\",\n\"is_external_eligibility_found\":\"Y\"*\n*/\n{\n    \"msg_code\": \"RESTAPI000\",\n    \"msg\": \"Success\",\n    \"data\": {\n        \"status\": \"New\",\n        \"ieh_required\": \"N\",\n        \"id_document_required\": \"Y\",\n        \"is_external_eligibility_found\": \"N\"\n    }\n}"
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg_code|string|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» status|string|true|none||none|
|»» ieh_required|string|true|none||none|
|»» id_document_required|string|true|none||none|
|»» is_external_eligibility_found|string|true|none||none|

# address

## POST check_wireless_coverage

POST /address

This api is used to check the coverage and is applicable only for VERIZON

> Body Parameters

```json
{
  "enrollment_id": "WBLUN1128",
  "action": "check_wireless_coverage",
  "return_url": "https://url",
  "address_one": "123 main street test",
  "city": "SEATTLE",
  "state": "WA",
  "zip_code": "98103",
  "country": "US",
  "agent_id": "your_agent_id",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» enrollment_id|body|string| yes |You get the **enrollment_id** from [check_service_availability](api-7529498) and you use that **enrollment_id** in [make_payment](api-7530808) and/or [make_payment with stripe hosted checkout](api-7533878) APIs and then you send the same enrollment_id in [create_customer_prepaid_multiline](api-7530812).|
|» action|body|string| yes |This is the fixed value check_wireless_coverage|
|» return_url|body|string| yes |none|
|» address_one|body|string| yes |This is the address for which you want to check the coverage.|
|» city|body|string| yes |This is the city for which you want to check the coverage.|
|» state|body|string| yes |This is the state for which you want to check the coverage.|
|» zip_code|body|string| yes |This is the zip code for which you want to check the coverage.|
|» country|body|string| yes |This is the fixed value US|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "msg_code": "RESTAPI000",
  "msg": "Success",
  "data": {
    "requestId": "1e728922-3619-4e52-9784-91090274f9de"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg_code|string|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» requestId|string|true|none||none|

# notes

## POST add_notes

POST /notes

### Purpose:

This REST API allows you to add notes to a customer's account in Telgoo5. To use this API, you must provide the enrollment ID or customer ID, and the note you want to add to the customer's account.

:::info

**Telgoo5 provides features that allow you to view customer reports, add notes, and download them for future reference.**
<Card title= "How to add notes using Telgoo5?" href="https://support.telgoo5.com/hc/en-us/articles/29666364641561-How-to-manage-Customer-Notes">

</Card>
<br>

**In the reporting system, you can access the Customer Note Report, which provides all notes added to customer accounts, categorized by type, such as account status, address change, etc.**

<Card title="Telgoo5 comprehensive notes report" href="https://support.telgoo5.com/hc/en-us/articles/32472432571417-Customer-Note-PC145">

</Card>

:::

> Body Parameters

```json
{
  "customer_id": "3796139",
  "enrollment_id": "ASF561445",
  "customer_notes": "Card Added Successfully",
  "priority": "HIGHEST",
  "action": "add_notes",
  "agent_id": "your_agentid",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed parameter. Pass "add_notes" to identify the action to perform.|
|» customer_id|body|string| yes |The Customer ID in Telgoo5 is a unique identifier that distinguishes active customers within the system.|
|» enrollment_id|body|string| yes |Provide the enrollment ID of the customer account you want to add a note to.|
|» customer_notes|body|string| yes |The note description you wish to add to the customer account.|
|» priority|body|string| no |This is the priority of the note.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |The source of the API call. This field can be a Website, Enrollment Portal, or API.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» customer_id**: The Customer ID in Telgoo5 is a unique identifier that distinguishes active customers within the system.

:::highlight blue

**You can either pass a customer ID or an enrollment ID for this API call.**

:::

**» enrollment_id**: Provide the enrollment ID of the customer account you want to add a note to.
:::highlight blue

**You can either pass a customer ID or an enrollment ID for this API call.**

:::

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.
 :::highlight blue
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

> Response Examples

```json
{
  "data": {
    "notes_id": 7390608
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjU3MzY4MzksInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTc3MDgyNTB9.SLwkjAwi6DpsyhYxjrNvX5JhEM_fI9JLXLVjD-D5NL0"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» notes_id|integer|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# inventory

## POST sim_swap

POST /inventory

This REST API enables agents to swap a SIM on a customer's account. 

By using this API, the agent can input the new ESN, specify the model ID of the new SIM, and provide a reason for the swap.

> Body Parameters

```json
{
  "agent_id": "your_agent_id",
  "source": "API",
  "action": "sim_swap",
  "enrollment_id": "EWC4655",
  "new_esn": "8901240347199759883",
  "model_id": "Sim Sim",
  "change_type": "Nonelectronic",
  "change_reason_process": "change_esn_reason_bad",
  "store_id": "agent_login_id"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |The source of the API call.|
|» action|body|string| yes |This is a fixed parameter. Pass **sim_swap** to identify the action to perform.|
|» enrollment_id|body|string| yes |The enrollment ID of the customer whose SIM you wish to swap.|
|» new_esn|body|string| yes |The new esn number.  Not needed if is_esim_swap is Y|
|» model_id|body|string| yes |The model id of the new sim.|
|» store_id|body|string| yes |The agent login ID to which the old inventory needs to be reassigned.|
|» change_type|body|string| yes |The sim swap type. It can be either Electronic and Nonelectronic. |
|» change_reason_process|body|string| yes |Provide the new status for the old ESN or the reason for the change.|
|» is_esim_swap|body|string| no |This should be "Y" if the swap is being done for eSIM device.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**token**: Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» change_type**: The sim swap type. It can be either Electronic and Nonelectronic. 
If the change need to occur on carrier as well then it should be Electronic. I an ideal scenarion it will always be Electronic

**» change_reason_process**: Provide the new status for the old ESN or the reason for the change.
Example: COURTESY_CHANGE

> Response Examples

```json
{
  "data": "",
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1XaG9vcENvbm5lY3QyMDIzMDUwMVVzZXIyMDIzMDUwMSIsInBhc3N3b3JkIjoiRGVtby1XaG9vcENvbjg4MjczNHF0NTRtdSIsInBpbiI6IkRlbW8tMjQyODcxOTk2MjczIiwidmVuZG9yX2lkIjoiRGVtby1XaG9vcENvbm5lY3QyMDIzMDUwMSIsImxvZ19pZCI6NzE0NTMxMiwidXJsIjoiaHR0cHM6Ly9kZW1vLXdob29wY29ubmVjdC50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzIwNTQ5OTI3fQ.hgoMX11AbN7KfIS2QXEU4_ecFjMr1q0aTWt-GMw1_7g"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# wallet

## POST add_wallet

POST /wallet

### Purpose: 

This API is used to add amount to customer's wallet. 

> Body Parameters

```json
{
  "agent_id": "your_agent_id",
  "source": "TABLET",
  "action": "add_wallet",
  "enrollment_id": "ETEL132537",
  "amount": "10",
  "card_type": "Visa",
  "card_number": "4111111111111111",
  "cvv": "123",
  "expiration_month": "05",
  "expiration_year": "2023",
  "name_on_card": "Customer Name",
  "billing_state": "WV",
  "billing_city": "WEIRTON",
  "billing_zip": "26062",
  "billing_address1": "111 CEDAR LN",
  "billing_address2": "",
  "external_transaction_id": "123456APCTG5",
  "payment_method": "CREDIT_CARD"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» source|body|string| yes |The source of the API call.|
|» action|body|string| yes |This is a fixed parameter. Add **add_wallet** to determine the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» enrollment_id|body|string| yes |This is the customer's enrollment ID to which the wallet amount is being added.|
|» amount|body|string| yes |The amount to be added in the wallet.|
|» card_type|body|string| yes |The type of the card used to add amount in the wallet. It is required when payment_method is CREDIT_CARD.|
|» card_number|body|string| yes |The customer card number from which the amount is being debited for the wallet. It is required when payment_method is CREDIT_CARD.|
|» cvv|body|string| yes |The cvv number of the card used to add funds to the wallet.  It is required when payment_method is CREDIT_CARD.|
|» expiration_month|body|string| yes |The expiration month of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» expiration_year|body|string| yes |The expiration year of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» name_on_card|body|string| yes |The name on the card used to add funds to the account wallet. It is required when payment_method is CREDIT_CARD.|
|» billing_state|body|string| yes |The state in the billing address of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» billing_city|body|string| yes |The city in the billing address of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» billing_zip|body|string| yes |The zipcode in the billing address of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» billing_address1|body|string| yes |The street address in the billing address of the card used to add funds to the wallet. It is required when payment_method is CREDIT_CARD.|
|» billing_address2|body|string| no |The apartment number in the billing address of the card used to add funds to the wallet.|
|» payment_method|body|string| yes |The payment method used to add balance to the wallet. |
|» payment_method_option|body|string| no |It is required when payment_method is other_payment_option.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» payment_method**: The payment method used to add balance to the wallet. 

* It is necessary to provide the payment_method_option if you specify other_payment_option in the payment_method

> Response Examples

```json
{
  "data": {
    "billpay_status": "NA",
    "description": "Amount added in wallet using CC",
    "error_code": "",
    "status": "SUCCESS",
    "transactionid": "80021219722"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjY4NjY2MTYsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTk4NTgwMDZ9.P8wpl49RbNKzlYtcIEJ1xAmMRULc273IL-clTNaXNMM"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» billpay_status|string|true|none||none|
|»» description|string|true|none||none|
|»» error_code|string|true|none||none|
|»» status|string|true|none||none|
|»» transactionid|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# auth

## POST customer_logout

POST /auth

### Purpose:

This API is used to log the customer out of the account. 

It uses a unique **customer_login_log_otp** received from the [customer_login](api-8346071) API. 

> Body Parameters

```json
{
  "customer_login_log_otp": "4680",
  "action": "customer_logout",
  "agent_id": "ewebsiteapi",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» customer_login_log_otp|body|string| yes |This is the 4 digit login logout opt recieved from the [customer_login](api-8346071) API.|
|» action|body|string| yes |This is a fixed parameter. Pass **customer_logout** to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.   |
|» source|body|string| yes |This is the source of the API call. Expected values are **API** and **Website**.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.   
:::highlight blue    

<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup"> 
  
    In this tutorial, you can learn about user setup in Telgoo5.  

</Card>  

:::

> Response Examples

```json
{
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjY4ODU1MjcsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MTk5NDEzMjJ9.PlByAlo9b81QA99OybcIJSrl19z6ogSRK7G3k71ggsA"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# payment

## POST early_device_installment_payment

POST /payment

This API is used to make an early payment for the devices which were bought on monthly payments.

> Body Parameters

```json
{
  "action": "early_device_installment_payment",
  "agent_id": "ewebsiteapi",
  "source": "WEBSITE",
  "enrollment_id": "WCRN1093",
  "is_generate_invoice": "N",
  "payment_method": "CREDIT_CARD",
  "card_number": "4111111111111111",
  "name_on_card": "TEST",
  "cvv": "312",
  "expiration_month": "02",
  "expiration_year": "2030",
  "card_type": "Visa",
  "billing_country": "US",
  "billing_state": "CA",
  "billing_city": "LOS ANGELES",
  "billing_zip": "90006",
  "billing_address1": "123 S MAIN ST",
  "billing_address2": "",
  "receipt_number": "12345",
  "device_installment_id": "595",
  "no_of_installment": "1",
  "saved_card_id": ""
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed value early_device_installment_payment|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» enrollment_id|body|string| yes |You get the **enrollment_id** from [check_service_availability](api-7529498) and you use that **enrollment_id** in [make_payment](api-7530808) and/or [make_payment with stripe hosted checkout](api-7533878) APIs and then you send the same enrollment_id in [create_customer_prepaid_multiline](api-7530812). or customer_info endpoint|
|» is_generate_invoice|body|string| no |none|
|» payment_method|body|string| yes |**Payment Methods**|
|» card_number|body|string| no |This is the 16 or 15 digit card number depending on the card_type|
|» name_on_card|body|string| no |This is the card holder's name.|
|» cvv|body|string| no |This is the cvv number depending on the card_type|
|» expiration_month|body|string| no |This is the expiration month of the card. This should be in two digits.|
|» expiration_year|body|string| no |This is the expiration year of the card and must be in 4 digits.|
|» card_type|body|string| no |Expected values are VISA, MASTERCARD, DISCOVER, AMERICAN EXPRESS, AMEX.|
|» billing_country|body|string| no |none|
|» billing_state|body|string| no |This is the Billing address State of the applicant. It is required only when payment_method is set as CREDIT_CARD.|
|» billing_city|body|string| no |This is the Billing address City of the applicant. It is required only when payment_method is set as CREDIT_CARD.|
|» billing_zip|body|string| no |This is the Billing address Zip Code of the applicant.	It is required only when payment_method is set as CREDIT_CARD.|
|» billing_address1|body|string| no |This is the Billing address line 1.|
|» billing_address2|body|string| no |none|
|» receipt_number|body|string| no |none|
|» device_installment_id|body|string| yes |This is the id of the installment for which you want to make the payment and this can be obtained from repayment_schedule API|
|» no_of_installment|body|string| yes |This is the number of installments for which you want to make the payment|
|» saved_card_id|body|string| no |In case you are using saved card as the payment method, this will be the id of the saved card on the account and this could be obtained using saved card API|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

**» payment_method**: **Payment Methods**

- **CREDIT_CARD:** Used when you are collecting customer's card detail to process a payment.
- **SAVED_CARD:** Used when you are saved  card detail to process a payment.
-**PAYPAL_BRAINTREE:** Used when you are processing a payment via paypal checkout through Braintree payment gateway.
- **CASH:** Used when you are collecting payment in Cash and want to create a payment record in Telgoo5.
- **OTHER_PAYMENT_OPTIONS:** Used when you are collecting payment outside TG5 system and want to create a payment record in Telgoo5.

**» card_number**: This is the 16 or 15 digit card number depending on the card_type
For AMEX this is 15 digits, for rest card_types this is 16.
It is required only when payment_method is set as CREDIT_CARD.

**» name_on_card**: This is the card holder's name.
It is required only when payment_method is set as CREDIT_CARD.

**» cvv**: This is the cvv number depending on the card_type
For AMEX this is 4 digits, for rest card_types this is 3.
It is required only when payment_method is set as CREDIT_CARD.

**» expiration_month**: This is the expiration month of the card. This should be in two digits.
It is required only when payment_method is set as CREDIT_CARD.

**» expiration_year**: This is the expiration year of the card and must be in 4 digits.
It is required only when payment_method is set as CREDIT_CARD.

**» card_type**: Expected values are VISA, MASTERCARD, DISCOVER, AMERICAN EXPRESS, AMEX.
It is required only when payment_method is set as CREDIT_CARD.

> Response Examples

```json
{
  "msg_code": "RESTAPI000",
  "msg": "Payment successfully Done !",
  "data": {
    "transaction_id": "80028847826",
    "invoice_no": "2024-11-63",
    "total_pay_amount": 31.21
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» msg_code|string|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» transaction_id|string|true|none||none|
|»» invoice_no|string|true|none||none|
|»» total_pay_amount|number|true|none||none|

# features

## POST vm_reset

POST /features

This API is used to reset the voice mail and set new voicemail password for customer's phone number.

> Body Parameters

```json
{
  "enrollment_id": "TTN141617",
  "old_voice_mail_pwd": "",
  "action": "vm_reset",
  "agent_id": "your_agentid",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» enrollment_id|body|string| yes |enrollment_id can be obtained from the responses of the following APIs:|
|» action|body|string| yes |The fixed value for this API will be network_reset|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|
|» old_voice_mail_pwd|body|string| no |none|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» enrollment_id**: enrollment_id can be obtained from the responses of the following APIs:

- [create_customer_prepaid_multiline](api-7530812): When a customer is created enrollment_id for each line is returned in the response of this API call.    

- [customer_info](api-7530928)

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "data": {
    "MDN": "4107599739"
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiTGliZXJ0eVdpcmVsZXNzQ2xpZW50N2UzeFVzZXIiLCJwYXNzd29yZCI6IkxpYmVydHlXamQ3dnJwYWYyNjVxIiwicGluIjoiNDY1NjA3ODA0OTgyIiwidmVuZG9yX2lkIjoiTGliZXJ0eVdpcmVsZXNzQ2xpZW50IiwibG9nX2lkIjoyMjUxODAyMTU4NjcxOTQzLCJ1cmwiOiJodHRwczovL2xpYmVydHl3aXJlbGVzcy50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzIwOTg0ODI0fQ.fsz34RjbFQMwYr9N0bifqz-1Klj4H5ODMSDoV57JL84"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» MDN|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# agent

## POST sales_info

POST /agent

This API retrieves various sales metrics for the specified agent within the given date range.

It provides information on new activations, new port-ins, plan changes, plan renewals, and top-ups, along with the corresponding amounts generated during the specified period.

> Body Parameters

```json
{
  "from_date": "MM-DD-YYYY",
  "to_date": "MM-DD-YYYY",
  "action": "sales_info",
  "agent_id": "your_agent_ID",
  "external_transaction_id": "123456APCTG5",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» from_date|body|string| yes |Provide the date from which you wish to retrieve the sales information.|
|» to_date|body|string| yes |Provide the date to which you wish to retrieve the sales information.|
|» action|body|string| yes |This is a fixed paramter. Pass **sales_info** to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |The source of the API call.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

> Response Examples

```json
{
  "data": {
    "new_activations": 111,
    "new_activations_amount": 2005,
    "new_portins": 0,
    "new_portins_amount": 0,
    "plan_changes": 0,
    "plan_changes_amount": 0,
    "plan_renewals": 1,
    "plan_renewals_amount": 65,
    "topups": 4,
    "topups_amount": 41.32
  },
  "msg": "Record found!",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiU2FydmVyV2lyZWxlc3NhamFja21hblVzZXIiLCJwYXNzd29yZCI6IlNhcnZlcldpOTk0NGU5a2Y2OGQ1IiwicGluIjoiMzI2NzAwMzI2MDAzIiwidmVuZG9yX2lkIjoiU2FydmVyV2lyZWxlc3NhamFja21hbiIsImxvZ19pZCI6MjI1MTgwMjE0MjYwOTA0MSwidXJsIjoiaHR0cHM6Ly9zYXJ2ZXJtb2JpbGUudGVsZ29vNS5jb20vdmNhcmVPc3NBcGkvIn0sImV4cCI6MTcyMDU0MzEyMH0.EkUA6PuoI2x-N7hfVMDGcVREOpRtsqftPqPvKboRbfM"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» new_activations|integer|true|none||none|
|»» new_activations_amount|integer|true|none||none|
|»» new_portins|integer|true|none||none|
|»» new_portins_amount|integer|true|none||none|
|»» plan_changes|integer|true|none||none|
|»» plan_changes_amount|integer|true|none||none|
|»» plan_renewals|integer|true|none||none|
|»» plan_renewals_amount|integer|true|none||none|
|»» topups|integer|true|none||none|
|»» topups_amount|number|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# coupon

## POST validate

POST /coupon

This REST API is used to validate a coupon. 

> Body Parameters

```json
{
  "action": "validate",
  "agent_id": "your_agent_id",
  "coupon_code": "TELGOO5",
  "external_transaction_id": "123456APCTG5",
  "source": "API"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |Use authenticate API to obtain the token. Ensure that this token is included in the header of every subsequent API request. This token acts as a secure credential, granting authorization to the requester for making successful API calls.|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed parameter. Pass **validate** to identify the action to perform.|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user. |
|» coupon_code|body|string| yes |The coupon code to validate.|
|» source|body|string| yes |The source of the API call.|
|» external_transaction_id|body|string| no |Only characters and numbers are allowed. When you send the external transaction id it will be returned with the same value in response as well.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user. 

:::highlight blue

<Card title="Click Here to Check User Setup Tutorial"
 href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">  

  In this tutorial you can learn about user setup in Telgoo5.

</Card>
:::

> Response Examples

```json
{
  "data": {
    "coupon_applicable_type": "",
    "coupon_code": "TELGOO5",
    "coupon_end_date": "2024-07-17",
    "coupon_id": 1,
    "coupon_name": "TELGOO5",
    "coupon_start_date": "2024-07-15",
    "coupon_type": "Fixed",
    "coupon_value": 10,
    "coupon_will_apply_on": "universal",
    "equipment_type": "",
    "is_tax_included": "N",
    "is_waive_off_processing_fee": "Y",
    "plan_code": "",
    "recurring_month_count": 0,
    "uses_per_coupon": 1,
    "uses_per_customer": 1
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1TYWZldHlVc2VyIiwicGFzc3dvcmQiOiJEZW1vLXd0Szl2QnduWTZ6NyIsInBpbiI6IkRlbW8tNjg3NjU0NjQ2IiwidmVuZG9yX2lkIjoiRGVtby1TYWZldHlOZXQiLCJsb2dfaWQiOjczNTU2MjIsInVybCI6Imh0dHBzOi8vZGVtby1zbmV0Z2VuLnRlbGdvbzUuY29tL3ZjYXJlT3NzQXBpLyJ9LCJleHAiOjE3MjExNDkwMzd9.nQWPXeJbUy5fSYSuxDfgnQVQHqMHAA6wg7ncwH-nsDs"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» coupon_applicable_type|string|true|none||none|
|»» coupon_code|string|true|none||none|
|»» coupon_end_date|string|true|none||none|
|»» coupon_id|integer|true|none||none|
|»» coupon_name|string|true|none||none|
|»» coupon_start_date|string|true|none||none|
|»» coupon_type|string|true|none||none|
|»» coupon_value|integer|true|none||none|
|»» coupon_will_apply_on|string|true|none||none|
|»» equipment_type|string|true|none||none|
|»» is_tax_included|string|true|none||none|
|»» is_waive_off_processing_fee|string|true|none||none|
|»» plan_code|string|true|none||none|
|»» recurring_month_count|integer|true|none||none|
|»» uses_per_coupon|integer|true|none||none|
|»» uses_per_customer|integer|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# shipping

## POST get_shipping_methods

POST /shipping

This endpoint returns the available shipment options. 
`shipping_id` returned in the response will be used in the following APIs:

- [payment_details](apidog://link/endpoint/7530807): To get the shipping charges and taxes for the given shipping_id.
- [make_payment](apidog://link/endpoint/7530808): To take the payment of the shipping charges and taxes for the given shipping_id along with other payment items like plan price, activation fee etc.
- [make_payment with stripe hosted checkout](apidog://link/endpoint/7533878): To take the payment of the shipping charges and taxes for the given shipping_id along with other payment items like plan price, activation fee etc.
- [create_customer_prepaid_multiline](apidog://link/endpoint/7530812): To create the customer with the selected shipping method and to show the the shipping method in the shipping queue.

> Body Parameters

```json
{
  "action": "get_shipping_methods",
  "agent_id": "agent_id",
  "source": "WEBSITE"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» action|body|string| yes |This is a fixed value and for this api it will be get_shipping_methods|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "data": {
    "records": [
      {
        "shipping_amount": 32.99,
        "shipping_desc": "Overnight Saturday Delivery",
        "shipping_id": 1,
        "shipping_name": "Overnight Saturday Delivery",
        "shipping_taxtranscode": "",
        "shipping_type": "FEDEXONT"
      },
      {
        "shipping_amount": 16.99,
        "shipping_desc": "Overnight Weekday Delivery",
        "shipping_id": 2,
        "shipping_name": "Overnight Weekday Delivery",
        "shipping_taxtranscode": "030101",
        "shipping_type": "FEDEX2T"
      },
      {
        "shipping_amount": 9.99,
        "shipping_desc": "3 to 5 Business Days",
        "shipping_id": 3,
        "shipping_name": "Standard Shipping",
        "shipping_taxtranscode": "",
        "shipping_type": "G2DAYP"
      }
    ]
  },
  "msg": "Success",
  "msg_code": "RESTAPI000",
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiRGVtby1MaW5rVXBNb2JpbGVJbmNDbGllbnRVc2VyIiwicGFzc3dvcmQiOiJEZW1vLUxpbmtVcE1vNDN1ejZ5MnY4N2tiIiwicGluIjoiRGVtby05NjYwNjM1NzAyOTgiLCJ2ZW5kb3JfaWQiOiJEZW1vLUxpbmtVcE1vYmlsZUluY0NsaWVudCIsImxvZ19pZCI6OTgwNjU3NSwidXJsIjoiaHR0cHM6Ly9kZW1vLWxpbmt1cG1vYmlsZS50ZWxnb281LmNvbS92Y2FyZU9zc0FwaS8ifSwiZXhwIjoxNzMwOTkyODYxfQ.HD7qGb157tIvbV95euYJhoCCgdgF8qlQXYoJn_TO4ls"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» records|[object]|true|none||none|
|»»» shipping_amount|number|true|none||none|
|»»» shipping_desc|string|true|none||none|
|»»» shipping_id|integer|true|none||none|
|»»» shipping_name|string|true|none||none|
|»»» shipping_taxtranscode|string|true|none||none|
|»»» shipping_type|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|
|» token|string|true|none||none|

# insurance

## POST get_list

POST /insurance

This API is used to get the list of insurance plans.

> Body Parameters

```json
{
  "action": "get_list",
  "request_name": "insurance",
  "agent_id": "your_agent_id",
  "source": "API"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|token|header|string| yes |none|
|body|body|object| no |none|
|» action|body|string| yes |get_list|
|» agent_id|body|string| yes |This is the user login id which will be created in Telgoo5 for the API user.|
|» source|body|string| yes |This determines the source of the API call.|

#### Description

**» agent_id**: This is the user login id which will be created in Telgoo5 for the API user.

:::highlight blue 
<Card title="Click Here to Check User Setup Tutorial" href="https://support.telgoo5.com/hc/en-us/articles/13672157609753-User-Setup">

    In this tutorial you can learn about user setup in Telgoo5.
</Card>
:::

**» source**: This determines the source of the API call.
**Expected values are:"API" or "WEBSITE"**

> Response Examples

```json
{
  "data": [
    {
      "insurance_id": 1513,
      "amount": 15,
      "plan_name": "Test Akko Insurance",
      "description": "Test Akko Insurance"
    },
    {
      "insurance_id": 1518,
      "amount": 20,
      "plan_name": "$*insurance",
      "description": "$*insurance"
    }
  ],
  "msg": "Success",
  "msg_code": "RESTAPI000"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» data|[object]|true|none||none|
|»» insurance_id|integer|true|none||none|
|»» amount|integer|true|none||none|
|»» plan_name|string|true|none||none|
|»» description|string|true|none||none|
|» msg|string|true|none||none|
|» msg_code|string|true|none||none|

# Data Schema

