<template>
  <div class="container">
    <div>
      <h1 class="title">
        Add new contact
      </h1>
      <div class="links">
        <nuxt-link
          to="/"
          class="button--green"
        >
          Back to list
        </nuxt-link>
      </div>
      <form class="contact__form">
        <div v-if="showAlert" class="alert alert-warning text-center" role="alert">
          <strong>Hey!</strong> {{ alertMessage }}
        </div>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            id="name"
            v-model="contactList.name"
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
            v-model="contactList.phone"
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
            v-model="contactList.email"
            type="email"
            class="form-control"
            placeholder="Enter Email"
            required
          >
        </div>
        <div class="submit__btn">
          <button type="button" class="button--grey btn" @click.prevent="addContact">
            Add contact
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data () {
    return {
      contactList: {
        id: null,
        name: '',
        phone: '',
        email: ''
      },
      showAlert: false,
      alertMessage: ''
    }
  },
  methods: {
    addContact () {
      if (this.contactList.name !== '' && this.contactList.phone !== '' && this.contactList.email !== '') {
        this.contactList.id = uuidv4()
        this.$store.commit('addContactToList', this.contactList)
        this.contactList.name = ''
        this.contactList.phone = ''
        this.contactList.email = ''
        this.showAlert = false
        this.$router.push('/');
      } else {
        this.alertMessage = 'Please fill the inputs.'
        this.showAlert = true
      }
    }
  }
}
</script>

<style>
.contact__form {
  margin-top: 50px;
  padding: 20px;
  background-color: #D4AA7D;
  border-radius: 4px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #272727;
  margin-top: 10px;
  margin-bottom: 5px;
}

.form-group input {
  background-color: transparent;
  height: 30px;
  border: none;
  border-bottom: 1px solid #3b8070;
  padding-left: 10px;
}

.submit__btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.btn{
  cursor: pointer;
}
</style>
