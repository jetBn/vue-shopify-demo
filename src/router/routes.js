const querystring = require('querystring')
const crypto = require('crypto')

/* eslint-disable */
const authRoutes = [
  {
    path: '/shopify/install',
    beforeEnter(to, _from, next) {
      if (to.query.shop) {
        // Handshake with Shopify
        const shop = to.query.shop,
          scopes = 'read_orders,read_products,write_products',
          redirect_uri = 'https://' + process.env.VUE_APP_ROOT_URL + '/shopify/auth',
          install_url =
                'http://' + shop + '/admin/oauth/authorize?client_id=' +
                process.env.VUE_APP_SHOPIFY_API_KEY +
                '&scope=' + scopes + '&redirect_uri=' + redirect_uri

        window.location = install_url
      } else {
        next({ path: '/error' })
      }
    }
  },
  {
    path: '/shopify/auth',
    beforeEnter(to, _from, next) {
      const shop = to.query.shop,
        hmac = to.query.hmac,
        code = to.query.code

      if (shop && hmac && code) {
        const map = Object.assign({}, to.query)
        delete map['signature']
        delete map['hmac']
        const message = querystring.stringify(map)
        const encrypted =
          crypto.createHmac('sha256', process.env.VUE_APP_SHOPIFY_API_SECRET_KEY)
                .update(message)
                .digest('hex')
        // const providedHmac =  Buffer.from(hmac, 'utf-8')
        // const generatedHash = Buffer.from(encrypted, 'utf-8')

        let hashEquals = false

        try {
          // later: Auth fails with `crypto.timingSafeEqual`
          // hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
          hashEquals = hmac === encrypted
        } catch (e) {
          hashEquals = false
        }

        if (!hashEquals) {
          next({ path: '/error' })
        } else {
          next('/')
        }
      } else {
        next({ path: '/error' })
      }
    }
  }
]

/* eslint-enable */

const pageRoutes = [
  { path: '/', name: 'home', component: () => import('@/views/index/index') },
  { path: '/setting', component: () => import('@/views/setting/index') },
  { path: '/error', component: Error, props: true }
]

export default pageRoutes.concat(authRoutes)
