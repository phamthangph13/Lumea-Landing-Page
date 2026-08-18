import { mockProjects, mockContact, mockAwards } from '@/assets/json/mockData'

export const state = () => ({
  projectData: mockProjects,
  contactData: mockContact,
  pickupData: mockProjects.filter((v) => v.pickup && v.pickup.pickupFlag),
  awardData: mockAwards,
  awardDataLength: {
    awwwwardsTotalLength: 0,
    cssdesignawardsTotalLength: 0,
    csswinnerTotalLength: 0,
  },
});

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    let projects = []
    let contacts = []
    let awards = []

    if (process.env.serviceDomain && process.env.apiKey) {
      try {
        const projectResponse = await app.$axios.$get(`https://${process.env.serviceDomain}.microcms.io/api/v1/works?limit=200`, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.apiKey
          }
        })
        projects = projectResponse.contents

        const contactResponse = await app.$axios.$get(`https://${process.env.serviceDomain}.microcms.io/api/v1/contact?limit=200`, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.apiKey
          }
        })
        contacts = contactResponse.contents

        const awardResponse = await app.$axios.$get(`https://${process.env.serviceDomain}.microcms.io/api/v1/award?limit=200`, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.apiKey
          }
        })
        awards = awardResponse.contents
      } catch (err) {
        console.warn('microCMS fetch failed, using fallback mock data:', err.message)
        projects = mockProjects
        contacts = mockContact
        awards = mockAwards
      }
    } else {
      projects = mockProjects
      contacts = mockContact
      awards = mockAwards
    }

    const pickupData = projects.filter((v) => v.pickup && v.pickup.pickupFlag)
    let awwwwardsLength = 0
    let cssdesignawardsLength = 0
    let csswinnerLength = 0

    awards.forEach((v) => {
      if (v.group === 'AWWWARDS') {
        awwwwardsLength++
      } else if (v.group === 'CSS DESIGN AWARDS') {
        cssdesignawardsLength++
      } else if (v.group === 'CSS WINNER') {
        csswinnerLength++
      }
    })

    const awardDataLength = {
      awwwwardsTotalLength: awwwwardsLength,
      cssdesignawardsTotalLength: cssdesignawardsLength,
      csswinnerTotalLength: csswinnerLength,
    }

    commit('getProjectData', projects)
    commit('getContactData', contacts)
    commit('getPickupData', pickupData)
    commit('getAwardData', awards)
    commit('getAwardDataLength', awardDataLength)
  }
}

export const mutations = {
  getProjectData(state, data) {
    state.projectData = data
  },
  getContactData(state, data) {
    state.contactData = data
  },
  getPickupData(state, data) {
    state.pickupData = data
  },
  getAwardData(state, data) {
    state.awardData = data
  },
  getAwardDataLength(state, data) {
    state.awardDataLength = data
  },
}

export const getters = {
  projectData(state) {
    return state.projectData;
  },
  contactData(state) {
    return state.contactData;
  },
  pickupData(state) {
    return state.pickupData;
  },
  awardData(state) {
    return state.awardData;
  },
  awardDataLength(state) {
    return state.awardDataLength;
  },
};
