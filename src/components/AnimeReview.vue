<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Review</h2>
        <div class="grid grid-cols-2 gap-4">
            <div v-for="review in reviews" :key="review.mal_id">
                <h5 class="font-semibold text-md">{{ review.user.username }}</h5>
                <p class="text-xs text-justify">{{ pangkasReview(review.review) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AnimeReview',
        props: ['reviews'],
        data() {
            return{
                maxLength: 250,
                readMore: true
            }
        },
        methods: {
            pangkasReview(val) {
                if(val.length > this.maxLength) {
                    this.readMore = true
                    return val.slice(0,this.maxLength) + "...";
                } else{
                    return val
                }
            }
        }
    }
</script>