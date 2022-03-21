import { DEFAULT_LOCALE } from 'constants/system';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {};

const Home: NextPage<Props> = ({}) => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 h-screen">
      <div className="px-4 py-8 sm:px-0 h-full">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-full" />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || DEFAULT_LOCALE, ['common'])),
    },
  };
};

export default Home;
