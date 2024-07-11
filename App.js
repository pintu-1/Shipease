import "./App.css";
import Cookies from "js-cookie";
import 'devextreme/dist/css/dx.light.css';
import { Bounce, ToastContainer, toast } from "react-toastify";
import React, { useEffect, useState, lazy } from "react";
import Sidebar from "./Component/common/sidebar/SideNav";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from "./Component/common/header/Header";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import DailyPrefrences from './Component/common/Graph/DailyPrefrence';
import IndiaMapp from './Component/common/Graph/IndiaMapp';
import OrdersPage from './Component/Pages/OrdersPage/OrdersPage';
import MoreOnOrders from './Component/Pages/MoreOnOrders/MoreOnOrders';
import AllOrders from './Component/Pages/OrdersPage/Components/AllOrders/AllOrders';
import ShipmentsPage from './Component/Pages/ShipmentsPage/ShipmentsPage';
import ChannelsIntegration from './Component/Pages/IntegrationsPage/Components/ChannelsIntegration/ChannelsIntegration';
import CouriersIntegration from './Component/Pages/IntegrationsPage/Components/CouriersIntegration';
import APIIntegration from './Component/Pages/IntegrationsPage/Components/APIIntegration';
import OtherIntegration from './Component/Pages/IntegrationsPage/Components/OtherIntegration';
import CreateOrderFlow from './Component/Pages/OrdersPage/Components/CreateOrderFlow/CreateOrderFlow';
import BillingPage from './Component/Pages/BillingPage/BillingPage'
import WeightRecoPage from './Component/Pages/WeightRecoPage/WeightRecoPage';
import MISPage from './Component/Pages/MISPage/MISPage';
import CustomerPage from './Component/Pages/CustomerPage/CustomerPage';
import CustomerSupportPage from './Component/Pages/CustomerSupportPage/CustomerSupportPage';
import SettingsPage from './Component/Pages/SettingsPage/SettingsPage';
import HelpArticles from './Component/Pages/CustomerSupportPage/Components/HelpArticles/HelpArticles';
import LoginPage from './Component/Pages/LoginPage/LoginPage';
import ManageWarehouse from './Component/Pages/ManageWarehouse/ManageWarehouse';
import AddWarehouse from './Component/Pages/ManageWarehouse/Components/AddWarehouse';
import WalletRechargeComponent from './Component/Pages/WalletRechargeComponent/WalletRechargeComponent';
import ShopifyIntegrationForm from './Component/Pages/IntegrationsPage/Components/ChannelsIntegration/ShopifyIntegrationForm';
import WooCommerceIntegrationForm from './Component/Pages/IntegrationsPage/Components/ChannelsIntegration/WooCommerceIntegrationForm';
import StoreHippoIntegrationForm from "./Component/Pages/IntegrationsPage/Components/ChannelsIntegration/StoreHippoIntegrationForm";
import MagentoIntegrationForm from "./Component/Pages/IntegrationsPage/Components/ChannelsIntegration/MagentoIntegrationForm";
import AmazonDirectIntegrationForm from "./Component/Pages/IntegrationsPage/Components/ChannelsIntegration/AmazonDirectIntegrationForm";
import OMSIntegration from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/OMSIntegration";
import EasyShipIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/EasyShipIntegrationForm";
import EasyEcomIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/EasyEcomIntegrationForm";
import VineRetailIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/VineRetailIntegrationForm";
import UnicommerceIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/UnicommerceIntegrationForm";
import OMSGuruIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/OMSGuruIntegrationForm";
import ClickPostIntegrationForm from "./Component/Pages/IntegrationsPage/Components/OMSIntegraion/ClickPostIntegrationForm";
import ZoneMappingPop from "./Component/Pages/ToolsPage/Components/ZoneMappingPop/ZoneMappingPop";
import ServiceabilityPage from "./Component/Pages/ToolsPage/Components/ServiceabilityPage/ServiceabilityPage";
import ReportSchedulerPage from "./Component/Pages/ToolsPage/Components/ReportSchedulerPage/ReportSchedulerPage";
import CourierAllocationPage from "./Component/Pages/ToolsPage/Components/CourierAllocationPage/CourierAllocationPage";
import RateCalculatorPage from "./Component/Pages/ToolsPage/Components/RateCalculatorPage/RateCalculatorPage";
import { EscalationPattern,customerSupportPattern,PendencyPattern, CronDashboardPattern, TodaysRemittancePattern, SellerInvoicesPattern, ServiceablePincodesPattern, ManageAdminEmployeesPattern, ManageAdminPattern, OrderReportPattern, SellerManagementPattern, LogisticsPartnersPattern, CourierBlockingPattern, SellerVerificationPattern, SellerConfigurationPattern, WeightDisputePattern, WeightRecoLogsPattern, settledWeightRecoPattern, channelsIntegrationPattern, indexPattern, loginPattern, shippingRatesPattern, weightReconciliationPattern, signUpPattern, CodRemittancePattern, SellerRemittancePattern, CodRemittanceLogsPattern, courierCodRemittancePattern, ManageSliderPattern, ManageFeaturePattern, ManageChoosePattern, ManageLogisticPartnerPattern, ManageChannelPartnerPattern, ManageBrandSliderPattern, ManagePressCoveragePattern, ManageTestimonialPattern, ManageSocialLinkPattern, ManageRecommendationPattern, ManageCounterStatPattern, ManageGlossaryPattern, ManageSupportPattern, ManageSupportSubCatPattern, ManageSupportChildPattern, ManageBlogPattern, ManageFooterConfigPattern, ManageFAQPattern, ManageAboutPattern, ManageCareerImagePattern, ManageCareerInterviewProcessPattern, ManageCurrencyPattern, ManageContactUsPattern, ManageFooterCategoryPattern, ManageFooterSubCategoryPattern, ManageCourierPattern, ManageConfigurationPattern } from "./Routes";
import { useDispatch } from "react-redux";
import SignUpPage from "./Component/Pages/SignupPage/SignUpPage";
import LowBalancePop from "./Component/Pages/WalletRechargeComponent/LowBalancePop.js/LowBalancePop";
import WeightRecoTab from "./Component/Pages/WeightRecoPage/Components/WeightRecoTab/WeightRecoTab";
import SettledReco from "./Component/Pages/WeightRecoPage/Components/SettledReco/SettledReco";
import WeightRecoLogs from "./Component/Pages/WeightRecoPage/Components/WeightRecoLogs/WeightRecoLogs";
import WeightDisputeTab from "./Component/Pages/WeightRecoPage/Components/WeightDisputeTab/WeightDisputeTab";
import CourierBlockingPage from "./Component/Pages/CourierBlockingPage/CourierBlockingPage";
import SellerConfigurationPage from "./Component/Pages/SellerConfigurationPage/SellerConfigurationPage";
import SellerVerificationPage from "./Component/Pages/SellerVerificationPage/SellerVerificationPage";
import CodRemittanceTab from "./Component/Pages/CodRemitancePage/CodRemittTab/CodRemittanceTab";
import SellerRemittTab from "./Component/Pages/CodRemitancePage/SellerRemittTab/SellerRemittTab";
import CodRemittLogTab from "./Component/Pages/CodRemitancePage/CodRemmitLogs/CodRemittLogTab";
import CourierCodRemitt from "./Component/Pages/CodRemitancePage/CourierCodRemmit/CourierCodRemitt";
import LogisticsPartnersPage from "./Component/Pages/LogisticsPartnersPage/LogisticsPartnersPage";
import SellerManagementPage from "./Component/Pages/SellerManagementPage/SellerManagementPage";
import OrderReportPage from "./Component/Pages/TechnologiesPage/OrderReportPage/OrderReportPage";
import ManageAdmin from "./Component/Pages/AdminUserPages/Components/ManageAdmin.js/ManageAdmin";
import ManageCRMUsers from "./Component/Pages/AdminUserPages/Components/ManageCRMUsers/ManageCRMUsers";
import ManageSlider from "./Component/Pages/FrontEnd/Components/ManageSlider/ManageSlider";
import ManageFeature from "./Component/Pages/FrontEnd/Components/ManageFeatures/ManageFeature";
import ManageChoose from "./Component/Pages/FrontEnd/Components/ManageWhyChoose/ManageChoose";
import ManageLogisticPartner from "./Component/Pages/FrontEnd/Components/LogisticPartner/ManageLogisticPartner";
import ManageChannelPartner from "./Component/Pages/FrontEnd/Components/ChannelPartners/ManageChannelPartner";
import ManageBrandsSlider from "./Component/Pages/FrontEnd/Components/BrandsSlider/ManageBrandsSlider";
import ManagePressCoverage from "./Component/Pages/FrontEnd/Components/PressCoverage/ManagePressCoverage";
import ManageTestimonial from "./Component/Pages/FrontEnd/Components/Testimonial/ManageTestimonial";
import ManageSocialLink from "./Component/Pages/FrontEnd/Components/SocialLinks/ManageSocialLink";
import ManageRecommendation from "./Component/Pages/FrontEnd/Components/RecommendationEngine/ManageRecommendation";
import ManageCounterStat from "./Component/Pages/FrontEnd/Components/CounterStats/ManageCounterStat";
import ManageGlossary from "./Component/Pages/Website/Components/Glossary/ManageGlossary";
import ManageSupport from "./Component/Pages/Website/Components/Support/ManageSupport";
import ManageSupportSubCat from "./Component/Pages/Website/Components/SupportSubCategory/ManageSupportSubCat";
import ManageSupportChild from "./Component/Pages/Website/Components/SupportSubChild/ManageSupportChild";
import ManageBlog from "./Component/Pages/Website/Components/Blog/ManageBlog";
import ManageFooterConfig from "./Component/Pages/Website/Components/FooterConfig/ManageFooterConfig";
import ManageFAQ from "./Component/Pages/Website/Components/FAQ/ManageFAQ";
import ManageAbout from "./Component/Pages/Website/Components/About/ManageAbout";
import ManageCareerImage from "./Component/Pages/Website/Components/CareerImage/ManageCareerImage";
import ManageCareerInterviewProcess from "./Component/Pages/Website/Components/CareerInterviewProcess/ManageCareerInterviewProcess";
import ManageCurrency from "./Component/Pages/Website/Components/Currency/ManageCurrency";
import ManageContactUs from "./Component/Pages/Website/Components/ContactUs/ManageContactUs";
import ManageFooterCategory from "./Component/Pages/Website/Components/FooterCategory/ManageFooterCategory";
import ManageFooterSubCategory from "./Component/Pages/Website/Components/FooterSubCategory/ManageFooterSubCategory";
import ManageCourier from "./Component/Pages/Website/Components/Courier/ManageCourier";
import ManageConfiguration from "./Component/Pages/Configuration/ManageConfiguration";
import ServiceablePincodesPage from "./Component/Pages/TechnologiesPage/ServiceablePincodesPage/ServiceablePincodesPage";
import ShippingRates from "./Component/Pages/Finance/ShippingRates";
import SellerInvoices from "./Component/Pages/Finance/SellerInvoices";
import TodaysRemmitTab from "./Component/Pages/CodRemitancePage/TodaysRemmitTab/TodaysRemmitTab";
import CronDashboard from "./Component/Pages/TechnologiesPage/CronDashboard/CronDashboard";
import PendencyPage from "./Component/Pages/TechnologiesPage/PendencyPage/PendencyPage";

function App() {
  const navigate = useNavigate();
  const [WalletRecharge, setWalletRecharge] = useState(false)
  const [ZoneMapping, setZoneMapping] = useState(false)
  const [tokenExists, setTokenExists] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false);

  useEffect(() => {
    const token = Cookies.get('admin_access_token');
    setTokenExists(!!token);
    setTokenChecked(true);
  }, []);

  useEffect(() => {
    if (tokenChecked && !tokenExists && window.location.pathname != signUpPattern) {
      navigate(loginPattern);
    }
  }, [tokenChecked, tokenExists, navigate]);

  return (
    <>
      <div className="container p-0 m-0" style={{}}>
        <div className="rightContainer">
          {tokenExists && <>
            <Header WalletRecharge={WalletRecharge} setWalletRecharge={setWalletRecharge} />
            <Sidebar ZoneMapping={ZoneMapping} setZoneMapping={setZoneMapping} />
          </>}
          <Routes>
            {
              tokenExists ?
                <Route path={indexPattern} element={<Dashboard />} /> :
                <Route path={loginPattern} element={<LoginPage tokenExists={tokenExists} setTokenExists={setTokenExists} />} />
            }
            <Route path={customerSupportPattern} element={<CustomerSupportPage />} />
            <Route path={EscalationPattern} element={<CustomerSupportPage />} />
            <Route path={PendencyPattern} element={<PendencyPage />} />
            <Route path={CronDashboardPattern} element={<CronDashboard />} />
            <Route path={TodaysRemittancePattern} element={<TodaysRemmitTab />} />
            <Route path={SellerInvoicesPattern} element={<SellerInvoices />} />
            <Route path={ServiceablePincodesPattern} element={<ServiceablePincodesPage />} />
            <Route path={ManageAdminEmployeesPattern} element={<ManageCRMUsers />} />
            <Route path={ManageAdminPattern} element={<ManageAdmin />} />
            <Route path={OrderReportPattern} element={<OrderReportPage />} />
            <Route path={SellerManagementPattern} element={<SellerManagementPage />} />
            <Route path={LogisticsPartnersPattern} element={<LogisticsPartnersPage />} />
            <Route path={SellerConfigurationPattern} element={<SellerConfigurationPage />} />
            <Route path={SellerVerificationPattern} element={<SellerVerificationPage />} />
            <Route path={CourierBlockingPattern} element={<CourierBlockingPage />} />
            <Route path={channelsIntegrationPattern} element={<ChannelsIntegration />} />
            <Route path={weightReconciliationPattern} element={<WeightRecoTab />} />
            <Route path={settledWeightRecoPattern} element={<SettledReco />} />
            <Route path={WeightRecoLogsPattern} element={<WeightRecoLogs />} />
            <Route path={WeightDisputePattern} element={<WeightDisputeTab />} />
            <Route path={shippingRatesPattern} element={<ShippingRates />} />
            <Route path={signUpPattern} element={<SignUpPage />} />
            <Route path={CodRemittancePattern} element={<CodRemittanceTab />} />
            <Route path={SellerRemittancePattern} element={<SellerRemittTab />} />
            <Route path={CodRemittanceLogsPattern} element={<CodRemittLogTab />} />
            <Route path={courierCodRemittancePattern} element={<CourierCodRemitt />} />
            <Route path={ManageSliderPattern} element={<ManageSlider />} />
            <Route path={ManageFeaturePattern} element={<ManageFeature />} />
            <Route path={ManageChoosePattern} element={<ManageChoose />} />
            <Route path={ManageLogisticPartnerPattern} element={<ManageLogisticPartner />} />
            <Route path={ManageChannelPartnerPattern} element={<ManageChannelPartner />} />
            <Route path={ManageBrandSliderPattern} element={<ManageBrandsSlider />} />
            <Route path={ManagePressCoveragePattern} element={<ManagePressCoverage />} />
            <Route path={ManageTestimonialPattern} element={<ManageTestimonial />} />
            <Route path={ManageSocialLinkPattern} element={<ManageSocialLink />} />
            <Route path={ManageRecommendationPattern} element={<ManageRecommendation />} />
            <Route path={ManageCounterStatPattern} element={<ManageCounterStat />} />
            <Route path={ManageGlossaryPattern} element={<ManageGlossary />} />
            <Route path={ManageSupportPattern} element={<ManageSupport />} />
            <Route path={ManageSupportSubCatPattern} element={<ManageSupportSubCat />} />
            <Route path={ManageSupportChildPattern} element={<ManageSupportChild />} />
            <Route path={ManageBlogPattern} element={<ManageBlog />} />
            <Route path={ManageFooterConfigPattern} element={<ManageFooterConfig />} />
            <Route path={ManageFAQPattern} element={<ManageFAQ />} />
            <Route path={ManageAboutPattern} element={<ManageAbout />} />
            <Route path={ManageCareerImagePattern} element={<ManageCareerImage />} />
            <Route path={ManageCareerInterviewProcessPattern} element={<ManageCareerInterviewProcess />} />
            <Route path={ManageCurrencyPattern} element={<ManageCurrency />} />
            <Route path={ManageContactUsPattern} element={<ManageContactUs />} />
            <Route path={ManageFooterCategoryPattern} element={<ManageFooterCategory />} />
            <Route path={ManageFooterSubCategoryPattern} element={<ManageFooterSubCategory />} />
            <Route path={ManageCourierPattern} element={<ManageCourier />} />
            <Route path={ManageConfigurationPattern} element={<ManageConfiguration />} />
          </Routes>
        </div>
      </div>
      <WalletRechargeComponent WalletRecharge={WalletRecharge} setWalletRecharge={setWalletRecharge} />
      <section onClick={() => setWalletRecharge(!WalletRecharge)} className={`backdrop ${WalletRecharge ? 'd-block' : 'd-none'}`}></section>
      <ZoneMappingPop ZoneMapping={ZoneMapping} setZoneMapping={setZoneMapping} />
      <section onClick={() => setZoneMapping(false)} className={`backdrop ${ZoneMapping ? 'd-block' : 'd-none'}`}></section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={true}
        transition={Bounce}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover

      />

    </>

  );
}

export default App;
