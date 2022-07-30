import type { MetaFunction } from '@remix-run/node';
import { PageInformation } from '~/components/PageInformation/PageInformation';
import siteConfig from '../../siteConfig.json';

export const meta: MetaFunction = () => {
  return { title: `About | ${siteConfig.siteTitle}` };
};

export default function Index() {
  return (
    <PageInformation heading="About">
      <p>About page placeholder</p>
    </PageInformation>
  );
}
