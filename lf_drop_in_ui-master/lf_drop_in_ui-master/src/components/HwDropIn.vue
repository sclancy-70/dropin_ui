<template>
  <div class="container">
    <div ref="overlayModal" class="fixed h-full w-full block top-0 left-0 bg-gray-800 opacity-100 z-50">
      <SpinnerLoader class="top-1/2 left-1/2 my-0 mx-auto"/>
    </div>
    <div id="VerificationUI" class="min-100"/>
  </div>
</template>

<script>
import SpinnerLoader from '@/components/animations/SpinnerLoader.vue';

const authApiUrl = process.env.VUE_APP_AUTH_API_URL;
const hwScripUrl = `${process.env.VUE_APP_PAYEE_VERIFY_API_URL}/widgets/users/${process.env.VUE_APP_PAYEE_VERIFY_USER_TOKEN}/${process.env.VUE_APP_PAYEE_VERIFY_API_LANGUAGE || 'en' }.${process.env.VUE_APP_PAYEE_VERIFY_API_VER || 'v2_3_0'}.min.js`;
export default {
  name: "hw-drop-in",
  components: {
    SpinnerLoader,
  },
  data: () => ({
    isLoading: true,
    isError: false,
  }),
  methods: {
    getAuthToken() {
      return new Promise( (resolve, reject) => {
      this.$http
        .get(authApiUrl)
        .then(response => {
          resolve(response.data.token);
        })
        .catch(error => {
          this.isError = true;
          reject(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
      })
    }
  },
  mounted() {
    // Fetch auth token on load so it's available for embeded script
    this.getAuthToken();

    // Inject Hyperwallet script src into HEAD on this view
    let hyperwalletLib = document.createElement("script");
    hyperwalletLib.setAttribute("src", hwScripUrl);
    document.head.appendChild(hyperwalletLib);

    hyperwalletLib.onload = () => {
        // eslint-disable-next-line no-undef
        let hw = HWWidgets;
        
        // Fetch the drop-in UI
        hw.initialize( (onSuccess, onFailure) => {
            this.getAuthToken()
                .then( token => {
                    onSuccess(token);
                })
                .catch( error => {
                    onFailure(error);
                });
        });
        
        hw.users.configure({
            "template": "plain",
            "el": document.getElementById("VerificationUI"),
        }).display(() =>{

        });

        // Remove loading overlay
        hw.events.on("widget:loading:hidden", () => {
          this.$refs.overlayModal.classList.add("hidden");
          let html = document.getElementsByTagName("html")[0];
          html.removeAttribute("style");
        });
    }
  },
};
</script>
    
<style scoped>
</style>