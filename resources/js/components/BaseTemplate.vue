<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link to="/" class="navbar-brand">Laravel - Estimator</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto"></ul>

                    <ul class="navbar-nav ml-auto">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/list" class="nav-item nav-link">List</router-link>

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>Name</a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"basetemplate"
}
</script>
