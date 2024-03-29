import type { MetaFunction } from "@remix-run/node";
import BreadcrumbHeader from "~/components/layout/BreadcrumbHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Evan Jones dot dev" },
    { name: "Evan Jones' Personal Site", content: "<FILL WITH SEO>" },
  ];
};

export default function Index() {
  return <BreadcrumbHeader />;
}
