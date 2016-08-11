<template>
    <div class="sidebar">
        <p><strong>Menu:</strong></p>
        <slot></slot>
    </div>
</template>

<script>

export default {

}

</script>

<style>

    .sidebar {
        float:left;
        width:20%;
        height:100%;
        background:#fdffdc
    }

</style>