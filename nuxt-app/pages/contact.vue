<template>
<div class="site-wrap">
    <div class="container py-5"  data-aos="fade">
      <div class="row">
        <div class="col-lg-7 mx-auto text-center">
          <h1 class="text-white intro">Get In Touch</h1>
          <p><a href="/contact" class="btn btn-primary">Contact Information</a></p>
        </div>
      </div>

    </div>

    <div class="site-section"  data-aos="fade">
      <div class="container">

        <div class="row">
          <div class="col-lg-8 mb-5">
            <form @submit.prevent="onSubmit">


              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-white" for="fname">First Name</label>
                  <input v-model="form.name" type="text" id="fname" class="form-control">
                </div>
                <div class="col-md-6">
                  <label class="text-white" for="lname">Last Name</label>
                  <input v-model="form.lastname" type="text" id="lname" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-white" for="email">Email</label> 
                  <input v-model="form.email" type="email" id="email" class="form-control">
                </div>
              </div>

              <div class="row form-group">

                <div class="col-md-12">
                  <label class="text-white" for="subject">Subject</label> 
                  <input v-model="form.subject" type="text" id="subject" class="form-control">
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-white" for="message">Message</label> 
                  <textarea v-model="form.message" name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <button :disabled="loading" class="btn btn-primary py-2 px-4 text-white">{{ loading ? 'Sending...' : 'Send Message' }}</button>
                </div>
              </div>

              <div v-if="success" class="alert alert-success mt-3">Message sent. Thank you!</div>
              <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>

            </form>
          </div>
          <div class="col-lg-3 ml-auto">
            <div class="mb-3">
              <p class="mb-0 font-weight-bold text-white">Address</p>
              <p class="mb-4">14/1 Vardanants str. Yerevan, Armenia</p>

              <p class="mb-0 font-weight-bold text-white">Phone</p>
              <p class="mb-4"><a href="#">+374 xx xxx xxx</a></p>

              <p class="mb-0 font-weight-bold text-white">Email Address</p>
              <p class="mb-0"><a href="#">dozenoffner@gmail.com</a></p>

            </div>

          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useFetch } from '#app'

const form = reactive({ name: '', lastname: '', email: '', subject: '', message: '' })
const loading = ref(false)
const success = ref(false)
const error = ref('')

async function onSubmit() {
  error.value = ''
  success.value = false
  if (!form.email || !form.message) {
    error.value = 'Please provide at least an email and a message.'
    return
  }
  loading.value = true
  try {
    const { data, error: e } = await useFetch('/api/messages', {
      method: 'POST',
      body: { name: form.name, email: form.email, subject: form.subject, message: form.message }
    })
    if (e.value) {
      throw new Error(e.value)
    }
    success.value = true
    form.name = form.lastname = form.email = form.subject = form.message = ''
  } catch (err) {
    error.value = err.message || 'Failed to send message.'
  } finally {
    loading.value = false
  }
}
</script>
