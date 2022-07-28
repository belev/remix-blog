import type { LinksFunction } from "@remix-run/node";
import {
  PageInformation,
  links as pageInformationLinks,
} from "~/components/PageInformation/PageInformation";
import {
  PageSection,
  links as pageSectionLinks,
} from "~/components/PageSection/PageSection";
import { Posts } from "~/components/Posts/Posts";
import siteConfig from "../../siteConfig.json";

export const links: LinksFunction = () => [
  ...pageInformationLinks(),
  ...pageSectionLinks(),
];

export default function Index() {
  return (
    <>
      <PageInformation heading={siteConfig.siteTitle}>
        <p>{`Welcome 👋! Introduce yourself here.`}</p>
      </PageInformation>

      <PageSection
        heading="Latest Posts"
        navigation={{ href: "/blog", text: "Read all posts" }}
      >
        <Posts posts={[]} />
      </PageSection>
    </>
  );
}
