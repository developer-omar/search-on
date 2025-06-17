<script setup lang="ts">
import { RouterView } from "vue-router";
import router from "../router";
import { useLocale } from "vuetify/lib/framework.mjs";

router.push("/options");
const { t } = useLocale();
</script>

<template>
  <v-layout class="rounded rounded-md border">
    <v-navigation-drawer>
      <v-list nav>
        <v-list-item
          link
          prepend-icon="mdi-cogs"
          :title="t('$vuetify.optionsPage.menu.optionsLink')"
          to="/options"
        >
        </v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-search-web"
          :title="t('$vuetify.optionsPage.menu.searchEnginesLink')"
          to="/search-engines"
        >
        </v-list-item>
        <v-list-item
          link
          prepend-icon="mdi-cash-multiple"
          :title="t('$vuetify.optionsPage.menu.donateLink')"
          href="https://www.paypal.com/ncp/payment/LLWTEAQ7G6HR4"
          target="_blank"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar title="Search On"></v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
