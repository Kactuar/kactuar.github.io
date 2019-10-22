<template>
    <div id="app" class="page">
        <h1 class="title">{{title}}</h1>
        <div class="item-wrap">
            <item-list v-for="(elem, ind) in items"
                       :key="ind"
                       :items="items"
                       :count="ind"
            ></item-list>
        </div>
        <button v-show="btnShow" @click="showMore()" type="button" class="button-more">{{btnTitle}}</button>
    </div>
</template>

<script>
	import ItemList from './components/ItemList.vue'

	export default {
		name: 'app',
		components: {
			ItemList
		},
		data() {
			return {
				items: [
					{
						title: 'Brunlees Court',
						address: '19-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£214,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_1.jpg',
						hide: false,
					},
					{
						title: 'Charlotte Court',
						address: '17-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£250,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_2.jpg',
						hide: false,
					},
					{
						title: 'Grove Court',
						address: '11-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£138,999',
						option: 'Shared Ownership Available',
						category: 'Restaurant & Support available',
						img: '/img/Image_3.jpg',
						hide: false,
					},
					{
						title: 'Brunlees Court',
						address: '19-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£214,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_1.jpg',
						hide: true
					},
					{
						title: 'Charlotte Court',
						address: '17-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£250,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_2.jpg',
						hide: true
					},
					{
						title: 'Grove Court',
						address: '11-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£138,999',
						option: 'Shared Ownership Available',
						category: 'Restaurant & Support available',
						img: '/img/Image_3.jpg',
						hide: true
					},
					{
						title: 'Brunlees Court',
						address: '19-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£214,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_1.jpg',
						hide: true
					},
					{
						title: 'Charlotte Court',
						address: '17-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£250,999',
						option: 'Shared Ownership Available',
						category: 'Independent living',
						img: '/img/Image_2.jpg',
						hide: true
					},
					{
						title: 'Grove Court',
						address: '11-23 Cambridge Road, Southport',
						saleText: 'New Properties for Sale from',
						price: '£138,999',
						option: 'Shared Ownership Available',
						category: 'Restaurant & Support available',
						img: '/img/Image_3.jpg',
						hide: true
					},

				],
				title: 'Our Latest Developments',
				btnTitle: 'See more',
				btnShow: true
			}
		},
		methods: {
			showMore() {	              
				let count = 0;
				this.items.forEach((el,ind, arr) => {
					if (count >= 3) return;
					if (el.hide) {
						el.hide = !el.hide;
						count++;
					}
					if (ind+1 === arr.length) this.btnShow = !this.btnShow;
				})
			}
		}
	}
</script>

<style lang="less">
    .page {
        max-width: 1180px;
        margin: 0 auto;
        padding: 57px 0 20px;
        text-align: center;
        font-family: "Open Sans";
    }

    .item-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .title {
        margin: 0 0 43px;
        font-weight: bold;
        font-size: 36px;
        color: #45852D;
    }

    .button-more {
        margin-top: 30px;
        padding: 0 12px 5px 0;
        position:relative;
        width: 150px;
        height: 50px;
        border: 1px solid #D8D8D8;
        border-radius: 25px;
        font-weight: bold;
        text-align: center;
        cursor:pointer;
        transition: border 0.2s;
        &:after {
            content: '';
            position:absolute;
            top: 50%;
            right: 29px;
            transform: translateY(-50%);
            width:6px;
            height:17px;
            z-index:1;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDcgMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggaWQ9IkNoZXZyb24iIGQ9Ik0xIDFMNS4wNDMgOC40MTY2N0wxIDE1LjgzMzMiIHN0cm9rZT0iIzM2MzYzNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=);
        }
        &:hover {
            border:1px solid black;
            transition: border 0.2s;
        }
    }
</style>
