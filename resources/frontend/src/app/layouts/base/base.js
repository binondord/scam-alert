import { mapState } from 'vuex';
import * as VContent from './../../components/content/content.vue';
import * as VDrawer from './../../components/drawer/drawer.vue';
import * as VHeader from './../../components/header/header.vue';
import * as VOverlay from './../../components/overlay/overlay.vue';
import * as VToolbar from './../../components/toolbar/toolbar.vue';
import * as VNavigation from './../../components/navigation/navigation.vue';
import ComponentMixin from './../../mixins/component';

export default {
  name: 'base-layout',

  data() {
    return {
      title: {
        content: 'Scam Alert',
      },
      routes: [
        {
          to: { name: 'home.index' },
          content: 'Home',
        },
        {
          to: { name: 'scammers.index' },
          content: 'Scammers',
        },
      ],
    };
  },


  computed: {
    ...mapState('application', {
      application: state => state,
    }),
  },

  mixins: [
    ComponentMixin,
  ],

  components: {
    VContent,
    VDrawer,
    VHeader,
    VOverlay,
    VToolbar,
    VNavigation,
  },
};
