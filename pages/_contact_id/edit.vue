<template>
  <div class="container">
    <div class="">
      <form class="contact__form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            id="name"
            v-model="contact.name"
            type="text"
            class="form-control"
            placeholder="Enter Name"
            required
          >
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            id="phone"
            v-model="contact.phone"
            type="tel"
            class="form-control"
            placeholder="Enter Phone number"
            required
          >
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="contact.email"
            type="email"
            class="form-control"
            placeholder="Enter Email"
            required
          >
        </div>
        <div class="btns">
          <nuxt-link to="/" type="button" class="button--green btn--back btn">
            Back
          </nuxt-link>
          <button type="button" class="button--grey btn" @click.prevent="saveContact">
            Save contact
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      contact: {}
    }
  },
  mounted () {
    const { contact_id } = this.$route.params
    this.contact = { ...this.contactsList.find(el => el.id === contact_id) }
  },
  computed: {
    ...mapGetters({
      contactsList: 'getContactList'
    })
  },
  methods: {
    saveContact () {
      this.$store.commit('updateContact', this.contact)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-top: 30px;
    background-color: #90A9B7;
  }

</style>
