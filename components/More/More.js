import { useSelected } from "../../lib/selectedContext";
import ListContainer from "../Main/ListContainer";
import { Option } from "./Option";

export const More = () => {
  const { setSelected } = useSelected();

  return (
    <ListContainer classNames="mt-[100px] w-full">
      <Option providerOnly title="العملاء الحاليين" />
      <Option providerOnly title="سجل العملاء" />
      <Option providerOnly title="التعليم" />
      <Option providerOnly title="إدارة خدماتي" />
      <Option providerOnly title="أرباحي" />

      <Option title="إدارة حجوزاتي" />
      <Option title="طلباتي السابقة" />
      <Option title="المفضلة" />
      <Option title="الدفع" />
      <Option title="تقييم التطبيق" />
      <Option title="بلغ عن مشكلة" />
      <Option title="الدعم الفني" />
      <Option pressAction={() => setSelected("intro")} title="تسجيل الخروج" />
    </ListContainer>
  );
};
