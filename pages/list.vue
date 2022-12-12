<template>

    <div>
        <!-- <table class="m-auto mt-5 table-fixed border-spacing-2">
            <thead>
                <tr class="odd:bg-white even:bg-slate-50">
                    <th class="border-2 p-1 border-slate-600" >Data</th>
                    <th class="border-2 p-1 border-slate-600" >Descrição</th>
                    <th class="border-2 p-1 border-slate-600" >Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="expense in expenses" :key="expense" class="">
                    <td class=" border-2 p-1 border-slate-700">{{expense.date}}</td>
                    <td class=" border-2 p-1 border-slate-700">{{expense.description}}</td>
                    <td class=" border-2 p-1 border-slate-700">{{expense.value}}</td>
                </tr>
            </tbody>
        </table> -->



        <div class="m-5 overflow-x-auto relative shadow-md sm:rounded-lg">
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
            <tr v-for="expense in expenses" :key="expense" class="bg-blue-500 border-b border-blue-400">
                <td class="py-4 px-6">{{expense.date}}</td>
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
    }
}
</script>
