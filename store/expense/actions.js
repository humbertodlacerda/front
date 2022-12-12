export default
 {
    getExpenses() {
        return this.$axios.get('/api/expense')
    }
 }
