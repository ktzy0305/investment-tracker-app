<template>
    <div class="card w-100">
        <div class="card-header">
            <h5 class="card-title">{{ listing.name }} ({{listing.symbol}})</h5>
        </div>
        <div class="card-body">
            <p class="card-text">
                <small class="text-muted">
                    <span class="display-6">
                        ${{ listing.price }}
                    </span>
                </small>
            </p>
            <button class="btn btn-primary" @click="$emit('buy', listing)">Buy</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Listing',
    methods: {
        buy: function() {
            this.$emit('buy', this.listing);
        }
    },
    props: ['listing']
}
</script>

<style>
/* No styles af of yet */
</style>