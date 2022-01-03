import Vue from 'vue'
import Vuex from 'vuex'

import { account } from './modules/account.module'
import { portfolio } from './modules/portfolio.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        account,
        portfolio,
    }
})