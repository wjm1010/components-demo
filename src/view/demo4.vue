<template>
    <div>
        <h3>父子通信</h3>
        <p>群消息：</p>
        <div>
            {{ somebody }} 说：我 {{ age }} 了。
        </div>
        <v-girl-group
                :girls="aGirls"
                :noticeGirl="noticeGirl"
                @introduce="introduceSelf">
        </v-girl-group>
    </div>
</template>
<script>
import vGirlGroup from '@/components/demo4'

export default {
  name: 'demo4',
  components: {
    vGirlGroup
  },
  data () {
    return {
      aGirls: [
        {
          name: 'a',
          age: 22
        },
        {
          name: 'b',
          age: 21
        },
        {
          name: 'c',
          age: 24
        }
      ],
      somebody: '',
      age: '',
      noticeGirl: ''
    }
  },
  methods: {
    introduceSelf (opt) {
      this.somebody = opt.name
      this.age = opt.age

      // 通知girl收到消息
      this.noticeGirl = opt.name + '，已收到消息'
    }
  }
}
</script>
