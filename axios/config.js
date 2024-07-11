import { coreBaseUrl, courierBaseUrl, dummyBaseUrl, orderBaseUrl, moreonBaseUrl, billingDummyBaseUrl } from "../config";
import { GET_SHEET_IMPORT_DATA } from "../redux/constants/report";


export const BASE_URL_CORE = coreBaseUrl;
export const BASE_URL_ORDER = orderBaseUrl;
export const BASE_URL_DUMMY = dummyBaseUrl;
export const BASE_URL_MOREON = moreonBaseUrl;
export const BASE_URL_COURIER = courierBaseUrl;
export const BASE_URL_BILLING = billingDummyBaseUrl;


export const API_URL = {
  index: "/",
  GET_USERS: "/orders-api/orders/",
  GET_RATE_CARD: "/core-api/shipease-admin/seller-rate-card/",
  GET_RATE_CALCULATOR: "/core-api/seller/tools/rate-calculator/",
  GET_REPORT_SCHEDULER: "/orders-api/report-scheduler/reports/",
  GET_BILLING_URL: "/orders-api/orders/shipment/",
  GET_RATE_THROUGH_ORDERID: "/orders-api/orders/order-detail/",
  GET_BILLING_URLW: "/core-api/features/billing/passbook/",
  GET_BILLING_SHIPING_URL: "/todos/",
  GET_BILLING_SHIP_URL: "/core-api/features/billing/shipping-charge/",
  GET_BILLING_RECHARGE_URL: "/core-api/features/billing/recharge-log/",
  CHECK_SERVICE_ABILITY_PINCODE: "/courier-api/courier/tools/check-pincode-serviceability/",
  CHECK_SERVICE_ABILITY_PINCODE_PAIR: "/courier-api/courier/tools/check-pair-serviceability/",
  GET_ZONE_MAPPING: "/core-api/seller/tools/zone-mapping/",
  CUSTOMER_SUPPORT_STATUS_REOPEN_CLOSE: "/core-api/crm-app/close-ticket/",
  CUSTOMER_SUPPORT_STATUS_ESCALATE: "/core-api/crm-app/escalate-support-tickets/",
  GET_MOREONORDER_URL: "/orders-api/orders/",
  GET_SHIPEASE_SERVICEABILITY_PINCODE: "/courier-api/courier/tools/shipease-serviceability-pincodes/",
  GET_COURIER_PARTNER_NAME: "/core-api/shipease-admin/partners/",
  GET_COURIER_SERVICE_PINCODE: "/courier-api/courier/tools/download-service-pincode/",
  GET_COURIER_ALLOCATION: "/courier-api/courier/tools/download-service-pincode/",
  GET_COURIER_ALLOCATION_PARTNER: "/core-api/features/courier-category/",
  GET_COURIER_POST_ALLOCATION: "/core-api/seller/tools/save-general-preference/",
  POST_SELLER_SIGNUP: "/core-api/seller/sign-up/",
  ORDER_DETAILS_API: "/orders-api/orders/order-complete-detail/",
  GET_BILLING_CREDIT_URL: "/core-api/features/billing/credit-receipt/",
  GET_BILLING_CREDIT_EXPORT_URL: "/core-api/features/billing/credit-receipt-download/",
  GET_BILLING_SHIPING_INVOICE_URL: "/core-api/features/billing/invoice/",
  GET_BILLING_SHIPING_REMITANCE_URL: "/core-api/features/billing/remittance-log/",
  GET_BILLING_SHIPING_REMITANCE_DOWNLOAD_URL: "/core-api/features/billing/remittance-log-download/",
  SAVE_FAVOURITE_ORDERS_API:"/orders-api/orders/seller-filter/",
  GET_COURIER_ALLOCATION_RULE: "/core-api/features/courier-allocation/rules/",
  GET_COURIER_ALLOCATION_STATUS_RULE: "/core-api/features/courier-allocation/rules/status/",
  BULK_SHIP_ORDERS_API:"/core-api/shipping/bulk-ship-order/",
  MANIFEST_LIST_API:"/orders-api/orders/manifest/",
  ORDER_TAGS_LIST_API:"/orders-api/orders/order-tags/",
  ORDER_DOWNLOAD_MANIFEST_API:"/core-api/shipping/download-manifest/",
  ORDER_CLONE_API: "/orders-api/orders/",
  
  //BULK ACTION ACTION SECTION
  BULK_ADD_ORDER_TAG:"/orders-api/orders/bulk-action/add-order-tag/",
  BULK_MARK_ORDER_VERIFY:"/orders-api/orders/bulk-action/mark-order-verify/",
  BULK_DELETE_ORDER:"/orders-api/orders/bulk-action/delete-order/",
  BULK_CANCEL_ORDER:"/core-api/shipping/cancel-order/",
  BULK_PICKUP_ADDRESS_UPDATE:"/orders-api/orders/bulk-action/pickup-address-update/",
  BULK_DIMENSION_DETAILS_UPDATE:"/orders-api/orders/bulk-action/dimension-detail-update/",
  BULK_ORDER_GENERATE_MENIFEST_API:"/orders-api/orders/generate-manifest/",
  BULK_ORDER_GENERATE_PICKUP_API:"/core-api/shipping/generate-pickup/", 
  BULK_ORDER_GENERATE_LABEL_API:"/core-api/shipping/generate-label/", 
  BULK_ORDER_GENERATE_INVOICE_API:"/core-api/shipping/generate-invoice/", 
  BULK_ORDER_DOWNLOAD_MANIFEST_API:"/core-api/shipping/download-manifest/", 
  BULK_DIMENSION_GET_API:"/orders-api/orders/bulk-action/dimension-details/", 

  //SHIPMENT REATTEMPT
  GET_SHIPMENT_REATTEMPT_URL: "/core-api/shipping/reattempt-order/",
  GET_SHIPMENT_RTO_URL: "/core-api/shipping/mark-order-rto/",

  //ORDERS API
  GET_ORDERS_API: "/orders-api/orders/",
  CANCEL_ORDERS_API: "/core-api/shipping/cancel-order/",
  DELETE_ORDERS_API: "/orders-api/orders/order-complete-detail/",
  CLONE_ORDERS_API: "/orders-api/orders/clone-order/",
  GENERATE_MANIFEST_API: "/orders-api/orders/generate-manifest/",
  ORDER_TAG_CREATED_API: "/orders-api/orders/order-tags/",

  //PAYMENT
  GET_PAYMENT_URL: "/core-api/seller/get-seller-balance/",
  GET_CONFIGURATION_URL: "/core-api/seller/general-configuration/",

  //MOREONORDER REASSIGN
  GET_REASSIGN_URL: "/core-api/shipping/ship-rate-card-reassign/",
  GET_REASSIGN_SHIP_URL: "/core-api/shipping/reassign-order/",

  //EXPORTS
  GET_EXPORT_URL: "/orders-api/admin-panel/download-order-report-filter/",
  GET_EXPORT_PASSBOOK_URL :"/core-api/features/billing/passbook-download/",
  GET_EXPORT_SHIPPING_URL :"/core-api/features/billing/shipping-charge-download/",
  GET_EXPORT_RECHARGE_URL:"/core-api/features/billing/recharge-log-download/",
  GET_EXPORT_RATE_URL:"/core-api/shipease-admin/export-rate-card/",


  //DASHBOARD OVERVIEW API'S 
  GET_DASHBOARD_OVERVIEW_SHIPMENT_CARD: "/orders-api/dashboard/overview/shipment-card/",
  GET_DASHBOARD_OVERVIEW_NDR_DETAILS: "/orders-api/dashboard/overview/ndr-details/",
  GET_DASHBOARD_OVERVIEW_COD_DETAILS: "/orders-api/dashboard/overview/cod-details/",
  GET_DASHBOARD_OVERVIEW_RTO_DETAILS: "/orders-api/dashboard/overview/rto-status/",
  GET_DASHBOARD_OVERVIEW_LAST_ORDERS: "/orders-api/dashboard/overview/get-last-orders/",
  GET_DASHBOARD_OVERVIEW_REVENUE_CARD: "/orders-api/dashboard/overview/revenue-analytics-card/",
  GET_DASHBOARD_OVERVIEW_COUNTER_CARD: "/orders-api/dashboard/overview/counter-card/",
  GET_DASHBOARD_OVERVIEW_TOPSELL_CARD: "/orders-api/dashboard/overview/top-selling-products/",
  GET_DASHBOARD_OVERVIEW_STATEWISE_SPLIT: "/orders-api/dashboard/overview/state-wise-split/",
  GET_DASHBOARD_OVERVIEW_DELIVERY_PERFORMANCE: "/orders-api/dashboard/overview/delivery-performance/",
  GET_DASHBOARD_OVERVIEW_COURIERISE_ALLOCATION: "/orders-api/dashboard/overview/courier-wise-allocation/",
  GET_DASHBOARD_OVERVIEW_MOST_POPULAR: "/orders-api/dashboard/overview/most-popular-customers/",
  GET_DASHBOARD_OVERVIEW_WEIGHT_DISCREPANCIES: "/orders-api/dashboard/overview/weight-discrepancy/",

  //DASHBOARD ORDERS API'S 
  GET_DASHBOARD_ORDERS_STORE_BASED: "/orders-api/dashboard/orders/store-based-orders/",
  GET_DASHBOARD_ORDERS_COUNT: "/orders-api/dashboard/order-count/",
  GET_DASHBOARD_ORDERS_CANCELLED_ORDERS: "/orders-api/dashboard/orders/cancelled-orders-api/",
  GET_DASHBOARD_ORDERS_MPS_ORDER: "/orders-api/dashboard/orders/mps-order/",
  GET_DASHBOARD_ORDERS_ASSIGNED_PICKED_ORDER: "/orders-api/dashboard/orders/assigned-picked-orders/",
  GET_DASHBOARD_ORDERS_BUYERDEMOGRAPHIC: "/orders-api/dashboard/buyer-demographic/",
  GET_DASHBOARD_ORDERS_PREPAID_COD_COUNTER: "/orders-api/dashboard/orders/prepaid-cod-counter/",
  GET_DASHBOARD_ORDERS_WAREHOUSE_INFN: "/orders-api/dashboard/orders/warehouse-information/",
  GET_DASHBOARD_ORDERS_BEST_SKU_PROJECT: "/orders-api/dashboard/orders/best-sku-product/",
  GET_DASHBOARD_ORDERS_POPULAR_LOACTION: "/orders-api/dashboard/orders/popular-order-location/",
  GET_DASHBOARD_ORDERS_INTERVSDOM: "/orders-api/dashboard/orders/international-vs-domestic/",

  //DASHBOARD SHIPMENT API'S
  GET_DASHBOARD_SHIPMENT_WEIGHT_PROFILE: "/orders-api/dashboard/shipment/weight-profile/",
  GET_DASHBOARD_SHIPMENT_OFD_DATA: "/orders-api/dashboard/shipment/ofd-data/",
  GET_DASHBOARD_SHIPMENT_ZONE_WISE_DATA: "/orders-api/dashboard/zone-wise-data/",
  GET_DASHBOARD_SHIPMENT_OVERVIEW_COURIER_DATA: "/orders-api/dashboard/shipment/shipment-overview-courier/",
  GET_DASHBOARD_SHIPMENT_PERFORMANCE_METRIX: "/orders-api/dashboard/shipment/zone-wise-performance/",


  //DASHBOARD NDR API'S
  GET_DASHBOARD_NDR_COUNTER_CARDS: "/orders-api/dashboard/ndr/counter-cards/",
  GET_DASHBOARD_NDR_NDR_STATUS: "/orders-api/dashboard/ndr/ndr-status/",
  GET_DASHBOARD_NDR_SUCCESS_BY_COURIER: "/orders-api/dashboard/ndr/success-by-courier/",
  GET_DASHBOARD_NDR_SUCCESS_BY_ZONE: "/orders-api/dashboard/ndr/success-by-zone/",
  GET_DASHBOARD_NDR_DELIVERY_ATTEMPT: "/orders-api/dashboard/ndr/ndr-to-delivery-attempt/",
  GET_DASHBOARD_NDR_FUNNEL_ATTEMPT: "/orders-api/dashboard/ndr/ndr-funnel/",
  GET_DASHBOARD_NDR_RESPONSE_ATTEMPT: "/orders-api/dashboard/ndr/ndr-response/",
  GET_DASHBOARD_NDR_SPLIT_ATTEMPT: "/orders-api/dashboard/ndr/ndr-reason-split/",
  GET_DASHBOARD_NDR_BUYER_ATTEMPT: "/orders-api/dashboard/ndr/ndr-seller-buyer-response/",

  //DASHBOARD RTO API'S
  GET_DASHBOARD_RTO_TOP_RTO: "/orders-api/dashboard/rto/top-rto/",
  GET_DASHBOARD_RTO_TOP_CITY: "/orders-api/dashboard/rto/top-rto-city/",
  GET_DASHBOARD_RTO_COUNT_MONTHWISE: "/orders-api/dashboard/rto/month-wise-rto-count/",
  GET_DASHBOARD_RTO_TOP_COURIER: "/orders-api/dashboard/rto/top-rto-courier/",
  GET_DASHBOARD_RTO_STATUS: "/orders-api/dashboard/rto/rto-status/",

  //DASHBOARD COURIER API'S
  GET_DASHBOARD_COURIER_DATA: "/orders-api/dashboard/courier/courier-data/",

  //INTEGRATION API'S
  POST_GENERATE_API_KEY:"/core-api/seller/api-key/",

  //WEIGHT RECO
  GET_WEIGHT: "/orders-api/orders/weight-reconciliation/",
  GET_HOLD: "/orders-api/orders/weight-reconciliation-on-hold/",
  GET_SETTELED: "/orders-api/orders/setteled-weight-reconciliation/",
  GET_HISTORY: "/orders-api/orders/weight-reconciliation-history/",
  GET_ACCEPT: "/orders-api/orders/weight-reconciliation-accept/",
  GET_COMMENT : "/orders-api/orders/weight-reconciliation-create-history/",
  GET_DISPUTE : "/orders-api/orders/weight-reconciliation-dispute/",

  WEIGHT_RECO_ERROR_LOGS_API:"/core-api/shipease-admin/export-weight-reconciliation-logs/",
  WEIGHT_RECO_LOGS_API:"/core-api/shipease-admin/weight-reconciliation-proccess-logs/",
  WEIGHT_RECONCILATION_API:"/orders-api/orders/weight-reconciliation/",

  //MIS API
  MIS_DOWNLOAD:"/orders-api/mis/downloads/",
  MIS_REPORT_BILLING:"/orders-api/mis/report/billing/",
  MIS_REPORT_ORDERS:"/orders-api/mis/report/orders/",
  MIS_REPORT_RETURNS:"/orders-api/mis/report/returns/",
  MIS_REPORT_SHIPMENTS:"/orders-api/mis/report/shipments/",
  MIS_SCHEDULED_REPEORTS:"/orders-api/mis/scheduled-reports/",
  MIS_ACTIVITIES_LOG:"/core-api/seller/mis/activity-log/",

  //SETTINGS API
   SETTINGS_MAKE_WAREHOUSE_DEFAULT_API:"/core-api/features/make-warehouse-default/",
   SETTINGS_DELETE_WAREHOUSE_API:"/core-api/features/warehouse-detail/",
   SETTINGS_GET_WAREHOUSE_DETAILS_API:"/core-api/features/warehouse-detail/",
   SETTINGS_EDIT_WAREHOUSE_API:"/core-api/features/warehouse-detail/",


   //CHANNEL
   GET_CHANNEL_URL: "/core-api/channel/channel/",


//ADMIN PANEL API'S
  
ADMIN_SELLER_LIST_API:"/core-api/master/sellers-list/",
WEIGHT_RECO_UPLOAD_API:"/orders-api/admin-panel/weight-reconciliation-upload/",
COURIER_BLOCKING_API:"/core-api/shipease-admin/courier-blocking/",
UPLOAD_COD_REMITTANCE_API:"/core-api/shipease-admin/cod-remittance/",
UPLOAD_COD_REMITTANCE_LOGS_API:"/core-api/shipease-admin/cod-remittance-logs/",

COD_REMITANCE_ERROR_LOGS_API:"/core-api/shipease-admin/export-cod-remittance-logs/",
COD_REMITTANCE_LOGS_API:"/core-api/shipease-admin/cod-remittance-proccess-logs/",
TODAY_REMITTANCE_LOGS_API:"/core-api/shipease-admin/todays-cod-remittance/",

COD_REMITANCE_EXPORT_LOGS_API:"/core-api/shipease-admin/export-todays-cod-remittance/",

COD_REMITANCE_EXPORT_ALL_API:"/core-api/shipease-admin/export-todays-seller-cod-remittance/",

//IMPORT RATE CARD
GET_RATE_CARD_IMPORT: "/core-api/shipease-admin/import-rate-card/",
GET_LOGISTICS_PARTNER_API:"/core-api/shipease-admin/partners/",
GET_LOGISTICS_PARTNER_DETAILS_API:"/core-api/shipease-admin/get-partners-details/",

//CRM MAANAGEMENT
GET_ALL_SELLER_API:"/core-api/crm-app/all-seller/",
SELLER_CONFIG_ADMIN_API:"/core-api/shipease-admin/get-seller-admin/",
SELLER_CONFIG_FEATURES_API:"/core-api/shipease-admin/get-seller-feature/",
SELLER_CONFIG_COURIER_DEFAULT_API:"/core-api/shipease-admin/get-seller-default-invoice/",
SELLER_CONFIG_FINANCE_API:"/core-api/shipease-admin/get-seller-finance/",
SELLER_CONFIG_TECHNOLOGY_API:"/core-api/shipease-admin/get-seller-technology/",
SELLER_CONFIG_PROFILE_API:"/core-api/shipease-admin/sellers-detail/",
SELLER_BASIC_INFO_VERIFY_API:"/core-api/shipease-admin/basic-info-verify/",
SELLER_ACCOUNT_INFO_VERIFY_API:"/core-api/shipease-admin/account-info-verify/",
SELLER_KYC_INFO_VERIFY_API:"/core-api/shipease-admin/kyc-verify/",


//REPORT API
GET_REPORT_LIST_URL: "/orders-api/admin-panel/order-report-download-list/",
GET_DOWNLOAD_REPORT_URL: "/orders-api/admin-panel/download-order-report/",
GET_REPORT_AWB_URL: "/orders-api/admin-panel/order-report-awb/",
GET_REPORT_AWB_DOWNLOAD_URL: "/orders-api/admin-panel/download-order-report-awb/",
GET_SHEET_IMPORT:"/orders-api/admin-panel/upload-awb-order-report-download/",
GET_COURIER_PARTNER:"/core-api/features/partner-list/",


//admin
GET_ADMIN_USER_API:"/core-api/shipease-admin/create-admin/",
DELETE_ADMIN_USER_API:"/core-api/shipease-admin/create-admin/",

GET_ADMIN_EMPLOYEE_API:"/core-api/shipease-admin/create-admin-employee/",

GET_SLIDER_API:"/core-api/shipease-admin/sliders/",
GET_FEATURE_API:"/core-api/shipease-admin/feature/",
GET_WHY_API:"/core-api/shipease-admin/why/",
GET_STATS_API:"/core-api/shipease-admin/stats/",
GET_BRAND_API:"/core-api/shipease-admin/brand/",
GET_SOCIAL_API:"/core-api/shipease-admin/social-link/",
GET_COVERAGE_API:"/core-api/shipease-admin/coverage/",
GET_TESTIMONIAL_API:"/core-api/shipease-admin/testimonial/",

GET_LOGISTIC_API:"/core-api/shipease-admin/logistics/",
GET_ENGINE_API:"/core-api/shipease-admin/recommendation-engine/",
GET_CHANNEL_API:"/core-api/shipease-admin/channel-partner/",


//Pintu
GET_COURIER_API:"/core-api/shipease-admin/channel-partner/",
GET_FOOTER_SUBCATEGORY_API:"/core-api/shipease-admin/channel-partner/",
GET_FOOTER_CATEGORY_API:"/core-api/shipease-admin/channel-partner/",
GET_CONTACT_US_API:"/core-api/shipease-admin/channel-partner/",
GET_CURRENCY_API:"/core-api/shipease-admin/channel-partner/",
GET_CAREER_INTERVIEW_API:"/core-api/shipease-admin/channel-partner/",

GET_SUPPORT_API:"/core-api/shipease-admin/web-support/",
GET_GLOSSARY_API:"/core-api/shipease-admin/web-glossary/",
GET_SUBCATEGORY_API:"/core-api/shipease-admin/web-support-sub/",
GET_CHILD_CATEGORY_API:"/core-api/shipease-admin/web-support-child/",
GET_BLOG_API:"/core-api/shipease-admin/web-blog/",
GET_ABOUT_API:"/core-api/shipease-admin/web-about-us/",
GET_FAQ_API:"/core-api/shipease-admin/web-faq/",
GET_CAREER_IMAGE_API:"/core-api/shipease-admin/web-career/",

//Pintu
GET_COURIER_API:"/core-api/shipease-admin/web-courier/",
GET_FOOTER_SUBCATEGORY_API:"/core-api/shipease-admin/web-footer-sub/",
GET_FOOTER_CATEGORY_API:"/core-api/shipease-admin/web-footer-category/",
GET_FOOTER_CAT_API:"/core-api/shipease-admin/web-get-footer-category/",
GET_CONTACT_US_API:"/core-api/shipease-admin/web-contact-us/",
GET_CURRENCY_API:"/core-api/shipease-admin/web-country-currency/",
GET_CAREER_INTERVIEW_API:"/core-api/shipease-admin/web-career-expect/",

GET_FOOTERCONFIG_API:"/core-api/shipease-admin/web-footer-config/",

GET_CONFIG_API:"/core-api/shipease-admin/get-configuration/",

//ADMIN DASHBOARD API'S
ADMIN_DASHBOARD_CARD_DETAILS_API:"/orders-api/admin-panel/admin-dashboard/",
ADMIN_DASHBOARD_SELLER_ORDER_API:"/orders-api/admin-panel/admin-dashboard/seller-orders/",


GET_COURIER_PARTNER:"/core-api/shipease-admin/web-courier-partner/",

  //list of courier partner
  GET_COURIER_PARTNER:"/core-api/features/partner-list/",


  //invoice
  GET_SELLER_INVOICE_URL: "/orders-api/admin-panel/seller-invoices/",
  GET_SELLER_INVOICE_POSTPAID_URL: "/orders-api/admin-panel/upload-postpaid-invoice/",

  //CRM API'S LIST
  GET_ALL_SELLER_LIST_API: "/core-api/crm-app/all-seller/",
  SELLER_RESET_PASSWORD: "/core-api/crm-app/seller-password-reset/",
  GET_ALL_SELLER_NAME_API: "/core-api/crm-app/sellers-list/",
  GET_ESCALATION_API: "/core-api/crm-app/support-tickets/",
  GET_ORDER_LIST_API: "/core-api/crm-app/orders/",


};
  