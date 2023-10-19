<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-sm py-4">
    <Container class="flex-col">
      <!-- menu -->
      <div class="w-full flex justify-between items-center">
        <ul class="flex justify-start flex-1">
          <router-link class="item" to="/">产品</router-link>
          <a class="item" href="https://www.imooc.com" target="_blank">社区</a>
          <router-link class="item" to="/study">学习</router-link>
          <router-link class="item" to="/about">关于</router-link>
        </ul>
        <div class="flex items-center">
          <div class="group relative">
            <div class="i-ic:baseline-wechat mr-4 cursor-pointer"></div>
            <img
              class="display-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 max-w-unset rounded group-hover:display-block"
              :src="contacts.wechat || wechat"
              alt=""
            />
          </div>
          <div class="group relative">
            <div class="i-entypo-social:sina-weibo cursor-pointer"></div>
            <img
              class="display-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 max-w-unset rounded group-hover:display-block"
              :src="contacts.sina || sina"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="w-full border-b-1 border-b-gray-600 my-4"></div>
      <!-- instruction, information -->
      <ul class="w-full flex justify-start mb-4">
        <li v-if="contacts">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-bi:phone mr-2"></span>
            <span>联系信息</span>
          </div>
          <p>
            邮箱：<a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
          </p>
          <p v-if="contacts.phone">电话：{{ contacts.phone }}</p>
          <p v-if="contacts.address">地址：{{ contacts.address }}</p>
        </li>
        <li class="ml-10" v-if="links.length > 0">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <span class="i-ph:link-light mr-2"></span>
            <span>友链信息</span>
          </div>
          <p v-for="(item, index) in links" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </p>
        </li>
        <slot name="info"></slot>
      </ul>
      <div class="w-full flex items-center justify-center">
        Copyright @ kavi 2023-{{ new Date().getFullYear() }}
        <a class="flex items-center pl-2" href="https://baidu.com" target="_blank">
          <i class="w-4 h-4 inline-block bg-contain case-icon mx-2"></i>
          {{ icp }}
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import wechat from '@/assets/images/wechat.jpg'
import sina from '@/assets/images/sina.jpg'
interface LinkType {
  title: string
  url: string
}

interface ContactsType {
  email: string
  phone?: string
  address?: string
  wechat?: string
  sina?: string
}

interface FootItem {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts?: ContactsType
}
withDefaults(defineProps<FootItem>(), {
  // set default value
  icp: '',
  copyRight: 'Kye',
  links: () => [
    {
      url: 'https://www.kye.com',
      title: 'Kye博客'
    },
    {
      url: 'https://www.imooc.com',
      title: '慕课网'
    }
  ],
  contacts: () => ({
    email: 'admin@kye.com',
    phone: '17316565555'
  })
})
</script>

<style scoped lang="scss">
.case-icon {
  background: url('@/assets/icons/caseicon.png');
}
.item {
  @apply text-gray-400 px-5;
}
</style>
