<template>
    <div>
        <Header />

        <h1 class="text-center display-4 mt-5">We are at the heart of appropriate care</h1>
        <div class="home-container">
            <div class="coach" align="center">
                <i class="fas fa-user-md text-light" style="font-size: 200px;"></i><br/>
                <button @click="handleCoachLogin" class="btn btn-secondary">Login as a Coach</button> 
                <button @click="handleCoachSignup" class="btn btn-secondary">Join as a Coach</button>
            </div>
            <div class="user" align="center">
                <i class="fas fa-users text-light" style="font-size: 200px;"></i><br/>
                <button @click="handleUserLogin" class="btn btn-secondary">Login as a User</button>
                <button @click="handleUserSignup" class="btn btn-secondary">Join as a User</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header"

export default {
    name: "Home",
    components: {
        Header
    },
    methods: {
        handleCoachSignup: function() {
            this.$router.push("/coachsignup")
        },
        handleCoachLogin: function() {
            this.$router.push("/coachlogin")
        },
        handleUserLogin: function() {
            this.$router.push("/userlogin")
        },
        handleUserSignup: function() {
            this.$router.push("/usersignup")
        }
    }
}
</script>