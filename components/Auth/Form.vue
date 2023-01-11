<template>
    <div>
        <div class="pt-5 space-y-6">

            <UiInput label="Email" placeholder="You email" v-model="data.email" />

            <UiInput type="password" label="Password" placeholder="You password" v-model="data.password" />

            <div>
                <button @click="handleLogin">Login</button>
            </div>

        </div>
    </div>
</template>

<script setup>
const data = reactive({
    email: '',
    password: '',
    loading: false
});

async function handleLogin() {
    const { login } = useAuth();

    data.loading = true;

    try {
        await login({
            email: data.email,
            password: data.password
        });
    } catch (error) {
        console.log(error);
    } finally {
        data.loading = false;
    }
}

</script>