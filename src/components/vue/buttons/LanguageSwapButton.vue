<script lang="ts" setup>
import Button from '../shadcn/buttons/Button.vue';

const { targetLanguage } = defineProps({
    targetLanguage: {
        type: String,
        required: true
    }
});


async function onClick() {
    await fetch(`/api/set-language`, {
        method: "POST",
        headers: { "Content-Type": "application/text" },
        body: targetLanguage,
    });

    window.location.href = '/' + targetLanguage;
}

</script>

<template>
    <Button variant="outline" size="sm" @click="onClick()">
        <slot />
    </Button>
</template>