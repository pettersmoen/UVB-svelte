<script>
    import About from '../frontend/components/About/About.svelte';
    import WithImageCarousel from '../frontend/components/Layouts/WithImageCarousel.svelte';
    import Single from '../frontend/components/Layouts/Single.svelte';

    // const carouselImages = [
    // { img: '/img/tinkerinnature.jpg', pos: '62% 61%' },
    // { img: '/img/uziwithdogswater.jpg', pos: '58% 16%' },
    // { img: '/img/horseflehmenresponse.jpg', pos: '38% 51%' },
    // { img: '/img/tinkerbaileygate.jpg', pos: '44% 71%' },
    // { img: '/img/cows.jpg', pos: '30% 44%' },
    // { img: '/img/uzicuddlingbailey.jpg', pos: '58% 23%' },
    // { img: '/img/horse1.jpg', pos: '47% 46%' },
    // { img: '/img/horse2.jpg', pos: '21% 43%' },
    // { img: '/img/dogs.jpg', pos: '50% 0%' },
    // { img: '/img/baileymountain.jpg', pos: 'center' },
    // { img: '/img/uziandbaileywater.jpg', pos: '29% 49%' }
    // ];
</script>

<svelte:head>
    <title>Vårt team</title>
</svelte:head>

<!-- <WithImageCarousel images={carouselImages}>
    <About />
</WithImageCarousel> -->

<Single>
    <About />
</Single>
