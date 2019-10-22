<template>
    <div class="item" :class="isHide">
        <a class="item__link" :href="'/page_'+count +''" :title="itemsArr.title"  target="_blank"></a>
        <div class="item__img-wrap">
            <img class="item__img" :src="itemsArr.img" :alt="itemsArr.title">
            <div class="item__tag">{{itemsArr.category}}</div>
        </div>

        <div class="item__description">
            <h2 class="item__title">{{itemsArr.title}}</h2>
            <div class="item__address">{{itemsArr.address}}</div>
            <div class="item__saleText">{{itemsArr.saleText}} <span class="item__price">{{itemsArr.price}}</span></div>
            <div class="item__option">{{itemsArr.option}}</div>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
			items: Array,
			count: Number,
		},
		computed: {
			itemsArr() {
				return {...this.items[this.count]}
			},
			isHide() {
				return this.itemsArr.hide ? 'hide' : '';
			},
		},
	}
</script>

<style lang="less">
    .item {
        position:relative;
        text-align: left;
        font-size: 16px;
        &:hover {
            .item__tag {
                transition: background-color 0.2s;
                background-color: #EC6608;
            }
        }
        &.hide {
            display: none;
        }
        &__link {
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            z-index: 1;
        }
        &__img-wrap {
            position: relative;
            border-top: 1px solid #D8D8D8;
            border-right: 1px solid #D8D8D8;
            border-left: 1px solid #D8D8D8;
        }
        &__img {
            width:100%;
        }
        &__tag {
            padding: 8px 11px 5px 10px;
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: 12px;
            font-weight: bold;
            line-height: 16px;
            color: #fff;
            background-color: #006F79;
            transition: background-color 0.2s;
        }
        &__description {
            padding: 20px 20px 16px;
            margin-bottom: 20px;
            border-right: 1px solid #D8D8D8;
            border-bottom: 1px solid #D8D8D8;
            border-left: 1px solid #D8D8D8;
            line-height: 1.5;
            background: #F8F8F8;
        }
        &__title {
            font-size: 20px;
            font-weight: bold;
        }
        &__address {
            margin-bottom: 12px;
        }
        &__saleText {
            margin-bottom:5px;
        }
        &__price {
            font-weight: bold;
        }
        &__option {
            font-size: 14px;
        }
    }
    @media screen and (max-width:1230px) {
        .item-wrap {
            margin:0 auto;
            max-width: 780px;
        }
    }
    @media screen and (max-width:830px) {
        .item-wrap {
            margin:0 auto;
            max-width: 380px;
        }
    }
    @media screen and (max-width:769px) {
        .item__description {
            text-align: center;
        }
    }
</style>
