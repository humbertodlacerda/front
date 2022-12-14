<template>
    <div>
        <div class="m-8 overflow-x-auto relative shadow-md sm:rounded-lg">
            <button @click="newRevenue()" class="flex-auto float-right mr-0 m-1 bg-[#2EFE2E] rounded w-28">Receita</button>
            <button @click="newExpense()" class="flex-auto float-right m-1 bg-[#FF0000] rounded w-28">Despesa</button>
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" class="py-3 px-6">Data</th>
                        <th scope="col" class="py-3 px-6">Descrição</th>
                        <th scope="col" class="py-3 px-6">Category</th>
                        <th scope="col" class="py-3 px-6">Valor</th>
                        <th scope="col" class="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="expense in expenses" :key="expense.id" class="bg-blue-500 border-b border-blue-400">
                        <td type="date" class="py-4 px-6">{{expense.date}}</td>
                        <td class="py-4 px-6">{{expense.description}}</td>
                        <td class="py-4 px-6">null</td>
                        <td class="py-4 px-6">{{expense.value}}</td>
                        <td class="py-4 px-6">
                            <a href="#" class="font-medium text-white hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expenses: null
        }
    },
    created() {
        this.$store.dispatch('expense/getExpenses').then(({ data }) => {
        this.expenses = data
      });
    },
    methods: {
        newRevenue() {
            this.$router.push({
                path:'/revenue',
            });
        },
        newExpense() {
            this.$router.push({
                path:'/expense',
            });
        }
    }
}
</script>
