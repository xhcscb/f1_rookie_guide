import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

import ConceptCard from './components/ConceptCard.vue'
import HomeApp from './components/HomeApp.vue'
import LearningPath from './components/LearningPath.vue'
import ResourceCard from './components/ResourceCard.vue'
import TermBadge from './components/TermBadge.vue'
import TrackCornerCard from './components/TrackCornerCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ConceptCard', ConceptCard)
    app.component('HomeApp', HomeApp)
    app.component('LearningPath', LearningPath)
    app.component('ResourceCard', ResourceCard)
    app.component('TermBadge', TermBadge)
    app.component('TrackCornerCard', TrackCornerCard)
  }
} satisfies Theme
