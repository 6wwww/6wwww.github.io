<template>
  <header>
    <nav>
      <ul>
        <!-- todo router -->
        <li>
          <router-link class="nav-item" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/skills">Skills</router-link>
        </li>
        <li>
          <router-link class="nav-item" to="/project">Project</router-link>
        </li>
        <!--                <li>-->
        <!--                    <router-link class="nav-item" to="/work">Work</router-link>-->
        <!--                </li>-->
        <li>
          <router-link class="nav-item last-item" to="/contact"
            >Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
@import "@/styles/common/header.scss";
</style>
