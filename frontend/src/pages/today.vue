<script setup lang="ts">
import { GetBacklogDocument } from '../../../types/generated';

import { useQuery } from '@apollo/client';


const { data, loading, error } = useQuery(GetBacklogDocument);









</script>

<template>
  <div>
    <h1>
      Today
    </h1>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
  </route>

