<template>
  <div class="container">
    <div>
      <h1 class="title">
        Contact detail
      </h1>
      <div class="contact__detail">
        <p>Name: {{ contact.name }}</p>
        <p>Email: {{ contact.email }}</p>
        <p>Phone: {{ contact.phone }}</p>
      </div>
      <div class="submit__btn">
        <nuxt-link to="/" type="button" class="button--grey btn">
          Back to list
        </nuxt-link>
      </div>
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
    this.contact = this.contactsList.find(el => el.id === contact_id)
  },
  computed: {
    ...mapGetters({
      contactsList: 'getContactList'
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.contact__detail {
  margin-top: 50px;
  padding: 20px;
  background-color: #D4AA7D;
  border-radius: 4px;
}

.contact__detail p {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
