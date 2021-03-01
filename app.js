const app = Vue.createApp({
    
    data()
    {
        return {
            firstName: 'Jacob',
            lastName:'Snow',
            email:'js@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/11.jpg',
        }
    },
})


app.mount('#app')