import ListContainer from "../Main/ListContainer";
import { Option } from "./Option";
import { BoldText } from "../Text/BoldText";
import { View } from "react-native";

// Extra: Rate the App, Feedback, Contact Support, Logout

export const More = () => {
  return (
    <ListContainer classNames="mt-[100px]">
      <Option provider title="العملاء الحاليين" />
      <Option provider title="سجل العملاء" />
      <Option provider title="التعليم" />
      <Option provider title="إدارة خدماتي" />
      <Option provider title="أرباحي" />

      <Option title="إدارة حجوزاتي" />
      <Option title="طلباتي السابقة" />
      <Option title="المفضلة" />
      <Option title="الدفع" />
      <Option title="تقييم التطبيق" />
      <Option title="بلغ عن مشكلة" />
      <Option title="الدعم الفني" />
      <Option title="تسجيل الخروج" />
    </ListContainer>
  );
};
