Create User Request

{
  "lines": [
    {
      "enrollment_id": "WTG5N6505",
      "password": "",
      "first_name": "test",
      "middle_name": "user",
      "last_name": "name",
      "alternate_phone_number": "",
      "email": "testmail@vcaremail.com",
      "pin": null,
      "service_address_one": "123 S MAIN ST",
      "service_address_two": "test address",
      "service_city": "SEATTLE",
      "service_state": "WA",
      "service_zip": "98103",
      "plan_id": 5781,
      "device_id": "",
      "sim": "",
      "carrier": "BLUECONNECTSATT",
      "is_portin": "N",
      "port_current_carrier": "",
      "port_first_name": "ESIM",
      "port_last_name": "",
      "port_address_one": "",
      "port_address_two": "",
      "port_city": "LOS ANGELES",
      "port_state": "WA",
      "port_zip_code": "98103",
      "port_account_number": "12345",
      "port_account_password": "12345",
      "port_number": "4053391535",
      "enrollment_type": "SHIPMENT",
      "action": null,
      "billing_address_one": "123 main street",
      "billing_address_two": "",
      "billing_city": "LOS ANGELES",
      "billing_state": "WA",
      "billing_zip": "98103",
      "is_esim": "N",
      "child_invoice_number": "",
      "order_id": 3,
      "no_of_advance_month": 0,
      "parent_enrollment_id": ""
    }
  ],
  "action": "create_prepaid_postpaid_customer_v2",
  "external_transaction_id": "123456APCTG5",
  "agent_id": "ewebsiteapi",
  "source": "WEBSITE",
  "request_name": "customer"
}

Create User Response

{
    "data": [
        {
            "data": {
                "cust_id": 102245,
                "customer_id": 102245,
                "enrollment_id": "WN10379",
                "enrollment_type": "SHIPMENT",
                "invoice_number": "",
                "mdn": null,
                "msid": "",
                "msl": ""
            },
            "msg": "Success",
            "msg_code": "RESTAPI000"
        },
        {
            "data": {
                "cust_id": 102246,
                "customer_id": 102246,
                "enrollment_id": "A10380",
                "enrollment_type": "SHIPMENT",
                "invoice_number": "",
                "mdn": 2062091144,
                "msid": "",
                "msl": ""
            },
            "msg": "Success",
            "msg_code": "RESTAPI000"
        }
    ],
    "msg": "Success",
    "msg_code": "RESTAPI000",
    "external_transaction_id": "123456APCTG5",
}

Make Payment Request
{
  "action": "make_payment",
  "enrollment_id": "WN566777",
  "zip_code": "98104",
  "plan_id": "117",
  "plan_code": "252",
  "billing_state": "OH",
  "billing_city": "The Plains",
  "billing_zip": "45780",
  "billing_address1": "24 Roy Ave",
  "billing_address2": "",
  "payment_method": "OTHER_PAYMENT_OPTION",
  "payment_method_option": "STRIPE",
  "transaction_id": "pm_3P0kH6FFfIdOn123213",
  "charge_id": "ch_3P0kH6FFfIdOn123213",
  "save_card": "Y",
  "payment_type": "NEW_SIGNUP",
  "equipment_id": [],
  "model_id": [],
  "model_child_id": [],
  "no_of_lines": "1",
  "shipping_id":"1",
  "overnight_shipping": null,
  "external_transaction_id": "123456APCTG5",
  "coupon_info": {
    "coupon_code": ""
  },
  "source": "API",
  "agent_id": "ewebsiteapi"
}

Make Payment Response

{
    "data": {
        "coupon_transaction_id": "",
        "evad_order_number": "",
        "invoice_number": "2024-05-2002",
        "order_id": 938,
        "overnight_shipping_amount": 0,
        "payment_status": "SUCCESS",
        "plan_activation_fee": 5,
        "plan_tax": 0,
        "processingFee": 0,
        "total_amount": 44,
        "total_shipping_amount": 0,
        "external_transaction_id": "123456APCTG5",
        "transaction_no": "pm_3P0kH6FFfIdOn123213"
    },
    "msg": "Success",
    "msg_code": "RESTAPI000",
}