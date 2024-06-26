<template>
  <div class="main-nav">
    <div class="left-side-bar">
      <p class="p-menu">Fixedsize@300 by 100px</p>
    </div>
    <div class="center-bar">
      <p class="p-menu">Flex: 1, </p>
    </div>
    <div class="right-side-bar">
      <p class="p-menu">Fixedsize@300 by 100px</p>
    </div>
  </div>

  <div class="main-content-parent">
      <Main />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorem nesciunt et eveniet cumque consequatur, maiores libero minus sapiente enim! Commodi, quos sint, reiciendis est modi dicta debitis porro cupiditate doloribus nesciunt beatae asperiores delectus repellat ea laborum dolore mollitia.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ratione culpa modi nobis aliquid, accusamus tenetur labore consectetur reiciendis corrupti officia eum in! Aperiam aut reiciendis similique impedit illum nisi, veniam molestiae saepe vel cupiditate adipisci ducimus nam nulla obcaecati sint voluptatibus neque, voluptatem odit est alias facere iusto sit?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni delectus dolorem debitis voluptas fugit! Veritatis voluptatum labore atque alias tempora perferendis omnis modi doloremque asperiores. Reiciendis atque unde libero quibusdam nostrum, nisi deleniti ducimus aliquid suscipit nobis, eum omnis impedit dicta nam beatae laborum quisquam, enim quod optio animi!</p>
  </div>
 
  <div class="footer">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut, atque, ea soluta aperiam quibusdam obcaecati dignissimos tenetur commodi repudiandae itaque dolor enim mollitia, velit temporibus maxime eos eligendi laboriosam?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto explicabo nisi omnis, quibusdam cum temporibus. Iste aperiam necessitatibus eius temporibus doloribus. Corporis, a? Enim, repellat ad nam sequi minus distinctio mollitia nemo obcaecati ea, delectus facere beatae eius aliquid?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit quae, voluptates excepturi ratione iusto veritatis illo voluptatum officia ipsum dolorum optio asperiores eos laborum, facere doloremque vel delectus tenetur facilis. Quos, similique quas! Nobis eligendi tempore voluptatum modi perspiciatis?</p>
</div>


</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Main
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
*/
* {
  padding: 0;
  margin: 0;
  background-color: #1a0517;
  color: white;
  box-sizing: border-box;
}

.main-nav {
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gray;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  z-index: 1;
}

.p-menu {
  color: white;
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: bold;
  text-transform: uppercase;
}

.left-side-bar {
  background-color: transparent;
  display: flex;
  width: 300px;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border: 4px solid green;
  margin-right: 10px;

}

.left-side-icon{
  position: fixed;
  top: 30%;
  bottom: 50%;
  left: 0;
  transform: translateY(50%);
  background-color: transparent;
  display: flex;
  flex-direction: column;

}

.center-bar {
  background-color: transparent;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 4px solid green;
  flex: 1;

}
.right-side-bar {
  background-color: transparent;
  display: flex;
  width: 300px;
  height: 70px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  border: 4px solid green;
  margin-left: 10px;

}

.main-content-parent {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  text-align: center

}
.footer {
  border-top: 1px solid gray;
  display: flex;
  flex-direction: row; /* Change to column for stacking items */
   /* Center items vertically */
  align-items: center; /* Center items horizontally */
  padding: 30px;
  height: 500px;
  text-align: center;
  
}

p {

  margin: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  color: white;
}


@media (max-width: 500px) {
  .footer {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
  }
}


</style>
