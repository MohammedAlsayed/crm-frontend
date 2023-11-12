import waitOn from 'wait-on'
import { setup, teardown } from '@nightwatch/vue'
import process from 'node:process';

const serverPort = process.env.CI ? '4173' : '5173'

export function before(done) {
  setup()
  waitOn({
    resources: [`http-get://localhost:${serverPort}`],
    verbose: true,
    headers: {
      accept: 'text/html'
    }
  }).then(() => {
    done()
  })
}
export function after() {
  teardown()
}
