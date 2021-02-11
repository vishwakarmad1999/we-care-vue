<template>
    <nav class="navbar navbar-expand-md navbar-light bg-dark">
        <span class="navbar-brand text-light">WeCare</span>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto"></ul>
            <ul class="navbar-nav">
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="coachViewProfile"><i class="fas fa-user"></i>View Profile</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="coachSchedules"><i class="fas fa-calendar-alt"></i>My Schedules</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor"><i class="fas fa-phone-alt"></i>Call us: 07692:222460</span>
                </li>
                <li class="nav-item"> 
                    <span class="nav-link text-light cursor" @click="logout"><i class="fas fa-sign-out-alt"></i>Logout</span>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "coach-header",
    methods: {
        coachViewProfile: function() {
            this.$router.push("/coachprofile")
        },
        coachSchedules: function() {
            this.$router.push("/coachhome")
        },
        logout: function() {
            localStorage.setItem("coachId", null)
            this.$router.push("/")
        }
    }
}
</script>