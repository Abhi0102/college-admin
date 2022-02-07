import { Icon } from "@iconify/react";


const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

{
  /* <Icon icon="eva:pie-chart-2-fill" />; */
}
export const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/home",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "student form",
    path: "/dashboard/student-form",
    icon: getIcon("clarity:form-line"),
  },
  {
    title: "view students",
    path: "/dashboard/view-students",
    icon: getIcon("icons8:student"),
  },
];
