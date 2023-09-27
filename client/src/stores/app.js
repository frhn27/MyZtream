
import { defineStore } from 'pinia'
import axios from "axios"

const BASE_URL = `http://localhost:3000`

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      videos: [],
      video: {},
      isloaded: false,
      search : '',
      isLogin : false,
      myvideos : [],
      page : 1
    }
  },
  actions: {

    // <========== LOGIN & REGISTER ===========>
    async register(form) {
      console.log(form)
      try {

        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/register`,
          data: form
        })

        console.log(data)
        this.$router.push("/login")
      } catch (error) {
        console.log(error)
      }
    },

    async login(form) {
      try {

        console.log("<<<<<<<<< masuk")
        console.log(form)

        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/login`,
          data: form
        })
        console.log(data)

        localStorage.setItem("access_token", data.access_token)

        this.isLogin = true

        this.$router.push('/')

        // console.log(data)

      } catch (error) {
        console.log(error)
      }
    },
    // <==========  END LOGIN & REGISTER ===========>


    // <============== FECTH DATA =============>
    async fetchVideo() {
      try {

        const { data } = await axios({
          method: "GET",
          url: `${BASE_URL}/video`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          params :{
            search : this.search,
            page  : this.page,
            perPage : 6
          }
        })

        this.videos = data.videos

        console.log(data)

      } catch (error) {
        console.log(error)
      }
    },

    async fetchVideoById(id) {

      const { data } = await axios({
        method: "GET",
        url: `${BASE_URL}/video/${id}`,
        data: {
          id: id
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
      // console.log(data)
      this.video = data
    },
    // <============== END FECTH DATA =============>


    //<=================== My VIDEO ===============>
    async fetchMyVideo(){
      try {

        const { data } = await axios({
          method : "GET",
          url : `${BASE_URL}/myvideo`,
          headers : {
            access_token : localStorage.getItem('access_token')
          }
        })

      this.myvideos = data

      } catch (error) {
        console.log(error)
      }
    },

    //<=================== END My VIDEO ===============>


    // <============== UPLOAD VIDEO =============>
    async uploadVideo(form) {
      console.log("<<<<<<<<<<<<< mausk")
      // console.log(form)
      this.isloaded = true
      // cara untuk mengirim data yang ada file nya 
      const formData = new FormData();
      formData.append('title',form.title)
      formData.append('tags',form.tags)
      formData.append('description',form.description)
      formData.append('thumbnail',form.thumbnail)
      formData.append('file',form.file)
      try {
        // console.log(form)
        const { data } = await axios({
          method: "POST",
          url: `${BASE_URL}/video/upload`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: formData
        })
        this.$router.push('/')

        this.fetchVideo()
        // console.log(data)
      } catch (error) {
        console.log(error)
      
      }finally{
        this.isloaded = false
      }
    },
    // <============== END UPLOAD VIDEO =============>

    //<================== LOGOUT =====================>
    logout() {
      this.isLogin = false
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    //<================== END LOGOUT =================>


    //<================== SEARCH =====================>
    searchVideo(input) {
      this.search = input
      this.fetchVideo()
    },
    //<================== END SEARCH =================>


    // <============ HANDLE PAGINATION ==============>
      nextPage(){
        this.page++
        this.fetchVideo()
      },
      previousPage(){
        this.page--
        this.fetchVideo()
      }
    // <============ END HANDLE PAGINATION ==============>

  },
})