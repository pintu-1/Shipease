
import { generatePath } from "react-router";

export const indexPattern = "/";
export const getIndexRoute = () => {
    return generatePath(indexPattern);
};
export const loginPattern = "/login";
export const getLoginRoute = () => {
    return generatePath(loginPattern);
};

export const signUpPattern = "/sign-up";
export const getSignupRoute = () => {
    return generatePath(signUpPattern);
};

export const ManageAdminPattern = "/manage-admin";
export const ManageAdminRoutes = () => {
    return generatePath(ManageAdminPattern);
}

export const ManageAdminEmployeesPattern = "/admin-employee";
export const ManageAdminEmployeesRoutes = () => {
    return generatePath(ManageAdminEmployeesPattern);
}

export const OrderReportPattern = "/order-report";
export const OrderReportRoutes = () => {
    return generatePath(OrderReportPattern);
}
export const SellerManagementPattern = "/seller-management";
export const SellerManagementRoutes = () => {
    return generatePath(SellerManagementPattern);
}

export const LogisticsPartnersPattern = "/logistics-partners";
export const LogisticsPartnersRoutes = () => {
    return generatePath(LogisticsPartnersPattern);
}

export const CourierBlockingPattern = "/courier-blocking";
export const CourierBlockingRoutes = () => {
    return generatePath(CourierBlockingPattern);
};
export const shippingRatesPattern = "/seller_rates";
export const shippingRatesRoute = () => {
    return generatePath(shippingRatesPattern);
};

export const CodRemittancePattern = "/cod-remittance";
export const CodRemittanceRoutes = () => {
    return generatePath(CodRemittancePattern);
};
export const SellerRemittancePattern = "/seller-remittance";
export const SellerRemittanceRoutes = () => {
    return generatePath(SellerRemittancePattern);
};
export const CodRemittanceLogsPattern = "/cod-remittance-logs";
export const CodRemittanceLogsRoutes = () => {
    return generatePath(CodRemittanceLogsPattern);
};
export const courierCodRemittancePattern = "/courier-cod-remittance";
export const courierCodRemittanceRoutes = () => {
    return generatePath(courierCodRemittancePattern);
};

export const SellerConfigurationPattern = "/seller-configuration/:slug";
export const SellerConfigurationRoutes = () => {
    return generatePath(SellerConfigurationPattern);
};

export const SellerVerificationPattern = "/seller-verification/:slug";
export const SellerVerificationRoutes = () => {
    return generatePath(SellerVerificationPattern);
}
export const weightReconciliationPattern = "/weight_reco";
export const getWeightReconciliationRoute = () => {
    return generatePath(weightReconciliationPattern);
};

export const settledWeightRecoPattern = "/settled_weight_reco";
export const getsettledWeightRecoRoute = () => {
    return generatePath(settledWeightRecoPattern);
};

export const WeightRecoLogsPattern = "/weight_reco_logs";
export const getWeightRecoLogsRoute = () => {
    return generatePath(WeightRecoLogsPattern);
};

export const WeightDisputePattern = "/weight_dispute";
export const getWeightDisputeRoute = () => {
    return generatePath(WeightDisputePattern);
};

export const ManageConfigurationPattern = "/web-configuration";
export const ManageConfigurationRoutes = () => {
    return generatePath(ManageConfigurationPattern);
}

export const ManageFooterConfigPattern = "/footer-config";
export const ManageFooterConfigRoutes = () => {
    return generatePath(ManageFooterConfigPattern);
}


export const ManageSliderPattern = "/slider-Management";
export const ManageSliderRoutes = () => {
    return generatePath(ManageSliderPattern);
}

export const ManageFeaturePattern = "/features-Management";
export const ManageFeatureRoutes = () => {
    return generatePath(ManageFeaturePattern);
}

export const ManageChoosePattern = "/choose-Management";
export const ManageChooseRoutes = () => {
    return generatePath(ManageChoosePattern);
}

export const ManageLogisticPartnerPattern = "/logistics-partner";
export const ManageLogisticPartnerRoutes = () => {
    return generatePath(ManageLogisticPartnerPattern);
}

export const ManageChannelPartnerPattern = "/channel-partner";
export const ManageChannelPartnerRoutes = () => {
    return generatePath(ManageChannelPartnerPattern);
}

export const ManageBrandSliderPattern = "/brand-slider";
export const ManageBrandSliderRoutes = () => {
    return generatePath(ManageBrandSliderPattern);
}

export const ManagePressCoveragePattern = "/press-coverage";
export const ManagePressCoverageRoutes = () => {
    return generatePath(ManagePressCoveragePattern);
}

export const ManageTestimonialPattern = "/testimonial";
export const ManageTestimonialRoutes = () => {
    return generatePath(ManageTestimonialPattern);
}

export const ManageSocialLinkPattern = "/social-links";
export const ManageSocialLinkRoutes = () => {
    return generatePath(ManageSocialLinkPattern);
}

export const ManageRecommendationPattern = "/recommendation";
export const ManageRecommendationRoutes = () => {
    return generatePath(ManageRecommendationPattern);
}

export const ManageCounterStatPattern = "/counter-stat";
export const ManageCounterStatRoutes = () => {
    return generatePath(ManageCounterStatPattern);
}

export const ManageGlossaryPattern = "/glossary";
export const ManageGlossaryRoutes = () => {
    return generatePath(ManageGlossaryPattern);
}

export const ManageSupportPattern = "/support";
export const ManageSupportRoutes = () => {
    return generatePath(ManageSupportPattern);
}

export const ManageSupportSubCatPattern = "/support-sub-category";
export const ManageSupportSubCatRoutes = () => {
    return generatePath(ManageSupportSubCatPattern);
}

export const ManageSupportChildPattern = "/support-child";
export const ManageSupportChildRoutes = () => {
    return generatePath(ManageSupportChildPattern);
}

export const ManageBlogPattern = "/manage-blog";
export const ManageBlogRoutes = () => {
    return generatePath(ManageBlogPattern);
}

export const ManageFAQPattern = "/faq";
export const ManageFAQRoutes = () => {
    return generatePath(ManageFAQPattern);
}

export const ManageAboutPattern = "/about";
export const ManageAboutRoutes = () => {
    return generatePath(ManageAboutPattern);
}

export const ManageCareerImagePattern = "/career-image";
export const ManageCareerImageRoutes = () => {
    return generatePath(ManageCareerImagePattern);
}

export const ManageCareerInterviewProcessPattern = "/career-interview-process";
export const ManageCareerInterviewProcessRoutes = () => {
    return generatePath(ManageCareerInterviewProcessPattern);
}

export const ManageCurrencyPattern = "/currency";
export const ManageCurrencyRoutes = () => {
    return generatePath(ManageCurrencyPattern);
}

export const ManageContactUsPattern = "/contact-us";
export const ManageContactUsRoutes = () => {
    return generatePath(ManageContactUsPattern);
}

export const ManageFooterCategoryPattern = "/footer-category";
export const ManageFooterCategoryRoutes = () => {
    return generatePath(ManageFooterCategoryPattern);
}

export const ManageFooterSubCategoryPattern = "/footer-subcategory";
export const ManageFooterSubCategoryRoutes = () => {
    return generatePath(ManageFooterSubCategoryPattern);
}

export const ManageCourierPattern = "/courier";
export const ManageCourierRoutes = () => {
    return generatePath(ManageCourierPattern);
}

export const SellerInvoicesPattern = "/invoices";
export const SellerInvoicesRoutes = () => {
    return generatePath(SellerInvoicesPattern);
}

export const TodaysRemittancePattern = "/todays-remittance";
export const TodaysRemittanceRoutes = () => {
    return generatePath(TodaysRemittancePattern);
}

export const CronDashboardPattern = "/cron-dashboard";
export const CronDashboardRoutes = () => {
    return generatePath(CronDashboardPattern);
}

export const PendencyPattern = "/pendency";
export const PendencyRoutes = () => {
    return generatePath(PendencyPattern);
}




//admin route end







export const ordersPattern = "/orders";
export const getOrdersRoute = () => {
    return generatePath(ordersPattern);
};
export const reassignOrdersPattern = "/more-on-orders";
export const getReassignRoute = () => {
    return generatePath(reassignOrdersPattern);
};
export const mergeOrdersPattern = "/merge-orders";
export const getMergeOrdersRoute = () => {
    return generatePath(mergeOrdersPattern);
};
export const splitOrdersPattern = "/split-orders";
export const getSplitOrdersRoute = () => {
    return generatePath(splitOrdersPattern);
};
export const shipmentsPattern = "/shipments";
export const getShipmentsRoute = () => {
    return generatePath(shipmentsPattern);
};
export const dailyPrefrencesPattern = "/daily-preference";
export const getdailyPrefrenceRoute = () => {
    return generatePath(dailyPrefrencesPattern);
};

export const channelsIntegrationPattern = "/channels-integration";
export const getChannelsIntegrationRoute = () => {
    return generatePath(channelsIntegrationPattern);
};

export const omsIntegrationPattern = "/OMS-integration";
export const getOmsIntegrationRoute = () => {
    return generatePath(omsIntegrationPattern);
};

export const apiIntegrationPattern = "/API-integration";
export const getApiIntegrationRoute = () => {
    return generatePath(apiIntegrationPattern);
};

export const otherIntegrationPattern = "/other-integration";
export const getOtherIntegrationRoute = () => {
    return generatePath(otherIntegrationPattern);
};

export const couriersIntegrationPattern = "/couriers-integration";
export const getCouriersIntegrationRoute = () => {
    return generatePath(couriersIntegrationPattern);
};
export const generateApiKeyPattern = "/generate-api";
export const getGenerateApiKeyRoute = () => {
    return generatePath(generateApiKeyPattern);
};
export const socailPagePattern = "/social-integration";
export const getSocailPageRoute = () => {
    return generatePath(socailPagePattern);
};
export const indiaMapPattern = "/indiaMapp";
export const getIndiaMapRoute = () => {
    return generatePath(indiaMapPattern);
};
export const createOrderPattern = "/create-order";
export const getCreateOrderRoute = () => {
    return generatePath(createOrderPattern);
};
export const createOrderPattern1 = "/create-orders";
export const getCreateOrder1Route = () => {
    return generatePath(createOrderPattern1);
};
export const billingPattern = "/billing";
export const getBillingRoute = () => {
    return generatePath(billingPattern);
};


export const misPattern = "/MIS";
export const getMisRoute = () => {
    return generatePath(misPattern);
};
export const customerPattern = "/customer";
export const getCustomerRoute = () => {
    return generatePath(customerPattern);
};
export const customerSupportPattern = "/customer-support";
export const getCustomerSupportRoute = () => {
    return generatePath(customerSupportPattern);
};
export const settingsPattern = "/settings";
export const getSettingsRoute = () => {
    return generatePath(settingsPattern);
};
export const helpArticlesPattern = "/settings";
export const getHelpArticlesRoute = () => {
    return generatePath(helpArticlesPattern);
};
export const manageWarehousesPattern = "/manage-warehouses";
export const getManageWarehousesRoute = () => {
    return generatePath(manageWarehousesPattern);
};
export const pickupAddressPattern = "/add-pickup-address";
export const getPickupAddressRoute = () => {
    return generatePath(pickupAddressPattern);
};

export const shopifyIntegrationPattern = "/shopify-integration";
export const shopifyIntegrationRoutes = () => {
    return generatePath(shopifyIntegrationPattern);
};
export const WooCommerceIntegrationPattern = "/woocommerce-integration";
export const WooCommerceIntegrationRoutes = () => {
    return generatePath(WooCommerceIntegrationPattern);
};
export const MagentoIntegrationPattern = "/magento-integration";
export const MagentoIntegrationRoutes = () => {
    return generatePath(MagentoIntegrationPattern);
};
export const StoreHippoIntegrationPattern = "/storehippo-integration";
export const StoreHippoIntegrationRoutes = () => {
    return generatePath(StoreHippoIntegrationPattern);
};
export const AmazonDirectIntegrationPattern = "/amazon-direct-integration";
export const AmazonDirectIntegrationRoutes = () => {
    return generatePath(AmazonDirectIntegrationPattern);
};
export const EasyShipIntegrationPattern = "/easyship-integration";
export const EasyShipIntegrationRoutes = () => {
    return generatePath(EasyShipIntegrationPattern);
};
export const EasyEcomIntegrationPattern = "/easyecom-integration";
export const EasyEcomIntegrationRoutes = () => {
    return generatePath(EasyEcomIntegrationPattern);
};
export const VineRetailIntegrationPattern = "/vine-retail-integration";
export const VineRetailIntegrationRoutes = () => {
    return generatePath(VineRetailIntegrationPattern);
};
export const UnicommerceIntegrationPattern = "/unicommerce-integration";
export const UnicommerceIntegrationRoutes = () => {
    return generatePath(UnicommerceIntegrationPattern);
};
export const OMSGuruIntegrationPattern = "/omsguru-integration";
export const OMSGuruIntegrationRoutes = () => {
    return generatePath(OMSGuruIntegrationPattern);
};
export const ClickPostIntegrationPattern = "/clickpost-integration";
export const ClickPostIntegrationRoutes = () => {
    return generatePath(ClickPostIntegrationPattern);
};
export const RateCalculatorPattern = "/rate-calculator";
export const RateCalculatorRoutes = () => {
    return generatePath(RateCalculatorPattern);
};

export const ZoneMappingPattern = "/zone-mapping";
export const ZoneMappingRoutes = () => {
    return generatePath(ZoneMappingPattern);
};

export const ReportSchedulerPattern = "/report-scheduler";
export const ReportSchedulerRoutes = () => {
    return generatePath(ReportSchedulerPattern);
};

export const CourierAllocationPattern = "/courier-allocation";
export const CourierAllocationRoutes = () => {
    return generatePath(CourierAllocationPattern);
};

export const ServiceablePincodesPattern = "/serviceability";
export const ServiceablePincodesRoutes = () => {
    return generatePath(ServiceablePincodesPattern);
};

export const EscalationPattern = "/escalation";
export const EscalationPatternRoutes = () => {
    return generatePath(EscalationPattern);
};











