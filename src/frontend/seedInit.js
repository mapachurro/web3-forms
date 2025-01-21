import * as config from '../schema'
import {client as seedClient} from '@seedprotocol/sdk'

(async () => {
  // const addresses = import.meta.env.PERSONAL_WALLET_ADDRESSES.split(',')
  const addresses = ['1234567890']
  await seedClient.init({ config, addresses })
})();

export const getClient = () => seedClient