<script setup lang="ts"></script>

<template>
  <VApp>
    <VLayout>
      <VNavigationDrawer>
        <VListItem>
          <div class="text-h4 pa-2">Test app</div>
        </VListItem>
        <VDivider></VDivider>

        <VListItem to="/" title="Главная"></VListItem>
        <VListItem to="/tasks" title="Задачи"></VListItem>
      </VNavigationDrawer>
      <VMain>
        <div class="app-container pa-3">
          <VCard class="app-container-card">
            <RouterView></RouterView>
          </VCard>
        </div>
      </VMain>
    </VLayout>
  </VApp>
</template>
<style lang="scss">
.app-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  &-card {
    flex: 1;
    display: flex !important;
    flex-direction: column;
  }
}
</style>
