<template>
    <div class="main-content-1">
      <div class="left-side-icon">

          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Github</p>

      </div>
        <p class="p-testing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid hic, quia dolorum quasi enim sequi cupiditate molestias magnam cum quisquam deserunt minus illum aperiam ut autem consequatur harum rem praesentium vero. Illum ipsum animi, ipsa, deleniti dignissimos esse tempora placeat culpa dolorem veritatis iusto eum dicta atque, perferendis accusantium odio? Illum nemo nostrum corporis accusantium totam ad a et officia, iure, saepe facere non cumque similique itaque aliquid, eius nesciunt placeat vero. Omnis voluptatibus eius inventore ex cum exercitationem hic saepe blanditiis corporis maiores, repellat, ipsa corrupti officia sint incidunt possimus! Iusto aperiam modi dolorum, cupiditate beatae dolore in!</p>
        <p class="p-testing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad velit commodi sapiente officia? Assumenda, molestiae consectetur et aut tempore voluptatum fugit libero in eveniet officia deleniti esse, voluptatem perferendis officiis? Dolores aliquid pariatur nemo et, tempore dolorem vel architecto minima, natus, ipsa consequatur. Temporibus cumque nulla ratione eligendi repellat assumenda eos, commodi, maiores praesentium necessitatibus voluptates culpa perspiciatis? Veniam adipisci officia error laudantium architecto, cumque ullam eligendi reiciendis tenetur blanditiis dolorum quisquam impedit nam debitis! Necessitatibus praesentium quisquam magni error explicabo iure esse commodi est unde, aut voluptatem laborum, dolores nisi in non fugiat voluptate voluptates harum. Placeat, fugit.</p>
        <p class="p-testing">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis odio quasi doloribus possimus distinctio atque nam laboriosam sint a necessitatibus, sit dignissimos repellendus molestiae veniam ducimus blanditiis ea voluptatum, tempora quisquam perspiciatis sapiente eaque. Hic mollitia quo nesciunt excepturi nulla fuga saepe? Odio asperiores soluta laboriosam modi fuga voluptate ex quam autem optio odit deleniti placeat in quaerat numquam animi quod quidem eaque officiis cupiditate explicabo, beatae, deserunt perspiciatis hic? Amet recusandae error nisi ratione, nulla in labore expedita corrupti sed rem commodi, itaque dolorem quia! Ab molestias, commodi obcaecati quisquam, dolore nulla sunt, ut numquam amet deleniti facilis hic?</p>
       
       
    </div>

    <div class="main-content-2">
      <p class="p-testing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil esse vel ipsa, ullam voluptatum eligendi minus vitae temporibus ducimus tenetur reiciendis ad iste laboriosam totam nesciunt! Repellendus corrupti officia error officiis soluta aperiam vero porro aspernatur? Officia ad molestias expedita dicta earum culpa eius magnam doloremque sed cumque ab doloribus maxime impedit atque ipsa, a ipsam. Eum vel aliquam quo ullam dolor laboriosam et nihil at, sint natus quisquam sed reiciendis? Fugiat assumenda officia quae quam recusandae tempora id, dolorum cupiditate nam facilis molestiae doloremque suscipit, vel atque iusto totam tenetur laboriosam quibusdam eos maxime consequatur fugit. Commodi, quos.</p>
      <p class="p-testing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil esse vel ipsa, ullam voluptatum eligendi minus vitae temporibus ducimus tenetur reiciendis ad iste laboriosam totam nesciunt! Repellendus corrupti officia error officiis soluta aperiam vero porro aspernatur? Officia ad molestias expedita dicta earum culpa eius magnam doloremque sed cumque ab doloribus maxime impedit atque ipsa, a ipsam. Eum vel aliquam quo ullam dolor laboriosam et nihil at, sint natus quisquam sed reiciendis? Fugiat assumenda officia quae quam recusandae tempora id, dolorum cupiditate nam facilis molestiae doloremque suscipit, vel atque iusto totam tenetur laboriosam quibusdam eos maxime consequatur fugit. Commodi, quos.</p>
      <p class="p-testing">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil esse vel ipsa, ullam voluptatum eligendi minus vitae temporibus ducimus tenetur reiciendis ad iste laboriosam totam nesciunt! Repellendus corrupti officia error officiis soluta aperiam vero porro aspernatur? Officia ad molestias expedita dicta earum culpa eius magnam doloremque sed cumque ab doloribus maxime impedit atque ipsa, a ipsam. Eum vel aliquam quo ullam dolor laboriosam et nihil at, sint natus quisquam sed reiciendis? Fugiat assumenda officia quae quam recusandae tempora id, dolorum cupiditate nam facilis molestiae doloremque suscipit, vel atque iusto totam tenetur laboriosam quibusdam eos maxime consequatur fugit. Commodi, quos.</p>
    </div>


</template>



<script>

export default {
  name: 'Main',
  
}


</script>



<style scoped>


.p-testing {
    color: gray;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    border: 1px solid white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
}


.main-content-1 {
  margin-top: 100px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: center;
  
}
.main-content-2 {

 
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: center;
  
}

@media (max-width: 500px) {
  .p-testing,
  .main-content-1 {
    display: flex;
    flex-direction: column;
  }
  
}



</style>
