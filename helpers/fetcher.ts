import got from 'got';

export const client = got.extend({
  prefixUrl: 'https://botble.toiyeulaptrinh.com/api/v1',
  responseType: 'json',
});

// export const getFeatureListing = (): Promise<{
//   id: string;
//   name: string;
//   slug: string;
// }[]> => {
//   return client.get('posts/featured').then<any>(path(['body', 'data']));
// };
