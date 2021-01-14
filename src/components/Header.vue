<template>
    <nav class="navbar navbar-expand-md navbar-light bg-dark">
        <span class="navbar-brand text-light" @click="goToHome">WeCare</span>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
                <li class="nav-item"> 
                    <span class="nav-link text-light"><i class="fas fa-phone-alt"></i>Call us: 07692:222460</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "main-header",
    methods: {
        goToHome: function() {
            this.$router.push("/")
        }
    }
}
</script>