import Head from 'next/head';
// import Navbar from '@/components/navbar/Navbar';
// import AirbnbBanner from '@/components/banner/AirbnbBanner';
// import ExploreNearbyCard from '@/components/cards/ExploreNearbyCard';


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      {/* <AirbnbBanner /> */}

      <main className="max-w-7xl mx-auto">
        {/* <section className='mb-4'>
          <h2 className="text-4xl font-semibold mt-2 mb-6">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {props.smallCardsData.map((place) => (
              <ExploreNearbyCard key={place.img} data={place} />
            ))}
          </div>
        </section> */}
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   const smallCardsData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((response) =>
//     response.json()
//   );

//   return {
//     props: {
//       smallCardsData,
//     },
//   };
// };
