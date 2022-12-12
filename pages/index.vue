<template>
  <div>
    <h1>LOGOU User: {{ $auth.user.id }}</h1>
    <button type="button" class="bg-blue-500 text-white rounded p-3" @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    async logout() {
      this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>
