<template>
  <div class="container">
    <div>
      <h1 class="title">
        Сontact list
      </h1>
      <div class="links">
        <nuxt-link
          to="/newContact"
          class="button--green"
        >
          Add new contact
        </nuxt-link>
      </div>
      <div v-if="getContactList.length !== 0" class="contact__list">
        <div v-for="(contact, index) in getContactList" :key="index" class="contact__item">
          <p class="contact__item--index">
            {{ index + 1 }})
          </p>
          <p class="contact__item--phone">
            {{ contact.phone }}
          </p>
          <p class="contact__item--name">
            {{ contact.name }}
          </p>
          <p class="contact__item--email">
            {{ contact.email }}
          </p>
          <div class="btn__actions">
            <button class="contact__item--details" @click="details(contact)">
              Details
            </button>
            <button class="contact__item--edit" @click="edit(contact)">
              Edit
            </button>
            <button class="contact__item--delete" @click="deleteContact">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    getContactList () {
      return this.$store.getters.getContactList
    }
  },
  methods: {
    deleteContact (index) {
      if (window.confirm('Do you want delete contact?')) {
        this.$store.commit('removeContactFromList', index)
      }
    },
    details (contact) {
      this.$router.push(`/${contact.id}`)
    },
    edit (contact) {
      this.$router.push(`/${contact.id}/edit`)
    }
  }
}
</script>

<style>
.container {
  background-color: #272727;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
  display: flex;
  justify-content: center;
}

.contact__list {
  margin-top: 50px;
  padding: 20px;
  background-color: #D4AA7D;
  border-radius: 4px;
  width: 800px;
}

.contact__item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.contact__item--delete,
.contact__item--details {
  cursor: pointer;
}
</style>
