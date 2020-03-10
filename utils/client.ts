import got, {GeneralError} from 'got';

const client = got.extend({
  prefixUrl: 'https://botble.toiyeulaptrinh.com/api/v1',
  responseType: 'json',
  resolveBodyOnly: true,
  retry: 0,
  hooks: {
    beforeError: [
      (error): GeneralError => {
        const {response} = error as any;

        if (response && response.body) {
          error.message = response.body.message || error.message;
        }

        return error;
      },
    ],
  },
});

export default client;
