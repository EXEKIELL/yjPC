import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Invite from '@/components/invite'
import ProductCenter from '@/components/productCenter'
import AboutUs from '@/components/aboutUs'
import AboutUsIntro from '@/components/aboutUsIntro'
import Partner from '@/components/partner'
import PartnerPolicy from '@/components/partnerPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/invite',
      name: 'Invite',
      component: Invite
    },
    {
      path: '/productCenter',
      name: 'ProductCenter',
      component: ProductCenter
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
      redirect: '/aboutUs/aboutUsIntro',
      children:[
        {
          path: '/aboutUs/aboutUsIntro',
          name: 'aboutUsIntro',
          component: AboutUsIntro
        }
      ]
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner,
      redirect: '/partner/partnerPolicy',
      children:[
        {
          path: '/partner/partnerPolicy',
          name: 'partnerPolicy',
          component: PartnerPolicy
        }
      ]
    }
  ]
})
